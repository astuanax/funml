import Impurity from '../Impurity'
import { add, fold } from 'fun.js'
import mapReduce from './mapReduce'
import { convert2frequencies, countClasses } from './helpers'

/**
 * @function entropy
 * @type {Impurity}
 */
const entropy = new Impurity(
  matrix => {
    // TODO check instanceof Matrix
    const arr = matrix.__value.map(row => row[row.length - 1])
    const countedClasses = countClasses(arr)
    const nrRows = matrix.getRows()
    const classFrequencies = convert2frequencies(nrRows)(countedClasses)
    return fold(mapReduce(x => -x * Math.log2(x), add), 0, classFrequencies)
  }
)
export default entropy
