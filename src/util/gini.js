import Impurity from '../Impurity'
import { add, fold } from 'fun.js'
import mapReduce from './mapReduce'

/**
 * @function gini
 * @type {Impurity}
 */
const gini = new Impurity(
  arr => fold(mapReduce(x => x * (1 - x), add), 0, arr)
)
export default gini
