import ActivationFunction from '../ActivationFunction'

/**
 * @function tanh
 * @type {ActivationFunction}
 */
const tanh = new ActivationFunction(
  x => Math.tanh(x),
  y => 1 - (y * y)
)
export default tanh
