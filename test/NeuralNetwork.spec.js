import chai from 'chai'
import { NeuralNetwork } from '../lib/@astuanax/funml'

let trainingData = [{
  inputs: [0, 0],
  outputs: [0]
},
{
  inputs: [0, 1],
  outputs: [1]
},
{
  inputs: [1, 0],
  outputs: [1]
},
{
  inputs: [1, 1],
  outputs: [0]
}
]

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var nn = new NeuralNetwork(2, 4, 1)

for (let i = 0; i < 10000; i++) {
  let data = trainingData[getRandomInt(0, 3)]
  const input = data.inputs.map(x => [x])
  const output = data.outputs.map(x => [x])
  console.log(data, input, output)
  nn.train(input, output)
}

console.table(nn.weights_ih.data)
console.table(nn.bias_h.data)
console.table(nn.weights_ho.data)
console.table(nn.bias_o.data)

for (let i in trainingData) {
  console.log(trainingData[i].inputs, nn.predict(trainingData[i].inputs))
}

describe('create a NeuralNetwork', function () {
  it('it returns type NeuralNetwork', function () {
    var nn = new NeuralNetwork(2, 4, 1)
    chai.expect(nn.type).to.equal('NeuralNetwork')
  })

  it('it finds solution to XOR', function () {
    var nn = new NeuralNetwork(2, 4, 1)
    for (let i = 0; i < 10000; i++) {
      let data = trainingData[getRandomInt(0, 3)]
      nn.train(data.inputs.map(x => [x]), data.outputs.map(x => [x]))
    }

    for (let i in trainingData) {
      console.log(trainingData[i].inputs, nn.predict(trainingData[i].inputs))
    }
  })
})
