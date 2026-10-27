import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { reverseOrder } from './reverseOrder.ts'

describe('reverseOrder', () => {
	it('returns values in reverse order without changing the input', () => {
		const input = [1, 2, 3]

		assert.deepEqual(reverseOrder(input), [3, 2, 1])
		assert.deepEqual(input, [1, 2, 3])
	})
})
