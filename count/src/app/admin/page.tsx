import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { entries, users } from '@/db/schema'
import { desc } from 'drizzle-orm'
import { currentStreak } from '@/lib/streak'
import AdminClient from './AdminClient'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/login')
  if (session.user.role !== 'admin') redirect('/dashboard')

  const [allUsers, allEntries] = await Promise.all([
    db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
      })
      .from(users)
      .orderBy(users.createdAt),
    db
      .select({ userId: entries.userId, occurredAt: entries.occurredAt })
      .from(entries)
      .orderBy(desc(entries.occurredAt)),
  ])

  const datesByUser: Record<number, Date[]> = {}
  for (const e of allEntries) {
    if (!datesByUser[e.userId]) datesByUser[e.userId] = []
    datesByUser[e.userId].push(e.occurredAt)
  }

  const usersData = allUsers.map(u => {
    const dates = datesByUser[u.id] || []
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      createdAt: u.createdAt.toISOString(),
      totalCount: dates.length,
      currentStreak: currentStreak(dates),
      lastEntry: dates[0] ? dates[0].toISOString() : null,
    }
  })

  return (
    <AdminClient
      users={usersData}
      totalEntries={allEntries.length}
      currentAdminId={parseInt(session.user.id, 10)}
    />
  )
}
