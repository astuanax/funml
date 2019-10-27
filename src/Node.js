/**
 * @class Node
 * @param {Matrix | Array} results
 * @param {Number} col
 * @param {Number | String} value
 * @param {Node} left
 * @param {Node} right
 */
class Node {
  constructor (results, col, value, left, right) {
    this.col = col || -1
    this.value = value
    this.left = left
    this.right = right
    this.results = results
  }
}

export default Node
