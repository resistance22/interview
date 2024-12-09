import { expect, test } from 'vitest'
import { search } from '../questions/q3'

test('Find 8 inside a sorted array', () => {
  expect(search(8, [1,2,3,4,5,6,7,8])).toBe(7)
})

test('Find 4 inside a sorted array', () => {
  expect(search(4, [1,2,3,4,5,6,7,8])).toBe(3)
})

test('Should return null', () => {
  expect(search(12, [1,2,3,4,5,6,7,8])).toBe(null)
})