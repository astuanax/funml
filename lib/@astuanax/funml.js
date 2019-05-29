(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@astuanax/funml", [], factory);
	else if(typeof exports === 'object')
		exports["@astuanax/funml"] = factory();
	else
		root["@astuanax/funml"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@astuanax/funmatrix/src/matrix.js":
/*!********************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/matrix.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js");
/* harmony import */ var fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fun.js/src/fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var fun_js_src_equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fun.js/src/equals */ "./node_modules/fun.js/src/equals.js");
/* harmony import */ var _util_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/concat */ "./node_modules/@astuanax/funmatrix/src/util/concat.js");
/* harmony import */ var _util_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/empty */ "./node_modules/@astuanax/funmatrix/src/util/empty.js");
/* harmony import */ var _util_dot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/dot */ "./node_modules/@astuanax/funmatrix/src/util/dot.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/identity */ "./node_modules/@astuanax/funmatrix/src/util/identity.js");
/* harmony import */ var _util_transpose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/transpose */ "./node_modules/@astuanax/funmatrix/src/util/transpose.js");
/* harmony import */ var _util_generate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/generate */ "./node_modules/@astuanax/funmatrix/src/util/generate.js");











/**
 * @class Matrix
 * @classdesc Matrix applicative providing standard matrix operations
 * @summary The Matrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see of
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 *
 */
let Matrix = function (val) {
  this.__value = val
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {Array|function} An array of arrays
 * @returns {Matrix}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 *
 */
Matrix.of = function (val) {
  if (val instanceof Matrix) return val
  if (this instanceof Matrix) {
    this.__value = val
    return this
  }
  return new Matrix(val)
}

/**
 * @memberOf Matrix
 * @property {String} type
 * @type {String}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.type === 'Matrix'
 */
Matrix.prototype.type = 'Matrix'

/**
 * @memberOf Matrix
 * @property {Number} precision
 * @type {Number}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.precision === 4
 */
Matrix.prototype.precision = 4

/**
 * @memberOf Matrix
 * @function Matrix#setPrecision
 * @param precision {Number} Set the number of decimals for rounding
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.setPrecision(10)
 * m.precision === 10
 */
Matrix.prototype.setPrecision = function (precision) {
  this.precision = precision
}

/**
 * @memberOf Matrix
 * @member isSymmetric
 * @returns {Boolean}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * true === A.isSymmetric()
 *
 */
Matrix.prototype.isSymmetric = function () {
  const a = this.__value
  const b = Matrix.transpose(this).__value
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(a, b)
}

/**
 * @memberOf Matrix

 * @function Matrix#isSquare
 * @desc Boolean indicating whether this contains a square Matrix
 * @returns {Boolean}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * true === A.isSquare()
 *
 */
Matrix.prototype.isSquare = function () {
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(this.getCols(), this.getRows())
}

/**
 * @memberOf Matrix

 * @function Matrix#isOrthogonal
 * @param M {Matrix|Array}
 * @returns {Boolean}
 * @example
 *
 * const result = [[-0.3092, -0.9510], [-0.9510, 0.3092]]
 * const A = Matrix.fromArray(result)
 * true  === A.isOrthogonal()
 */
Matrix.prototype.isOrthogonal = function () {
  const AxAt = this.dot(this.transpose())
  const I = this.identity()
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(AxAt, I)
}

/**
 * @memberOf Matrix

 * @function Matrix#getCols
 * @returns {Number}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getCols()  === 2
 *
 */
Matrix.prototype.getCols = function () {
  return this.__value[0].length
}

/**
 * @memberOf Matrix

 * @function Matrix#equals
 * @param M {Matrix|Array}
 * @returns {Boolean}
 * @example
 *
 * var a = [[1, 1], [1, 1]]
 * var A = Matrix.of(a)
 * var B = Matrix.of(a)
 * true  === A.equals(B)
 */
Matrix.prototype.equals = function (M) {
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(this.__value, M.__value || M)
}

/**
 * @memberOf Matrix

 * @function Matrix#getRows
 * @returns {Number}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getRows()  // 2
 */
Matrix.prototype.getRows = function () {
  return this.__value.length
}

/**
 * @memberOf Matrix

 * @function Matrix#getShape
 * @returns {Array}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * A.getShape()  // [2, 2]
 */
Matrix.prototype.getShape = function () {
  return [this.getRows(), this.getCols()]
}

/**
 * @memberOf Matrix

 * @function Matrix#map
 * @description Maps over the rows of the matrix using a map function
 * @param f {function} An iterator function
 * @returns {Matrix}
 * @example
 *
 * const m = Matrix.of([[1, 1], [1, 1]])
 * m.map(x => x.map(y => y+ 1))
 * // [[2, 2], [2, 2]]
 *
 */
Matrix.prototype.map = function (f) {
  return Matrix.of(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(f)(this.__value))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.map
 * @description Static function that maps over the rows of the matrix using a map function
 * @param f {function} An iterator function
 * @param M {Matrix|Array} Matrix or array to map
 * @returns {Matrix}
 * @example
 *
 * const m = Matrix.map(x= > x.map(y => y+ 1), [[1, 1], [1, 1]])
 * // [[2, 2], [2, 2]]
 *
 */
Matrix.map = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (f, M) {
  return Matrix.of(M).map(f)
})

/**
 * @memberOf Matrix

 * @function Matrix#fold
 * @description Reduce the matrix rows using a reduce function
 * @param f {function} A reduce/fold function
 * @returns {Matrix}
 * @example
 *
 * // Flatten Matrix
 * Matrix.of([[1, 1], [1, 1]]).fold((prev, next) => prev.concat(next))
 * // [1, 1, 1, 1]
 */
Matrix.prototype.fold = function (f) {
  return Matrix.of(Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(f, [])(this.__value))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.fold
 * @description Static function to reduce the matrix rows using a reduce function
 * @param f {function} A reduce/fold function
 * @param M {Matrix} The Matrix to reduce
 * @returns {Matrix}
 * @example

 * // Sum of all matrix values
 * const reducer = (prev, next) => Number(prev) + next.reduce((acc, x) => acc + x, 0)
 * const A = Matrix.of([[1, 1], [1, 1]]
 * Matrix.fold(reducer, A)
 * // 4
 */
Matrix.fold = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (f, M) {
  return Matrix.of(M).fold(f)
})

/**
 * @memberOf Matrix

 * @function Matrix#ap
 * @description Applies a Matrix to a function
 * @param M {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const f = x => x.reduce((prev, next) => prev + next)
 * const A = Matrix.of([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * Matrix.of(f).ap(M)
 * // [[6], [15], [24]
 */
Matrix.prototype.ap = function (M) {
  return Matrix.of(M).map(this.__value)
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.ap
 * @description Applies a Matrix to a function
 * @param f {function}
 * @param M {Matrix|Array}
 * @returns {Matrix}
 * @example
 *
 * const f = x => x.reduce((prev, next) => prev + next)
 * Matrix.ap(f, [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 * // [[6], [15], [24]
 */
Matrix.ap = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (f, M) {
  return Matrix.of(f).ap(M)
})

/**
 * @memberOf Matrix

 * @function Matrix#concat
 * @description Concatenates 2 Matrices using a function as operator
 * @param M {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const a = [[0, 1, 1], [2, 3, 4]]
 * const b = [[2, 2, 2], [3, 3, 3]]
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 * const M = A.concat(B)
 * // [[0, 1, 1, 2, 2, 2], [2, 3, 4, 3, 3, 3]]
 *
 */
Matrix.prototype.concat = function (M, f = _util_concat__WEBPACK_IMPORTED_MODULE_4__["default"]) {
  return Matrix.of(this).map(f(M))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.concat
 * @description Concatenates 2 Matrices using a function as operator
 * @param A {Matrix}
 * @param B {Matrix}
 * @returns {Matrix}
 * @example
 *
 * const a = [[0, 1, 1], [2, 3, 4]]
 * const b = [[2, 2, 2], [3, 3, 3]]
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 * const M = Matrix.concat(A, B)
 * // [[0, 1, 1, 2, 2, 2], [2, 3, 4, 3, 3, 3]]
 *
 */
Matrix.concat = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (A, B, f = _util_concat__WEBPACK_IMPORTED_MODULE_4__["default"]) {
  return Matrix.of(A).map(f(B))
})

/**
 * @memberOf Matrix

 * @function Matrix#empty
 * @description Return an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */
Matrix.prototype.empty = function () {
  return Matrix.of(this).map(_util_empty__WEBPACK_IMPORTED_MODULE_5__["default"])
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.empty
 * @description Return an empty Matrix from an existing Matrix
 * @param rows {Number}
 * @param cols {Number}
 * @returns {Matrix}
 */
Matrix.empty = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (rows = 0, cols = 0) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(rows, cols) // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(m).map(_util_empty__WEBPACK_IMPORTED_MODULE_5__["default"])
})

// #### #### #### //

/**
 * @memberOf Matrix

 * @function Matrix#identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const a = [[1, 2, 3], [4, 5, 6]]
 * const A = Matrix.of(a)
 * const Aidentity = A.identity()
 * // [[1, 0, 0], [0, 1, 0]]
 *
 */
Matrix.prototype.identity = function () {
  return Matrix.of(_util_identity__WEBPACK_IMPORTED_MODULE_7__["default"]).ap(this)
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.identity
 * @desc Returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.identity(3, 2)
 * // [[1, 0, 0], [0, 1, 0]]
 *
 */
Matrix.identity = function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(rows, cols) // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(_util_identity__WEBPACK_IMPORTED_MODULE_7__["default"]).ap(m)
}

/**
 * @memberOf Matrix

 * @function Matrix#combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */
Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), _util_concat__WEBPACK_IMPORTED_MODULE_4__["default"])
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.combine
 * @see Matrix.concat
 * @param M
 * @returns {Matrix}
 */
Matrix.combine = function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), _util_concat__WEBPACK_IMPORTED_MODULE_4__["default"])
}

/**
 * @memberOf Matrix

 * @function Matrix#dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @param f
 * @returns {Matrix}
 * @example
 *
 * // Create matrix
 * const m = Matrix.of([[1, 2], [3, 4]])
 *
 * // Generate identity matrix
 * const I  = m.identity() // [[1, 0], [0, 1]]
 *
 * if(m.dot(I).equals(m)) {
 *    console.log('Dot product with identity matrix returns the same matrix')
 * }
 *
 */
Matrix.prototype.dot = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), Object(_util_dot__WEBPACK_IMPORTED_MODULE_6__["default"])(this.precision))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.dot
 * @description Returns the dot product between 2 matrices
 * @param M
 * @returns {Matrix}
 * @example
 * const a = [[1, 2, 3], [4, 5, 6]]
 * const b = [[7, 8], [9, 10], [11, 12]]
 *
 * const A = Matrix.of(a)
 * const B = Matrix.of(b)
 *
 * Matrix.dot(A, B) // [[58, 64], [139, 154]]
 *
 */
Matrix.dot = function (A, B) {
  return Matrix.of(A).dot(Matrix.of(B))
}

/**
 * @memberOf Matrix

 * @function Matrix#fill
 * @desc Fill up an empty matrix with the provided map function
 * @param f
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).fill(x => 42)
 * // [[42,42,42], [42,42,42], [42,42,42]]
 *
 */
Matrix.prototype.fill = function (f) {
  return Matrix.of(this).map(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(x => f(x)))
}

/**
 * @memberOf Matrix

 * @function Matrix#zeros
 * @desc Fill up an empty matrix with zeros
 * @returns {Matrix}
 *
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).zeros()
 * // [[0,0,0], [0,0,0], [0,0,0]]
 *
 */
Matrix.prototype.zeros = function () {
  return Matrix.of(this).fill(x => 0)
}

/**
 * @memberOf Matrix
 * @function Matrix.zeros
 * @desc Fill up an empty matrix with zeros
 * @param rows {Number} Defines the rows of the matrix
 * @param cols {Number} Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.zeros(3, 3)
 * // [[0,0,0], [0,0,0], [0,0,0]]
 *
 */
Matrix.zeros = function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(rows, cols)
  return Matrix.of(m).fill(x => 0)
}

/**
 * @memberOf Matrix

 * @function Matrix#ones
 * @desc Fill up an empty matrix with ones
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1,2,3], [3,2,1], [4,5,6]]).ones()
 * // [[1,1,1], [1,1,1], [1,1,1]]
 *
 */
Matrix.prototype.ones = function () {
  return Matrix.of(this).fill(x => 1)
}

/**
 * @memberOf Matrix
 * @function Matrix.ones
 * @desc Fill up an empty matrix with ones
 * @param rows {Number} Defines the rows of the matrix
 * @param cols {Number} Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.ones(1, 1)
 * // [[1,1,1], [1,1,1], [1,1,1]]
 *
 */
Matrix.ones = function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(rows, cols)
  return Matrix.of(m).fill(x => 1)
}

/**
 * @memberOf Matrix

 * @function Matrix#random
 * @desc Fill up an empty matrix with random values
 * @param {function} [f = e => Math.random() * 2 - 1]
 * @returns {Matrix}
 */
Matrix.prototype.random = function (f = e => Math.random() * 2 - 1) {
  return Matrix.of(this).fill(f)
}

/**
 * @memberOf Matrix
 * @function Matrix.random
 * @desc Fill up an empty matrix with random numbers
 * @param f {function} Function which returns random values. Default random values are between -1 and 1
 * @param rows {Number} Defines the rows of the matrix
 * @param cols {Number} Defines the columns of the matrix
 * @returns {Matrix}
 */
Matrix.random = function (f = e => (Math.random() * 2 - 1), rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(rows, cols)
  return Matrix.of(m).fill(f)
}

/**
 * @memberOf Matrix

 * @function Matrix#toArray
 * @desc Returns the array from the matrix
 * @returns {Array}
 */
Matrix.prototype.toArray = function () {
  return this.__value.map(row => row.map(col => col))
}

/**
 * @memberOf Matrix

 * @function Matrix#clone
 * @desc Returns a clone of the matrix
 * @returns {Matrix}
 */
Matrix.prototype.clone = function () {
  return Matrix.fromArray(this.__value)
}

/**
 * @memberOf Matrix

 * @function Matrix#fromArray
 * @desc Returns a Matrix from an array
 * @returns {Array}
 */
Matrix.fromArray = function (arr) {
  return Matrix.of(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(row => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(col => col)(row))(arr))
}

/**
 * @memberOf Matrix

 * @function Matrix#transpose
 * @desc Returns a transposed Matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([-1, 2], [3, 4], [-8, 2])
 * const b = A.transpose().toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */
Matrix.prototype.transpose = function () {
  return Matrix.of(Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_util_transpose__WEBPACK_IMPORTED_MODULE_8__["default"], [], this.__value))
}

/**
 * @memberOf Matrix
 * @function Matrix.transpose
 * @desc Returns a transposed Matrix
 * @param M {Matrix|Array} A Matrix or a matrix array
 * @returns {Matrix}
 * @example
 *
 * const a = [-1, 2], [3, 4], [-8, 2]
 * const b = Matrix.transpose(a).toArray()
 * // returns [[-1, 3,-8], [2, 4, 2]]
 */
