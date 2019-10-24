import Matrix from '@astuanax/funmatrix'
import entropy from './util/entropy'

class Node {
  constructor (col, value, left, right, results) {
    this.col = col || -1
    this.value = null
    this.left = left
    this.right = right
    this.results = results || []
  }
}

class DecisionTree {
  constructor (data, evalFunction = entropy) {
    this.data = Matrix.of(data)
    this.evalFunction = evalFunction
  }
}

DecisionTree.prototype.getColumn = function (data, index) {
  return data.map(x => x[index])
}

DecisionTree.prototype.split = function (data, m, n) {
  let splittingFunction
  //   splittingFunction = None
  if (isNaN(m) || isNaN(n)) {
    // strings
    splittingFunction = row => row[m] === n
  } else {
    // numbers
    splittingFunction = row => row[m] >= n
  }
  const left = data.fold((acc, x) => {
    if (splittingFunction(x)) {
      acc.push(x)
    }
    return acc
  })
  const right = data.fold((acc, x) => {
    if (!splittingFunction(x)) {
      acc.push(x)
    }
    return acc
  })
  return [left, right]
}

DecisionTree.prototype.train = function (data = this.data) {
  if (data.getRows() === 0) {
    return new Node()
  }
  const score = this.evalFunction.func(data) // Matrix

  let bestGain = 0.0
  let bestAttribute = []
  let bestSets = []

  const columnCount = this.data.getCols() - 1 // remove last cell >> dependant value

  for (let i = 0; i < columnCount; ++i) {
    const columnValues = this.getColumn(data, i).__value
    columnValues.forEach(value => {
      const matrixSplit = this.split(data, i, value)
      const p = matrixSplit[0].getRows() / data.getRows()
      console.log('p', p)
      const entropy0 = this.evalFunction.func(matrixSplit[0])
      const entropy1 = this.evalFunction.func(matrixSplit[1])
      const gain = score - (p * entropy0) - ((1 - p) * entropy1)
      console.log('gain', gain, entropy0, entropy1)
      if (gain > bestGain && matrixSplit[0].getRows() > 0 && matrixSplit[1].getRows() > 0) {
        bestGain = gain
        bestAttribute = [i, value]
        bestSets = matrixSplit
      }
    })
  }
  console.log('bestGain', bestGain)
  if (bestGain > 0) {
    // const left = new DecisionTree(bestSets[0].__value)
    const leftTrained = this.train(bestSets[0])
    // const right = new DecisionTree(bestSets[1].__value)
    const rightTrained = this.train(bestSets[0])

    console.log(leftTrained, rightTrained)
    const _node = new Node(bestAttribute[0], bestAttribute[1], leftTrained, rightTrained)
    console.log('_node', _node)
    return _node
  } else {
    return new Node()
  }
}

DecisionTree.prototype.predict = function predict () {

}

export default DecisionTree
