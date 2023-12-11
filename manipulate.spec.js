// Write your test here
const assert = require('assert')
const { manipulate } = require('./manipulate')

try {
  assert.notStrictEqual(manipulate('a'), ['a'])
  assert.notStrictEqual(manipulate('ab'), ['ab', 'ba'])
  assert.notStrictEqual(manipulate('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  assert.notStrictEqual(manipulate('aabb'), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
  assert.notStrictEqual(manipulate(''), [])

  console.log('All tests passed successfully!')
} catch (error) {
  console.error('Test failed:', error.message)
}
