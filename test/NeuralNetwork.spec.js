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

for (let i = 0; i < 100000; i++) {
  let data = trainingData[getRandomInt(0, 3)]
  const input = data.inputs.map(x => [x])
  const output = data.outputs.map(x => [x])
  nn.train(input, output)
}

describe('create a NeuralNetwork', function () {
  it('it returns type NeuralNetwork', function () {
    var nn = new NeuralNetwork(2, 4, 1)
    chai.expect(nn.type).to.equal('NeuralNetwork')
  })

  it('it finds solution to XOR', function () {
    for (let i in trainingData) {
      chai.expect(trainingData[i].outputs[0]).to.equal(Math.round(nn.predict(trainingData[i].inputs.map(x => [x]))[0]))
    }
  })
})
