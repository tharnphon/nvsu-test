// Write your test here
const assert = require('assert')
const { findOddNumber } = require('./odd-number')

try {
  assert.equal(findOddNumber([7]), 7)
  assert.equal(findOddNumber([0]), 0)
  assert.equal(findOddNumber([1, 1, 2]), 2)
  assert.equal(findOddNumber([0, 1, 0, 1, 0]), 0)
  assert.equal(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4)
  assert.equal(findOddNumber([]), 0)
  assert.equal(findOddNumber([-1, -1, 2]), 2)

  console.log('All tests passed successfully!')
} catch (error) {
  console.error('Test failed:', error.message)
}
