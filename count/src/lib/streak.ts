import {
  startOfDay,
  differenceInDays,
  parseISO,
  isAfter,
  subDays,
} from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const TZ = 'Asia/Dhaka'

/** Convert a UTC Date to Asia/Dhaka midnight (start of day) */
export function toLocalDay(date: Date): Date {
  const zoned = toZonedTime(date, TZ)
  return startOfDay(zoned)
}

/** Today's date in Asia/Dhaka timezone */
export function todayLocal(): Date {
  return toLocalDay(new Date())
}

/**
 * Current streak = number of complete calendar days (Asia/Dhaka)
 * since the most recent entry.
 * If the most recent entry was today, streak = 0 (you've already logged today).
 * If the last entry was yesterday, streak = 1, etc.
 */
export function currentStreak(entryDates: Date[]): number {
  if (entryDates.length === 0) return 0

  const sorted = [...entryDates].sort((a, b) => b.getTime() - a.getTime())
  const lastEntry = toLocalDay(sorted[0])
  const today = todayLocal()

  const diff = differenceInDays(today, lastEntry)
  return diff
}

/**
 * Longest streak = largest number of consecutive *gap* days between entries.
 * We calculate it as the max span of a "clean" period between consecutive logs.
 * Returns the longest gap in full calendar days.
 */
export function longestStreak(entryDates: Date[]): number {
  if (entryDates.length < 2) return 0

  // Deduplicate by day
  const uniqueDays = Array.from(
    new Set(entryDates.map((d) => toLocalDay(d).toISOString()))
  )
    .map((s) => parseISO(s))
    .sort((a, b) => a.getTime() - b.getTime())

  let maxGap = 0
  for (let i = 1; i < uniqueDays.length; i++) {
    const gap = differenceInDays(uniqueDays[i], uniqueDays[i - 1]) - 1
    if (gap > maxGap) maxGap = gap
  }

  // Also check gap from last entry to today
  const today = todayLocal()
  const lastDay = uniqueDays[uniqueDays.length - 1]
  const gapToToday = differenceInDays(today, lastDay)
  if (gapToToday > maxGap) maxGap = gapToToday

  return maxGap
}

/** Count entries in the last N days (Asia/Dhaka) */
export function countInLastNDays(entryDates: Date[], n: number): number {
  const cutoff = subDays(todayLocal(), n)
  return entryDates.filter((d) => {
    const local = toLocalDay(d)
    return isAfter(local, cutoff) || local.getTime() === cutoff.getTime()
  }).length
}

/** Group entry dates by their local day string (YYYY-MM-DD) for heatmap */
export function groupByDay(
  entryDates: Date[]
): Record<string, number> {
  const result: Record<string, number> = {}
  for (const d of entryDates) {
    const zoned = toZonedTime(d, TZ)
    const key = `${zoned.getFullYear()}-${String(zoned.getMonth() + 1).padStart(2, '0')}-${String(zoned.getDate()).padStart(2, '0')}`
    result[key] = (result[key] || 0) + 1
  }
  return result
}

/** Get the hour in Asia/Dhaka for a given UTC date */
export function localHour(date: Date): number {
  const zoned = toZonedTime(date, TZ)
  return zoned.getHours()
}
