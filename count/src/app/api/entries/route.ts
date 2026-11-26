import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/db'
import { entries } from '@/db/schema'
import { eq, and, desc, gte, lte } from 'drizzle-orm'
import { z } from 'zod'
import { toZonedTime } from 'date-fns-tz'

const TZ = 'Asia/Dhaka'

const createEntrySchema = z.object({
  occurredAt: z.string().datetime().optional(),
  moodBefore: z.number().int().min(1).max(5).optional().nullable(),
  moodAfter: z.number().int().min(1).max(5).optional().nullable(),
  trigger: z.enum(['boredom', 'stress', 'late night', 'phone', 'other']).optional().nullable(),
  note: z.string().max(500).optional().nullable(),
})

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const userId = parseInt(session.user.id)

  let query = db
    .select()
    .from(entries)
    .where(eq(entries.userId, userId))
    .orderBy(desc(entries.occurredAt))

  const result = await query
  return NextResponse.json({ entries: result })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const parsed = createEntrySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'অবৈধ তথ্য', details: parsed.error.flatten() }, { status: 400 })
    }

    const userId = parseInt(session.user.id)
    const { occurredAt, moodBefore, moodAfter, trigger, note } = parsed.data

    const [entry] = await db.insert(entries).values({
      userId,
      occurredAt: occurredAt ? new Date(occurredAt) : new Date(),
      moodBefore: moodBefore ?? null,
      moodAfter: moodAfter ?? null,
      trigger: trigger ?? null,
      note: note ?? null,
    }).returning()

    return NextResponse.json({ entry }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'সার্ভার এরর' }, { status: 500 })
  }
}
