'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

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

interface Props {
  onClose: () => void
  onLogged: (entry: Entry) => void
  initialEntry?: Entry
}

const TRIGGERS = [
  { value: 'boredom', label: 'বিরক্তি' },
  { value: 'stress', label: 'চাপ' },
  { value: 'late night', label: 'রাতে দেরিতে' },
  { value: 'phone', label: 'ফোন' },
  { value: 'other', label: 'অন্যান্য' },
]

function localNowForInput(): string {
  const now = toZonedTime(new Date(), TZ)
  return format(now, "yyyy-MM-dd'T'HH:mm")
}

export default function LogEntryModal({ onClose, onLogged, initialEntry }: Props) {
  const isEditing = !!initialEntry
  const [occurredAt, setOccurredAt] = useState(
    initialEntry
      ? format(toZonedTime(new Date(initialEntry.occurredAt), TZ), "yyyy-MM-dd'T'HH:mm")
      : localNowForInput()
  )
  const [moodBefore, setMoodBefore] = useState<number | ''>(initialEntry?.moodBefore ?? '')
  const [moodAfter, setMoodAfter] = useState<number | ''>(initialEntry?.moodAfter ?? '')
  const [trigger, setTrigger] = useState(initialEntry?.trigger || '')
  const [note, setNote] = useState(initialEntry?.note || '')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Convert local Dhaka time to UTC for storage
    const localDate = new Date(occurredAt + ':00+06:00')

    const payload = {
      occurredAt: localDate.toISOString(),
      moodBefore: moodBefore !== '' ? Number(moodBefore) : null,
      moodAfter: moodAfter !== '' ? Number(moodAfter) : null,
      trigger: trigger || null,
      note: note || null,
    }

    try {
      let res: Response
      if (isEditing) {
        res = await fetch(`/api/entries/${initialEntry!.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch('/api/entries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      const data = await res.json()
      if (res.ok) {
        onLogged({ ...data.entry, occurredAt: data.entry.occurredAt, createdAt: data.entry.createdAt })
        toast.success(isEditing ? '✅ আপডেট হয়েছে' : '✅ রেকর্ড হয়েছে!')
        onClose()
      } else {
        toast.error(data.error || 'ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="font-semibold text-gray-100">
            {isEditing ? 'এন্ট্রি সম্পাদনা' : 'নতুন এন্ট্রি'}
          </h2>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-100">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Date/time */}
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">তারিখ ও সময় (ঢাকা সময়)</label>
            <input
              type="datetime-local"
              value={occurredAt}
              onChange={(e) => setOccurredAt(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {/* Trigger */}
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">কারণ (ঐচ্ছিক)</label>
            <select
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="">-- বেছে নিন --</option>
              {TRIGGERS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Mood sliders */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-300 mb-1.5">
                আগের মেজাজ {moodBefore !== '' && `(${moodBefore}/5)`}
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={moodBefore !== '' ? moodBefore : 3}
                onChange={(e) => setMoodBefore(parseInt(e.target.value))}
                className="w-full accent-brand-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>খারাপ</span>
                <span>ভালো</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1.5">
                পরের মেজাজ {moodAfter !== '' && `(${moodAfter}/5)`}
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={moodAfter !== '' ? moodAfter : 3}
                onChange={(e) => setMoodAfter(parseInt(e.target.value))}
                className="w-full accent-brand-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>খারাপ</span>
                <span>ভালো</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm text-gray-300 mb-1.5">নোট (ঐচ্ছিক)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              maxLength={500}
              placeholder="যেকোনো মন্তব্য..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-medium rounded-xl transition"
          >
            {loading ? 'সংরক্ষণ হচ্ছে...' : isEditing ? 'আপডেট করুন' : 'সংরক্ষণ করুন'}
          </button>
        </form>
      </div>
    </div>
  )
}
