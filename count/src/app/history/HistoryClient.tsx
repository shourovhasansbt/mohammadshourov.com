'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import toast from 'react-hot-toast'
import { ArrowLeft, Pencil, Trash2, Download, Filter } from 'lucide-react'
import Link from 'next/link'
import LogEntryModal from '@/components/LogEntryModal'

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

const TRIGGERS: Record<string, string> = {
  boredom: 'বিরক্তি',
  stress: 'চাপ',
  'late night': 'রাতে দেরিতে',
  phone: 'ফোন',
  other: 'অন্যান্য',
}

function formatLocal(dateStr: string): string {
  const local = toZonedTime(new Date(dateStr), TZ)
  return format(local, 'dd MMM yyyy, hh:mm a')
}

interface Props {
  initialEntries: Entry[]
}

export default function HistoryClient({ initialEntries }: Props) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries)
  const [editEntry, setEditEntry] = useState<Entry | null>(null)
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)

  const filtered = entries.filter(e => {
    const local = toZonedTime(new Date(e.occurredAt), TZ)
    if (dateFrom) {
      const from = new Date(dateFrom)
      if (local < from) return false
    }
    if (dateTo) {
      const to = new Date(dateTo + 'T23:59:59')
      if (local > to) return false
    }
    return true
  })

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/entries/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setEntries(prev => prev.filter(e => e.id !== id))
        toast.success('মুছে ফেলা হয়েছে')
      } else {
        toast.error('ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    }
    setConfirmDelete(null)
  }

  const handleExportCSV = () => {
    const rows = [
      ['ID', 'তারিখ ও সময়', 'কারণ', 'আগের মেজাজ', 'পরের মেজাজ', 'নোট'],
      ...filtered.map(e => [
        e.id,
        formatLocal(e.occurredAt),
        TRIGGERS[e.trigger || ''] || e.trigger || '',
        e.moodBefore || '',
        e.moodAfter || '',
        e.note || '',
      ]),
    ]
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `daily-tracker-${format(new Date(), 'yyyyMMdd')}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleEntryUpdated = (updated: Entry) => {
    setEntries(prev =>
      prev.map(e => e.id === updated.id ? updated : e)
        .sort((a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime())
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 text-gray-400 hover:text-gray-100 transition">
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-semibold text-gray-100">ইতিহাস</h1>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition"
          >
            <Download size={14} />
            CSV
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1">শুরুর তারিখ</label>
            <input
              type="date"
              value={dateFrom}
              onChange={e => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-xl text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1">শেষের তারিখ</label>
            <input
              type="date"
              value={dateTo}
              onChange={e => setDateTo(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-xl text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4">মোট: {filtered.length} টি এন্ট্রি</p>

        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-4xl mb-3">📭</p>
            <p>কোনো এন্ট্রি নেই</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(entry => (
              <div key={entry.id} className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-gray-100 text-sm">
                      {formatLocal(entry.occurredAt)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {entry.trigger && (
                        <span className="px-2 py-0.5 bg-blue-900/40 text-blue-300 text-xs rounded-full">
                          {TRIGGERS[entry.trigger] || entry.trigger}
                        </span>
                      )}
                      {entry.moodBefore && (
                        <span className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">
                          আগে: {entry.moodBefore}/5
                        </span>
                      )}
                      {entry.moodAfter && (
                        <span className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">
                          পরে: {entry.moodAfter}/5
                        </span>
                      )}
                    </div>
                    {entry.note && (
                      <p className="text-gray-400 text-sm mt-2">{entry.note}</p>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setEditEntry(entry)}
                      className="p-2 text-gray-500 hover:text-brand-400 transition"
                    >
                      <Pencil size={15} />
                    </button>
                    {confirmDelete === entry.id ? (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="px-2 py-1 text-xs bg-red-600 text-white rounded-lg"
                        >
                          হ্যাঁ
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-lg"
                        >
                          না
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete(entry.id)}
                        className="p-2 text-gray-500 hover:text-red-400 transition"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {editEntry && (
        <LogEntryModal
          onClose={() => setEditEntry(null)}
          onLogged={handleEntryUpdated}
          initialEntry={editEntry}
        />
      )}
    </div>
  )
}
