# funml
Machine learning with functional undertones.

[![Build Status](https://travis-ci.org/astuanax/funml.svg?branch=master)](https://travis-ci.org/astuanax/funml) [![Maintainability](https://api.codeclimate.com/v1/badges/8f95076a06e56ebada94/maintainability)](https://codeclimate.com/github/astuanax/funml/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8f95076a06e56ebada94/test_coverage)](https://codeclimate.com/github/astuanax/funml/test_coverage)

## Perceptron 

A Perceptron class to learn and solve simple linear problems.

### Example: sonar.csv

The sonar.csv file is used in this example. The example is better known as Sonar, Mines vs. Rocks and was used by Gorman and Sejnowski in their study of the classification of sonar signals using a neural network.
In this case we use to show the usage of the perceptron.

First we load the data and split it up between a training and test set.
````javascript
var dataset = [...] // load sonar.csv
var train = dataset.filter((x, idx) => idx % 2 === 0)
var test = dataset.filter((x, idx) => idx % 2 !== 0)
````

The learning rate and epoch were set at 0.1 and 1000. 
The epoch defines the iterations, and the learning rate sets the speed at which the training algorithm will adapt. 

````javascript
var epochs = 1000
var learningRate = 0.1
````

Then the perceptron is initialised with an empty array.  
The Perceptron accepts the weights from a previous training session so you can use it on the front end as a way to make decisions. 
````javascript
var p = Perceptron.of([])
p.train(train, learningRate, epochs)
````

The last step is to verify the success rate, which currently is a little over 70%. 
This can be improved using a multi layered neural network of course, but the Perceptron is just 1 neuron. 
````javascript
var successRate = [test.map(function (x, idx) {
      var row = x.slice(0, -1)
      var pred = p.predict(row)
      return [idx + ': ', pred === x[x.length - 1], pred, x[x.length - 1]]
    })].map(function (x, idx, arr) {
      var success = arr.filter(y => y[1])
      var avg = success.length / x.length
      return (avg * 100)
    }).reduce((result, x) => (result += x), 0)
````

  

## NeuralNetwork

A basic multilayered neural network.

## DecisionTree

A simple decision tree using entropy and gini impurity functions.
 
