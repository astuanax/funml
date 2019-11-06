import { fold } from 'fun.js'

/**
 * @function convert2frequencies
 * @param total
 * @returns {function(*=)}
 */
const convert2frequencies = total => obj => fold((acc, y) => {
  acc.push(y / total)
  return acc
})([])(obj)

/**
 * @function countClasses
 * @param arr
 * @returns {*}
 */
const countClasses = arr => fold((acc, val) => {
  acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
  return acc
})({})(arr)

export { convert2frequencies, countClasses }
