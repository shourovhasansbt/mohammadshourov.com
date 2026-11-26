'use client'

import { subDays, format, startOfWeek, addDays, getDaysInYear } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { cn } from '@/lib/utils'

const TZ = 'Asia/Dhaka'

interface Props {
  data: Record<string, number>
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getColor(count: number): string {
  if (count === 0) return 'bg-gray-800'
  if (count === 1) return 'bg-blue-900'
  if (count === 2) return 'bg-blue-700'
  if (count === 3) return 'bg-blue-500'
  return 'bg-blue-400'
}

export default function HeatmapCalendar({ data }: Props) {
  const today = toZonedTime(new Date(), TZ)
  const startDate = startOfWeek(subDays(today, 364), { weekStartsOn: 0 })

  // Build weeks (53 weeks)
  const weeks: { date: Date; key: string }[][] = []
  let current = startDate
  for (let w = 0; w < 53; w++) {
    const week: { date: Date; key: string }[] = []
    for (let d = 0; d < 7; d++) {
      const date = addDays(current, d)
      const key = format(date, 'yyyy-MM-dd')
      week.push({ date, key })
    }
    weeks.push(week)
    current = addDays(current, 7)
  }

  // Month labels
  const monthLabels: { label: string; col: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, col) => {
    const m = week[0].date.getMonth()
    if (m !== lastMonth) {
      monthLabels.push({ label: MONTHS[m], col })
      lastMonth = m
    }
  })

  return (
    <div className="overflow-x-auto">
      <div style={{ minWidth: 700 }}>
        {/* Month labels */}
        <div className="flex mb-1 ml-8">
          {weeks.map((_, col) => {
            const ml = monthLabels.find(m => m.col === col)
            return (
              <div key={col} className="flex-shrink-0" style={{ width: 14 }}>
                {ml && <span className="text-xs text-gray-500">{ml.label}</span>}
              </div>
            )
          })}
        </div>

        <div className="flex gap-0.5">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 mr-1">
            {DAYS.map((day, i) => (
              <div key={day} style={{ height: 12 }} className="flex items-center">
                {i % 2 === 1 && <span className="text-xs text-gray-600 w-7 text-right pr-1">{day}</span>}
                {i % 2 === 0 && <span className="w-7" />}
              </div>
            ))}
          </div>

          {/* Grid */}
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map(({ date, key }) => {
                const count = data[key] || 0
                const isAfterToday = date > today
                return (
                  <div
                    key={key}
                    title={`${key}: ${count} বার`}
                    className={cn(
                      'w-3 h-3 rounded-sm flex-shrink-0',
                      isAfterToday ? 'opacity-0' : getColor(count)
                    )}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1 mt-2 ml-8">
          <span className="text-xs text-gray-500 mr-1">কম</span>
          {['bg-gray-800', 'bg-blue-900', 'bg-blue-700', 'bg-blue-500', 'bg-blue-400'].map(c => (
            <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
          ))}
          <span className="text-xs text-gray-500 ml-1">বেশি</span>
        </div>
      </div>
    </div>
  )
}
