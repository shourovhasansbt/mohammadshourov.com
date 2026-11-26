import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/db'
import { entries } from '@/db/schema'
import { eq, and } from 'drizzle-orm'
import { z } from 'zod'

const idSchema = z.coerce.number().int().positive()

const updateEntrySchema = z.object({
  occurredAt: z.string().datetime().optional(),
  moodBefore: z.number().int().min(1).max(5).optional().nullable(),
  moodAfter: z.number().int().min(1).max(5).optional().nullable(),
  trigger: z.enum(['boredom', 'stress', 'late night', 'phone', 'other']).optional().nullable(),
  note: z.string().max(500).optional().nullable(),
})

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  const { id } = await params
  const parsedId = idSchema.safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: 'অবৈধ ID' }, { status: 400 })
  }

  const entryId = parsedId.data
  const userId = parseInt(session.user.id, 10)

  try {
    const body = await req.json()
    const parsed = updateEntrySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'অবৈধ তথ্য', details: parsed.error.flatten() }, { status: 400 })
    }

    const existing = await db
      .select()
      .from(entries)
      .where(and(eq(entries.id, entryId), eq(entries.userId, userId)))
      .limit(1)

    if (existing.length === 0) {
      return NextResponse.json({ error: 'এন্ট্রি পাওয়া যায়নি' }, { status: 404 })
    }

    const { occurredAt, moodBefore, moodAfter, trigger, note } = parsed.data
    const updateData: Record<string, unknown> = {}
    if (occurredAt !== undefined) updateData.occurredAt = new Date(occurredAt)
    if (moodBefore !== undefined) updateData.moodBefore = moodBefore
    if (moodAfter !== undefined) updateData.moodAfter = moodAfter
    if (trigger !== undefined) updateData.trigger = trigger
    if (note !== undefined) updateData.note = note

    const [updated] = await db
      .update(entries)
      .set(updateData)
      .where(and(eq(entries.id, entryId), eq(entries.userId, userId)))
      .returning()

    return NextResponse.json({ entry: updated })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'সার্ভার এরর' }, { status: 500 })
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  const { id } = await params
  const parsedId = idSchema.safeParse(id)
  if (!parsedId.success) {
    return NextResponse.json({ error: 'অবৈধ ID' }, { status: 400 })
  }

  const entryId = parsedId.data
  const userId = parseInt(session.user.id, 10)

  const existing = await db
    .select()
    .from(entries)
    .where(and(eq(entries.id, entryId), eq(entries.userId, userId)))
    .limit(1)

  if (existing.length === 0) {
    return NextResponse.json({ error: 'এন্ট্রি পাওয়া যায়নি' }, { status: 404 })
  }

  await db
    .delete(entries)
    .where(and(eq(entries.id, entryId), eq(entries.userId, userId)))

  return NextResponse.json({ message: 'মুছে ফেলা হয়েছে' })
}
