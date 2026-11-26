'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { startOfMonth, format, subMonths } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const TZ = 'Asia/Dhaka'

interface Props {
  entries: Date[]
}

export default function MonthlyLineChart({ entries }: Props) {
  const now = toZonedTime(new Date(), TZ)
  const data = Array.from({ length: 12 }, (_, i) => {
    const monthStart = startOfMonth(subMonths(now, 11 - i))
    const monthEnd = startOfMonth(subMonths(now, 10 - i))
    const count = entries.filter(d => {
      const local = toZonedTime(d, TZ)
      return local >= monthStart && local < monthEnd
    }).length

    return {
      month: format(monthStart, 'MMM yy'),
      count,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis dataKey="month" tick={{ fill: '#9ca3af', fontSize: 11 }} />
        <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} allowDecimals={false} />
        <Tooltip
          contentStyle={{ background: '#111827', border: '1px solid #374151', borderRadius: 8 }}
          labelStyle={{ color: '#e5e7eb' }}
          itemStyle={{ color: '#a78bfa' }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8b5cf6"
          strokeWidth={2}
          dot={{ fill: '#8b5cf6', r: 4 }}
          name="সংখ্যা"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