Matrix.transpose = function (M) {
  return Matrix.of(M).transpose()
}

/**
 * @memberOf Matrix
 * @function Matrix#add
 * @param M {Matrix|number} Add a Matrix or a number
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.add(1) // [[6, 5]]
 * const B = Matrix.of([[5, 5]])
 * B.add(B) // [[10, 10]]
 *
 */
Matrix.prototype.add = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot add')
    }
    return this.map((row, idx) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])((val, jdx) => val + M.__value[idx][jdx])(row))
  } else {
    return this.map(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(x => x + M))
  }
}

/**
 * @memberOf Matrix
 * @function Matrix#subtract
 * @param M {Matrix|number} Subtract a Matrix or a number
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.subtract(1) // [[4, 2]]
 * const B = Matrix.of([[5, 5]])
 * B.subtract(B) // [[0, 0]]
 *
 */
Matrix.prototype.subtract = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot subtract')
    }
    return this.map((row, idx) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])((val, jdx) => val - M.__value[idx][jdx])(row))
  } else {
    return this.map(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(x => x - M))
  }
}

/**
 * @memberOf Matrix
 * @function Matrix#multiply
 * @desc Mutliply a scalar or a mtraix with a matrix. Throws an error if the multiplication is not possible.
 * @param M {Matrix|number}
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.multiply(2) // [[10, 8]]
 * const B = Matrix.of([[5, 5]])
 * B.multiply(B) // [[25, 25]]
 *
 */
Matrix.prototype.multiply = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      console.log('Use static method \'dot\' to do matrix multiplication')
      throw new Error('Matrices do not match, cannot create hadamard product')
    }
    return this.map((row, idx) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])((col, jdx) => col * M.__value[idx][jdx])(row))
  } else {
    return this.map(Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_1__["default"])(x => x * M))
  }
}

/**
 * @memberOf Matrix
 * @function Matrix#additiveinverse
 * @desc Function that returns the matrix obtained by changing the sign of every matrix element. The additive inverse of matrix A is written –A.
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5,-5], [-4, 4]])
 * const minusA = A.additiveinverse()
 * // [[-5, 5], [4, -4]]
 */
Matrix.prototype.additiveinverse = function () {
  return Matrix.of(this).multiply(-1)
}

/**
 * @memberOf Matrix
 * @function Matrix#hadamard

 * @see multiply
 * @param M
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.hadamard(2) // [[10, 8]]
 * const B = Matrix.of([[5, 5]])
 * B.hadamard(B) // [[25, 25]]

 */
Matrix.prototype.hadamard = function (M) {
  return Matrix.of(this).multiply(M)
}

/**
 * @memberOf Matrix

 * @function Matrix#lu
 * @desc Calculates LU decomposition of the current Matrix
 * @returns {Matrix[]}
 * @example
 *
 * const result = [[3, -7, -2, 2], [-3, 5, 1, 0], [6, -4, 0, -5], [-9, 5, -5, 12]]
 * const A = Matrix.fromArray(result)
 * const lu = A.lu()
 * // L.__value = [ [ 1, 0, 0, 0 ], [ -1, 1, 0, 0 ], [ 2, -5, 1, 0 ], [ -3, 8, 3, 1 ] ]
 * // U.__value =  [ [ 3, -7, -2, 2 ], [ 0, -2, -1, 2 ], [ 0, 0, -1, 1 ], [ 0, 0, 0, -1 ] ]
 * Matrix.dot(lu[0], lu[1]) // returns clone of A
 *
 */
Matrix.prototype.lu = function () {
  const n = this.getRows()
  const tol = 1e-6
  const A = this.clone()
  const L = this.zeros()
  const U = this.zeros()

  for (let k = 0; k < n; ++k) {
    if (Math.abs(A.__value[k][k]) < tol) throw Error('Cannot proceed without a row exchange')
    L.__value[k][k] = 1
    for (let i = k + 1; i < n; ++i) {
      L.__value[i][k] = A.__value[i][k] / A.__value[k][k]
      for (let j = k + 1; j < n; ++j) {
        A.__value[i][j] = A.__value[i][j] - L.__value[i][k] * A.__value[k][j]
      }
    }
    for (let l = k; l < n; ++l) {
      U.__value[k][l] = A.__value[k][l]
    }
  }
  return [L, U]
}

/**
 * @memberOf Matrix

 * @function Matrix#rref
 * @returns {Matrix|Array}
 * @example
 *
 * var A = Matrix.of([[-1, 1], [-1, 0], [0, -1], [-1, -2]])
 * A.rref() //  [ [ 1, 0 ], [ -0, 1 ], [ 0, 0 ], [ 0, 0 ] ]
 */
Matrix.prototype.rref = function () {
  let lead = 0
  const resultMatrix = this.clone()

  for (let r = 0; r < this.getRows(); ++r) {
    if (this.getCols() <= lead) {
      return resultMatrix
    }
    let i = r
    while (resultMatrix.__value[i][lead] === 0) {
      ++i
      if (this.getRows() === i) {
        i = r
        ++lead
        if (this.getCols() === lead) {
          return resultMatrix
        }
      }
    }

    let tmp = resultMatrix.__value[i]
    resultMatrix.__value[i] = resultMatrix.__value[r]
    resultMatrix.__value[r] = tmp

    let val = resultMatrix.__value[r][lead]
    for (let j = 0; j < this.getCols(); ++j) {
      resultMatrix.__value[r][j] /= val
    }

    for (let i = 0; i < this.getRows(); ++i) {
      if (i === r) continue
      val = resultMatrix.__value[i][lead]
      for (let j = 0; j < this.getCols(); ++j) {
        resultMatrix.__value[i][j] -= val * resultMatrix.__value[r][j]
      }
    }
    lead++
  }
  return resultMatrix
}

/**
 * @memberOf Matrix

 * @function Matrix#solve
 * @param b
 * @returns {Array}
 * @example
 *
 * // Solve xA = b
 * // 5x + y  = 7
 * // 3x - 4y = 18
 * // Solution for x and y:
 * // x = 2
 * // y = -3
 *
 * const A = Matrix.of([[5, 1], [3, -4]])
 * const solveA = A.solve([7, 18]) // [2, -3]
 *
 */
Matrix.prototype.solve = function (b) {
  const A = this.clone()
  const LU = A.lu()
  const L = LU[0]
  const U = LU[1]
  const n = this.getRows()
  let s = 0
  const c = []
  const x = []

  for (let k = 0; k < n; ++k) {
    for (let j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j]
    }
    c[k] = b[k] - s
    s = 0
  }
  for (let a = n - 1; a > -1; --a) {
    let t = 0
    for (let b = a + 1; b < n; ++b) {
      t = t + U.__value[a][b] * x[b]
    }
    x[a] = (c[a] - t) / U.__value[a][a]
  }
  return x
}

/**
 * @memberOf Matrix
 * @function Matrix#inverse

 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[1, 1], [2, 4]]).inverse()
 * // [ [ 2, -0.5 ], [ -1, 0.5 ] ]
 *
 */
Matrix.prototype.inverse = function () {
  const A = this.clone()
  const I = A.identity()
  const Inv = A.concat(I).rref()

  const result = Inv.__value.reduce((result, x, idx) => {
    const half = x.length / 2
    result.push(x.slice(half, x.length))
    return result
  }, [])
  return Matrix.of(result)
}

/**
 * @memberOf Matrix
 * @function Matrix#rank

 * @returns {Number}
 */
Matrix.prototype.rank = function () {
  const rref = this.rref()
  let result = 0
  for (let i = 0; i < rref.getCols(); ++i) {
    result += rref.__value[i][i]
  }
  return result
}

/**
 * @memberOf Matrix
 * @function Matrix#dimension

 * @see rank
 * @returns {Number}
 */
Matrix.prototype.dimension = function () {
  return this.rank()
}

/**
 * @memberOf Matrix
 * @function Matrix#diag

 * @desc Returns an array containing the values on the diagonal
 * @returns {Array}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).diag()
 * // [1, 1, 1]
 *
 * const diag0 = Matrix.zeros(5, 5).diag()
 * // [0, 0, 0, 0, 0]
 *
 */
Matrix.prototype.diag = function () {
  return Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])((acc, x, idx) => {
    return acc.concat(x[idx])
  })([])(this.__value)
}

/**
 * @memberOf Matrix
 * @function Matrix.diag
 * @desc Returns an array containing the values on the diagonal
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Array}
 * @example
 *
 * const diag1 = Matrix.diag([[2, 1], [1, 5]])
 * // [2, 5]
 *
 */
Matrix.diag = function (M) {
  return Matrix.of(M).diag()
}

/**
 * @memberOf Matrix
 * @function Matrix#diagproduct
 * @desc Returns the product of the values on the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).diagproduct()
 * // 1
 *
 * const diag0 = Matrix.zeros(5, 5).diagproduct()
 * // 0
 *
 */
Matrix.prototype.diagproduct = function () {
  return Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])((acc, x, idx) => {
    acc *= x[idx]
    return acc
  })(1)(this.__value)
}

/**
 * @memberOf Matrix
 * @function Matrix.diagproduct
 * @desc Returns the product of the values on the diagonal
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.diagproduct([[2, 1], [1, 5]])
 * // 10
 *
 */
Matrix.diagproduct = function (M) {
  return Matrix.of(M).diagproduct()
}

/**
 * @memberOf Matrix
 * @function Matrix#sum
 * @desc Returns the sum of the values in the Matrix
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.ones(3, 3).sum()
 * // 9
 *
 * const diag0 = Matrix.zeros(5, 5).sum()
 * // 0
 *
 */
Matrix.prototype.sum = function () {
  return Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])((acc, x) => {
    acc += Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])((prev, next) => prev + next)(0)(x)
    return acc
  })(0)(this.__value)
}

/**
 * @memberOf Matrix
 * @function Matrix.sum
 * @desc Returns the sum of the values in the Matrix
 * @param M {Matrix|Array} Matrix from which to return the diagonal
 * @returns {Number}
 * @example
 *
 * const diag1 = Matrix.sum([[2, 1], [1, 5]])
 * // 9
 *
 */
Matrix.sum = function (M) {
  return Matrix.of(M).sum()
}

/**
 * @memberOf Matrix
 * @function Matrix#kronecker
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param M {Matrix} The right side Matrix of the product (this ⊗ M)
 * @returns {Matrix}
 */
Matrix.prototype.kronecker = function (M) {
  const m = this.getRows()
  const n = this.getCols()
  const p = M.getRows()
  const q = M.getCols()

  const left = this.__value
  const right = M.__value

  const frame = Object(_util_generate__WEBPACK_IMPORTED_MODULE_9__["default"])(m * p, n * q)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < p; k++) {
        for (let l = 0; l < q; l++) {
          frame[p * i + k][q * j + l] = left[i][j] * right[k][l]
        }
      }
    }
  }

  return Matrix.of(frame)
}

/**
 * @memberOf Matrix
 * @function Matrix.kronecker
 * @desc The Kronecker product is an operation on two matrices of arbitrary size resulting in a block matrix.
 * @param A {Matrix} The left side Matrix of the product (A ⊗ B)
 * @param B {Matrix} The right side Matrix of the product (A ⊗ B)
 * @returns {Matrix}
 */
Matrix.kronecker = function (A, B) {
  return Matrix.of(A).kronecker(B)
}

/* harmony default export */ __webpack_exports__["default"] = (Matrix);


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/concat.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var fun_js_src_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fun.js/src/concat */ "./node_modules/fun.js/src/concat.js");



/**
 * @function concat
 * @param M {Matrix}
 * @param m {Array}
 * @param idx {number}
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (M, m, idx) {
  return Object(fun_js_src_concat__WEBPACK_IMPORTED_MODULE_1__["default"])(m, M.__value[idx])
}));


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/dot.js":
/*!**********************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/dot.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var fun_js_src_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fun.js/src/fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var fun_js_src_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js");
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./round */ "./node_modules/@astuanax/funmatrix/src/util/round.js");





/**
 * @function dot
 * @param B {Matrix}
 * @param a {Array}
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((decimals, B, a) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_2__["default"])((item, i) => {
  return Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_1__["default"])((acc, x, j) => {
    acc += Object(_round__WEBPACK_IMPORTED_MODULE_3__["default"])(x * B.__value[j][i], decimals)
    return acc
  }, 0)(a)
})(B.__value[0])));


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/empty.js":
/*!************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/empty.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(m => []));


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/generate.js":
/*!***************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/generate.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function generate
 * @desc Generator function for a matrix array, values are set to undefined
 * @param rows {number}
 * @param cols {number}
 * @returns {any[][]}
 */
/* harmony default export */ __webpack_exports__["default"] = ((rows, cols) => Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols))));


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/identity.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js");


/**
 * @function identity
 * @desc Creates an identiy matrix from an empty array
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
/* harmony default export */ __webpack_exports__["default"] = ((m, idx) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_0__["default"])((rows, jdx) => (idx === jdx) * 1)(m));


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/round.js":
/*!************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/round.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return round; });
/**
 * @function round
 * @param value {number}
 * @param decimals {number}
 * @returns {Number}
 */
function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/transpose.js":
/*!****************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/transpose.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fun_js_src_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fun.js/src/map */ "./node_modules/fun.js/src/map.js");
/* harmony import */ var fun_js_src_curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fun.js/src/curry */ "./node_modules/fun.js/src/curry.js");



/**
 * @function transpose
 * @desc Transposes a array of arrays using the Matrix.map function
 * @param m {Array}
 * @param idx {number}
 * @return {Matrix}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_1__["default"])((prev, next) => Object(fun_js_src_map__WEBPACK_IMPORTED_MODULE_0__["default"])((item, i) => (prev[i] || []).concat(next[i]))(next)));


/***/ }),

/***/ "./node_modules/fun.js/src/_private/curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/fun.js/src/_private/curry1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry1; });
/**
 * Returns a curried function with arity 1
 * @function curry1
 * @private
 * @since v1.0.2
 **/

function curry1 (fn) {
  return function curried (a) {
    return arguments.length === 0
      ? this
      : fn(a)
  }
}


/***/ }),

/***/ "./node_modules/fun.js/src/and.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/and.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Checks if both predicates are true
 *
 * @function and
 * @description Checks if both predicates are true
 * @since v1.0.2
 * @sig (x, y) -> boolean
 * @param {*} x - A predicate
 * @param {*} y - A predicate
 * @return {boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function and (x, y) {
  return x && y
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/concat.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/concat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @private
 * @function arrayConcat
 * @param a1
 * @param a2
 * @returns {T[]}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat (a, b) {
  return Array.prototype.concat(a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/equals.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/equals.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equals */ "./node_modules/fun.js/src/equals.js");
/**
 * @private
 * @function equalsArray
 * @description Autocurried function for deep comparison of arrays
 * @param {a} x - Object to compare of type a
 * @param {a} y - Object x to compare with object x
 * @return {boolean}
 */




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equalsArray (x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x[i], y[i]))) return false
  }
  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/fold.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/array/fold.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @private
 * @function fold
 * @description Returns a single item by mapping over the provided array and calling an iterator function
 * @param {cbFunction} cb - Callback function to modify the item
 * @param {*} init - Initial value
 * @param {Array} a - Array with items to modify by the cb function
 * @return {Array}
 * @alias reduce
 * @since 1.0.2
 * @example
 *
 * const result = fold(add, 0, [1,1,1])
 * // result = 3
 */

