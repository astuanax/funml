/**
 * @class Perceptron
 * @classdesc Perceptron to train and execute
 * @see of
 * @example
 *
 * const m =  Perceptron.of()
 *
 */
let Perceptron = function (weights) {
  this.weights = weights || []
}

/**
 * @memberOf Matrix
 * @static
 * @function of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {array|function} An array of arrays
 * @returns {Matrix}
 * @example
 *
 * const m =  Perceptron.of()
 *
 */
Perceptron.of = function (val) {
  if (val instanceof Perceptron) return val
  if (this instanceof Perceptron) {
    this.weights = val
    return this
  }
  return new Perceptron(val)
}

Perceptron.prototype.type = 'Perceptron'

/**
 * @function predict
 * @param row
 * @param weights
 * @returns {number}
 */
Perceptron.prototype.predict = function (row) {
  var activation = this.weights[0]
  row.forEach((x, i) => {
    activation += this.weights[i + 1] * x
  })
  return activation >= 0 ? 1 : 0
}

/**
 * @function train
 * @param train
 * @param lRate
 * @param nEpoch
 */
Perceptron.prototype.train = function (train, lRate, nEpoch) {
  this.weights = Array.apply(null, Array(train[0].length)).map(x => 0)
  for (let i = 0; i < nEpoch; i++) {
    train.forEach((x, idx) => {
      const expected = x.slice(-1)[0]
      const row = x.slice(0, -1)
      const prediction = this.predict(row)
      const error = expected - prediction
      row.forEach((y, j) => {
        this.weights[j + 1] += lRate * error * y
      })
    })
  }
}

export default Perceptron
