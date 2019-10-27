import Impurity from '../Impurity'
import { add, sum } from 'fun.js'
import mapReduce from './mapReduce'

/**
 * @function variance
 * @type {Impurity}
 */
const variance = new Impurity(
  matrix => {
    const nrRows = matrix.getRows()
    if (nrRows === 0) {
      return 0
    }

    const arr = matrix.__value.map(row => row[row.length - 1])
    const mean = sum(arr) / nrRows
    return mapReduce(x => Math.pow(x - mean, 2), add)(arr) / nrRows
  }
)

export default variance