/**
 * @callback cbFunction
 * @param {*} r - Accumulator which accumulates the callback's return values
 * @param {*} item - the current element being processed
 * @param {number} index - the indey of the item being processed
 * @param {Array} a - The initial array
 * @return {*}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  let i = -1
  const l = a.length
  let r = init
  while (++i < l) {
    r = cb(r, a[i], i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/array/is.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/array/is.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Checks if the provided object is an array, autocurried function
 *
 * @private
 * @function isArray
 * @description Checks if the provided object is an array, autocurried function
 * @param {*} Object to verifiy
 * @return {boolean}
 * @since 1.0.2
 * @example
 *
 * const result = isArray([1,1,1])
 * // result = true
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Array'));


/***/ }),

/***/ "./node_modules/fun.js/src/array/map.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/array/map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function map
 * @description Maps over an array and applies a function
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 * @since v1.0.2
 * @example
 *
 *  const result = map(identity, [0,2,3])
 *  // result = [0,2,3]
 *  const add2 = add(2)
 *  const result = map(add2, [0,2,3])
 *  // result = [2,4,5]
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  let i = -1
  const l = a.length
  const r = new Array(l)
  while (++i < l) {
    r[i] = cb(a[i], i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/is.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/is.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Curried function that verifies of the provided argument is a boolean
 *
 * @private
 * @function is
 * @description Curried function that verifies of the provided argument is a boolean
 * @since v1.0.2
 * @param {*} Item to verify
 * @return {boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Boolean'));


/***/ }),

/***/ "./node_modules/fun.js/src/concat.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/concat.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat */ "./node_modules/fun.js/src/array/concat.js");
/* harmony import */ var _string_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string/concat */ "./node_modules/fun.js/src/string/concat.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Concatenates 2 items together
 *
 * @function concat
 * @description Concatenates 2 items together
 * @since v1.0.4
 * @param {a} a - Left side of the concatenation
 * @param {a} b - right side of the concatenation
 * @return {a} Concatenated item
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function concat (a, b) {
  const typeMap = {
    'String': _string_concat__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_concat__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/curry.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/curry.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curry; });
/* eslint-disable no-use-before-define */
/**
 * @function curry
 * @description Autocurries the provided function
 */
function curry (fun) {
  const argslen = fun.length

  if (argslen === 0) {
    return fun
  }
  return createRecurser([])

  function recurse (acc, args) {
    const _acc = acc.concat(args)
    return _acc.length < argslen
      ? createRecurser(_acc)
      : fun.apply(this, _acc)
  }

  function createRecurser (acc) {
    return function () {
      return recurse(acc, Array.prototype.slice.call(arguments))
    }
  }
}


/***/ }),

/***/ "./node_modules/fun.js/src/date/is.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/date/is.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'));


/***/ }),

/***/ "./node_modules/fun.js/src/empty.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/empty.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return empty; });
/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */

function empty (x) {
  return new x.constructor()
};


/***/ }),

/***/ "./node_modules/fun.js/src/equals.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/equals.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identical */ "./node_modules/fun.js/src/identical.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./or */ "./node_modules/fun.js/src/or.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boolean/is */ "./node_modules/fun.js/src/boolean/is.js");
/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number/is */ "./node_modules/fun.js/src/number/is.js");
/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string/is */ "./node_modules/fun.js/src/string/is.js");
/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date/is */ "./node_modules/fun.js/src/date/is.js");
/* harmony import */ var _array_equals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/equals */ "./node_modules/fun.js/src/array/equals.js");
/* harmony import */ var _object_equals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object/equals */ "./node_modules/fun.js/src/object/equals.js");
/**

 * @function equals
 * @description Autocurried function that checks for equality of 2 items
 * @param {*} x - Left side of the equality check
 * @param {*} y - Right side of the equality check
 * @return {boolean}
 * @example
 *
 * const nan = Number.NaN
 * equal(nan, nan) // returns true
 *
 * const arr1 = [0, 1, 2, 3]
 * const arr2 = [null, 1, 2, 3]
 * equals(arr1, arr2) // returns false
 *
 * equals(new Object({'a': 0, 'b': 1}), {'a': 0, 'b': 1}) // true
 *
 */















/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals (x, y) {
  if (Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)) return true

  if (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(x) !== Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(y)) return false

  if (Object(_or__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x)), Object(_not__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y)))) return false

  if (x.constructor !== y.constructor) return false

  if (Object(_string_is__WEBPACK_IMPORTED_MODULE_10__["default"])(x) || Object(_boolean_is__WEBPACK_IMPORTED_MODULE_8__["default"])(x) || Object(_number_is__WEBPACK_IMPORTED_MODULE_9__["default"])(x) || Object(_date_is__WEBPACK_IMPORTED_MODULE_11__["default"])(x)) {
    return Object(_identical__WEBPACK_IMPORTED_MODULE_2__["default"])(x.valueOf(), y.valueOf())
  }
  if (Object(_array_is__WEBPACK_IMPORTED_MODULE_7__["default"])(x)) {
    return Object(_array_equals__WEBPACK_IMPORTED_MODULE_12__["default"])(x, y)
  } else if (Object(_object_is__WEBPACK_IMPORTED_MODULE_6__["default"])(x)) {
    return Object(_object_equals__WEBPACK_IMPORTED_MODULE_13__["default"])(x, y)
  }
  return false
}));


/***/ }),

/***/ "./node_modules/fun.js/src/exists.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/exists.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exists; });
/**
 * @function exists
 */
function exists (x) {
  return !(x == null)
};


/***/ }),

/***/ "./node_modules/fun.js/src/fold.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/fold.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/* harmony import */ var _object_fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/fold */ "./node_modules/fun.js/src/object/fold.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Returns a single item by iterating over an array like object and call a function on each item
 *
 * @function fold
 * @description Returns a single item by iterating over an array like object and call a function on each item
 * @since v1.0.2
 * @sig ((a, b, c, a) → a) → a → [b] → a
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} a is the initial value
 * @param {*} [b] the array like item to iterate over
 * @return {*} a is the accumulated value
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  const typeMap = {
    'Object': _object_fold__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_fold__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  // if (a.next) {
  //   return iterableFold(cb, init, a)
  // }
  // if (type(Symbol) !== 'undefined' && a[Symbol.iterator]) {
  //   return iterableFold(cb, init, a[Symbol.iterator]())
  // }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](cb, init, a)
}));

// function iterableFold (cb, acc, gen) {
//   let step = gen.next()
//   while (!step.done) {
//     acc = cb(acc, step.value)
//     step = gen.next()
//   }
//   return acc
// }


/***/ }),

/***/ "./node_modules/fun.js/src/identical.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/identical.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number/isNan */ "./node_modules/fun.js/src/number/isNan.js");
/**

 * @function identical
 * @description checks for identintical items
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function identical (x, y) {
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y
  }
  if (x === y) {
    return true
  }
  return !!(Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(x) && Object(_number_isNan__WEBPACK_IMPORTED_MODULE_1__["default"])(y))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/is.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/is.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * @function is
 * @description Verifies the type of the provided argument
 *
 */




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function is (Ctor, val) {
  return Object(_type__WEBPACK_IMPORTED_MODULE_1__["default"])(val) === Ctor
}));


/***/ }),

/***/ "./node_modules/fun.js/src/iterator/is.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/iterator/is.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isIter; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */

const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Function')

function isIter (iter) {
  return isFunction(iter[Symbol.iterator])
}


/***/ }),

/***/ "./node_modules/fun.js/src/iterator/map.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/iterator/map.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Maps over an Iterator and applies a function
 *
 * @function
 * @since v1.0.3
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Iterator} a
 * @return {Iterator}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (callback, iterator) {
  let r = []
  for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
    r.push(callback(iterator.value()))
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/map.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/map */ "./node_modules/fun.js/src/array/map.js");
/* harmony import */ var _object_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/map */ "./node_modules/fun.js/src/object/map.js");
/* harmony import */ var _map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map */ "./node_modules/fun.js/src/map/map.js");
/* harmony import */ var _string_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string/map */ "./node_modules/fun.js/src/string/map.js");
/* harmony import */ var _iterator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iterator/map */ "./node_modules/fun.js/src/iterator/map.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony import */ var _iterator_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iterator/is */ "./node_modules/fun.js/src/iterator/is.js");
/**
 * Maps over an iterable and applies a function
 *
 * @function map
 * @description Autocurried function which maps over an iterable.
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> b -> b
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/









/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_6__["default"])(a)) {
    case 'Function':
      return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        return cb.call(this, a.apply(this, arguments))
      })
    case 'Object':
      return Object(_object_map__WEBPACK_IMPORTED_MODULE_2__["default"])(cb, a)
    case 'String':
      return Object(_string_map__WEBPACK_IMPORTED_MODULE_4__["default"])(cb, a)
    case 'Map':
      return Object(_map_map__WEBPACK_IMPORTED_MODULE_3__["default"])(cb, a)
    case 'Array':
      return Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a)
    default:
      return Object(_iterator_is__WEBPACK_IMPORTED_MODULE_7__["default"])(a)
        ? Object(_iterator_map__WEBPACK_IMPORTED_MODULE_5__["default"])(cb, a)
        : Object(_array_map__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, a)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map/map.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/map/map.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./node_modules/fun.js/src/empty.js");
/**
 * Maps over a Map and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Map} a
 * @return {Map}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  const r = Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a)
  a.forEach((v, k, map) => {
    r.set(k, cb(v, k, map))
  })
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/not.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/not.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function not
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function not (x) {
  return !x
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/number/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * @private
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Number'));


/***/ }),

/***/ "./node_modules/fun.js/src/number/isNan.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/number/isNan.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNan; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/number/is.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../and */ "./node_modules/fun.js/src/and.js");
/**
 * @function isNaN
 * @description Checks if number is NAN

 */



function isNan (x) {
  return Object(_and__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x), isNaN(x))
};


/***/ }),

/***/ "./node_modules/fun.js/src/object/equals.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/equals.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equals */ "./node_modules/fun.js/src/equals.js");
/**

 * equals
 * checks for equality
 */





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((x, y) => {
  for (let keyX in x) {
    // noinspection JSUnfilteredForInLoop
    if (Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_equals__WEBPACK_IMPORTED_MODULE_3__["default"])(x[keyX], y[keyX]))) return false
  }

  for (let keyY in y) {
    if (Object(_not__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x[keyY])) && Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(y[keyY])) return false
  }

  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/fold.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/fold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function fold
 * @private
 *
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, o) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o)
  let i = -1
  const l = k.length
  let r = Object(init)
  while (++i < l) {
    r = cb(r, o[k[i]], k[i], o)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/object/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**

 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Object'));


/***/ }),

/***/ "./node_modules/fun.js/src/object/keys.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the own keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  return Object.keys(Object(a))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/map.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/object/map.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * Maps over an object and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> {b} -> [b]
 * @param {Function} cb
 * @param {Object} a
 * @return {Object}
 **/




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(a)
  let i = -1
  const l = k.length
  const r = Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a)
  while (++i < l) {
    r[k[i]] = cb(a[k[i]], k[i], a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/or.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/or.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function or
 * @description Returns true if one or the other is true
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function or (x, y) {
  return x || y
}));


/***/ }),

/***/ "./node_modules/fun.js/src/string/concat.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/string/concat.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return concat; });
/**
 * @private
 * @function stringConcat
 */

function concat (a, b) { // use function(), arrow function doesn't bind arguments
  return String(a) + String(b)
}


/***/ }),

/***/ "./node_modules/fun.js/src/string/is.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/string/is.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**

 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('String'));


/***/ }),

/***/ "./node_modules/fun.js/src/string/map.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/string/map.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Maps over a string and applies a function
 *
 * @function
 * @since v1.0.2
 * @sig (currentValue, idx, [a]) -> [a] -> [a]
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Iterable}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (cb, a) {
  let i = -1
  const l = a.length
  let r = ''
  while (++i < l) {
    r += cb(a.charAt(i), i, a)
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/type.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/type.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function type
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function type (x) {
  return Object.prototype.toString.call(x).slice(8, -1)
}));


/***/ }),

/***/ "./src/ActivationFunction.js":
/*!***********************************!*\
  !*** ./src/ActivationFunction.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ActivationFunction
 * @param func
 * @param dfunc
 */
var ActivationFunction = function ActivationFunction(func, dfunc) {
  _classCallCheck(this, ActivationFunction);

  this.func = func;
  this.dfunc = dfunc;
};

exports.default = ActivationFunction;
module.exports = exports["default"];

/***/ }),

/***/ "./src/NeuralNetwork.js":
/*!******************************!*\
  !*** ./src/NeuralNetwork.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _funmatrix = _interopRequireDefault(__webpack_require__(/*! @astuanax/funmatrix */ "./node_modules/@astuanax/funmatrix/src/matrix.js"));

