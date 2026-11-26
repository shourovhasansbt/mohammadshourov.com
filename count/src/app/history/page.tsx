import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { entries } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'
import HistoryClient from './HistoryClient'

export default async function HistoryPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/login')

  const userId = parseInt(session.user.id)
  const userEntries = await db
    .select()
    .from(entries)
    .where(eq(entries.userId, userId))
    .orderBy(desc(entries.occurredAt))

  return (
    <HistoryClient
      initialEntries={userEntries.map(e => ({
        ...e,
        occurredAt: e.occurredAt.toISOString(),
        createdAt: e.createdAt.toISOString(),
      }))}
    />
  )
}
