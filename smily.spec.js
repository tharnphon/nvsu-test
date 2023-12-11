// Write your test here
const assert = require('assert')
const { countSmilyFace } = require('./smily')

try {
  assert.equal(countSmilyFace([':)', ';(', ';}', ':-D']), 2)
  assert.equal(countSmilyFace([';D', ':-(', ':-)', ';~)']), 3)
  assert.equal(countSmilyFace([';]', ':[', ';*', ':$', ';-D']), 1)
  assert.equal(countSmilyFace([]), 0)

  console.log('All tests passed successfully!')
} catch (error) {
  console.error('Test failed:', error.message)
}
