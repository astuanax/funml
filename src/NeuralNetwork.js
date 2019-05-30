import Matrix from '@astuanax/funmatrix'
import sigmoid from './util/sigmoid'

/**
 * @class NeuralNetwork
 *
 */
class NeuralNetwork {
  constructor (...values) {
    [this.input_nodes, this.hidden_nodes, this.output_nodes] = values

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes)
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes)
    this.weights_ih.randomize()
    this.weights_ho.randomize()

    this.bias_h = new Matrix(this.hidden_nodes, 1)
    this.bias_o = new Matrix(this.output_nodes, 1)
    this.bias_h.randomize()
    this.bias_o.randomize()

    this.setActivationFunction()
    this.setLearningRate()
  }

  /**
* @function NeuralNetwork#setActivationFunction
   * @param func
   */
  setActivationFunction (func = sigmoid) {
    this.activation_function = func
  }

  /**
* @function NeuralNetwork#setLearningRate
   * @param learningRate
   */
  setLearningRate (learningRate = 0.1) {
    this.learning_rate = learningRate
  }

  /**
* @function NeuralNetwork#predict
   * @param inputArray
   * @returns {Array}
   */
  predict (inputArray) {
    // Generating the Hidden Outputs
    let inputs = Matrix.fromArray(inputArray)
    let hidden = Matrix.dot(this.weights_ih, inputs)
    hidden.add(this.bias_h)
    // activation function!
    hidden.map(this.activation_function.func)

    // Generating the output's output!
    let output = Matrix.dot(this.weights_ho, hidden)
    output.add(this.bias_o)
    output.map(this.activation_function.func)

    // Sending back to the caller!
    return output.toArray()
  }

  /**
* @function NeuralNetwork#train
   * @param inputArray
   * @param targetArray
   */
  train (inputArray, targetArray) { // raw data => expected output
    // Generating the Hidden Outputs
    let inputs = Matrix.fromArray(inputArray)
    let hidden = Matrix.dot(this.weights_ih, inputs)

    hidden.add(this.bias_h)
    // activation function!
    hidden.map(this.activation_function.func)

    // Generating the output's output!
    let outputs = Matrix.dot(this.weights_ho, hidden)
    outputs.add(this.bias_o)
    outputs.map(this.activation_function.func)

    // Convert array to matrix object
    let targets = Matrix.fromArray(targetArray)

    // Calculate the error
    // ERROR = TARGETS - OUTPUTS
    let outputErrors = Matrix.subtract(targets, outputs)

    // let gradient = outputs * (1 - outputs);
    // Calculate gradient
    let gradients = Matrix.map(outputs, this.activation_function.dfunc)
    gradients.multiply(outputErrors)
    gradients.multiply(this.learning_rate)

    // Calculate deltas
    let hiddenT = Matrix.transpose(hidden)
    let weightHoDeltas = Matrix.dot(gradients, hiddenT)

    // Adjust the weights by deltas
    this.weights_ho.add(weightHoDeltas)
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_o.add(gradients)

    // Calculate the hidden layer errors
    let whoT = Matrix.transpose(this.weights_ho)
    let hiddenErrors = Matrix.dot(whoT, outputErrors)

    // Calculate hidden gradient
    let hiddenGradient = Matrix.map(hidden, this.activation_function.dfunc)
    hiddenGradient.multiply(hiddenErrors)
    hiddenGradient.multiply(this.learning_rate)

    // Calcuate input->hidden deltas
    let inputsT = Matrix.transpose(inputs)
    let weightIhDeltas = Matrix.dot(hiddenGradient, inputsT)

    this.weights_ih.add(weightIhDeltas)
    // Adjust the bias by its deltas (which is just the gradients)
    this.bias_h.add(hiddenGradient)
  }
}

export default NeuralNetwork
