/**
 * @class Perceptron
 * @classdesc Perceptron to train and predict
 * @see of
 * @example
 *
 * const m =  Perceptron.of([0.2365698, 0.4567897, 0.95989898, -0.457878787])
 *
 */
let Perceptron = function (weights) {
  this.weights = weights || []
}

/**
 * @memberOf Perceptron
 * @static
 * @function Perceptron.of
 * @desc Creates a Perceptron object
 * @param weights {array} Weights for predicting
 * @returns {Perceptron}
 * @example
 *
 * const weights = [0.123456, 0.458789, 0.9987454]
 * const m =  Perceptron.of(weights)
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

/**
 * @memberOf Perceptron
 * @type {string}
 */
Perceptron.prototype.type = 'Perceptron'

/**
 * @memberOf Perceptron
 * @function Perceptron#predict
 * @param row {Array} Array of values to predict
 * @returns {Boolean}
 * @example
 *
 * const m =  Perceptron.of()
 * const train  = [...] // dataset: [[0,1,2], [1,2,3]]
 * m.train(train, 0.1, 10000)
 * m.predict([1,2,1]) // returns 1 or 0
 */
Perceptron.prototype.predict = function (row) {
  var activation = this.weights[0]
  row.forEach((x, i) => {
    activation += this.weights[i + 1] * x
  })
  return activation >= 0 ? 1 : 0
}

/**
 * @memberOf Perceptron
 * @function Perceptron#train
 * @param train {Array} Dataset to train the preceptron
 * @param lRate {Number} Set the learning rate of the perceptron
 * @param nEpoch {Number} Set the number of iterations to train the perceptron
 * @example
 *
 * const m =  Perceptron.of()
 * const train  = [...] // dataset: [[0,1,2], [1,2,3]]
 * m.train(train, 0.1, 10000)
 * m.weights = [0.213131, -0.45464, 0.789797]
 *
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
