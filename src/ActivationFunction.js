/**
 * @class ActivationFunction
 * @desc Container for the neural network activation function and its derivative
 * @param func Activation function
 * @param dfunc Derivative of the activation function
 * @see sigmoid tanh
 * @example
 *
 * const softStep = new ActivationFunction(
 *  x => 1 / (1 + Math.exp(x)),
 *  x => this.func(x) * (1 - this.func(x))
 *  )
 */
export default class ActivationFunction {
  constructor (func, dfunc) {
    this.func = func
    this.dfunc = dfunc
    this.type = 'ActivationFunction'
  }
}
