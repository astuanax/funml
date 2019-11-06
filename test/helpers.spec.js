import chai from 'chai'
import { countClasses, convert2frequencies } from '../lib/@astuanax/funml'

describe('it helps to', function () {
  it('count occurances of classes', function () {
    const res = countClasses(['a', 'b', 'a', 'c', 'b', 'b'])
    chai.expect(res).to.deep.equal({ 'a': 2, 'b': 3, 'c': 1 })
  })

  it('convert values of frequencies', function () {
    const res = convert2frequencies(5)([3, 2])
    chai.expect(res).to.deep.equal([0.6, 0.4])
  })
})
