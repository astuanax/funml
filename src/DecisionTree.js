import Matrix from '@astuanax/funmatrix'
import entropy from './util/entropy'

class Node {
  constructor (results, col, value, left, right) {
    this.col = col || -1
    this.value = null
    this.left = left
    this.right = right
    this.results = results
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
    columnValues.forEach((value, idx) => {
      const matrixSplit = this.split(data, i, value)
      const p = matrixSplit[0].getRows() / data.getRows()
      const entropy0 = this.evalFunction.func(matrixSplit[0])
      const entropy1 = this.evalFunction.func(matrixSplit[1])
      const gain = score - (p * entropy0) - ((1 - p) * entropy1)
      if (gain > bestGain && matrixSplit[0].getRows() > 0 && matrixSplit[1].getRows() > 0) {
        bestGain = gain
        bestAttribute = [i, value]
        bestSets = matrixSplit
      }
    })
  }

  if (bestGain > 0) {
    const leftTrained = this.train(bestSets[0])
    const rightTrained = this.train(bestSets[1])
    const _node = new Node(undefined, bestAttribute[0], bestAttribute[1], leftTrained, rightTrained)
    return _node
  } else {
    return new Node(data.__value.map(row => row[row.length - 1]).reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
      return acc
    }, {}))
  }
}

DecisionTree.prototype.predict = function predict (observations, node) {
  if (node.results) {
    console.log('node', node.result)
    return node.results
  } else {
    console.log('Branch', node)
    const v = observations[node.col]
    let branch
    if (isNaN(v)) {
      // string
      if (v === node.value) {
        branch = node.left
      } else {
        branch = node.right
      }
    } else {
      // number
      if (v >= node.value) {
        branch = node.left
      } else {
        branch = node.right
      }
    }
    console.table(branch)
    return this.predict(observations, branch)
  }
}

export default DecisionTree
