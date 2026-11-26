'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { startOfWeek, format, addWeeks, subWeeks } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const TZ = 'Asia/Dhaka'

interface Props {
  entries: Date[]
}

export default function WeeklyBarChart({ entries }: Props) {
  const now = toZonedTime(new Date(), TZ)
  const data = Array.from({ length: 12 }, (_, i) => {
    const weekStart = startOfWeek(subWeeks(now, 11 - i), { weekStartsOn: 0 })
    const weekEnd = addWeeks(weekStart, 1)
    const count = entries.filter(d => {
      const local = toZonedTime(d, TZ)
      return local >= weekStart && local < weekEnd
    }).length

    return {
      week: format(weekStart, 'dd/MM'),
      count,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
        <XAxis dataKey="week" tick={{ fill: '#9ca3af', fontSize: 11 }} />
        <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} allowDecimals={false} />
        <Tooltip
          contentStyle={{ background: '#111827', border: '1px solid #374151', borderRadius: 8 }}
          labelStyle={{ color: '#e5e7eb' }}
          itemStyle={{ color: '#60a5fa' }}
        />
        <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} name="সংখ্যা" />
      </BarChart>
    </ResponsiveContainer>
  )
}
