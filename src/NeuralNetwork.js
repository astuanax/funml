import Matrix from '@astuanax/funmatrix'
import sigmoid from './util/sigmoid'

/**
 * @class NeuralNetwork
 * @param {Number} inputNodes
 * @param {Nmber} hiddenNodes
 * @param {Number} outputNodes
 */
class NeuralNetwork {
  constructor (...values) {
    [this.inputNodes, this.hiddenNodes, this.outputNodes] = values

    const f = e => Math.random() * 2 - 1
    this.weightsIh = Matrix.random(f, this.hiddenNodes, this.inputNodes)
    this.weightsHo = Matrix.random(f, this.outputNodes, this.hiddenNodes)

    this.biasH = Matrix.random(f, this.hiddenNodes, 1)
    this.biasO = Matrix.random(f, this.outputNodes, 1)

    this.setActivationFunction()
    this.setLearningRate()

    // console.log('Init')
    // console.log('weightsIh', this.weightsIh.__value)
    // console.log('weightsHo', this.weightsIh.__value)
    // console.log('biasH', this.biasH.__value)
    // console.log('biasO', this.biasO.__value)

    this.type = 'NeuralNetwork'
  }
}
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#setActivationFunction
 * @param {Function} func
 */
NeuralNetwork.prototype.setActivationFunction = function (func = sigmoid) {
  this.activationFunction = func
}

/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#setLearningRate
 * @param {Number} learningRate
 */
NeuralNetwork.prototype.setLearningRate = function (learningRate = 0.1) {
  this.learningRate = learningRate
}

/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#predict
 * @param {Array} inputArray
 * @returns {Array}
 */
NeuralNetwork.prototype.predict = function (inputArray) {
  // Generating the Hidden Outputs
  let inputs = Matrix.fromArray(inputArray)
  let hidden = Matrix.dot(this.weightsIh, inputs)
  hidden = Matrix.of(hidden).add(this.biasH)
  // activation function!
  hidden = hidden.map(row => row.map(this.activationFunction.func))

  // Generating the output's output!
  let output = Matrix.dot(this.weightsHo, hidden)
  output = Matrix.of(output).add(this.biasO)
  output = output.map(row => row.map(this.activationFunction.func))
  // Sending back to the caller!
  return output.toArray()
}

/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#train
 * @param {Array} inputArray
 * @param {Array} targetArray
 */
NeuralNetwork.prototype.train = function (inputArray, targetArray) {
  const dotAddMap = (weight, input, bias) => Matrix.dot(weight, input).add(bias).map(row => row.map(this.activationFunction.func))
  const mapMulMul = (layer, error) => layer.map(row => row.map(this.activationFunction.dfunc)).multiply(error).multiply(this.learningRate)

  // Generating the Hidden Outputs
  let inputs = Matrix.fromArray(inputArray)

  let hidden = dotAddMap(this.weightsIh, inputs, this.biasH)
  // Matrix.dot(this.weightsIh, inputs)
  // .add(this.biasH)
  // .map(row => row.map(this.activationFunction.func))

  // Generating the output's output!
  let outputs = dotAddMap(this.weightsHo, hidden, this.biasO)
  // Matrix.dot(this.weightsHo, hidden)
  // .add(this.biasO)
  // .map(row => row.map(this.activationFunction.func))

  // Calculate the error
  // ERROR = TARGETS - OUTPUTS
  let outputErrors = Matrix.fromArray(targetArray).subtract(outputs)

  // let gradient = outputs * (1 - outputs);
  // Calculate gradient
  let gradients = mapMulMul(outputs, outputErrors)
  // outputs.map(row => row.map(this.activationFunction.dfunc))
  // .multiply(outputErrors)
  // .multiply(this.learningRate)

  // Calculate deltas
  let hiddenT = Matrix.transpose(hidden)
  let weightHoDeltas = Matrix.dot(gradients, hiddenT)

  // Adjust the weights by deltas
  this.weightsHo = this.weightsHo.add(weightHoDeltas)

  // Adjust the bias by its deltas (which is just the gradients)
  this.biasO = this.biasO.add(gradients)

  // Calculate the hidden layer errors
  let whoT = Matrix.transpose(this.weightsHo)
  let hiddenErrors = Matrix.dot(whoT, outputErrors)

  // Calculate hidden gradient
  let hiddenGradient = mapMulMul(hidden, hiddenErrors)
  // hidden.map(row => row.map(this.activationFunction.dfunc))
  // .multiply(hiddenErrors)
  // .multiply(this.learningRate)

  // Calculate input->hidden deltas
  let inputsT = Matrix.transpose(inputs)
  let weightIhDeltas = Matrix.dot(hiddenGradient, inputsT)

  this.weightsIh = this.weightsIh.add(weightIhDeltas)
  // Adjust the bias by its deltas (which is just the gradients)
  this.biasH = this.biasH.add(hiddenGradient)
}

export default NeuralNetwork
