import Link from 'next/link'
import RegisterClient from './RegisterClient'

export const dynamic = 'force-dynamic'

export default function RegisterPage() {
  const allowRegistration = process.env.ALLOW_REGISTRATION !== 'false'

  if (!allowRegistration) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="w-full max-w-sm bg-gray-900 rounded-2xl border border-gray-800 p-6 text-center shadow-xl">
          <h1 className="text-xl font-bold text-gray-100 mb-2">Daily Tracker</h1>
          <p className="text-gray-400 text-sm mb-4">নতুন রেজিস্ট্রেশন বর্তমানে বন্ধ আছে।</p>
          <Link
            href="/login"
            className="inline-block px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-xl transition"
          >
            লগইন পেজে যান
          </Link>
        </div>
      </div>
    )
  }

  return <RegisterClient />
}
