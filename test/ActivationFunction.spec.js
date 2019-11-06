import chai from 'chai'
import { ActivationFunction, sigmoid, tanh } from '../lib/@astuanax/funml'

describe('create an ActivationFunction', function () {
  it('it returns type ActivationFunction', function () {
    const af = new ActivationFunction(x => x, x=> x)
    chai.expect(af.type).to.equal('ActivationFunction')
    chai.expect(af instanceof ActivationFunction).to.be.true
  })

  it('sigmoid and tanh return type ActivationFunction', function () {
    chai.expect(sigmoid.type).to.equal('ActivationFunction')
    chai.expect(tanh.type).to.equal('ActivationFunction')
  })
})
