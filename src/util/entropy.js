import Impurity from '../Impurity'
import { add, fold } from 'fun.js'
import mapReduce from './mapReduce'

// const uniqsCount = fold((acc, val) => {
//   acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
//   return acc
// }, {})

const frequencies = total => obj => fold((acc, y) => {
  acc.push(y / total)
  return acc
})([])(obj)

/**
 * @function emtropy
 * @type {Impurity}
 */
const entropy = new Impurity(
  matrix => {
    // TODO check instanceof Matrix
    const arr = matrix.__value.map(row => row[row.length - 1])
    const countedClasses = arr.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
      return acc
    }, {})
    const nrRows = matrix.getRows()
    const classFrequencies = frequencies(nrRows)(countedClasses)
    const res = fold(mapReduce(x => -x * Math.log2(x), add), 0, classFrequencies)
    return res
  }
)
export default entropy
