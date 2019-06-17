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

    const f = e => (Math.random() * 2 - 1)
    this.weightsIh = Matrix.random(f, this.hiddenNodes, this.inputNodes)
    this.weightsHo = Matrix.random(f, this.outputNodes, this.hiddenNodes)

    this.biasH = Matrix.random(f, this.hiddenNodes, 1)
    this.biasO = Matrix.random(f, this.outputNodes, 1)

    this.setActivationFunction()
    this.setLearningRate()

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
  hidden.add(this.biasH)
  // activation function!
  hidden.map(this.activationFunction.func)

  // Generating the output's output!
  let output = Matrix.dot(this.weightsHo, hidden)
  output.add(this.biasO)
  output.map(this.activationFunction.func)

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
  // Generating the Hidden Outputs
  let inputs = Matrix.fromArray(inputArray)
  let hidden = Matrix.dot(this.weightsIh, inputs)

  hidden.add(this.biasH)
  // activation function!
  hidden.map(this.activationFunction.func)

  // Generating the output's output!
  let outputs = Matrix.dot(this.weightsHo, hidden)
  outputs.add(this.biasO)
  outputs.map(this.activationFunction.func)

  // Convert array to matrix object
  let targets = Matrix.fromArray(targetArray)

  // Calculate the error
  // ERROR = TARGETS - OUTPUTS
  let outputErrors = Matrix.of(targets).subtract(outputs)

  // let gradient = outputs * (1 - outputs);
  // Calculate gradient
  let gradients = Matrix.of([[outputs.map(this.activationFunction.dfunc)]])
  console.log(0, outputs, gradients, outputErrors)
  gradients = gradients
    .multiply(outputErrors)
  console.log(1, gradients, this.learningRate)
  gradients = gradients
    .multiply(this.learningRate)
  console.log(2, gradients)

  // Calculate deltas
  let hiddenT = Matrix.transpose(hidden)
  let weightHoDeltas = Matrix.dot(gradients, hiddenT)

  // Adjust the weights by deltas
  this.weightsHo.add(weightHoDeltas)
  // Adjust the bias by its deltas (which is just the gradients)
  this.biasO.add(gradients)

  // Calculate the hidden layer errors
  let whoT = Matrix.transpose(this.weightsHo)
  let hiddenErrors = Matrix.dot(whoT, outputErrors)

  // Calculate hidden gradient
  let hiddenGradient = Matrix.of(hidden)
    .map(this.activationFunction.dfunc)
    .multiply(hiddenErrors)
    .multiply(this.learningRate)

  // Calcuate input->hidden deltas
  let inputsT = Matrix.transpose(inputs)
  let weightIhDeltas = Matrix.dot(hiddenGradient, inputsT)

  this.weightsIh.add(weightIhDeltas)
  // Adjust the bias by its deltas (which is just the gradients)
  this.biasH.add(hiddenGradient)
}

export default NeuralNetwork
