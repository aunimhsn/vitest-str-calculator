// sum.test.js
import { expect, test } from 'vitest'
import { add } from '../main'

test('empty string returns 0', () => {
    expect(add("")).toBe(0)
})