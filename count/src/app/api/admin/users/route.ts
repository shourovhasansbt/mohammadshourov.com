import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { db } from '@/db'
import { entries, users, goals } from '@/db/schema'
import { eq, desc, count } from 'drizzle-orm'
import { z } from 'zod'

// Admin-only: list all users
export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'অনুমতি নেই' }, { status: 403 })
  }

  const allUsers = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      createdAt: users.createdAt,
    })
    .from(users)
    .orderBy(users.createdAt)

  // Get counts per user
  const entryCounts = await db
    .select({ userId: entries.userId, count: count(entries.id) })
    .from(entries)
    .groupBy(entries.userId)

  // Get last entry per user
  const lastEntries = await db
    .select({ userId: entries.userId, occurredAt: entries.occurredAt })
    .from(entries)
    .orderBy(desc(entries.occurredAt))

  const countMap = Object.fromEntries(entryCounts.map(e => [e.userId, e.count]))
  const lastMap: Record<number, Date> = {}
  for (const e of lastEntries) {
    if (!lastMap[e.userId]) lastMap[e.userId] = e.occurredAt
  }

  const result = allUsers.map(u => ({
    ...u,
    totalCount: countMap[u.id] || 0,
    lastEntry: lastMap[u.id] || null,
  }))

  return NextResponse.json({ users: result })
}
