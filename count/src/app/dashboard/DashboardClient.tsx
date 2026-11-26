'use client'

import { useState, useCallback } from 'react'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import toast from 'react-hot-toast'
import { Plus, LogOut, Settings, Shield, History, TrendingUp, Target, Flame, Calendar } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { currentStreak, longestStreak, groupByDay, countInLastNDays, localHour } from '@/lib/streak'
import { cn } from '@/lib/utils'
import LogEntryModal from '@/components/LogEntryModal'
import HeatmapCalendar from '@/components/HeatmapCalendar'
import WeeklyBarChart from '@/components/WeeklyBarChart'
import MonthlyLineChart from '@/components/MonthlyLineChart'
import GoalProgressBar from '@/components/GoalProgressBar'
import Link from 'next/link'

const TZ = 'Asia/Dhaka'

interface Entry {
  id: number
  userId: number
  occurredAt: string
  moodBefore: number | null
  moodAfter: number | null
  trigger: string | null
  note: string | null
  createdAt: string
}

interface Goal {
  id: number
  userId: number
  targetStreakDays: number
}

interface Props {
  initialEntries: Entry[]
  goal: Goal | null
  userName: string
  userRole: string
}

const TRIGGERS: Record<string, string> = {
  boredom: 'বিরক্তি',
  stress: 'চাপ',
  'late night': 'রাতে দেরিতে',
  phone: 'ফোন',
  other: 'অন্যান্য',
}

const TIME_LABELS: Record<number, string> = {
  0: 'রাত ১২টা',
  1: 'রাত ১টা',
  2: 'রাত ২টা',
  3: 'রাত ৩টা',
  4: 'রাত ৪টা',
  5: 'ভোর ৫টা',
  6: 'সকাল ৬টা',
  7: 'সকাল ৭টা',
  8: 'সকাল ৮টা',
  9: 'সকাল ৯টা',
  10: 'সকাল ১০টা',
  11: 'সকাল ১১টা',
  12: 'দুপুর ১২টা',
  13: 'দুপুর ১টা',
  14: 'দুপুর ২টা',
  15: 'বিকেল ৩টা',
  16: 'বিকেল ৪টা',
  17: 'বিকেল ৫টা',
  18: 'সন্ধ্যা ৬টা',
  19: 'সন্ধ্যা ৭টা',
  20: 'রাত ৮টা',
  21: 'রাত ৯টা',
  22: 'রাত ১০টা',
  23: 'রাত ১১টা',
}

