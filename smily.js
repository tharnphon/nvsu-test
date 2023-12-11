/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (texts) => {
  // Initialize smily count as 0
  let count = 0

  // Loop through each text
  for (let i of texts) {
    // Regex to check if the text contains smily face
    // [:;] = either : or ;
    // [-~]? = optional - or ~
    // [)D] = either ) or D
    const regex = '[:;][-~]?[)D]'

    if (i.match(regex)) {
      // If the text contains smily face, increase the count
      count++
    }
  }
  return count
}

module.exports = {
  countSmilyFace,
}
