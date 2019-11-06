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
    const countedClasses = countClasses(matrix.getColumn(matrix.getCols() - 1))
    const classFrequencies = convert2frequencies(matrix.getRows())(countedClasses)

    let imp = 0
    const len = classFrequencies.length

    for (let i = 0; i < len; ++i) {
      const p1 = classFrequencies[i]

      for (let j = 0; j < len; ++j) {
        if (i !== j) {
          const p2 = classFrequencies[j]
          imp += p1 * p2
        }
      }
    }
    return imp
  }
)
export default gini
