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

export default class DecisionTree {
  constructor (data, evalFunction = entropy) {
    this.data = Matrix.of(data)
    this.evalFunction = evalFunction
  }
}

DecisionTree.prototype.getColumn = function (index) {
  return this.data.map(x => x[index])
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
      return acc
    }
  })
  const right = data.fold((acc, x) => {
    if (!splittingFunction(x)) {
      acc.push(x)
      return acc
    }
  })

  return [left, right]
}

DecisionTree.prototype.train = function (data = this.data) {
  if (this.data.getRows() === 0) {
    return new Node()
  }
  const score = this.evalFunction.func(data) // Matrix

  let bestGain = 0.0
  let bestAttribute = []
  let bestSets = []

  const columnCount = this.data.getCols() - 1 // remove last cell >> dependant value

  for (let i = 0; i < columnCount; ++i) {
    const columnValues = this.getColumn(i).toArray()
    console.table(columnValues)
    columnValues.forEach((value, idx, arr) => {
      const matrixSplit = this.split(i, value)
      const p = matrixSplit[0].getRows() / this.data.getRows()
      const gain = score - (p * this.evalFunction(matrixSplit[0])) - ((1 - p) * this.evalFunction(matrixSplit[0]))
      if (gain > bestGain && matrixSplit.length > 0 && matrixSplit.length > 0) {
        bestGain = gain
        bestAttribute = [i, columnValues[idx]]
        bestSets = matrixSplit
      }
    })
  }

  if (bestGain > 0) {
    const left = this.train(bestSets[0])
    const right = this.train(bestSets[1])
    return new Node([], bestAttribute[0], bestAttribute[1], left, right)
  } else {
    return new Node(this.classes())
  }
}

DecisionTree.prototype.predict = function predict () {

}
