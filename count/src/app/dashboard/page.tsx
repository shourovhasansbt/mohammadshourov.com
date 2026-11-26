import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { entries, goals } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/login')

  const userId = parseInt(session.user.id)

  const [userEntries, [userGoal]] = await Promise.all([
    db.select().from(entries).where(eq(entries.userId, userId)).orderBy(desc(entries.occurredAt)),
    db.select().from(goals).where(eq(goals.userId, userId)).limit(1),
  ])

  return (
    <DashboardClient
      initialEntries={userEntries.map(e => ({
        ...e,
        occurredAt: e.occurredAt.toISOString(),
        createdAt: e.createdAt.toISOString(),
      }))}
      goal={userGoal ? { id: userGoal.id, userId: userGoal.userId, targetStreakDays: userGoal.targetStreakDays } : null}
      userName={session.user.name || 'ব্যবহারকারী'}
      userRole={session.user.role || 'user'}
    />
  )
}
