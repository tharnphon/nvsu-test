/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (numbers) => {
  // Initialize memo mapping to store the oddness of each number
  const memo = {}
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    //   if number is not exist in memo, set its oddness to true
    //   otherwise, toggle its oddness
    memo[number] = !memo[number]
  }

  // return the key where the value is true
  for (const key in memo) {
    if (memo[key]) {
      return key
    }
  }

  // return 0 in case there is no odd number
  return 0
}

module.exports = {
  findOddNumber,
}
