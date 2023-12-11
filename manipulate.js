/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
  // Initialize result set so it doesn't include duplicates
  const result = new Set()

  // make a function to be called recursively
  const permute = (acc, remaining) => {
    // base case
    if (remaining.length === 0) {
      result.add(acc)
      return
    }

    // recursive case
    for (let i = 0; i < remaining.length; i++) {
      // remove and append the character from remaining to the accumulator
      const newAcc = acc + remaining[i]
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1)
      permute(newAcc, newRemaining)
    }
  }

  permute('', text)
  return Array.from(result)
}

module.exports = {
  manipulate,
}
