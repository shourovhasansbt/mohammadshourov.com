import { describe, it, expect } from 'vitest'
import {
  currentStreak,
  longestStreak,
  groupByDay,
  countInLastNDays,
} from './streak'
import { subDays, addDays } from 'date-fns'

const now = new Date('2024-06-15T12:00:00+06:00') // 06:00 UTC

describe('currentStreak', () => {
  it('returns 0 for empty list', () => {
    expect(currentStreak([])).toBe(0)
  })

  it('returns 0 when last entry is today', () => {
    const result = currentStreak([new Date()])
    expect(result).toBe(0)
  })

  it('returns 1 when last entry was yesterday', () => {
    const yesterday = subDays(new Date(), 1)
    const result = currentStreak([yesterday])
    expect(result).toBe(1)
  })

  it('handles multiple entries, picks the most recent', () => {
    const dates = [subDays(new Date(), 5), subDays(new Date(), 2)]
    const result = currentStreak(dates)
    expect(result).toBe(2)
  })
})

describe('longestStreak', () => {
  it('returns 0 for empty list', () => {
    expect(longestStreak([])).toBe(0)
  })

  it('returns 0 for single entry', () => {
    expect(longestStreak([new Date()])).toBe(0)
  })

  it('calculates gap between two entries', () => {
    const d1 = new Date('2024-01-01T10:00:00Z')
    const d2 = new Date('2024-01-10T10:00:00Z')
    // gap = 9 days between - 1 = 8 days clean
    const result = longestStreak([d1, d2])
    expect(result).toBeGreaterThanOrEqual(8)
  })
})

describe('groupByDay', () => {
  it('groups multiple entries on same day', () => {
    const d1 = new Date('2024-06-15T04:00:00Z') // 10:00 Dhaka
    const d2 = new Date('2024-06-15T08:00:00Z') // 14:00 Dhaka
    const result = groupByDay([d1, d2])
    expect(result['2024-06-15']).toBe(2)
  })

  it('splits entries across midnight', () => {
    const d1 = new Date('2024-06-14T19:00:00Z') // 01:00 June 15 Dhaka
    const d2 = new Date('2024-06-14T12:00:00Z') // 18:00 June 14 Dhaka
    const result = groupByDay([d1, d2])
    expect(result['2024-06-15']).toBe(1)
    expect(result['2024-06-14']).toBe(1)
  })
})

describe('countInLastNDays', () => {
  it('returns 0 for empty list', () => {
    expect(countInLastNDays([], 7)).toBe(0)
  })

  it('counts entries within window', () => {
    const dates = [
      new Date(), // today
      subDays(new Date(), 3),
      subDays(new Date(), 10),
    ]
    expect(countInLastNDays(dates, 7)).toBe(2)
  })
})
