import ActivationFunction from '../ActivationFunction'

/**
 * @function sigmoid
 * @type {ActivationFunction}
 * @param {Function} func x => 1 / (1 + Math.exp(-x))
 * @param {Function} dfunc y => y * (1 - y)
 */
const sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
)
export default sigmoid