export default function DashboardClient({ initialEntries, goal: initialGoal, userName, userRole }: Props) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries)
  const [goal, setGoal] = useState<Goal | null>(initialGoal)
  const [showModal, setShowModal] = useState(false)
  const [loggingNow, setLoggingNow] = useState(false)
  const [editingGoal, setEditingGoal] = useState(false)
  const [goalInput, setGoalInput] = useState(String(initialGoal?.targetStreakDays ?? 7))

  const entryDates = entries.map(e => new Date(e.occurredAt))

  const streak = currentStreak(entryDates)
  const longest = longestStreak(entryDates)
  const totalCount = entries.length
  const thisWeek = countInLastNDays(entryDates, 7)
  const thisMonth = countInLastNDays(entryDates, 30)
  const thisYear = countInLastNDays(entryDates, 365)

  // Most common trigger
  const triggerCounts: Record<string, number> = {}
  for (const e of entries) {
    if (e.trigger) triggerCounts[e.trigger] = (triggerCounts[e.trigger] || 0) + 1
  }
  const topTrigger = Object.entries(triggerCounts).sort((a, b) => b[1] - a[1])[0]?.[0]

  // Most common hour
  const hourCounts: Record<number, number> = {}
  for (const e of entries) {
    const h = localHour(new Date(e.occurredAt))
    hourCounts[h] = (hourCounts[h] || 0) + 1
  }
  const topHour = Object.entries(hourCounts).sort((a, b) => b[1] - a[1])[0]?.[0]

  const handleLogNow = async () => {
    setLoggingNow(true)
    try {
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const data = await res.json()
      if (res.ok) {
        setEntries(prev => [{ ...data.entry, occurredAt: data.entry.occurredAt, createdAt: data.entry.createdAt }, ...prev])
        toast.success('✅ রেকর্ড হয়েছে!')
      } else {
        toast.error(data.error || 'ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    } finally {
      setLoggingNow(false)
    }
  }

  const handleEntryLogged = useCallback((entry: Entry) => {
    setEntries(prev => [entry, ...prev].sort((a, b) =>
      new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime()
    ))
  }, [])

  const handleSaveGoal = async () => {
    const days = parseInt(goalInput, 10)
    if (isNaN(days) || days < 1 || days > 365) {
      toast.error('১ থেকে ৩৬৫ দিনের মধ্যে দিন')
      return
    }
    try {
      const res = await fetch('/api/goals', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetStreakDays: days }),
      })
      const data = await res.json()
      if (res.ok && data.goal) {
        setGoal(data.goal)
        setEditingGoal(false)
        toast.success('লক্ষ্যমাত্রা আপডেট হয়েছে')
      } else {
        toast.error(data.error || 'ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    }
  }

  const heatmapData = groupByDay(entryDates)

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h1 className="text-sm font-semibold text-gray-100">Daily Tracker</h1>
              <p className="text-xs text-gray-400">স্বাগতম, {userName}</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/history" className="p-2 text-gray-400 hover:text-gray-100 transition" title="ইতিহাস">
              <History size={18} />
            </Link>
            {userRole === 'admin' && (
              <Link href="/admin" className="p-2 text-gray-400 hover:text-gray-100 transition" title="অ্যাডমিন">
                <Shield size={18} />
              </Link>
            )}
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="p-2 text-gray-400 hover:text-red-400 transition"
              title="লগআউট"
            >
              <LogOut size={18} />
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Log Now Button */}
        <div className="flex gap-3">
          <button
            onClick={handleLogNow}
            disabled={loggingNow}
            className="flex-1 flex items-center justify-center gap-3 py-5 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold text-lg rounded-2xl shadow-lg shadow-brand-900/40 transition active:scale-95"
          >
            {loggingNow ? (
              <span className="animate-spin text-2xl">⏳</span>
            ) : (
              <Plus size={24} strokeWidth={3} />
            )}
            {loggingNow ? 'রেকর্ড হচ্ছে...' : 'এখনই লগ করুন'}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-2xl transition"
            title="বিস্তারিত দিয়ে লগ করুন"
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard
            icon={<Flame className="text-orange-400" size={20} />}
            label="বর্তমান স্ট্রিক"
            value={`${streak} দিন`}
            highlight={streak >= 7}
          />
          <StatCard
            icon={<TrendingUp className="text-green-400" size={20} />}
            label="সর্বোচ্চ স্ট্রিক"
            value={`${longest} দিন`}
          />
          <StatCard
            icon={<Target className="text-purple-400" size={20} />}
            label="মোট সংখ্যা"
            value={totalCount.toString()}
          />
          <StatCard
            icon={<Calendar className="text-blue-400" size={20} />}
            label="এই সপ্তাহে"
            value={thisWeek.toString()}
          />
        </div>

        {/* Period counts */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <p className="text-2xl font-bold text-gray-100">{thisWeek}</p>
            <p className="text-xs text-gray-400 mt-1">এই সপ্তাহ</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <p className="text-2xl font-bold text-gray-100">{thisMonth}</p>
            <p className="text-xs text-gray-400 mt-1">এই মাস</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <p className="text-2xl font-bold text-gray-100">{thisYear}</p>
            <p className="text-xs text-gray-400 mt-1">এই বছর</p>
          </div>
        </div>

        {/* Goal progress */}
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-200">লক্ষ্যমাত্রা</h2>
            <div className="flex items-center gap-2">
              {editingGoal ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={1}
                    max={365}
                    value={goalInput}
                    onChange={e => setGoalInput(e.target.value)}
                    className="w-16 px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded-lg text-gray-100"
                  />
                  <button
                    onClick={handleSaveGoal}
                    className="px-2 py-1 text-xs bg-brand-600 text-white rounded-lg"
                  >
                    সেভ
                  </button>
                  <button
                    onClick={() => setEditingGoal(false)}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-lg"
                  >
                    বাতিল
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-400">
                    {streak} / {goal?.targetStreakDays ?? 7} দিন
                  </span>
                  <button
                    onClick={() => {
                      setGoalInput(String(goal?.targetStreakDays ?? 7))
                      setEditingGoal(true)
                    }}
                    className="text-xs text-brand-400 hover:underline"
                  >
                    পরিবর্তন
                  </button>
                </>
              )}
            </div>
          </div>
          <GoalProgressBar current={streak} target={goal?.targetStreakDays ?? 7} />
          <p className="text-xs text-gray-500 mt-2">
            {streak >= (goal?.targetStreakDays ?? 7)
              ? '🎉 লক্ষ্য অর্জিত!'
              : `আর ${(goal?.targetStreakDays ?? 7) - streak} দিন বাকি`}
          </p>
        </div>

        {/* Insights */}
        {(topTrigger || topHour !== undefined) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topTrigger && (
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">সবচেয়ে সাধারণ কারণ</p>
                <p className="text-lg font-semibold text-gray-100">
                  {TRIGGERS[topTrigger] || topTrigger}
                </p>
              </div>
            )}
            {topHour !== undefined && (
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">সবচেয়ে সাধারণ সময়</p>
                <p className="text-lg font-semibold text-gray-100">
                  {TIME_LABELS[parseInt(topHour)] || `${topHour}:00`}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Heatmap */}
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <h2 className="font-semibold text-gray-200 mb-4">বার্ষিক ক্যালেন্ডার</h2>
          <HeatmapCalendar data={heatmapData} />
        </div>

        {/* Charts */}
        {entries.length >= 2 && (
          <>
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <h2 className="font-semibold text-gray-200 mb-4">সাপ্তাহিক বার চার্ট (শেষ ১২ সপ্তাহ)</h2>
              <WeeklyBarChart entries={entryDates} />
            </div>
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <h2 className="font-semibold text-gray-200 mb-4">মাসিক ট্রেন্ড</h2>
              <MonthlyLineChart entries={entryDates} />
            </div>
          </>
        )}
      </main>

      {/* Log Entry Modal */}
      {showModal && (
        <LogEntryModal
          onClose={() => setShowModal(false)}
          onLogged={handleEntryLogged}
        />
      )}
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className={cn(
      'bg-gray-900 rounded-xl p-4 border transition',
      highlight ? 'border-orange-500/50 bg-orange-900/10' : 'border-gray-800'
    )}>
      <div className="flex items-center gap-2 mb-2">{icon}</div>
      <p className="text-xl font-bold text-gray-100">{value}</p>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}
