import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { users, goals } from '@/db/schema'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { checkRateLimit } from '@/lib/utils'

const registerSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(100),
})

export async function POST(req: NextRequest) {
  if (process.env.ALLOW_REGISTRATION === 'false') {
    return NextResponse.json({ error: 'রেজিস্ট্রেশন বন্ধ আছে' }, { status: 403 })
  }

  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const { allowed } = checkRateLimit(`register:${ip}`, 5, 15 * 60 * 1000)
  if (!allowed) {
    return NextResponse.json({ error: 'অনেক বেশি অনুরোধ। পরে চেষ্টা করুন।' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const parsed = registerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'অবৈধ তথ্য', details: parsed.error.flatten() }, { status: 400 })
    }

    const { name, email, password } = parsed.data

    // Check existing
    const existing = await db.select().from(users).where(eq(users.email, email)).limit(1)
    if (existing.length > 0) {
      return NextResponse.json({ error: 'এই ইমেইলে ইতিমধ্যে অ্যাকাউন্ট আছে' }, { status: 409 })
    }

    const hash = await bcrypt.hash(password, 12)
    const [user] = await db.insert(users).values({
      name,
      email,
      passwordHash: hash,
      role: 'user',
    }).returning()

    // Create default goal
    await db.insert(goals).values({ userId: user.id, targetStreakDays: 7 })

    return NextResponse.json({ message: 'অ্যাকাউন্ট তৈরি হয়েছে' }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'সার্ভার এরর' }, { status: 500 })
  }
}