var _sigmoid = _interopRequireDefault(__webpack_require__(/*! ./util/sigmoid */ "./src/util/sigmoid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class NeuralNetwork
 *
 */
var NeuralNetwork =
/*#__PURE__*/
function () {
  function NeuralNetwork() {
    _classCallCheck(this, NeuralNetwork);

    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    this.input_nodes = values[0];
    this.hidden_nodes = values[1];
    this.output_nodes = values[2];
    this.weights_ih = new _funmatrix.default(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new _funmatrix.default(this.output_nodes, this.hidden_nodes);
    this.weights_ih.randomize();
    this.weights_ho.randomize();
    this.bias_h = new _funmatrix.default(this.hidden_nodes, 1);
    this.bias_o = new _funmatrix.default(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
    this.setActivationFunction();
    this.setLearningRate();
  }
  /**
   * @member setActivationFunction
   * @param func
   */


  _createClass(NeuralNetwork, [{
    key: "setActivationFunction",
    value: function setActivationFunction() {
      var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sigmoid.default;
      this.activation_function = func;
    }
    /**
     * @member setLearningRate
     * @param learningRate
     */

  }, {
    key: "setLearningRate",
    value: function setLearningRate() {
      var learningRate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
      this.learning_rate = learningRate;
    }
    /**
     * @member predict
     * @param inputArray
     * @returns {Array}
     */

  }, {
    key: "predict",
    value: function predict(inputArray) {
      // Generating the Hidden Outputs
      var inputs = _funmatrix.default.fromArray(inputArray);

      var hidden = _funmatrix.default.dot(this.weights_ih, inputs);

      hidden.add(this.bias_h); // activation function!

      hidden.map(this.activation_function.func); // Generating the output's output!

      var output = _funmatrix.default.dot(this.weights_ho, hidden);

      output.add(this.bias_o);
      output.map(this.activation_function.func); // Sending back to the caller!

      return output.toArray();
    }
    /**
     * @member train
     * @param inputArray
     * @param targetArray
     */

  }, {
    key: "train",
    value: function train(inputArray, targetArray) {
      // raw data => expected output
      // Generating the Hidden Outputs
      var inputs = _funmatrix.default.fromArray(inputArray);

      var hidden = _funmatrix.default.dot(this.weights_ih, inputs);

      hidden.add(this.bias_h); // activation function!

      hidden.map(this.activation_function.func); // Generating the output's output!

      var outputs = _funmatrix.default.dot(this.weights_ho, hidden);

      outputs.add(this.bias_o);
      outputs.map(this.activation_function.func); // Convert array to matrix object

      var targets = _funmatrix.default.fromArray(targetArray); // Calculate the error
      // ERROR = TARGETS - OUTPUTS


      var outputErrors = _funmatrix.default.subtract(targets, outputs); // let gradient = outputs * (1 - outputs);
      // Calculate gradient


      var gradients = _funmatrix.default.map(outputs, this.activation_function.dfunc);

      gradients.multiply(outputErrors);
      gradients.multiply(this.learning_rate); // Calculate deltas

      var hiddenT = _funmatrix.default.transpose(hidden);

      var weightHoDeltas = _funmatrix.default.dot(gradients, hiddenT); // Adjust the weights by deltas


      this.weights_ho.add(weightHoDeltas); // Adjust the bias by its deltas (which is just the gradients)

      this.bias_o.add(gradients); // Calculate the hidden layer errors

      var whoT = _funmatrix.default.transpose(this.weights_ho);

      var hiddenErrors = _funmatrix.default.dot(whoT, outputErrors); // Calculate hidden gradient


      var hiddenGradient = _funmatrix.default.map(hidden, this.activation_function.dfunc);

      hiddenGradient.multiply(hiddenErrors);
      hiddenGradient.multiply(this.learning_rate); // Calcuate input->hidden deltas

      var inputsT = _funmatrix.default.transpose(inputs);

      var weightIhDeltas = _funmatrix.default.dot(hiddenGradient, inputsT);

      this.weights_ih.add(weightIhDeltas); // Adjust the bias by its deltas (which is just the gradients)

      this.bias_h.add(hiddenGradient);
    }
  }]);

  return NeuralNetwork;
}();

var _default = NeuralNetwork;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Perceptron.js":
/*!***************************!*\
  !*** ./src/Perceptron.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @class Perceptron
 * @classdesc Perceptron to train and predict
 * @see of
 * @example
 *
 * const m =  Perceptron.of([0.2365698, 0.4567897, 0.95989898, -0.457878787])
 *
 */
var Perceptron = function Perceptron(weights) {
  this.weights = weights || [];
};
/**
 * @memberOf Perceptron
 * @static
 * @function of
 * @desc Creates a Perceptron object
 * @param weights {array} Weigths for predicting
 * @returns {Perceptron}
 * @example
 *
 * const m =  Perceptron.of()
 * const train  = [...]
 * m.train(train, 0.1, 10000)
 *
 */


Perceptron.of = function (val) {
  if (val instanceof Perceptron) return val;

  if (this instanceof Perceptron) {
    this.weights = val;
    return this;
  }

  return new Perceptron(val);
};
/**
 * @memberOf Perceptron
 * @type {string}
 */


Perceptron.prototype.type = 'Perceptron';
/**
 * @memberOf Perceptron
 * @function Perceptron.predict
 * @param row {Array} Array of values to predict
 * @returns {Boolean}
 */

Perceptron.prototype.predict = function (row) {
  var _this = this;

  var activation = this.weights[0];
  row.forEach(function (x, i) {
    activation += _this.weights[i + 1] * x;
  });
  return activation >= 0 ? 1 : 0;
};
/**
 * @function train
 * @param train {Array} Dataset to train the preceptron
 * @param lRate {Number} Set the larning rate of the perceptron
 * @param nEpoch {Number} Set thenumber of iterations to train the perceptron
 */


Perceptron.prototype.train = function (train, lRate, nEpoch) {
  var _this2 = this;

  this.weights = Array.apply(null, Array(train[0].length)).map(function (x) {
    return 0;
  });

  for (var i = 0; i < nEpoch; i++) {
    train.forEach(function (x, idx) {
      var expected = x.slice(-1)[0];
      var row = x.slice(0, -1);

      var prediction = _this2.predict(row);

      var error = expected - prediction;
      row.forEach(function (y, j) {
        _this2.weights[j + 1] += lRate * error * y;
      });
    });
  }
};

var _default = Perceptron;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Perceptron", {
  enumerable: true,
  get: function get() {
    return _Perceptron.default;
  }
});
Object.defineProperty(exports, "NeuralNetwork", {
  enumerable: true,
  get: function get() {
    return _NeuralNetwork.default;
  }
});
Object.defineProperty(exports, "ActivationFunction", {
  enumerable: true,
  get: function get() {
    return _ActivationFunction.default;
  }
});
Object.defineProperty(exports, "sigmoid", {
  enumerable: true,
  get: function get() {
    return _sigmoid.default;
  }
});
Object.defineProperty(exports, "tanh", {
  enumerable: true,
  get: function get() {
    return _tanh.default;
  }
});

var _Perceptron = _interopRequireDefault(__webpack_require__(/*! ./Perceptron */ "./src/Perceptron.js"));

var _NeuralNetwork = _interopRequireDefault(__webpack_require__(/*! ./NeuralNetwork */ "./src/NeuralNetwork.js"));

var _ActivationFunction = _interopRequireDefault(__webpack_require__(/*! ./ActivationFunction */ "./src/ActivationFunction.js"));

var _sigmoid = _interopRequireDefault(__webpack_require__(/*! ./util/sigmoid */ "./src/util/sigmoid.js"));

var _tanh = _interopRequireDefault(__webpack_require__(/*! ./util/tanh */ "./src/util/tanh.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/util/sigmoid.js":
/*!*****************************!*\
  !*** ./src/util/sigmoid.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActivationFunction = _interopRequireDefault(__webpack_require__(/*! ../ActivationFunction */ "./src/ActivationFunction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function sigmoid
 * @type {ActivationFunction}
 */
var sigmoid = new _ActivationFunction.default(function (x) {
  return 1 / (1 + Math.exp(-x));
}, function (y) {
  return y * (1 - y);
});
var _default = sigmoid;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/tanh.js":
/*!**************************!*\
  !*** ./src/util/tanh.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActivationFunction = _interopRequireDefault(__webpack_require__(/*! ../ActivationFunction */ "./src/ActivationFunction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function tanh
 * @type {ActivationFunction}
 */
var tanh = new _ActivationFunction.default(function (x) {
  return Math.tanh(x);
}, function (y) {
  return 1 - y * y;
});
var _default = tanh;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/BigOne/github/funml/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9AYXN0dWFuYXgvZnVubWF0cml4L3NyYy91dGlsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL19wcml2YXRlL2N1cnJ5MS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90eXBlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy9BY3RpdmF0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL1BlcmNlcHRyb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL3NpZ21vaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvdGFuaC5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uRnVuY3Rpb24iLCJmdW5jIiwiZGZ1bmMiLCJOZXVyYWxOZXR3b3JrIiwidmFsdWVzIiwiaW5wdXRfbm9kZXMiLCJoaWRkZW5fbm9kZXMiLCJvdXRwdXRfbm9kZXMiLCJ3ZWlnaHRzX2loIiwid2VpZ2h0c19obyIsInJhbmRvbWl6ZSIsImJpYXNfaCIsImJpYXNfbyIsInNldEFjdGl2YXRpb25GdW5jdGlvbiIsInNldExlYXJuaW5nUmF0ZSIsImFjdGl2YXRpb25fZnVuY3Rpb24iLCJsZWFybmluZ1JhdGUiLCJsZWFybmluZ19yYXRlIiwiaW5wdXRBcnJheSIsImlucHV0cyIsImZyb21BcnJheSIsImhpZGRlbiIsImRvdCIsImFkZCIsIm1hcCIsIm91dHB1dCIsInRvQXJyYXkiLCJ0YXJnZXRBcnJheSIsIm91dHB1dHMiLCJ0YXJnZXRzIiwib3V0cHV0RXJyb3JzIiwic3VidHJhY3QiLCJncmFkaWVudHMiLCJtdWx0aXBseSIsImhpZGRlblQiLCJ0cmFuc3Bvc2UiLCJ3ZWlnaHRIb0RlbHRhcyIsIndob1QiLCJoaWRkZW5FcnJvcnMiLCJoaWRkZW5HcmFkaWVudCIsImlucHV0c1QiLCJ3ZWlnaHRJaERlbHRhcyIsIlBlcmNlcHRyb24iLCJ3ZWlnaHRzIiwib2YiLCJ2YWwiLCJwcm90b3R5cGUiLCJ0eXBlIiwicHJlZGljdCIsInJvdyIsImFjdGl2YXRpb24iLCJmb3JFYWNoIiwieCIsImkiLCJ0cmFpbiIsImxSYXRlIiwibkVwb2NoIiwiQXJyYXkiLCJhcHBseSIsImxlbmd0aCIsImlkeCIsImV4cGVjdGVkIiwic2xpY2UiLCJwcmVkaWN0aW9uIiwiZXJyb3IiLCJ5IiwiaiIsInNpZ21vaWQiLCJNYXRoIiwiZXhwIiwidGFuaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNKO0FBQ0U7QUFDSTtBQUNKO0FBQ0Y7QUFDSjtBQUNVO0FBQ0U7QUFDRjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpRUFBTTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUVBQU07QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlFQUFNO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUVBQU07QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBRztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsYUFBYTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnRUFBSztBQUNsQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsT0FBTztBQUNwQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnRUFBSztBQUNuQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBSztBQUNqQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvREFBTTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRUFBSyxxQkFBcUIsb0RBQU07QUFDaEQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFLO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUNBLGVBQWUsZ0VBQUs7QUFDcEIsWUFBWSw4REFBUTtBQUNwQiwwQkFBMEIsbURBQUs7QUFDL0IsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFRO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFRO0FBQ3BCLG1CQUFtQixzREFBUTtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOENBQThDLG9EQUFNO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMkNBQTJDLG9EQUFNO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx5REFBRztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQUc7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksOERBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFHLFFBQVEsOERBQUc7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFJLENBQUMsdURBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhEQUFHO0FBQ3JDLEdBQUc7QUFDSCxvQkFBb0IsOERBQUc7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhEQUFHO0FBQ3JDLEdBQUc7QUFDSCxvQkFBb0IsOERBQUc7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4REFBRztBQUNyQyxHQUFHO0FBQ0gsb0JBQW9CLDhEQUFHO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QixtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtEQUFJO0FBQ2I7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsK0RBQUk7QUFDYjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtEQUFJO0FBQ2IsV0FBVywrREFBSTtBQUNmO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiw4REFBUTs7QUFFeEIsaUJBQWlCLE9BQU87QUFDeEIsbUJBQW1CLE9BQU87QUFDMUIscUJBQXFCLE9BQU87QUFDNUIsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU07Ozs7Ozs7Ozs7Ozs7QUM5a0NyQjtBQUFBO0FBQUE7QUFBb0M7QUFDRTs7QUFFdEM7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNlLCtIQUFLO0FBQ3BCLFNBQVMsaUVBQU07QUFDZixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0Y7QUFDRjtBQUNMOztBQUUzQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDZSwrSEFBSyxxQkFBcUIsOERBQUc7QUFDNUMsU0FBUywrREFBSTtBQUNiLFdBQVcsc0RBQUs7QUFDaEI7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7QUNoQmpCO0FBQUE7QUFBb0M7O0FBRXJCLCtIQUFLLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUNGN0I7QUFBQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUNlLHNKQUF1Rjs7Ozs7Ozs7Ozs7OztBQ1B0RztBQUFBO0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLFlBQVk7QUFDWjtBQUNlLDJFQUFZLDhEQUFHLHFDQUFxQzs7Ozs7Ozs7Ozs7OztBQ1RuRTtBQUFBO0FBQUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiO0FBQ2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2YsWUFBWTtBQUNaO0FBQ2UsK0hBQUssaUJBQWlCLDhEQUFHLHFEQUFxRDs7Ozs7Ozs7Ozs7OztBQ1Y3RjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaO0FBQzJCOztBQUVaLHFIQUFLO0FBQ3BCO0FBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaO0FBQzRCO0FBQ0o7QUFDTTs7QUFFZixxSEFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQixRQUFRLG9EQUFHLENBQUMsdURBQU07QUFDbEI7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BCRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxNQUFNO0FBQ2pCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQ0Y7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOztBQUVQLGtIQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUNqQjFCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWTtBQUNaO0FBQ3NCOztBQUVQLGtIQUFFLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUNaNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFlBQVksRUFBRTtBQUNkOztBQUUyQjtBQUNhO0FBQ0U7QUFDakI7O0FBRVYscUhBQUs7QUFDcEI7QUFDQSxjQUFjLHNEQUFZO0FBQzFCLGFBQWEscURBQVc7QUFDeEI7QUFDQSxpQkFBaUIscURBQUk7QUFDckIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEJGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRVAsa0hBQUUsUUFBUTs7Ozs7Ozs7Ozs7OztBQ1J6QjtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWUsSUFBSSxlQUFlO0FBQ3hEO0FBQ0E7QUFDMkI7QUFDRTtBQUNNO0FBQ1Y7QUFDRjtBQUNGO0FBQ2E7QUFDRjtBQUNJO0FBQ0Y7QUFDQTtBQUNKO0FBQ1U7QUFDRTs7QUFFM0IscUhBQUs7QUFDcEIsTUFBTSwwREFBUzs7QUFFZixNQUFNLHFEQUFJLFFBQVEscURBQUk7O0FBRXRCLE1BQU0sbURBQUUsQ0FBQyxvREFBRyxDQUFDLHVEQUFNLE1BQU0sb0RBQUcsQ0FBQyx1REFBTTs7QUFFbkM7O0FBRUEsTUFBTSwyREFBUSxPQUFPLDJEQUFTLE9BQU8sMERBQVEsT0FBTyx5REFBTTtBQUMxRCxXQUFXLDBEQUFTO0FBQ3BCO0FBQ0EsTUFBTSx5REFBTztBQUNiLFdBQVcsOERBQVc7QUFDdEIsR0FBRyxVQUFVLDBEQUFRO0FBQ3JCLFdBQVcsK0RBQVk7QUFDdkI7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BERjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFlBQVksRUFBRTtBQUNkOztBQUUyQjtBQUNTO0FBQ0U7QUFDYjs7QUFFVixxSEFBSztBQUNwQjtBQUNBLGNBQWMsb0RBQVU7QUFDeEIsYUFBYSxtREFBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBSTtBQUNyQixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDMkI7QUFDTzs7QUFFbkIscUhBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBSyxPQUFPLDZEQUFLO0FBQzdCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hCRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjtBQUNGOztBQUVWLHFIQUFLO0FBQ3BCLFNBQVMscURBQUk7QUFDYixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYRjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDc0I7QUFDdEIsbUJBQW1CLG1EQUFFOztBQUVOO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEVBQUU7QUFDdkMsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaO0FBQzJCO0FBQ087QUFDRTtBQUNOO0FBQ007QUFDSTtBQUNmO0FBQ2E7O0FBRXZCLHFIQUFLO0FBQ3BCLFVBQVUscURBQUk7QUFDZDtBQUNBLGFBQWEsc0RBQUs7QUFDbEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSxhQUFhLDJEQUFTO0FBQ3RCO0FBQ0EsYUFBYSwyREFBUztBQUN0QjtBQUNBLGFBQWEsd0RBQU07QUFDbkI7QUFDQSxhQUFhLDBEQUFRO0FBQ3JCO0FBQ0EsYUFBYSw0REFBVTtBQUN2QixVQUFVLDZEQUFXO0FBQ3JCLFVBQVUsMERBQVE7QUFDbEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDLFdBQVcsU0FBUztBQUNwQixXQUFXLElBQUk7QUFDZixZQUFZO0FBQ1o7QUFDNEI7QUFDQTs7QUFFYixxSEFBSztBQUNwQixZQUFZLHNEQUFLO0FBQ2pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUMyQjs7QUFFWixxSEFBSztBQUNwQjtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRVAsa0hBQUUsVUFBVTs7Ozs7Ozs7Ozs7OztBQ0wzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUMyQjtBQUNIOztBQUVUO0FBQ2YsU0FBUyxvREFBRyxDQUFDLG1EQUFRO0FBQ3JCOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUM0QjtBQUNFO0FBQ047QUFDTTs7QUFFZixxSEFBSztBQUNwQjtBQUNBO0FBQ0EsUUFBUSxvREFBRyxDQUFDLHVEQUFNO0FBQ2xCOztBQUVBO0FBQ0EsUUFBUSxvREFBRyxDQUFDLHVEQUFNLGNBQWMsdURBQU07QUFDdEM7O0FBRUE7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQkY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUNIOztBQUVWLHFIQUFLO0FBQ3BCLFlBQVkscURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkY7QUFBQTtBQUFBOztBQUVBO0FBQ3NCOztBQUVQLGtIQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUM0QjtBQUNBO0FBQ0g7O0FBRVYscUhBQUs7QUFDcEIsWUFBWSxxREFBSTtBQUNoQjtBQUNBO0FBQ0EsWUFBWSxzREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZCRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7O0FBRVoscUhBQUs7QUFDcEI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7O0FBRUE7QUFDc0I7O0FBRVAsa0hBQUUsVUFBVTs7Ozs7Ozs7Ozs7OztBQ0wzQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDNEI7O0FBRWIscUhBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQkY7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNzQzs7QUFFdkIsOEhBQU07QUFDckI7QUFDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRjs7Ozs7SUFLcUJBLGtCLEdBQ25CLDRCQUFhQyxJQUFiLEVBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN4QixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEg7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNQyxhOzs7QUFDSiwyQkFBd0I7QUFBQTs7QUFBQSxzQ0FBUkMsTUFBUTtBQUFSQSxZQUFRO0FBQUE7O0FBQ3JCLFNBQUtDLFdBRGdCLEdBQ3FDRCxNQURyQztBQUNILFNBQUtFLFlBREYsR0FDcUNGLE1BRHJDO0FBQ2dCLFNBQUtHLFlBRHJCLEdBQ3FDSCxNQURyQztBQUd0QixTQUFLSSxVQUFMLEdBQWtCLHVCQUFXLEtBQUtGLFlBQWhCLEVBQThCLEtBQUtELFdBQW5DLENBQWxCO0FBQ0EsU0FBS0ksVUFBTCxHQUFrQix1QkFBVyxLQUFLRixZQUFoQixFQUE4QixLQUFLRCxZQUFuQyxDQUFsQjtBQUNBLFNBQUtFLFVBQUwsQ0FBZ0JFLFNBQWhCO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQkMsU0FBaEI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsdUJBQVcsS0FBS0wsWUFBaEIsRUFBOEIsQ0FBOUIsQ0FBZDtBQUNBLFNBQUtNLE1BQUwsR0FBYyx1QkFBVyxLQUFLTCxZQUFoQixFQUE4QixDQUE5QixDQUFkO0FBQ0EsU0FBS0ksTUFBTCxDQUFZRCxTQUFaO0FBQ0EsU0FBS0UsTUFBTCxDQUFZRixTQUFaO0FBRUEsU0FBS0cscUJBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0Q7QUFFRDs7Ozs7Ozs7NENBSXVDO0FBQUEsVUFBaEJiLElBQWdCO0FBQ3JDLFdBQUtjLG1CQUFMLEdBQTJCZCxJQUEzQjtBQUNEO0FBRUQ7Ozs7Ozs7c0NBSXFDO0FBQUEsVUFBcEJlLFlBQW9CLHVFQUFMLEdBQUs7QUFDbkMsV0FBS0MsYUFBTCxHQUFxQkQsWUFBckI7QUFDRDtBQUVEOzs7Ozs7Ozs0QkFLU0UsVSxFQUFZO0FBQ25CO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLG1CQUFPQyxTQUFQLENBQWlCRixVQUFqQixDQUFiOztBQUNBLFVBQUlHLE1BQU0sR0FBRyxtQkFBT0MsR0FBUCxDQUFXLEtBQUtkLFVBQWhCLEVBQTRCVyxNQUE1QixDQUFiOztBQUNBRSxZQUFNLENBQUNFLEdBQVAsQ0FBVyxLQUFLWixNQUFoQixFQUptQixDQUtuQjs7QUFDQVUsWUFBTSxDQUFDRyxHQUFQLENBQVcsS0FBS1QsbUJBQUwsQ0FBeUJkLElBQXBDLEVBTm1CLENBUW5COztBQUNBLFVBQUl3QixNQUFNLEdBQUcsbUJBQU9ILEdBQVAsQ0FBVyxLQUFLYixVQUFoQixFQUE0QlksTUFBNUIsQ0FBYjs7QUFDQUksWUFBTSxDQUFDRixHQUFQLENBQVcsS0FBS1gsTUFBaEI7QUFDQWEsWUFBTSxDQUFDRCxHQUFQLENBQVcsS0FBS1QsbUJBQUwsQ0FBeUJkLElBQXBDLEVBWG1CLENBYW5COztBQUNBLGFBQU93QixNQUFNLENBQUNDLE9BQVAsRUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzBCQUtPUixVLEVBQVlTLFcsRUFBYTtBQUFFO0FBQ2hDO0FBQ0EsVUFBSVIsTUFBTSxHQUFHLG1CQUFPQyxTQUFQLENBQWlCRixVQUFqQixDQUFiOztBQUNBLFVBQUlHLE1BQU0sR0FBRyxtQkFBT0MsR0FBUCxDQUFXLEtBQUtkLFVBQWhCLEVBQTRCVyxNQUE1QixDQUFiOztBQUVBRSxZQUFNLENBQUNFLEdBQVAsQ0FBVyxLQUFLWixNQUFoQixFQUw4QixDQU05Qjs7QUFDQVUsWUFBTSxDQUFDRyxHQUFQLENBQVcsS0FBS1QsbUJBQUwsQ0FBeUJkLElBQXBDLEVBUDhCLENBUzlCOztBQUNBLFVBQUkyQixPQUFPLEdBQUcsbUJBQU9OLEdBQVAsQ0FBVyxLQUFLYixVQUFoQixFQUE0QlksTUFBNUIsQ0FBZDs7QUFDQU8sYUFBTyxDQUFDTCxHQUFSLENBQVksS0FBS1gsTUFBakI7QUFDQWdCLGFBQU8sQ0FBQ0osR0FBUixDQUFZLEtBQUtULG1CQUFMLENBQXlCZCxJQUFyQyxFQVo4QixDQWM5Qjs7QUFDQSxVQUFJNEIsT0FBTyxHQUFHLG1CQUFPVCxTQUFQLENBQWlCTyxXQUFqQixDQUFkLENBZjhCLENBaUI5QjtBQUNBOzs7QUFDQSxVQUFJRyxZQUFZLEdBQUcsbUJBQU9DLFFBQVAsQ0FBZ0JGLE9BQWhCLEVBQXlCRCxPQUF6QixDQUFuQixDQW5COEIsQ0FxQjlCO0FBQ0E7OztBQUNBLFVBQUlJLFNBQVMsR0FBRyxtQkFBT1IsR0FBUCxDQUFXSSxPQUFYLEVBQW9CLEtBQUtiLG1CQUFMLENBQXlCYixLQUE3QyxDQUFoQjs7QUFDQThCLGVBQVMsQ0FBQ0MsUUFBVixDQUFtQkgsWUFBbkI7QUFDQUUsZUFBUyxDQUFDQyxRQUFWLENBQW1CLEtBQUtoQixhQUF4QixFQXpCOEIsQ0EyQjlCOztBQUNBLFVBQUlpQixPQUFPLEdBQUcsbUJBQU9DLFNBQVAsQ0FBaUJkLE1BQWpCLENBQWQ7O0FBQ0EsVUFBSWUsY0FBYyxHQUFHLG1CQUFPZCxHQUFQLENBQVdVLFNBQVgsRUFBc0JFLE9BQXRCLENBQXJCLENBN0I4QixDQStCOUI7OztBQUNBLFdBQUt6QixVQUFMLENBQWdCYyxHQUFoQixDQUFvQmEsY0FBcEIsRUFoQzhCLENBaUM5Qjs7QUFDQSxXQUFLeEIsTUFBTCxDQUFZVyxHQUFaLENBQWdCUyxTQUFoQixFQWxDOEIsQ0FvQzlCOztBQUNBLFVBQUlLLElBQUksR0FBRyxtQkFBT0YsU0FBUCxDQUFpQixLQUFLMUIsVUFBdEIsQ0FBWDs7QUFDQSxVQUFJNkIsWUFBWSxHQUFHLG1CQUFPaEIsR0FBUCxDQUFXZSxJQUFYLEVBQWlCUCxZQUFqQixDQUFuQixDQXRDOEIsQ0F3QzlCOzs7QUFDQSxVQUFJUyxjQUFjLEdBQUcsbUJBQU9mLEdBQVAsQ0FBV0gsTUFBWCxFQUFtQixLQUFLTixtQkFBTCxDQUF5QmIsS0FBNUMsQ0FBckI7O0FBQ0FxQyxvQkFBYyxDQUFDTixRQUFmLENBQXdCSyxZQUF4QjtBQUNBQyxvQkFBYyxDQUFDTixRQUFmLENBQXdCLEtBQUtoQixhQUE3QixFQTNDOEIsQ0E2QzlCOztBQUNBLFVBQUl1QixPQUFPLEdBQUcsbUJBQU9MLFNBQVAsQ0FBaUJoQixNQUFqQixDQUFkOztBQUNBLFVBQUlzQixjQUFjLEdBQUcsbUJBQU9uQixHQUFQLENBQVdpQixjQUFYLEVBQTJCQyxPQUEzQixDQUFyQjs7QUFFQSxXQUFLaEMsVUFBTCxDQUFnQmUsR0FBaEIsQ0FBb0JrQixjQUFwQixFQWpEOEIsQ0FrRDlCOztBQUNBLFdBQUs5QixNQUFMLENBQVlZLEdBQVosQ0FBZ0JnQixjQUFoQjtBQUNEOzs7Ozs7ZUFHWXBDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIZjs7Ozs7Ozs7O0FBU0EsSUFBSXVDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLE9BQVYsRUFBbUI7QUFDbEMsT0FBS0EsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQUQsVUFBVSxDQUFDRSxFQUFYLEdBQWdCLFVBQVVDLEdBQVYsRUFBZTtBQUM3QixNQUFJQSxHQUFHLFlBQVlILFVBQW5CLEVBQStCLE9BQU9HLEdBQVA7O0FBQy9CLE1BQUksZ0JBQWdCSCxVQUFwQixFQUFnQztBQUM5QixTQUFLQyxPQUFMLEdBQWVFLEdBQWY7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLElBQUlILFVBQUosQ0FBZUcsR0FBZixDQUFQO0FBQ0QsQ0FQRDtBQVNBOzs7Ozs7QUFJQUgsVUFBVSxDQUFDSSxTQUFYLENBQXFCQyxJQUFyQixHQUE0QixZQUE1QjtBQUVBOzs7Ozs7O0FBTUFMLFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQkUsT0FBckIsR0FBK0IsVUFBVUMsR0FBVixFQUFlO0FBQUE7O0FBQzVDLE1BQUlDLFVBQVUsR0FBRyxLQUFLUCxPQUFMLENBQWEsQ0FBYixDQUFqQjtBQUNBTSxLQUFHLENBQUNFLE9BQUosQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNwQkgsY0FBVSxJQUFJLEtBQUksQ0FBQ1AsT0FBTCxDQUFhVSxDQUFDLEdBQUcsQ0FBakIsSUFBc0JELENBQXBDO0FBQ0QsR0FGRDtBQUdBLFNBQU9GLFVBQVUsSUFBSSxDQUFkLEdBQWtCLENBQWxCLEdBQXNCLENBQTdCO0FBQ0QsQ0FORDtBQVFBOzs7Ozs7OztBQU1BUixVQUFVLENBQUNJLFNBQVgsQ0FBcUJRLEtBQXJCLEdBQTZCLFVBQVVBLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBOztBQUMzRCxPQUFLYixPQUFMLEdBQWVjLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JELEtBQUssQ0FBQ0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSyxNQUFWLENBQXZCLEVBQTBDbkMsR0FBMUMsQ0FBOEMsVUFBQTRCLENBQUM7QUFBQSxXQUFJLENBQUo7QUFBQSxHQUEvQyxDQUFmOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0csTUFBcEIsRUFBNEJILENBQUMsRUFBN0IsRUFBaUM7QUFDL0JDLFNBQUssQ0FBQ0gsT0FBTixDQUFjLFVBQUNDLENBQUQsRUFBSVEsR0FBSixFQUFZO0FBQ3hCLFVBQU1DLFFBQVEsR0FBR1QsQ0FBQyxDQUFDVSxLQUFGLENBQVEsQ0FBQyxDQUFULEVBQVksQ0FBWixDQUFqQjtBQUNBLFVBQU1iLEdBQUcsR0FBR0csQ0FBQyxDQUFDVSxLQUFGLENBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFaOztBQUNBLFVBQU1DLFVBQVUsR0FBRyxNQUFJLENBQUNmLE9BQUwsQ0FBYUMsR0FBYixDQUFuQjs7QUFDQSxVQUFNZSxLQUFLLEdBQUdILFFBQVEsR0FBR0UsVUFBekI7QUFDQWQsU0FBRyxDQUFDRSxPQUFKLENBQVksVUFBQ2MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDcEIsY0FBSSxDQUFDdkIsT0FBTCxDQUFhdUIsQ0FBQyxHQUFHLENBQWpCLEtBQXVCWCxLQUFLLEdBQUdTLEtBQVIsR0FBZ0JDLENBQXZDO0FBQ0QsT0FGRDtBQUdELEtBUkQ7QUFTRDtBQUNGLENBYkQ7O2VBZWV2QixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7QUFFQTs7OztBQUlBLElBQU15QixPQUFPLEdBQUcsZ0NBQ2QsVUFBQWYsQ0FBQztBQUFBLFNBQUksS0FBSyxJQUFJZ0IsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ2pCLENBQVYsQ0FBVCxDQUFKO0FBQUEsQ0FEYSxFQUVkLFVBQUFhLENBQUM7QUFBQSxTQUFJQSxDQUFDLElBQUksSUFBSUEsQ0FBUixDQUFMO0FBQUEsQ0FGYSxDQUFoQjtlQUllRSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7OztBQUVBOzs7O0FBSUEsSUFBTUcsSUFBSSxHQUFHLGdDQUNYLFVBQUFsQixDQUFDO0FBQUEsU0FBSWdCLElBQUksQ0FBQ0UsSUFBTCxDQUFVbEIsQ0FBVixDQUFKO0FBQUEsQ0FEVSxFQUVYLFVBQUFhLENBQUM7QUFBQSxTQUFJLElBQUtBLENBQUMsR0FBR0EsQ0FBYjtBQUFBLENBRlUsQ0FBYjtlQUllSyxJIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGFzdHVhbmF4L2Z1bm1sXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhc3R1YW5heC9mdW5tbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGZvbGQgZnJvbSAnZnVuLmpzL3NyYy9mb2xkJ1xuaW1wb3J0IGVxdWFscyBmcm9tICdmdW4uanMvc3JjL2VxdWFscydcbmltcG9ydCBjb25jYXQgZnJvbSAnLi91dGlsL2NvbmNhdCdcbmltcG9ydCBlbXB0eSBmcm9tICcuL3V0aWwvZW1wdHknXG5pbXBvcnQgZG90IGZyb20gJy4vdXRpbC9kb3QnXG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi91dGlsL2lkZW50aXR5J1xuaW1wb3J0IHRyYW5zcG9zZSBmcm9tICcuL3V0aWwvdHJhbnNwb3NlJ1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJy4vdXRpbC9nZW5lcmF0ZSdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbmxldCBNYXRyaXggPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgub2ZcbiAqIEBkZXNjIENyZWF0ZXMgYSBNYXRyaXggb2JqZWN0IGFuZCBmbGF0dGVucyB0aGUgTWF0cml4XG4gKiBAcGFyYW0gdmFsIHtBcnJheXxmdW5jdGlvbn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xuTWF0cml4Lm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1hdHJpeCh2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGVcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnR5cGUgPT09ICdNYXRyaXgnXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHlwZSA9ICdNYXRyaXgnXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHByZWNpc2lvblxuICogQHR5cGUge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0ucHJlY2lzaW9uID09PSA0XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucHJlY2lzaW9uID0gNFxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc2V0UHJlY2lzaW9uXG4gKiBAcGFyYW0gcHJlY2lzaW9uIHtOdW1iZXJ9IFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQG1lbWJlciBpc1N5bW1ldHJpY1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTeW1tZXRyaWMoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1N5bW1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVxuICBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzKS5fX3ZhbHVlXG4gIHJldHVybiBlcXVhbHMoYSwgYilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjaXNTcXVhcmVcbiAqIEBkZXNjIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbnMgYSBzcXVhcmUgTWF0cml4XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1NxdWFyZSgpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuZ2V0Q29scygpLCB0aGlzLmdldFJvd3MoKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjaXNPcnRob2dvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbLTAuMzA5MiwgLTAuOTUxMF0sIFstMC45NTEwLCAwLjMwOTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogdHJ1ZSAgPT09IEEuaXNPcnRob2dvbmFsKClcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc09ydGhvZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEF4QXQgPSB0aGlzLmRvdCh0aGlzLnRyYW5zcG9zZSgpKVxuICBjb25zdCBJID0gdGhpcy5pZGVudGl0eSgpXG4gIHJldHVybiBlcXVhbHMoQXhBdCwgSSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Q29sc1xuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRDb2xzKCkgID09PSAyXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldENvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2VxdWFsc1xuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IFtbMSwgMV0sIFsxLCAxXV1cbiAqIHZhciBBID0gTWF0cml4Lm9mKGEpXG4gKiB2YXIgQiA9IE1hdHJpeC5vZihhKVxuICogdHJ1ZSAgPT09IEEuZXF1YWxzKEIpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLl9fdmFsdWUsIE0uX192YWx1ZSB8fCBNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRSb3dzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFJvd3MoKSAgLy8gMlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFNoYXBlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0U2hhcGUoKSAgLy8gWzIsIDJdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbdGhpcy5nZXRSb3dzKCksIHRoaXMuZ2V0Q29scygpXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChmKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgubWFwXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgubWFwKHg9ID4geC5tYXAoeSA9PiB5KyAxKSwgW1sxLCAxXSwgWzEsIDFdXSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5tYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gRmxhdHRlbiBNYXRyaXhcbiAqIE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKS5mb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2LmNvbmNhdChuZXh0KSlcbiAqIC8vIFsxLCAxLCAxLCAxXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQoZiwgW10pKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5mb2xkXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRvIHJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeH0gVGhlIE1hdHJpeCB0byByZWR1Y2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuXG4gKiAvLyBTdW0gb2YgYWxsIG1hdHJpeCB2YWx1ZXNcbiAqIGNvbnN0IHJlZHVjZXIgPSAocHJldiwgbmV4dCkgPT4gTnVtYmVyKHByZXYpICsgbmV4dC5yZWR1Y2UoKGFjYywgeCkgPT4gYWNjICsgeCwgMClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXVxuICogTWF0cml4LmZvbGQocmVkdWNlciwgQSlcbiAqIC8vIDRcbiAqL1xuTWF0cml4LmZvbGQgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmZvbGQoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2FwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIE1hdHJpeCB0byBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiBNYXRyaXgub2YoZikuYXAoTSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIE1hdHJpeCB0byBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259XG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogTWF0cml4LmFwKGYsIFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LmFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmKS5hcChNKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IEEuY29uY2F0KEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChNLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGYoTSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5jb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gQSB7TWF0cml4fVxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzAsIDEsIDFdLCBbMiwgMywgNF1dXG4gKiBjb25zdCBiID0gW1syLCAyLCAyXSwgWzMsIDMsIDNdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICogY29uc3QgTSA9IE1hdHJpeC5jb25jYXQoQSwgQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5jb25jYXQgPSBjdXJyeShmdW5jdGlvbiAoQSwgQiwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLm1hcChmKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHBhcmFtIHJvd3Mge051bWJlcn1cbiAqIEBwYXJhbSBjb2xzIHtOdW1iZXJ9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguZW1wdHkgPSBjdXJyeShmdW5jdGlvbiAocm93cyA9IDAsIGNvbHMgPSAwKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLm1hcChlbXB0eSlcbn0pXG5cbi8vICMjIyMgIyMjIyAjIyMjIC8vXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2lkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEFpZGVudGl0eSA9IEEuaWRlbnRpdHkoKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAodGhpcylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmlkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5pZGVudGl0eSgzLCAyKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LmlkZW50aXR5ID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKG0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29tYmluZVxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmNvbWJpbmUgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmNvbmNhdChNYXRyaXgub2YoQiksIGNvbmNhdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZG90XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0gTVxuICogQHBhcmFtIGZcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIENyZWF0ZSBtYXRyaXhcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAyXSwgWzMsIDRdXSlcbiAqXG4gKiAvLyBHZW5lcmF0ZSBpZGVudGl0eSBtYXRyaXhcbiAqIGNvbnN0IEkgID0gbS5pZGVudGl0eSgpIC8vIFtbMSwgMF0sIFswLCAxXV1cbiAqXG4gKiBpZihtLmRvdChJKS5lcXVhbHMobSkpIHtcbiAqICAgIGNvbnNvbGUubG9nKCdEb3QgcHJvZHVjdCB3aXRoIGlkZW50aXR5IG1hdHJpeCByZXR1cm5zIHRoZSBzYW1lIG1hdHJpeCcpXG4gKiB9XG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZG90KHRoaXMucHJlY2lzaW9uKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmRvdFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW4gMiBtYXRyaWNlc1xuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IGIgPSBbWzcsIDhdLCBbOSwgMTBdLCBbMTEsIDEyXV1cbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKlxuICogTWF0cml4LmRvdChBLCBCKSAvLyBbWzU4LCA2NF0sIFsxMzksIDE1NF1dXG4gKlxuICovXG5NYXRyaXguZG90ID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kb3QoTWF0cml4Lm9mKEIpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNmaWxsXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHRoZSBwcm92aWRlZCBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuZmlsbCh4ID0+IDQyKVxuICogLy8gW1s0Miw0Miw0Ml0sIFs0Miw0Miw0Ml0sIFs0Miw0Miw0Ml1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChtYXAoeCA9PiBmKHgpKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuemVyb3MoKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSByb3dzIHtOdW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge051bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lnplcm9zKDMsIDMpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC56ZXJvcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNvbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5vbmVzKClcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5vbmVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgub25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcGFyYW0gcm93cyB7TnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtOdW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vbmVzKDEsIDEpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5vbmVzID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gdmFsdWVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxXVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgucmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSBudW1iZXJzXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHdoaWNoIHJldHVybnMgcmFuZG9tIHZhbHVlcy4gRGVmYXVsdCByYW5kb20gdmFsdWVzIGFyZSBiZXR3ZWVuIC0xIGFuZCAxXG4gKiBAcGFyYW0gcm93cyB7TnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtOdW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSwgcm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3RvQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgdGhlIGFycmF5IGZyb20gdGhlIG1hdHJpeFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubWFwKHJvdyA9PiByb3cubWFwKGNvbCA9PiBjb2wpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNjbG9uZVxuICogQGRlc2MgUmV0dXJucyBhIGNsb25lIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXguZnJvbUFycmF5KHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZnJvbUFycmF5XG4gKiBAZGVzYyBSZXR1cm5zIGEgTWF0cml4IGZyb20gYW4gYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAocm93ID0+IG1hcChjb2wgPT4gY29sKShyb3cpKShhcnIpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCN0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbLTEsIDJdLCBbMywgNF0sIFstOCwgMl0pXG4gKiBjb25zdCBiID0gQS50cmFuc3Bvc2UoKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZCh0cmFuc3Bvc2UsIFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgudHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IEEgTWF0cml4IG9yIGEgbWF0cml4IGFycmF5XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdXG4gKiBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZShhKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2FkZFxuICogQHBhcmFtIE0ge01hdHJpeHxudW1iZXJ9IEFkZCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuYWRkKDEpIC8vIFtbNiwgNV1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5hZGQoQikgLy8gW1sxMCwgMTBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGFkZCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCArIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKyBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VidHJhY3RcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBTdWJ0cmFjdCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuc3VidHJhY3QoMSkgLy8gW1s0LCAyXV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLnN1YnRyYWN0KEIpIC8vIFtbMCwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBzdWJ0cmFjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCAtIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggLSBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbXVsdGlwbHlcbiAqIEBkZXNjIE11dGxpcGx5IGEgc2NhbGFyIG9yIGEgbXRyYWl4IHdpdGggYSBtYXRyaXguIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbXVsdGlwbGljYXRpb24gaXMgbm90IHBvc3NpYmxlLlxuICogQHBhcmFtIE0ge01hdHJpeHxudW1iZXJ9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRpdGl2ZWludmVyc2VcbiAqIEBkZXNjIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWF0cml4IG9idGFpbmVkIGJ5IGNoYW5naW5nIHRoZSBzaWduIG9mIGV2ZXJ5IG1hdHJpeCBlbGVtZW50LiBUaGUgYWRkaXRpdmUgaW52ZXJzZSBvZiBtYXRyaXggQSBpcyB3cml0dGVuIOKAk0EuXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwtNV0sIFstNCwgNF1dKVxuICogY29uc3QgbWludXNBID0gQS5hZGRpdGl2ZWludmVyc2UoKVxuICogLy8gW1stNSwgNV0sIFs0LCAtNF1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkaXRpdmVpbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KC0xKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaGFkYW1hcmRcblxuICogQHNlZSBtdWx0aXBseVxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmhhZGFtYXJkKDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuaGFkYW1hcmQoQikgLy8gW1syNSwgMjVdXVxuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaGFkYW1hcmQgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2x1XG4gKiBAZGVzYyBDYWxjdWxhdGVzIExVIGRlY29tcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4W119XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbMywgLTcsIC0yLCAyXSwgWy0zLCA1LCAxLCAwXSwgWzYsIC00LCAwLCAtNV0sIFstOSwgNSwgLTUsIDEyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIGNvbnN0IGx1ID0gQS5sdSgpXG4gKiAvLyBMLl9fdmFsdWUgPSBbIFsgMSwgMCwgMCwgMCBdLCBbIC0xLCAxLCAwLCAwIF0sIFsgMiwgLTUsIDEsIDAgXSwgWyAtMywgOCwgMywgMSBdIF1cbiAqIC8vIFUuX192YWx1ZSA9ICBbIFsgMywgLTcsIC0yLCAyIF0sIFsgMCwgLTIsIC0xLCAyIF0sIFsgMCwgMCwgLTEsIDEgXSwgWyAwLCAwLCAwLCAtMSBdIF1cbiAqIE1hdHJpeC5kb3QobHVbMF0sIGx1WzFdKSAvLyByZXR1cm5zIGNsb25lIG9mIEFcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubHUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCB0b2wgPSAxZS02XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTCA9IHRoaXMuemVyb3MoKVxuICBjb25zdCBVID0gdGhpcy56ZXJvcygpXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBpZiAoTWF0aC5hYnMoQS5fX3ZhbHVlW2tdW2tdKSA8IHRvbCkgdGhyb3cgRXJyb3IoJ0Nhbm5vdCBwcm9jZWVkIHdpdGhvdXQgYSByb3cgZXhjaGFuZ2UnKVxuICAgIEwuX192YWx1ZVtrXVtrXSA9IDFcbiAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyArK2kpIHtcbiAgICAgIEwuX192YWx1ZVtpXVtrXSA9IEEuX192YWx1ZVtpXVtrXSAvIEEuX192YWx1ZVtrXVtrXVxuICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbjsgKytqKSB7XG4gICAgICAgIEEuX192YWx1ZVtpXVtqXSA9IEEuX192YWx1ZVtpXVtqXSAtIEwuX192YWx1ZVtpXVtrXSAqIEEuX192YWx1ZVtrXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBsID0gazsgbCA8IG47ICsrbCkge1xuICAgICAgVS5fX3ZhbHVlW2tdW2xdID0gQS5fX3ZhbHVlW2tdW2xdXG4gICAgfVxuICB9XG4gIHJldHVybiBbTCwgVV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjcnJlZlxuICogQHJldHVybnMge01hdHJpeHxBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIEEgPSBNYXRyaXgub2YoW1stMSwgMV0sIFstMSwgMF0sIFswLCAtMV0sIFstMSwgLTJdXSlcbiAqIEEucnJlZigpIC8vICBbIFsgMSwgMCBdLCBbIC0wLCAxIF0sIFsgMCwgMCBdLCBbIDAsIDAgXSBdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucnJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGxlYWQgPSAwXG4gIGNvbnN0IHJlc3VsdE1hdHJpeCA9IHRoaXMuY2xvbmUoKVxuXG4gIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5nZXRSb3dzKCk7ICsrcikge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSA8PSBsZWFkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgfVxuICAgIGxldCBpID0gclxuICAgIHdoaWxlIChyZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXSA9PT0gMCkge1xuICAgICAgKytpXG4gICAgICBpZiAodGhpcy5nZXRSb3dzKCkgPT09IGkpIHtcbiAgICAgICAgaSA9IHJcbiAgICAgICAgKytsZWFkXG4gICAgICAgIGlmICh0aGlzLmdldENvbHMoKSA9PT0gbGVhZCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0bXAgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtyXSA9IHRtcFxuXG4gICAgbGV0IHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2xlYWRdXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtqXSAvPSB2YWxcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0Um93cygpOyArK2kpIHtcbiAgICAgIGlmIChpID09PSByKSBjb250aW51ZVxuICAgICAgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtqXSAtPSB2YWwgKiByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICBsZWFkKytcbiAgfVxuICByZXR1cm4gcmVzdWx0TWF0cml4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3NvbHZlXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBTb2x2ZSB4QSA9IGJcbiAqIC8vIDV4ICsgeSAgPSA3XG4gKiAvLyAzeCAtIDR5ID0gMThcbiAqIC8vIFNvbHV0aW9uIGZvciB4IGFuZCB5OlxuICogLy8geCA9IDJcbiAqIC8vIHkgPSAtM1xuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCAxXSwgWzMsIC00XV0pXG4gKiBjb25zdCBzb2x2ZUEgPSBBLnNvbHZlKFs3LCAxOF0pIC8vIFsyLCAtM11cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc29sdmUgPSBmdW5jdGlvbiAoYikge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IExVID0gQS5sdSgpXG4gIGNvbnN0IEwgPSBMVVswXVxuICBjb25zdCBVID0gTFVbMV1cbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGxldCBzID0gMFxuICBjb25zdCBjID0gW11cbiAgY29uc3QgeCA9IFtdXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7ICsraikge1xuICAgICAgcyA9IHMgKyBMLl9fdmFsdWVba11bal0gKiBjW2pdXG4gICAgfVxuICAgIGNba10gPSBiW2tdIC0gc1xuICAgIHMgPSAwXG4gIH1cbiAgZm9yIChsZXQgYSA9IG4gLSAxOyBhID4gLTE7IC0tYSkge1xuICAgIGxldCB0ID0gMFxuICAgIGZvciAobGV0IGIgPSBhICsgMTsgYiA8IG47ICsrYikge1xuICAgICAgdCA9IHQgKyBVLl9fdmFsdWVbYV1bYl0gKiB4W2JdXG4gICAgfVxuICAgIHhbYV0gPSAoY1thXSAtIHQpIC8gVS5fX3ZhbHVlW2FdW2FdXG4gIH1cbiAgcmV0dXJuIHhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2ludmVyc2VcblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMiwgNF1dKS5pbnZlcnNlKClcbiAqIC8vIFsgWyAyLCAtMC41IF0sIFsgLTEsIDAuNSBdIF1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBJID0gQS5pZGVudGl0eSgpXG4gIGNvbnN0IEludiA9IEEuY29uY2F0KEkpLnJyZWYoKVxuXG4gIGNvbnN0IHJlc3VsdCA9IEludi5fX3ZhbHVlLnJlZHVjZSgocmVzdWx0LCB4LCBpZHgpID0+IHtcbiAgICBjb25zdCBoYWxmID0geC5sZW5ndGggLyAyXG4gICAgcmVzdWx0LnB1c2goeC5zbGljZShoYWxmLCB4Lmxlbmd0aCkpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCBbXSlcbiAgcmV0dXJuIE1hdHJpeC5vZihyZXN1bHQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNyYW5rXG5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcnJlZiA9IHRoaXMucnJlZigpXG4gIGxldCByZXN1bHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcnJlZi5nZXRDb2xzKCk7ICsraSkge1xuICAgIHJlc3VsdCArPSBycmVmLl9fdmFsdWVbaV1baV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaW1lbnNpb25cblxuICogQHNlZSByYW5rXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmFuaygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFnXG5cbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLmRpYWcoKVxuICogLy8gWzEsIDEsIDFdXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZygpXG4gKiAvLyBbMCwgMCwgMCwgMCwgMF1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoeFtpZHhdKVxuICB9KShbXSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFncHJvZHVjdChbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gMTBcbiAqXG4gKi9cbk1hdHJpeC5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZGlhZ3Byb2R1Y3QoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLnN1bSgpXG4gKiAvLyA5XG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuc3VtKClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4KSA9PiB7XG4gICAgYWNjICs9IGZvbGQoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KSgwKSh4KVxuICAgIHJldHVybiBhY2NcbiAgfSkoMCkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5zdW0oW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDlcbiAqXG4gKi9cbk1hdHJpeC5zdW0gPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnN1bSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNrcm9uZWNrZXJcbiAqIEBkZXNjIFRoZSBLcm9uZWNrZXIgcHJvZHVjdCBpcyBhbiBvcGVyYXRpb24gb24gdHdvIG1hdHJpY2VzIG9mIGFyYml0cmFyeSBzaXplIHJlc3VsdGluZyBpbiBhIGJsb2NrIG1hdHJpeC5cbiAqIEBwYXJhbSBNIHtNYXRyaXh9IFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAodGhpcyDiipcgTSlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUua3JvbmVja2VyID0gZnVuY3Rpb24gKE0pIHtcbiAgY29uc3QgbSA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IG4gPSB0aGlzLmdldENvbHMoKVxuICBjb25zdCBwID0gTS5nZXRSb3dzKClcbiAgY29uc3QgcSA9IE0uZ2V0Q29scygpXG5cbiAgY29uc3QgbGVmdCA9IHRoaXMuX192YWx1ZVxuICBjb25zdCByaWdodCA9IE0uX192YWx1ZVxuXG4gIGNvbnN0IGZyYW1lID0gZ2VuZXJhdGUobSAqIHAsIG4gKiBxKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgZnJhbWVbcCAqIGkgKyBrXVtxICogaiArIGxdID0gbGVmdFtpXVtqXSAqIHJpZ2h0W2tdW2xdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0cml4Lm9mKGZyYW1lKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgua3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gQSB7TWF0cml4fSBUaGUgbGVmdCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEBwYXJhbSBCIHtNYXRyaXh9IFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmtyb25lY2tlcihCKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICdmdW4uanMvc3JjL2NvbmNhdCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiAoTSwgbSwgaWR4KSB7XG4gIHJldHVybiBjb25jYXQobSwgTS5fX3ZhbHVlW2lkeF0pXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IHJvdW5kIGZyb20gJy4vcm91bmQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvdFxuICogQHBhcmFtIEIge01hdHJpeH1cbiAqIEBwYXJhbSBhIHtBcnJheX1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKGRlY2ltYWxzLCBCLCBhKSA9PiBtYXAoKGl0ZW0sIGkpID0+IHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaikgPT4ge1xuICAgIGFjYyArPSByb3VuZCh4ICogQi5fX3ZhbHVlW2pdW2ldLCBkZWNpbWFscylcbiAgICByZXR1cm4gYWNjXG4gIH0sIDApKGEpXG59KShCLl9fdmFsdWVbMF0pKVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KG0gPT4gW10pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBnZW5lcmF0ZVxuICogQGRlc2MgR2VuZXJhdG9yIGZ1bmN0aW9uIGZvciBhIG1hdHJpeCBhcnJheSwgdmFsdWVzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG4gKiBAcGFyYW0gcm93cyB7bnVtYmVyfVxuICogQHBhcmFtIGNvbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHthbnlbXVtdfVxuICovXG5leHBvcnQgZGVmYXVsdCAocm93cywgY29scykgPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiIsImltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGlkZW50aXR5XG4gKiBAZGVzYyBDcmVhdGVzIGFuIGlkZW50aXkgbWF0cml4IGZyb20gYW4gZW1wdHkgYXJyYXlcbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKG0sIGlkeCkgPT4gbWFwKChyb3dzLCBqZHgpID0+IChpZHggPT09IGpkeCkgKiAxKShtKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcm91bmRcbiAqIEBwYXJhbSB2YWx1ZSB7bnVtYmVyfVxuICogQHBhcmFtIGRlY2ltYWxzIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3VuZCAodmFsdWUsIGRlY2ltYWxzKSB7XG4gIHJldHVybiBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSArICdlJyArIGRlY2ltYWxzKSArICdlLScgKyBkZWNpbWFscylcbn1cbiIsImltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBUcmFuc3Bvc2VzIGEgYXJyYXkgb2YgYXJyYXlzIHVzaW5nIHRoZSBNYXRyaXgubWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChwcmV2LCBuZXh0KSA9PiBtYXAoKGl0ZW0sIGkpID0+IChwcmV2W2ldIHx8IFtdKS5jb25jYXQobmV4dFtpXSkpKG5leHQpKVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBmdW5jdGlvbiB3aXRoIGFyaXR5IDFcbiAqIEBmdW5jdGlvbiBjdXJyeTFcbiAqIEBwcml2YXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5MSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0aGlzXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICpcbiAqIEBmdW5jdGlvbiBhbmRcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICh4LCB5KSAtPiBib29sZWFuXG4gKiBAcGFyYW0geyp9IHggLSBBIHByZWRpY2F0ZVxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHlcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gYXJyYXlDb25jYXRcbiAqIEBwYXJhbSBhMVxuICogQHBhcmFtIGEyXG4gKiBAcmV0dXJucyB7VFtdfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdChhLCBiKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBlcXVhbHNBcnJheVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gaW5pdFxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gaXNBcnJheShbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gdHJ1ZVxuICovXG5cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICogQHNpbmNlIHYxLjAuNFxuICogQHBhcmFtIHthfSBhIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge2F9IGIgLSByaWdodCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcmV0dXJuIHthfSBDb25jYXRlbmF0ZWQgaXRlbVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUNvbmNhdCBmcm9tICcuL2FycmF5L2NvbmNhdCdcbmltcG9ydCBzdHJpbmdDb25jYXQgZnJvbSAnLi9zdHJpbmcvY29uY2F0J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnU3RyaW5nJzogc3RyaW5nQ29uY2F0LFxuICAgICdBcnJheSc6IGFycmF5Q29uY2F0XG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oYSwgYilcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBAZnVuY3Rpb24gY3VycnlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBjb25zdCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcbiAgICAgIDogZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgZXF1YWxpdHkgb2YgMiBpdGVtc1xuICogQHBhcmFtIHsqfSB4IC0gTGVmdCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHBhcmFtIHsqfSB5IC0gUmlnaHQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG5hbiA9IE51bWJlci5OYU5cbiAqIGVxdWFsKG5hbiwgbmFuKSAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBjb25zdCBhcnIxID0gWzAsIDEsIDIsIDNdXG4gKiBjb25zdCBhcnIyID0gW251bGwsIDEsIDIsIDNdXG4gKiBlcXVhbHMoYXJyMSwgYXJyMikgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIGVxdWFscyhuZXcgT2JqZWN0KHsnYSc6IDAsICdiJzogMX0pLCB7J2EnOiAwLCAnYic6IDF9KSAvLyB0cnVlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGV4aXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKChhLCBiLCBjLCBhKSDihpIgYSkg4oaSIGEg4oaSIFtiXSDihpIgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBhIGlzIHRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0geyp9IFtiXSB0aGUgYXJyYXkgbGlrZSBpdGVtIHRvIGl0ZXJhdGUgb3ZlclxuICogQHJldHVybiB7Kn0gYSBpcyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgLy8gaWYgKGEubmV4dCkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGEpXG4gIC8vIH1cbiAgLy8gaWYgKHR5cGUoU3ltYm9sKSAhPT0gJ3VuZGVmaW5lZCcgJiYgYVtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gIC8vICAgcmV0dXJuIGl0ZXJhYmxlRm9sZChjYiwgaW5pdCwgYVtTeW1ib2wuaXRlcmF0b3JdKCkpXG4gIC8vIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuXG4vLyBmdW5jdGlvbiBpdGVyYWJsZUZvbGQgKGNiLCBhY2MsIGdlbikge1xuLy8gICBsZXQgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbi8vICAgICBhY2MgPSBjYihhY2MsIHN0ZXAudmFsdWUpXG4vLyAgICAgc3RlcCA9IGdlbi5uZXh0KClcbi8vICAgfVxuLy8gICByZXR1cm4gYWNjXG4vLyB9XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGlkZW50aWNhbFxuICogQGRlc2NyaXB0aW9uIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzTmFuIGZyb20gJy4vbnVtYmVyL2lzTmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpZGVudGljYWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcbiAgfVxuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKlxuICovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3Jcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0ZXIgKGl0ZXIpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcltTeW1ib2wuaXRlcmF0b3JdKVxufVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gSXRlcmF0b3IgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuM1xuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGFcbiAqIEByZXR1cm4ge0l0ZXJhdG9yfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBpdGVyYXRvcikge1xuICBsZXQgciA9IFtdXG4gIGZvciAobGV0IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKTsgbmV4dFZhbHVlLmRvbmUgIT09IHRydWU7IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgIHIucHVzaChjYWxsYmFjayhpdGVyYXRvci52YWx1ZSgpKSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGl0ZXJhYmxlIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggbWFwcyBvdmVyIGFuIGl0ZXJhYmxlLlxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuL2FycmF5L21hcCdcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuL21hcC9tYXAnXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4vc3RyaW5nL21hcCdcbmltcG9ydCBpdGVyYXRvck1hcCBmcm9tICcuL2l0ZXJhdG9yL21hcCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBpc0l0ZXJhdG9yIGZyb20gJy4vaXRlcmF0b3IvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcE1hcChjYiwgYSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gYXJyYXlNYXAoY2IsIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0l0ZXJhdG9yKGEpXG4gICAgICAgID8gaXRlcmF0b3JNYXAoY2IsIGEpXG4gICAgICAgIDogYXJyYXlNYXAoY2IsIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIE1hcCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtNYXB9IGFcbiAqIEByZXR1cm4ge01hcH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCBrID0ga2V5cyhhKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gZW1wdHkoYSlcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvKipcbiAqIEBjbGFzcyBBY3RpdmF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSBmdW5jXG4gKiBAcGFyYW0gZGZ1bmNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbkZ1bmN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGZ1bmMsIGRmdW5jKSB7XG4gICAgdGhpcy5mdW5jID0gZnVuY1xuICAgIHRoaXMuZGZ1bmMgPSBkZnVuY1xuICB9XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJ0Bhc3R1YW5heC9mdW5tYXRyaXgnXG5pbXBvcnQgc2lnbW9pZCBmcm9tICcuL3V0aWwvc2lnbW9pZCdcblxuLyoqXG4gKiBAY2xhc3MgTmV1cmFsTmV0d29ya1xuICpcbiAqL1xuY2xhc3MgTmV1cmFsTmV0d29yayB7XG4gIGNvbnN0cnVjdG9yICguLi52YWx1ZXMpIHtcbiAgICBbdGhpcy5pbnB1dF9ub2RlcywgdGhpcy5oaWRkZW5fbm9kZXMsIHRoaXMub3V0cHV0X25vZGVzXSA9IHZhbHVlc1xuXG4gICAgdGhpcy53ZWlnaHRzX2loID0gbmV3IE1hdHJpeCh0aGlzLmhpZGRlbl9ub2RlcywgdGhpcy5pbnB1dF9ub2RlcylcbiAgICB0aGlzLndlaWdodHNfaG8gPSBuZXcgTWF0cml4KHRoaXMub3V0cHV0X25vZGVzLCB0aGlzLmhpZGRlbl9ub2RlcylcbiAgICB0aGlzLndlaWdodHNfaWgucmFuZG9taXplKClcbiAgICB0aGlzLndlaWdodHNfaG8ucmFuZG9taXplKClcblxuICAgIHRoaXMuYmlhc19oID0gbmV3IE1hdHJpeCh0aGlzLmhpZGRlbl9ub2RlcywgMSlcbiAgICB0aGlzLmJpYXNfbyA9IG5ldyBNYXRyaXgodGhpcy5vdXRwdXRfbm9kZXMsIDEpXG4gICAgdGhpcy5iaWFzX2gucmFuZG9taXplKClcbiAgICB0aGlzLmJpYXNfby5yYW5kb21pemUoKVxuXG4gICAgdGhpcy5zZXRBY3RpdmF0aW9uRnVuY3Rpb24oKVxuICAgIHRoaXMuc2V0TGVhcm5pbmdSYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHNldEFjdGl2YXRpb25GdW5jdGlvblxuICAgKiBAcGFyYW0gZnVuY1xuICAgKi9cbiAgc2V0QWN0aXZhdGlvbkZ1bmN0aW9uIChmdW5jID0gc2lnbW9pZCkge1xuICAgIHRoaXMuYWN0aXZhdGlvbl9mdW5jdGlvbiA9IGZ1bmNcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyIHNldExlYXJuaW5nUmF0ZVxuICAgKiBAcGFyYW0gbGVhcm5pbmdSYXRlXG4gICAqL1xuICBzZXRMZWFybmluZ1JhdGUgKGxlYXJuaW5nUmF0ZSA9IDAuMSkge1xuICAgIHRoaXMubGVhcm5pbmdfcmF0ZSA9IGxlYXJuaW5nUmF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIgcHJlZGljdFxuICAgKiBAcGFyYW0gaW5wdXRBcnJheVxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqL1xuICBwcmVkaWN0IChpbnB1dEFycmF5KSB7XG4gICAgLy8gR2VuZXJhdGluZyB0aGUgSGlkZGVuIE91dHB1dHNcbiAgICBsZXQgaW5wdXRzID0gTWF0cml4LmZyb21BcnJheShpbnB1dEFycmF5KVxuICAgIGxldCBoaWRkZW4gPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c19paCwgaW5wdXRzKVxuICAgIGhpZGRlbi5hZGQodGhpcy5iaWFzX2gpXG4gICAgLy8gYWN0aXZhdGlvbiBmdW5jdGlvbiFcbiAgICBoaWRkZW4ubWFwKHRoaXMuYWN0aXZhdGlvbl9mdW5jdGlvbi5mdW5jKVxuXG4gICAgLy8gR2VuZXJhdGluZyB0aGUgb3V0cHV0J3Mgb3V0cHV0IVxuICAgIGxldCBvdXRwdXQgPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c19obywgaGlkZGVuKVxuICAgIG91dHB1dC5hZGQodGhpcy5iaWFzX28pXG4gICAgb3V0cHV0Lm1hcCh0aGlzLmFjdGl2YXRpb25fZnVuY3Rpb24uZnVuYylcblxuICAgIC8vIFNlbmRpbmcgYmFjayB0byB0aGUgY2FsbGVyIVxuICAgIHJldHVybiBvdXRwdXQudG9BcnJheSgpXG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlciB0cmFpblxuICAgKiBAcGFyYW0gaW5wdXRBcnJheVxuICAgKiBAcGFyYW0gdGFyZ2V0QXJyYXlcbiAgICovXG4gIHRyYWluIChpbnB1dEFycmF5LCB0YXJnZXRBcnJheSkgeyAvLyByYXcgZGF0YSA9PiBleHBlY3RlZCBvdXRwdXRcbiAgICAvLyBHZW5lcmF0aW5nIHRoZSBIaWRkZW4gT3V0cHV0c1xuICAgIGxldCBpbnB1dHMgPSBNYXRyaXguZnJvbUFycmF5KGlucHV0QXJyYXkpXG4gICAgbGV0IGhpZGRlbiA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzX2loLCBpbnB1dHMpXG5cbiAgICBoaWRkZW4uYWRkKHRoaXMuYmlhc19oKVxuICAgIC8vIGFjdGl2YXRpb24gZnVuY3Rpb24hXG4gICAgaGlkZGVuLm1hcCh0aGlzLmFjdGl2YXRpb25fZnVuY3Rpb24uZnVuYylcblxuICAgIC8vIEdlbmVyYXRpbmcgdGhlIG91dHB1dCdzIG91dHB1dCFcbiAgICBsZXQgb3V0cHV0cyA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzX2hvLCBoaWRkZW4pXG4gICAgb3V0cHV0cy5hZGQodGhpcy5iaWFzX28pXG4gICAgb3V0cHV0cy5tYXAodGhpcy5hY3RpdmF0aW9uX2Z1bmN0aW9uLmZ1bmMpXG5cbiAgICAvLyBDb252ZXJ0IGFycmF5IHRvIG1hdHJpeCBvYmplY3RcbiAgICBsZXQgdGFyZ2V0cyA9IE1hdHJpeC5mcm9tQXJyYXkodGFyZ2V0QXJyYXkpXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVycm9yXG4gICAgLy8gRVJST1IgPSBUQVJHRVRTIC0gT1VUUFVUU1xuICAgIGxldCBvdXRwdXRFcnJvcnMgPSBNYXRyaXguc3VidHJhY3QodGFyZ2V0cywgb3V0cHV0cylcblxuICAgIC8vIGxldCBncmFkaWVudCA9IG91dHB1dHMgKiAoMSAtIG91dHB1dHMpO1xuICAgIC8vIENhbGN1bGF0ZSBncmFkaWVudFxuICAgIGxldCBncmFkaWVudHMgPSBNYXRyaXgubWFwKG91dHB1dHMsIHRoaXMuYWN0aXZhdGlvbl9mdW5jdGlvbi5kZnVuYylcbiAgICBncmFkaWVudHMubXVsdGlwbHkob3V0cHV0RXJyb3JzKVxuICAgIGdyYWRpZW50cy5tdWx0aXBseSh0aGlzLmxlYXJuaW5nX3JhdGUpXG5cbiAgICAvLyBDYWxjdWxhdGUgZGVsdGFzXG4gICAgbGV0IGhpZGRlblQgPSBNYXRyaXgudHJhbnNwb3NlKGhpZGRlbilcbiAgICBsZXQgd2VpZ2h0SG9EZWx0YXMgPSBNYXRyaXguZG90KGdyYWRpZW50cywgaGlkZGVuVClcblxuICAgIC8vIEFkanVzdCB0aGUgd2VpZ2h0cyBieSBkZWx0YXNcbiAgICB0aGlzLndlaWdodHNfaG8uYWRkKHdlaWdodEhvRGVsdGFzKVxuICAgIC8vIEFkanVzdCB0aGUgYmlhcyBieSBpdHMgZGVsdGFzICh3aGljaCBpcyBqdXN0IHRoZSBncmFkaWVudHMpXG4gICAgdGhpcy5iaWFzX28uYWRkKGdyYWRpZW50cylcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgaGlkZGVuIGxheWVyIGVycm9yc1xuICAgIGxldCB3aG9UID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzLndlaWdodHNfaG8pXG4gICAgbGV0IGhpZGRlbkVycm9ycyA9IE1hdHJpeC5kb3Qod2hvVCwgb3V0cHV0RXJyb3JzKVxuXG4gICAgLy8gQ2FsY3VsYXRlIGhpZGRlbiBncmFkaWVudFxuICAgIGxldCBoaWRkZW5HcmFkaWVudCA9IE1hdHJpeC5tYXAoaGlkZGVuLCB0aGlzLmFjdGl2YXRpb25fZnVuY3Rpb24uZGZ1bmMpXG4gICAgaGlkZGVuR3JhZGllbnQubXVsdGlwbHkoaGlkZGVuRXJyb3JzKVxuICAgIGhpZGRlbkdyYWRpZW50Lm11bHRpcGx5KHRoaXMubGVhcm5pbmdfcmF0ZSlcblxuICAgIC8vIENhbGN1YXRlIGlucHV0LT5oaWRkZW4gZGVsdGFzXG4gICAgbGV0IGlucHV0c1QgPSBNYXRyaXgudHJhbnNwb3NlKGlucHV0cylcbiAgICBsZXQgd2VpZ2h0SWhEZWx0YXMgPSBNYXRyaXguZG90KGhpZGRlbkdyYWRpZW50LCBpbnB1dHNUKVxuXG4gICAgdGhpcy53ZWlnaHRzX2loLmFkZCh3ZWlnaHRJaERlbHRhcylcbiAgICAvLyBBZGp1c3QgdGhlIGJpYXMgYnkgaXRzIGRlbHRhcyAod2hpY2ggaXMganVzdCB0aGUgZ3JhZGllbnRzKVxuICAgIHRoaXMuYmlhc19oLmFkZChoaWRkZW5HcmFkaWVudClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXVyYWxOZXR3b3JrXG4iLCIvKipcbiAqIEBjbGFzcyBQZXJjZXB0cm9uXG4gKiBAY2xhc3NkZXNjIFBlcmNlcHRyb24gdG8gdHJhaW4gYW5kIHByZWRpY3RcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKFswLjIzNjU2OTgsIDAuNDU2Nzg5NywgMC45NTk4OTg5OCwgLTAuNDU3ODc4Nzg3XSlcbiAqXG4gKi9cbmxldCBQZXJjZXB0cm9uID0gZnVuY3Rpb24gKHdlaWdodHMpIHtcbiAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cyB8fCBbXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gb2ZcbiAqIEBkZXNjIENyZWF0ZXMgYSBQZXJjZXB0cm9uIG9iamVjdFxuICogQHBhcmFtIHdlaWdodHMge2FycmF5fSBXZWlndGhzIGZvciBwcmVkaWN0aW5nXG4gKiBAcmV0dXJucyB7UGVyY2VwdHJvbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKClcbiAqIGNvbnN0IHRyYWluICA9IFsuLi5dXG4gKiBtLnRyYWluKHRyYWluLCAwLjEsIDEwMDAwKVxuICpcbiAqL1xuUGVyY2VwdHJvbi5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFBlcmNlcHRyb24pIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQZXJjZXB0cm9uKSB7XG4gICAgdGhpcy53ZWlnaHRzID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IFBlcmNlcHRyb24odmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5QZXJjZXB0cm9uLnByb3RvdHlwZS50eXBlID0gJ1BlcmNlcHRyb24nXG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEBmdW5jdGlvbiBQZXJjZXB0cm9uLnByZWRpY3RcbiAqIEBwYXJhbSByb3cge0FycmF5fSBBcnJheSBvZiB2YWx1ZXMgdG8gcHJlZGljdFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAocm93KSB7XG4gIHZhciBhY3RpdmF0aW9uID0gdGhpcy53ZWlnaHRzWzBdXG4gIHJvdy5mb3JFYWNoKCh4LCBpKSA9PiB7XG4gICAgYWN0aXZhdGlvbiArPSB0aGlzLndlaWdodHNbaSArIDFdICogeFxuICB9KVxuICByZXR1cm4gYWN0aXZhdGlvbiA+PSAwID8gMSA6IDBcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhaW5cbiAqIEBwYXJhbSB0cmFpbiB7QXJyYXl9IERhdGFzZXQgdG8gdHJhaW4gdGhlIHByZWNlcHRyb25cbiAqIEBwYXJhbSBsUmF0ZSB7TnVtYmVyfSBTZXQgdGhlIGxhcm5pbmcgcmF0ZSBvZiB0aGUgcGVyY2VwdHJvblxuICogQHBhcmFtIG5FcG9jaCB7TnVtYmVyfSBTZXQgdGhlbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gdHJhaW4gdGhlIHBlcmNlcHRyb25cbiAqL1xuUGVyY2VwdHJvbi5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbiAodHJhaW4sIGxSYXRlLCBuRXBvY2gpIHtcbiAgdGhpcy53ZWlnaHRzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodHJhaW5bMF0ubGVuZ3RoKSkubWFwKHggPT4gMClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuRXBvY2g7IGkrKykge1xuICAgIHRyYWluLmZvckVhY2goKHgsIGlkeCkgPT4ge1xuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB4LnNsaWNlKC0xKVswXVxuICAgICAgY29uc3Qgcm93ID0geC5zbGljZSgwLCAtMSlcbiAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSB0aGlzLnByZWRpY3Qocm93KVxuICAgICAgY29uc3QgZXJyb3IgPSBleHBlY3RlZCAtIHByZWRpY3Rpb25cbiAgICAgIHJvdy5mb3JFYWNoKCh5LCBqKSA9PiB7XG4gICAgICAgIHRoaXMud2VpZ2h0c1tqICsgMV0gKz0gbFJhdGUgKiBlcnJvciAqIHlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJjZXB0cm9uXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlcHRyb24gfSBmcm9tICcuL1BlcmNlcHRyb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5ldXJhbE5ldHdvcmsgfSBmcm9tICcuL05ldXJhbE5ldHdvcmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGl2YXRpb25GdW5jdGlvbiB9IGZyb20gJy4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWdtb2lkIH0gZnJvbSAnLi91dGlsL3NpZ21vaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhbmggfSBmcm9tICcuL3V0aWwvdGFuaCdcbiIsImltcG9ydCBBY3RpdmF0aW9uRnVuY3Rpb24gZnJvbSAnLi4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBzaWdtb2lkXG4gKiBAdHlwZSB7QWN0aXZhdGlvbkZ1bmN0aW9ufVxuICovXG5jb25zdCBzaWdtb2lkID0gbmV3IEFjdGl2YXRpb25GdW5jdGlvbihcbiAgeCA9PiAxIC8gKDEgKyBNYXRoLmV4cCgteCkpLFxuICB5ID0+IHkgKiAoMSAtIHkpXG4pXG5leHBvcnQgZGVmYXVsdCBzaWdtb2lkXG4iLCJpbXBvcnQgQWN0aXZhdGlvbkZ1bmN0aW9uIGZyb20gJy4uL0FjdGl2YXRpb25GdW5jdGlvbidcblxuLyoqXG4gKiBAZnVuY3Rpb24gdGFuaFxuICogQHR5cGUge0FjdGl2YXRpb25GdW5jdGlvbn1cbiAqL1xuY29uc3QgdGFuaCA9IG5ldyBBY3RpdmF0aW9uRnVuY3Rpb24oXG4gIHggPT4gTWF0aC50YW5oKHgpLFxuICB5ID0+IDEgLSAoeSAqIHkpXG4pXG5leHBvcnQgZGVmYXVsdCB0YW5oXG4iXSwic291cmNlUm9vdCI6IiJ9