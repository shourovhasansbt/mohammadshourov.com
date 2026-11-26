import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/db'
import { users, entries } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

const idSchema = z.coerce.number().int().positive()

const updateUserSchema = z.object({
  role: z.enum(['user', 'admin']).optional(),
  newPassword: z.string().min(8).max(100).optional(),
})

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 403 })
  }

  const { id } = await params
  const parsedId = idSchema.safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: 'অবৈধ ID' }, { status: 400 })
  }

  const userId = parsedId.data
  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1)
  if (!user) return NextResponse.json({ error: 'ব্যবহারকারী পাওয়া যায়নি' }, { status: 404 })

  const userEntries = await db
    .select()
    .from(entries)
    .where(eq(entries.userId, userId))
    .orderBy(desc(entries.occurredAt))

  return NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt },
    entries: userEntries,
  })
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 403 })
  }

  const { id } = await params
  const parsedId = idSchema.safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: 'অবৈধ ID' }, { status: 400 })
  }

  const userId = parsedId.data
  const body = await req.json()
  const parsed = updateUserSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'অবৈধ তথ্য', details: parsed.error.flatten() }, { status: 400 })
  }

  const updateData: Record<string, unknown> = {}
  if (parsed.data.role) updateData.role = parsed.data.role
  if (parsed.data.newPassword) {
    updateData.passwordHash = await bcrypt.hash(parsed.data.newPassword, 12)
  }

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ error: 'কোনো পরিবর্তন নেই' }, { status: 400 })
  }

  const [updated] = await db.update(users).set(updateData).where(eq(users.id, userId)).returning()
  if (!updated) {
    return NextResponse.json({ error: 'ব্যবহারকারী পাওয়া যায়নি' }, { status: 404 })
  }

  return NextResponse.json({ user: { id: updated.id, name: updated.name, email: updated.email, role: updated.role } })
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 403 })
  }

  const { id } = await params
  const parsedId = idSchema.safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: 'অবৈধ ID' }, { status: 400 })
  }

  const userId = parsedId.data
  if (String(userId) === session.user.id) {
    return NextResponse.json({ error: 'নিজেকে মুছতে পারবেন না' }, { status: 400 })
  }

  await db.delete(users).where(eq(users.id, userId))
  return NextResponse.json({ message: 'ব্যবহারকারী মুছে ফেলা হয়েছে' })
}
