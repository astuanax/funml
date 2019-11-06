import ActivationFunction from '../ActivationFunction'

/**
 * @function tanh
 * @type {ActivationFunction}
 * @param {Function} func x => Math.tanh(x)
 * @param {Function} dfunc y => 1 - (y * y)
 */
const tanh = new ActivationFunction(
  x => Math.tanh(x),
  y => 1 - (y * y)
)
export default tanh
