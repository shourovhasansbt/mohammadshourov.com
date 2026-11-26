'use client'

import { cn } from '@/lib/utils'

interface Props {
  current: number
  target: number
}

export default function GoalProgressBar({ current, target }: Props) {
  const percent = Math.min(100, Math.round((current / target) * 100))

  return (
    <div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-700',
            percent >= 100 ? 'bg-green-500' : percent >= 50 ? 'bg-brand-500' : 'bg-orange-500'
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1 text-right">{percent}%</p>
    </div>
  )
}
