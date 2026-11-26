'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import toast from 'react-hot-toast'
import { ArrowLeft, Users, Hash, ChevronRight, Trash2, Shield, Key, Flame } from 'lucide-react'
import Link from 'next/link'
import { currentStreak, longestStreak, countInLastNDays } from '@/lib/streak'

const TZ = 'Asia/Dhaka'

interface AdminUser {
  id: number
  name: string
  email: string
  role: string
  createdAt: string
  totalCount: number
  currentStreak: number
  lastEntry: string | null
}

interface UserEntry {
  id: number
  occurredAt: string
  moodBefore: number | null
  moodAfter: number | null
  trigger: string | null
  note: string | null
}

interface Props {
  users: AdminUser[]
  totalEntries: number
  currentAdminId: number
}

function formatLocal(dateStr: string, withTime = false): string {
  const local = toZonedTime(new Date(dateStr), TZ)
  return format(local, withTime ? 'dd MMM yyyy, hh:mm a' : 'dd MMM yyyy')
}

export default function AdminClient({ users: initialUsers, totalEntries, currentAdminId }: Props) {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers)
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null)
  const [selectedEntries, setSelectedEntries] = useState<UserEntry[]>([])
  const [loadingDetails, setLoadingDetails] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [showPasswordModal, setShowPasswordModal] = useState<number | null>(null)

  const handleSelectUser = async (user: AdminUser) => {
    setSelectedUser(user)
    setLoadingDetails(true)
    try {
      const res = await fetch(`/api/admin/users/${user.id}`)
      if (res.ok) {
        const data = await res.json()
        setSelectedEntries(data.entries || [])
      }
    } catch {
      toast.error('তথ্য লোড করতে ব্যর্থ')
    } finally {
      setLoadingDetails(false)
    }
  }

  const handleRoleChange = async (userId: number, newRole: 'user' | 'admin') => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      })
      if (res.ok) {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
        if (selectedUser?.id === userId) setSelectedUser(prev => prev ? { ...prev, role: newRole } : prev)
        toast.success('রোল আপডেট হয়েছে')
      } else {
        toast.error('ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    }
  }

  const handleDelete = async (userId: number) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, { method: 'DELETE' })
      if (res.ok) {
        setUsers(prev => prev.filter(u => u.id !== userId))
        if (selectedUser?.id === userId) {
          setSelectedUser(null)
          setSelectedEntries([])
        }
        toast.success('ব্যবহারকারী মুছে ফেলা হয়েছে')
      } else {
        const data = await res.json()
        toast.error(data.error || 'ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    }
    setConfirmDelete(null)
  }

  const handleResetPassword = async (userId: number) => {
    if (!newPassword || newPassword.length < 8) {
      toast.error('পাসওয়ার্ড কমপক্ষে ৮ অক্ষর হতে হবে')
      return
    }
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword }),
      })
      if (res.ok) {
        toast.success('পাসওয়ার্ড রিসেট হয়েছে')
        setShowPasswordModal(null)
        setNewPassword('')
      } else {
        toast.error('ব্যর্থ')
      }
    } catch {
      toast.error('সার্ভার এরর')
    }
  }

  const entryDates = selectedEntries.map(e => new Date(e.occurredAt))
  const selLongest = longestStreak(entryDates)
  const selCurrent = currentStreak(entryDates)
  const selWeek = countInLastNDays(entryDates, 7)

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/dashboard" className="p-2 text-gray-400 hover:text-gray-100 transition">
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-purple-400" />
            <h1 className="font-semibold text-gray-100">অ্যাডমিন প্যানেল</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
            <div className="flex items-center gap-2 mb-1">
              <Users size={16} className="text-blue-400" />
              <span className="text-xs text-gray-400">মোট ব্যবহারকারী</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">{users.length}</p>
          </div>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
            <div className="flex items-center gap-2 mb-1">
              <Hash size={16} className="text-green-400" />
              <span className="text-xs text-gray-400">মোট এন্ট্রি</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">{totalEntries}</p>
          </div>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-1">
              <Flame size={16} className="text-orange-400" />
              <span className="text-xs text-gray-400">অ্যাডমিন সংখ্যা</span>
            </div>
            <p className="text-2xl font-bold text-gray-100">
              {users.filter(u => u.role === 'admin').length}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* User list */}
          <div className="flex-1 space-y-2">
            {users.map(user => (
              <div
                key={user.id}
                onClick={() => handleSelectUser(user)}
                className={`bg-gray-900 rounded-xl border p-4 cursor-pointer transition hover:border-gray-600 ${
                  selectedUser?.id === user.id ? 'border-brand-500' : 'border-gray-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-100 text-sm">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        user.role === 'admin' ? 'bg-purple-900/40 text-purple-300' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {user.role === 'admin' ? 'অ্যাডমিন' : 'ব্যবহারকারী'}
                      </span>
                      <span className="text-xs text-gray-400">এন্ট্রি: {user.totalCount}</span>
                      <span className="text-xs text-orange-400">স্ট্রিক: {user.currentStreak} দিন</span>
                      <span className="text-xs text-gray-500">
                        শেষ: {user.lastEntry ? formatLocal(user.lastEntry) : 'নেই'}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>

          {/* User detail panel */}
          {selectedUser && (
            <div className="w-full md:w-80 bg-gray-900 rounded-xl border border-gray-800 p-4 h-fit">
              <h2 className="font-semibold text-gray-100 mb-2">{selectedUser.name}</h2>
              <div className="space-y-1.5 text-sm text-gray-400 mb-4">
                <p>{selectedUser.email}</p>
                <p>মোট এন্ট্রি: <span className="text-gray-200">{selectedUser.totalCount}</span></p>
                <p>বর্তমান স্ট্রিক: <span className="text-gray-200">{selCurrent} দিন</span></p>
                <p>সর্বোচ্চ স্ট্রিক: <span className="text-gray-200">{selLongest} দিন</span></p>
                <p>এই সপ্তাহে: <span className="text-gray-200">{selWeek} বার</span></p>
                {selectedUser.lastEntry && (
                  <p>শেষ এন্ট্রি: <span className="text-gray-200">{formatLocal(selectedUser.lastEntry)}</span></p>
                )}
                <p>যোগ দিয়েছেন: <span className="text-gray-200">{formatLocal(selectedUser.createdAt)}</span></p>
              </div>

              {/* Actions */}
              <div className="space-y-2 mb-4">
                <button
                  onClick={() => handleRoleChange(selectedUser.id, selectedUser.role === 'admin' ? 'user' : 'admin')}
                  className="w-full flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition"
                >
                  <Shield size={14} />
                  {selectedUser.role === 'admin' ? 'ব্যবহারকারী বানান' : 'অ্যাডমিন বানান'}
                </button>

                <button
                  onClick={() => setShowPasswordModal(selectedUser.id)}
                  className="w-full flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition"
                >
                  <Key size={14} />
                  পাসওয়ার্ড রিসেট
                </button>

                {selectedUser.id !== currentAdminId && (
                  confirmDelete === selectedUser.id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(selectedUser.id)}
                        className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded-lg"
                      >
                        নিশ্চিত করুন
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="flex-1 px-3 py-2 bg-gray-700 text-gray-300 text-sm rounded-lg"
                      >
                        বাতিল
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmDelete(selectedUser.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 text-sm rounded-lg transition"
                    >
                      <Trash2 size={14} />
                      ব্যবহারকারী মুছুন
                    </button>
                  )
                )}
              </div>

              {/* User entry history */}
              <div className="border-t border-gray-800 pt-3">
                <h3 className="text-xs font-semibold text-gray-400 mb-2">সাম্প্রতিক ইতিহাস</h3>
                {loadingDetails ? (
                  <p className="text-xs text-gray-500">লোড হচ্ছে...</p>
                ) : selectedEntries.length === 0 ? (
                  <p className="text-xs text-gray-500">কোনো এন্ট্রি নেই</p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {selectedEntries.slice(0, 20).map(e => (
                      <div key={e.id} className="bg-gray-800/60 rounded-lg p-2 text-xs">
                        <p className="text-gray-200">{formatLocal(e.occurredAt, true)}</p>
                        {(e.trigger || e.note) && (
                          <p className="text-gray-400 mt-0.5 truncate">
                            {[e.trigger, e.note].filter(Boolean).join(' · ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Password Reset Modal */}
      {showPasswordModal !== null && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-5 w-full max-w-sm">
            <h3 className="font-semibold text-gray-100 mb-4">নতুন পাসওয়ার্ড সেট করুন</h3>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500 mb-3"
            />
            <div className="flex gap-2">
              <button
                onClick={() => handleResetPassword(showPasswordModal)}
                className="flex-1 py-2 bg-brand-600 text-white text-sm rounded-lg"
              >
                সেট করুন
              </button>
              <button
                onClick={() => { setShowPasswordModal(null); setNewPassword('') }}
                className="flex-1 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg"
              >
                বাতিল
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
