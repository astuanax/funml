import Impurity from '../Impurity'
import { convert2frequencies, countClasses } from './helpers'

// const frequencies = total => obj => fold((acc, y) => {
//   acc.push(y / total)
//   return acc
// })([])(obj)

/**
 * @function gini
 * @type {Impurity}
 */
const gini = new Impurity(
  matrix => {
    const nrRows = matrix.getRows()

    const arr = matrix.__value.map(row => row[row.length - 1])
    const countedClasses = countClasses(arr)
    // const countedClasses = arr.reduce((acc, val) => {
    //   acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
    //   return acc
    // }, {})
    const classFrequencies = convert2frequencies(nrRows)(countedClasses)

    let imp = 0
    const len = classFrequencies.length
    for (let i = 0; i < len; ++i) {
      const p1 = classFrequencies[i]
      for (let j = 0; j < len; ++j) {
        if (i === j) {
          // skip
        } else {
          const p2 = classFrequencies[j]
          imp += p1 * p2
        }
      }
    }
    return imp
  }
)
export default gini
