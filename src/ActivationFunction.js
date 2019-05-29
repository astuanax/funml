/**
 * @class ActivationFunction
 * @param func
 * @param dfunc
 */
export default class ActivationFunction {
  constructor (func, dfunc) {
    this.func = func
    this.dfunc = dfunc
  }
}
