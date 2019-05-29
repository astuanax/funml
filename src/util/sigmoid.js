import ActivationFunction from '../ActivationFunction'

/**
 * @function sigmoid
 * @type {ActivationFunction}
 */
const sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
)
export default sigmoid
