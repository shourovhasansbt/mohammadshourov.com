import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/db'
import { goals } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const goalSchema = z.object({
  targetStreakDays: z.number().int().min(1).max(365),
})

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  const userId = parseInt(session.user.id)
  const [goal] = await db.select().from(goals).where(eq(goals.userId, userId)).limit(1)
  return NextResponse.json({ goal: goal || null })
}

export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  const userId = parseInt(session.user.id)
  const body = await req.json()
  const parsed = goalSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'অবৈধ তথ্য' }, { status: 400 })
  }

  const existing = await db.select().from(goals).where(eq(goals.userId, userId)).limit(1)

  if (existing.length > 0) {
    const [updated] = await db
      .update(goals)
      .set({ targetStreakDays: parsed.data.targetStreakDays })
      .where(eq(goals.userId, userId))
      .returning()
    return NextResponse.json({ goal: updated })
  } else {
    const [created] = await db
      .insert(goals)
      .values({ userId, targetStreakDays: parsed.data.targetStreakDays })
      .returning()
    return NextResponse.json({ goal: created }, { status: 201 })
  }
}
