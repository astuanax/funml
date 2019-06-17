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
 * @param {Function} cb receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {*} init - the the initial value
 * @param {Array|Object} a the array like item to iterate over
 * @return {*} The accumulated value
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function fold (cb, init, a) {
  const typeMap = {
    'Object': _object_fold__WEBPACK_IMPORTED_MODULE_2__["default"],
    'Array': _array_fold__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
  return typeMap[Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(a)](cb, init, a)
}));


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

/**
 * @class NeuralNetwork
 * @param {Number} inputNodes
 * @param {Nmber} hiddenNodes
 * @param {Number} outputNodes
 */
var NeuralNetwork = function NeuralNetwork() {
  _classCallCheck(this, NeuralNetwork);

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  this.inputNodes = values[0];
  this.hiddenNodes = values[1];
  this.outputNodes = values[2];

  var f = function f(e) {
    return Math.random() * 2 - 1;
  };

  this.weightsIh = _funmatrix.default.random(f, this.hiddenNodes, this.inputNodes);
  this.weightsHo = _funmatrix.default.random(f, this.outputNodes, this.hiddenNodes);
  this.biasH = _funmatrix.default.random(f, this.hiddenNodes, 1);
  this.biasO = _funmatrix.default.random(f, this.outputNodes, 1);
  this.setActivationFunction();
  this.setLearningRate();
  this.type = 'NeuralNetwork';
};
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#setActivationFunction
 * @param {Function} func
 */


NeuralNetwork.prototype.setActivationFunction = function () {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sigmoid.default;
  this.activationFunction = func;
};
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#setLearningRate
 * @param {Number} learningRate
 */


NeuralNetwork.prototype.setLearningRate = function () {
  var learningRate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
  this.learningRate = learningRate;
};
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#predict
 * @param {Array} inputArray
 * @returns {Array}
 */


NeuralNetwork.prototype.predict = function (inputArray) {
  // Generating the Hidden Outputs
  var inputs = _funmatrix.default.fromArray(inputArray);

  var hidden = _funmatrix.default.dot(this.weightsIh, inputs);

  hidden.add(this.biasH); // activation function!

  hidden.map(this.activationFunction.func); // Generating the output's output!

  var output = _funmatrix.default.dot(this.weightsHo, hidden);

  output.add(this.biasO);
  output.map(this.activationFunction.func); // Sending back to the caller!

  return output.toArray();
};
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#train
 * @param {Array} inputArray
 * @param {Array} targetArray
 */


NeuralNetwork.prototype.train = function (inputArray, targetArray) {
  // Generating the Hidden Outputs
  var inputs = _funmatrix.default.fromArray(inputArray);

  var hidden = _funmatrix.default.dot(this.weightsIh, inputs);

  hidden.add(this.biasH); // activation function!

  hidden.map(this.activationFunction.func); // Generating the output's output!

  var outputs = _funmatrix.default.dot(this.weightsHo, hidden);

  outputs.add(this.biasO);
  outputs.map(this.activationFunction.func); // Convert array to matrix object

  var targets = _funmatrix.default.fromArray(targetArray); // Calculate the error
  // ERROR = TARGETS - OUTPUTS


  var outputErrors = _funmatrix.default.of(targets).subtract(outputs); // let gradient = outputs * (1 - outputs);
  // Calculate gradient


  var gradients = _funmatrix.default.of([[outputs.map(this.activationFunction.dfunc)]]);

  console.log(0, outputs, gradients, outputErrors);
  gradients = gradients.multiply(outputErrors);
  console.log(1, gradients, this.learningRate);
  gradients = gradients.multiply(this.learningRate);
  console.log(2, gradients); // Calculate deltas

  var hiddenT = _funmatrix.default.transpose(hidden);

  var weightHoDeltas = _funmatrix.default.dot(gradients, hiddenT); // Adjust the weights by deltas


  this.weightsHo.add(weightHoDeltas); // Adjust the bias by its deltas (which is just the gradients)

  this.biasO.add(gradients); // Calculate the hidden layer errors

  var whoT = _funmatrix.default.transpose(this.weightsHo);

  var hiddenErrors = _funmatrix.default.dot(whoT, outputErrors); // Calculate hidden gradient


  var hiddenGradient = _funmatrix.default.of(hidden).map(this.activationFunction.dfunc).multiply(hiddenErrors).multiply(this.learningRate); // Calcuate input->hidden deltas


  var inputsT = _funmatrix.default.transpose(inputs);

  var weightIhDeltas = _funmatrix.default.dot(hiddenGradient, inputsT);

  this.weightsIh.add(weightIhDeltas); // Adjust the bias by its deltas (which is just the gradients)

  this.biasH.add(hiddenGradient);
};

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
 * @function Perceptron.of
 * @desc Creates a Perceptron object
 * @param weights {array} Weights for predicting
 * @returns {Perceptron}
 * @example
 *
 * const weights = [0.123456, 0.458789, 0.9987454]
 * const m =  Perceptron.of(weights)
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
 * @function Perceptron#predict
 * @param row {Array} Array of values to predict
 * @returns {Boolean}
 * @example
 *
 * const m =  Perceptron.of()
 * const train  = [...] // dataset: [[0,1,2], [1,2,3]]
 * m.train(train, 0.1, 10000)
 * m.predict([1,2,1]) // returns 1 or 0
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
 * @memberOf Perceptron
 * @function Perceptron#train
 * @param train {Array} Dataset to train the preceptron
 * @param lRate {Number} Set the learning rate of the perceptron
 * @param nEpoch {Number} Set the number of iterations to train the perceptron
 * @example
 *
 * const m =  Perceptron.of()
 * const train  = [...] // dataset: [[0,1,2], [1,2,3]]
 * m.train(train, 0.1, 10000)
 * m.weights = [0.213131, -0.45464, 0.789797]
 *
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9AYXN0dWFuYXgvZnVubWF0cml4L3NyYy91dGlsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL19wcml2YXRlL2N1cnJ5MS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90eXBlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy9BY3RpdmF0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL1BlcmNlcHRyb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL3NpZ21vaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvdGFuaC5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uRnVuY3Rpb24iLCJmdW5jIiwiZGZ1bmMiLCJOZXVyYWxOZXR3b3JrIiwidmFsdWVzIiwiaW5wdXROb2RlcyIsImhpZGRlbk5vZGVzIiwib3V0cHV0Tm9kZXMiLCJmIiwiZSIsIk1hdGgiLCJyYW5kb20iLCJ3ZWlnaHRzSWgiLCJ3ZWlnaHRzSG8iLCJiaWFzSCIsImJpYXNPIiwic2V0QWN0aXZhdGlvbkZ1bmN0aW9uIiwic2V0TGVhcm5pbmdSYXRlIiwidHlwZSIsInByb3RvdHlwZSIsImFjdGl2YXRpb25GdW5jdGlvbiIsImxlYXJuaW5nUmF0ZSIsInByZWRpY3QiLCJpbnB1dEFycmF5IiwiaW5wdXRzIiwiZnJvbUFycmF5IiwiaGlkZGVuIiwiZG90IiwiYWRkIiwibWFwIiwib3V0cHV0IiwidG9BcnJheSIsInRyYWluIiwidGFyZ2V0QXJyYXkiLCJvdXRwdXRzIiwidGFyZ2V0cyIsIm91dHB1dEVycm9ycyIsIm9mIiwic3VidHJhY3QiLCJncmFkaWVudHMiLCJjb25zb2xlIiwibG9nIiwibXVsdGlwbHkiLCJoaWRkZW5UIiwidHJhbnNwb3NlIiwid2VpZ2h0SG9EZWx0YXMiLCJ3aG9UIiwiaGlkZGVuRXJyb3JzIiwiaGlkZGVuR3JhZGllbnQiLCJpbnB1dHNUIiwid2VpZ2h0SWhEZWx0YXMiLCJQZXJjZXB0cm9uIiwid2VpZ2h0cyIsInZhbCIsInJvdyIsImFjdGl2YXRpb24iLCJmb3JFYWNoIiwieCIsImkiLCJsUmF0ZSIsIm5FcG9jaCIsIkFycmF5IiwiYXBwbHkiLCJsZW5ndGgiLCJpZHgiLCJleHBlY3RlZCIsInNsaWNlIiwicHJlZGljdGlvbiIsImVycm9yIiwieSIsImoiLCJzaWdtb2lkIiwiZXhwIiwidGFuaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdI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Q0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBRUE7Ozs7QUFJQSxJQUFNb0IsT0FBTyxHQUFHLGdDQUNkLFVBQUFkLENBQUM7QUFBQSxTQUFJLEtBQUssSUFBSS9DLElBQUksQ0FBQzhELEdBQUwsQ0FBUyxDQUFDZixDQUFWLENBQVQsQ0FBSjtBQUFBLENBRGEsRUFFZCxVQUFBWSxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxJQUFJLElBQUlBLENBQVIsQ0FBTDtBQUFBLENBRmEsQ0FBaEI7ZUFJZUUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmY7Ozs7QUFFQTs7OztBQUlBLElBQU1FLElBQUksR0FBRyxnQ0FDWCxVQUFBaEIsQ0FBQztBQUFBLFNBQUkvQyxJQUFJLENBQUMrRCxJQUFMLENBQVVoQixDQUFWLENBQUo7QUFBQSxDQURVLEVBRVgsVUFBQVksQ0FBQztBQUFBLFNBQUksSUFBS0EsQ0FBQyxHQUFHQSxDQUFiO0FBQUEsQ0FGVSxDQUFiO2VBSWVJLEkiLCJmaWxlIjoiQGFzdHVhbmF4L2Z1bm1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAYXN0dWFuYXgvZnVubWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1sXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhc3R1YW5heC9mdW5tbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgZXF1YWxzIGZyb20gJ2Z1bi5qcy9zcmMvZXF1YWxzJ1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL3V0aWwvY29uY2F0J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vdXRpbC9lbXB0eSdcbmltcG9ydCBkb3QgZnJvbSAnLi91dGlsL2RvdCdcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL3V0aWwvaWRlbnRpdHknXG5pbXBvcnQgdHJhbnNwb3NlIGZyb20gJy4vdXRpbC90cmFuc3Bvc2UnXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAnLi91dGlsL2dlbmVyYXRlJ1xuXG4vKipcbiAqIEBjbGFzcyBNYXRyaXhcbiAqIEBjbGFzc2Rlc2MgTWF0cml4IGFwcGxpY2F0aXZlIHByb3ZpZGluZyBzdGFuZGFyZCBtYXRyaXggb3BlcmF0aW9uc1xuICogQHN1bW1hcnkgVGhlIE1hdHJpeCBjbGFzcyBzaG91bGQgbm90IGJlIGluc3RhbnRpYXRlZCB3aXRoIHRoZSBuZXcga2V5d29yZC4gSW5zdGVhZCB1c2UgdGhlIE1hdHJpeC5vZiBzeW50YXggdG8gY3JlYXRlIGEgbmV3IE1hdHJpeC4gVW5mb3J0dW5hdGx5IGpzZG9jcyBkb2VzIG5vdCBhbGxvdyBmb3IgdGhlIGNvbnN0cnVjdG9yIHRvIGJlIGhpZGRlbi5cbiAqIEBoaWRlY29udHJ1Y3RvclxuICogQHNlZSBvZlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xubGV0IE1hdHJpeCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5vZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYW5kIGZsYXR0ZW5zIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB2YWwge0FycmF5fGZ1bmN0aW9ufSBBbiBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5NYXRyaXgub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXRyaXgpIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgTWF0cml4KHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZVxuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge051bWJlcn0gcHJlY2lzaW9uXG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5wcmVjaXNpb24gPT09IDRcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5wcmVjaXNpb24gPSA0XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzZXRQcmVjaXNpb25cbiAqIEBwYXJhbSBwcmVjaXNpb24ge051bWJlcn0gU2V0IHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgZm9yIHJvdW5kaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnNldFByZWNpc2lvbigxMClcbiAqIG0ucHJlY2lzaW9uID09PSAxMFxuICovXG5NYXRyaXgucHJvdG90eXBlLnNldFByZWNpc2lvbiA9IGZ1bmN0aW9uIChwcmVjaXNpb24pIHtcbiAgdGhpcy5wcmVjaXNpb24gPSBwcmVjaXNpb25cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAbWVtYmVyIGlzU3ltbWV0cmljXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1N5bW1ldHJpYygpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3ltbWV0cmljID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMpLl9fdmFsdWVcbiAgcmV0dXJuIGVxdWFscyhhLCBiKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc1NxdWFyZVxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBjb250YWlucyBhIHNxdWFyZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3F1YXJlKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTcXVhcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5nZXRDb2xzKCksIHRoaXMuZ2V0Um93cygpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc09ydGhvZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1stMC4zMDkyLCAtMC45NTEwXSwgWy0wLjk1MTAsIDAuMzA5Ml1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiB0cnVlICA9PT0gQS5pc09ydGhvZ29uYWwoKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzT3J0aG9nb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXhBdCA9IHRoaXMuZG90KHRoaXMudHJhbnNwb3NlKCkpXG4gIGNvbnN0IEkgPSB0aGlzLmlkZW50aXR5KClcbiAgcmV0dXJuIGVxdWFscyhBeEF0LCBJKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRDb2xzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldENvbHMoKSAgPT09IDJcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Q29scyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZVswXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZXF1YWxzXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhID0gW1sxLCAxXSwgWzEsIDFdXVxuICogdmFyIEEgPSBNYXRyaXgub2YoYSlcbiAqIHZhciBCID0gTWF0cml4Lm9mKGEpXG4gKiB0cnVlICA9PT0gQS5lcXVhbHMoQilcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuX192YWx1ZSwgTS5fX3ZhbHVlIHx8IE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFJvd3NcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0U2hhcGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRTaGFwZSgpICAvLyBbMiwgMl1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFt0aGlzLmdldFJvd3MoKSwgdGhpcy5nZXRDb2xzKCldXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I21hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBtLm1hcCh4ID0+IHgubWFwKHkgPT4geSsgMSkpXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKGYpKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5tYXBcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdGhhdCBtYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IG9yIGFycmF5IHRvIG1hcFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5tYXAoeD0gPiB4Lm1hcCh5ID0+IHkrIDEpLCBbWzEsIDFdLCBbMSwgMV1dKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4Lm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBGbGF0dGVuIE1hdHJpeFxuICogTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pLmZvbGQoKHByZXYsIG5leHQpID0+IHByZXYuY29uY2F0KG5leHQpKVxuICogLy8gWzEsIDEsIDEsIDFdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZChmLCBbXSkodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgTWF0cml4IHRvIHJlZHVjZVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG5cbiAqIC8vIFN1bSBvZiBhbGwgbWF0cml4IHZhbHVlc1xuICogY29uc3QgcmVkdWNlciA9IChwcmV2LCBuZXh0KSA9PiBOdW1iZXIocHJldikgKyBuZXh0LnJlZHVjZSgoYWNjLCB4KSA9PiBhY2MgKyB4LCAwKVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dXG4gKiBNYXRyaXguZm9sZChyZWR1Y2VyLCBBKVxuICogLy8gNFxuICovXG5NYXRyaXguZm9sZCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZm9sZChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguYXBcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgTWF0cml4IHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn1cbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBNYXRyaXguYXAoZiwgW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXguYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKGYpLmFwKE0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB1c2luZyBhIGZ1bmN0aW9uIGFzIG9wZXJhdG9yXG4gKiBAcGFyYW0gTSB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gQS5jb25jYXQoQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKE0sIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZihNKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBBIHtNYXRyaXh9XG4gKiBAcGFyYW0gQiB7TWF0cml4fVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gTWF0cml4LmNvbmNhdChBLCBCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LmNvbmNhdCA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkubWFwKGYoQikpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKGVtcHR5KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcGFyYW0gcm93cyB7TnVtYmVyfVxuICogQHBhcmFtIGNvbHMge051bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQWlkZW50aXR5ID0gQS5pZGVudGl0eSgpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcCh0aGlzKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguaWRlbnRpdHlcbiAqIEBkZXNjIFJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4LmlkZW50aXR5KDMsIDIpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuICovXG5NYXRyaXguaWRlbnRpdHkgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAobSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29tYmluZVxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb21iaW5lID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBjb25jYXQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5jb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguY29tYmluZSA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuY29uY2F0KE1hdHJpeC5vZihCKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQ3JlYXRlIG1hdHJpeFxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDJdLCBbMywgNF1dKVxuICpcbiAqIC8vIEdlbmVyYXRlIGlkZW50aXR5IG1hdHJpeFxuICogY29uc3QgSSAgPSBtLmlkZW50aXR5KCkgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqIGlmKG0uZG90KEkpLmVxdWFscyhtKSkge1xuICogICAgY29uc29sZS5sb2coJ0RvdCBwcm9kdWN0IHdpdGggaWRlbnRpdHkgbWF0cml4IHJldHVybnMgdGhlIHNhbWUgbWF0cml4JylcbiAqIH1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5jb25jYXQoTWF0cml4Lm9mKE0pLCBkb3QodGhpcy5wcmVjaXNpb24pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZG90XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKiBjb25zdCBhID0gW1sxLCAyLCAzXSwgWzQsIDUsIDZdXVxuICogY29uc3QgYiA9IFtbNywgOF0sIFs5LCAxMF0sIFsxMSwgMTJdXVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqXG4gKiBNYXRyaXguZG90KEEsIEIpIC8vIFtbNTgsIDY0XSwgWzEzOSwgMTU0XV1cbiAqXG4gKi9cbk1hdHJpeC5kb3QgPSBmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmRvdChNYXRyaXgub2YoQikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZpbGxcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIHByb3ZpZGVkIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIGZcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5maWxsKHggPT4gNDIpXG4gKiAvLyBbWzQyLDQyLDQyXSwgWzQyLDQyLDQyXSwgWzQyLDQyLDQyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKG1hcCh4ID0+IGYoeCkpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCN6ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS56ZXJvcygpXG4gKiAvLyBbWzAsMCwwXSwgWzAsMCwwXSwgWzAsMCwwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuemVyb3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC56ZXJvc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB6ZXJvc1xuICogQHBhcmFtIHJvd3Mge051bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7TnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguemVyb3MoMywgMylcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4Lnplcm9zID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I29uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLm9uZXMoKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm9uZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5vbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEBwYXJhbSByb3dzIHtOdW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge051bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjcmFuZG9tXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHJhbmRvbSB2YWx1ZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFdXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5yYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIG51bWJlcnNcbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gRnVuY3Rpb24gd2hpY2ggcmV0dXJucyByYW5kb20gdmFsdWVzLiBEZWZhdWx0IHJhbmRvbSB2YWx1ZXMgYXJlIGJldHdlZW4gLTEgYW5kIDFcbiAqIEBwYXJhbSByb3dzIHtOdW1iZXJ9IERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIGNvbHMge051bWJlcn0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IChNYXRoLnJhbmRvbSgpICogMiAtIDEpLCByb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjdG9BcnJheVxuICogQGRlc2MgUmV0dXJucyB0aGUgYXJyYXkgZnJvbSB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2Nsb25lXG4gKiBAZGVzYyBSZXR1cm5zIGEgY2xvbmUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5mcm9tQXJyYXkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNmcm9tQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggZnJvbSBhbiBhcnJheVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXguZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChyb3cgPT4gbWFwKGNvbCA9PiBjb2wpKHJvdykpKGFycikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3RyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFstMSwgMl0sIFszLCA0XSwgWy04LCAyXSlcbiAqIGNvbnN0IGIgPSBBLnRyYW5zcG9zZSgpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRyYW5zcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKHRyYW5zcG9zZSwgW10sIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC50cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gQSBNYXRyaXggb3IgYSBtYXRyaXggYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbLTEsIDJdLCBbMywgNF0sIFstOCwgMl1cbiAqIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKGEpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgudHJhbnNwb3NlID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS50cmFuc3Bvc2UoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gQWRkIGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5hZGQoMSkgLy8gW1s2LCA1XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmFkZChCKSAvLyBbWzEwLCAxMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgYWRkJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsICsgTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCArIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdWJ0cmFjdFxuICogQHBhcmFtIE0ge01hdHJpeHxudW1iZXJ9IFN1YnRyYWN0IGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5zdWJ0cmFjdCgxKSAvLyBbWzQsIDJdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuc3VidHJhY3QoQikgLy8gW1swLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IHN1YnRyYWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsIC0gTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAtIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtdWx0aXBseVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtdHJhaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLm11bHRpcGx5KDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIubXVsdGlwbHkoQikgLy8gW1syNSwgMjVdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2Ugc3RhdGljIG1ldGhvZCBcXCdkb3RcXCcgdG8gZG8gbWF0cml4IG11bHRpcGxpY2F0aW9uJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGhhZGFtYXJkIHByb2R1Y3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKGNvbCwgamR4KSA9PiBjb2wgKiBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICogTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2FkZGl0aXZlaW52ZXJzZVxuICogQGRlc2MgRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtYXRyaXggb2J0YWluZWQgYnkgY2hhbmdpbmcgdGhlIHNpZ24gb2YgZXZlcnkgbWF0cml4IGVsZW1lbnQuIFRoZSBhZGRpdGl2ZSBpbnZlcnNlIG9mIG1hdHJpeCBBIGlzIHdyaXR0ZW4g4oCTQS5cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LC01XSwgWy00LCA0XV0pXG4gKiBjb25zdCBtaW51c0EgPSBBLmFkZGl0aXZlaW52ZXJzZSgpXG4gKiAvLyBbWy01LCA1XSwgWzQsIC00XV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGRpdGl2ZWludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoLTEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNoYWRhbWFyZFxuXG4gKiBAc2VlIG11bHRpcGx5XG4gKiBAcGFyYW0gTVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuaGFkYW1hcmQoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5oYWRhbWFyZChCKSAvLyBbWzI1LCAyNV1dXG5cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5oYWRhbWFyZCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubXVsdGlwbHkoTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjbHVcbiAqIEBkZXNjIENhbGN1bGF0ZXMgTFUgZGVjb21wb3NpdGlvbiBvZiB0aGUgY3VycmVudCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNycmVmXG4gKiBAcmV0dXJucyB7TWF0cml4fEFycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihbWy0xLCAxXSwgWy0xLCAwXSwgWzAsIC0xXSwgWy0xLCAtMl1dKVxuICogQS5ycmVmKCkgLy8gIFsgWyAxLCAwIF0sIFsgLTAsIDEgXSwgWyAwLCAwIF0sIFsgMCwgMCBdIF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ycmVmID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbGVhZCA9IDBcbiAgY29uc3QgcmVzdWx0TWF0cml4ID0gdGhpcy5jbG9uZSgpXG5cbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmdldFJvd3MoKTsgKytyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpIDw9IGxlYWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICB9XG4gICAgbGV0IGkgPSByXG4gICAgd2hpbGUgKHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdID09PSAwKSB7XG4gICAgICArK2lcbiAgICAgIGlmICh0aGlzLmdldFJvd3MoKSA9PT0gaSkge1xuICAgICAgICBpID0gclxuICAgICAgICArK2xlYWRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSBsZWFkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV0gPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdID0gdG1wXG5cbiAgICBsZXQgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bbGVhZF1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdIC89IHZhbFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRSb3dzKCk7ICsraSkge1xuICAgICAgaWYgKGkgPT09IHIpIGNvbnRpbnVlXG4gICAgICB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2pdIC09IHZhbCAqIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGxlYWQrK1xuICB9XG4gIHJldHVybiByZXN1bHRNYXRyaXhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjc29sdmVcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFNvbHZlIHhBID0gYlxuICogLy8gNXggKyB5ICA9IDdcbiAqIC8vIDN4IC0gNHkgPSAxOFxuICogLy8gU29sdXRpb24gZm9yIHggYW5kIHk6XG4gKiAvLyB4ID0gMlxuICogLy8geSA9IC0zXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDFdLCBbMywgLTRdXSlcbiAqIGNvbnN0IHNvbHZlQSA9IEEuc29sdmUoWzcsIDE4XSkgLy8gWzIsIC0zXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zb2x2ZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTFUgPSBBLmx1KClcbiAgY29uc3QgTCA9IExVWzBdXG4gIGNvbnN0IFUgPSBMVVsxXVxuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgbGV0IHMgPSAwXG4gIGNvbnN0IGMgPSBbXVxuICBjb25zdCB4ID0gW11cblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgICB9XG4gICAgY1trXSA9IGJba10gLSBzXG4gICAgcyA9IDBcbiAgfVxuICBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gICAgbGV0IHQgPSAwXG4gICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgICB9XG4gICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgfVxuICByZXR1cm4geFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaW52ZXJzZVxuXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmtcblxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpbWVuc2lvblxuXG4gKiBAc2VlIHJhbmtcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGltZW5zaW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yYW5rKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpYWdcblxuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZygpXG4gKiAvLyBbMSwgMSwgMV1cbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFnKClcbiAqIC8vIFswLCAwLCAwLCAwLCAwXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFnID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdCh4W2lkeF0pXG4gIH0pKFtdKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5kaWFnXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZyhbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gWzIsIDVdXG4gKlxuICovXG5NYXRyaXguZGlhZyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZGlhZygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFncHJvZHVjdCgpXG4gKiAvLyAxXG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCwgaWR4KSA9PiB7XG4gICAgYWNjICo9IHhbaWR4XVxuICAgIHJldHVybiBhY2NcbiAgfSkoMSkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuc3VtKClcbiAqIC8vIDlcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5zdW0oKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgpID0+IHtcbiAgICBhY2MgKz0gZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpKDApKHgpXG4gICAgcmV0dXJuIGFjY1xuICB9KSgwKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5zdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9IE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LnN1bShbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gOVxuICpcbiAqL1xuTWF0cml4LnN1bSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuc3VtKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2tyb25lY2tlclxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIE0ge01hdHJpeH0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0ICh0aGlzIOKKlyBNKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXIgPSBmdW5jdGlvbiAoTSkge1xuICBjb25zdCBtID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Q29scygpXG4gIGNvbnN0IHAgPSBNLmdldFJvd3MoKVxuICBjb25zdCBxID0gTS5nZXRDb2xzKClcblxuICBjb25zdCBsZWZ0ID0gdGhpcy5fX3ZhbHVlXG4gIGNvbnN0IHJpZ2h0ID0gTS5fX3ZhbHVlXG5cbiAgY29uc3QgZnJhbWUgPSBnZW5lcmF0ZShtICogcCwgbiAqIHEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICBmcmFtZVtwICogaSArIGtdW3EgKiBqICsgbF0gPSBsZWZ0W2ldW2pdICogcmlnaHRba11bbF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRyaXgub2YoZnJhbWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5rcm9uZWNrZXJcbiAqIEBkZXNjIFRoZSBLcm9uZWNrZXIgcHJvZHVjdCBpcyBhbiBvcGVyYXRpb24gb24gdHdvIG1hdHJpY2VzIG9mIGFyYml0cmFyeSBzaXplIHJlc3VsdGluZyBpbiBhIGJsb2NrIG1hdHJpeC5cbiAqIEBwYXJhbSBBIHtNYXRyaXh9IFRoZSBsZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHBhcmFtIEIge01hdHJpeH0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4Lmtyb25lY2tlciA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkua3JvbmVja2VyKEIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgY29uY2F0IGZyb20gJ2Z1bi5qcy9zcmMvY29uY2F0J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAcGFyYW0gQiB7TWF0cml4fVxuICogQHBhcmFtIGEge0FycmF5fVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZGVjaW1hbHMsIEIsIGEpID0+IG1hcCgoaXRlbSwgaSkgPT4ge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBqKSA9PiB7XG4gICAgYWNjICs9IHJvdW5kKHggKiBCLl9fdmFsdWVbal1baV0sIGRlY2ltYWxzKVxuICAgIHJldHVybiBhY2NcbiAgfSwgMCkoYSlcbn0pKEIuX192YWx1ZVswXSkpXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkobSA9PiBbXSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAZGVzYyBHZW5lcmF0b3IgZnVuY3Rpb24gZm9yIGEgbWF0cml4IGFycmF5LCB2YWx1ZXMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAqIEBwYXJhbSByb3dzIHtudW1iZXJ9XG4gKiBAcGFyYW0gY29scyB7bnVtYmVyfVxuICogQHJldHVybnMge2FueVtdW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyb3dzLCBjb2xzKSA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIENyZWF0ZXMgYW4gaWRlbnRpeSBtYXRyaXggZnJvbSBhbiBlbXB0eSBhcnJheVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCAobSwgaWR4KSA9PiBtYXAoKHJvd3MsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKG0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtIHZhbHVlIHtudW1iZXJ9XG4gKiBAcGFyYW0gZGVjaW1hbHMge251bWJlcn1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kICh2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICsgJ2UnICsgZGVjaW1hbHMpICsgJ2UtJyArIGRlY2ltYWxzKVxufVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKlxuICogQGZ1bmN0aW9uIGFuZFxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCAtIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHkgLSBBIHByZWRpY2F0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBhcnJheUNvbmNhdFxuICogQHBhcmFtIGExXG4gKiBAcGFyYW0gYTJcbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IG1hcHBpbmcgb3ZlciB0aGUgcHJvdmlkZWQgYXJyYXkgYW5kIGNhbGxpbmcgYW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Y2JGdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBtb2RpZnkgdGhlIGl0ZW1cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIEluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGl0ZW1zIHRvIG1vZGlmeSBieSB0aGUgY2IgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFsaWFzIHJlZHVjZVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvbGQoYWRkLCAwLCBbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gM1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIGNiRnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gciAtIEFjY3VtdWxhdG9yIHdoaWNoIGFjY3VtdWxhdGVzIHRoZSBjYWxsYmFjaydzIHJldHVybiB2YWx1ZXNcbiAqIEBwYXJhbSB7Kn0gaXRlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXkgb2YgdGhlIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gVGhlIGluaXRpYWwgYXJyYXlcbiAqIEByZXR1cm4geyp9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSBpbml0XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIGFuIGFycmF5LCBhdXRvY3VycmllZCBmdW5jdGlvblxuICogQHBhcmFtIHsqfSBPYmplY3QgdG8gdmVyaWZpeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBpc0FycmF5KFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSB0cnVlXG4gKi9cblxuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQXJyYXknKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIGFuIGFycmF5IGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChpZGVudGl0eSwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMCwyLDNdXG4gKiAgY29uc3QgYWRkMiA9IGFkZCgyKVxuICogIGNvbnN0IHJlc3VsdCA9IG1hcChhZGQyLCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFsyLDQsNV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBjb25zdCByID0gbmV3IEFycmF5KGwpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltpXSA9IGNiKGFbaV0sIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCB2ZXJpZmllcyBvZiB0aGUgcHJvdmlkZWQgYXJndW1lbnQgaXMgYSBib29sZWFuXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0geyp9IEl0ZW0gdG8gdmVyaWZ5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnQm9vbGVhbicpXG4iLCIvKipcbiAqIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIGl0ZW1zIHRvZ2V0aGVyXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge2F9IGEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEBwYXJhbSB7YX0gYiAtIHJpZ2h0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb25cbiAqIEByZXR1cm4ge2F9IENvbmNhdGVuYXRlZCBpdGVtXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Q29uY2F0IGZyb20gJy4vYXJyYXkvY29uY2F0J1xuaW1wb3J0IHN0cmluZ0NvbmNhdCBmcm9tICcuL3N0cmluZy9jb25jYXQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdTdHJpbmcnOiBzdHJpbmdDb25jYXQsXG4gICAgJ0FycmF5JzogYXJyYXlDb25jYXRcbiAgfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShhLCBiKVxufSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKipcbiAqIEBmdW5jdGlvbiBjdXJyeVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVzIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeSAoZnVuKSB7XG4gIGNvbnN0IGFyZ3NsZW4gPSBmdW4ubGVuZ3RoXG5cbiAgaWYgKGFyZ3NsZW4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlY3Vyc2VyKFtdKVxuXG4gIGZ1bmN0aW9uIHJlY3Vyc2UgKGFjYywgYXJncykge1xuICAgIGNvbnN0IF9hY2MgPSBhY2MuY29uY2F0KGFyZ3MpXG4gICAgcmV0dXJuIF9hY2MubGVuZ3RoIDwgYXJnc2xlblxuICAgICAgPyBjcmVhdGVSZWN1cnNlcihfYWNjKVxuICAgICAgOiBmdW4uYXBwbHkodGhpcywgX2FjYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlY3Vyc2VyIChhY2MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY3Vyc2UoYWNjLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG4vKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0RhdGUnKVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVxdWFsc1xuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBlcXVhbGl0eSBvZiAyIGl0ZW1zXG4gKiBAcGFyYW0geyp9IHggLSBMZWZ0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcGFyYW0geyp9IHkgLSBSaWdodCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbmFuID0gTnVtYmVyLk5hTlxuICogZXF1YWwobmFuLCBuYW4pIC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIGNvbnN0IGFycjEgPSBbMCwgMSwgMiwgM11cbiAqIGNvbnN0IGFycjIgPSBbbnVsbCwgMSwgMiwgM11cbiAqIGVxdWFscyhhcnIxLCBhcnIyKSAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogZXF1YWxzKG5ldyBPYmplY3QoeydhJzogMCwgJ2InOiAxfSksIHsnYSc6IDAsICdiJzogMX0pIC8vIHRydWVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZXhpc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyAoeCkge1xuICByZXR1cm4gISh4ID09IG51bGwpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBpbml0IC0gdGhlIHRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gYSB0aGUgYXJyYXkgbGlrZSBpdGVtIHRvIGl0ZXJhdGUgb3ZlclxuICogQHJldHVybiB7Kn0gVGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUZvbGQgZnJvbSAnLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG9iamVjdEZvbGQgZnJvbSAnLi9vYmplY3QvZm9sZCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIGEpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnT2JqZWN0Jzogb2JqZWN0Rm9sZCxcbiAgICAnQXJyYXknOiBhcnJheUZvbGRcbiAgfVxuICByZXR1cm4gdHlwZU1hcFt0eXBlKGEpXShjYiwgaW5pdCwgYSlcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGlkZW50aWNhbFxuICogQGRlc2NyaXB0aW9uIGNoZWNrcyBmb3IgaWRlbnRpbnRpY2FsIGl0ZW1zXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzTmFuIGZyb20gJy4vbnVtYmVyL2lzTmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpZGVudGljYWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkge1xuICAgIHJldHVybiAxIC8geCA9PT0gMSAvIHlcbiAgfVxuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuICEhKGlzTmFuKHgpICYmIGlzTmFuKHkpKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKlxuICovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3Jcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0ZXIgKGl0ZXIpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcltTeW1ib2wuaXRlcmF0b3JdKVxufVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gSXRlcmF0b3IgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuM1xuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGFcbiAqIEByZXR1cm4ge0l0ZXJhdG9yfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBpdGVyYXRvcikge1xuICBsZXQgciA9IFtdXG4gIGZvciAobGV0IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKTsgbmV4dFZhbHVlLmRvbmUgIT09IHRydWU7IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgIHIucHVzaChjYWxsYmFjayhpdGVyYXRvci52YWx1ZSgpKSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGl0ZXJhYmxlIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggbWFwcyBvdmVyIGFuIGl0ZXJhYmxlLlxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuL2FycmF5L21hcCdcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuL21hcC9tYXAnXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4vc3RyaW5nL21hcCdcbmltcG9ydCBpdGVyYXRvck1hcCBmcm9tICcuL2l0ZXJhdG9yL21hcCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBpc0l0ZXJhdG9yIGZyb20gJy4vaXRlcmF0b3IvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcE1hcChjYiwgYSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gYXJyYXlNYXAoY2IsIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0l0ZXJhdG9yKGEpXG4gICAgICAgID8gaXRlcmF0b3JNYXAoY2IsIGEpXG4gICAgICAgIDogYXJyYXlNYXAoY2IsIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIE1hcCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtNYXB9IGFcbiAqIEByZXR1cm4ge01hcH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCByID0gZW1wdHkoYSlcbiAgYS5mb3JFYWNoKCh2LCBrLCBtYXApID0+IHtcbiAgICByLnNldChrLCBjYih2LCBrLCBtYXApKVxuICB9KVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCBrID0ga2V5cyhhKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gZW1wdHkoYSlcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHR5cGVcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIHR5cGUgKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KS5zbGljZSg4LCAtMSlcbn0pXG4iLCIvKipcbiAqIEBjbGFzcyBBY3RpdmF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSBmdW5jXG4gKiBAcGFyYW0gZGZ1bmNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbkZ1bmN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGZ1bmMsIGRmdW5jKSB7XG4gICAgdGhpcy5mdW5jID0gZnVuY1xuICAgIHRoaXMuZGZ1bmMgPSBkZnVuY1xuICB9XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJ0Bhc3R1YW5heC9mdW5tYXRyaXgnXG5pbXBvcnQgc2lnbW9pZCBmcm9tICcuL3V0aWwvc2lnbW9pZCdcblxuLyoqXG4gKiBAY2xhc3MgTmV1cmFsTmV0d29ya1xuICogQHBhcmFtIHtOdW1iZXJ9IGlucHV0Tm9kZXNcbiAqIEBwYXJhbSB7Tm1iZXJ9IGhpZGRlbk5vZGVzXG4gKiBAcGFyYW0ge051bWJlcn0gb3V0cHV0Tm9kZXNcbiAqL1xuY2xhc3MgTmV1cmFsTmV0d29yayB7XG4gIGNvbnN0cnVjdG9yICguLi52YWx1ZXMpIHtcbiAgICBbdGhpcy5pbnB1dE5vZGVzLCB0aGlzLmhpZGRlbk5vZGVzLCB0aGlzLm91dHB1dE5vZGVzXSA9IHZhbHVlc1xuXG4gICAgY29uc3QgZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSlcbiAgICB0aGlzLndlaWdodHNJaCA9IE1hdHJpeC5yYW5kb20oZiwgdGhpcy5oaWRkZW5Ob2RlcywgdGhpcy5pbnB1dE5vZGVzKVxuICAgIHRoaXMud2VpZ2h0c0hvID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLm91dHB1dE5vZGVzLCB0aGlzLmhpZGRlbk5vZGVzKVxuXG4gICAgdGhpcy5iaWFzSCA9IE1hdHJpeC5yYW5kb20oZiwgdGhpcy5oaWRkZW5Ob2RlcywgMSlcbiAgICB0aGlzLmJpYXNPID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLm91dHB1dE5vZGVzLCAxKVxuXG4gICAgdGhpcy5zZXRBY3RpdmF0aW9uRnVuY3Rpb24oKVxuICAgIHRoaXMuc2V0TGVhcm5pbmdSYXRlKClcblxuICAgIHRoaXMudHlwZSA9ICdOZXVyYWxOZXR3b3JrJ1xuICB9XG59XG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNzZXRBY3RpdmF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUuc2V0QWN0aXZhdGlvbkZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMgPSBzaWdtb2lkKSB7XG4gIHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uID0gZnVuY1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNzZXRMZWFybmluZ1JhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWFybmluZ1JhdGVcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUuc2V0TGVhcm5pbmdSYXRlID0gZnVuY3Rpb24gKGxlYXJuaW5nUmF0ZSA9IDAuMSkge1xuICB0aGlzLmxlYXJuaW5nUmF0ZSA9IGxlYXJuaW5nUmF0ZVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNwcmVkaWN0XG4gKiBAcGFyYW0ge0FycmF5fSBpbnB1dEFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk5ldXJhbE5ldHdvcmsucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAoaW5wdXRBcnJheSkge1xuICAvLyBHZW5lcmF0aW5nIHRoZSBIaWRkZW4gT3V0cHV0c1xuICBsZXQgaW5wdXRzID0gTWF0cml4LmZyb21BcnJheShpbnB1dEFycmF5KVxuICBsZXQgaGlkZGVuID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNJaCwgaW5wdXRzKVxuICBoaWRkZW4uYWRkKHRoaXMuYmlhc0gpXG4gIC8vIGFjdGl2YXRpb24gZnVuY3Rpb24hXG4gIGhpZGRlbi5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZnVuYylcblxuICAvLyBHZW5lcmF0aW5nIHRoZSBvdXRwdXQncyBvdXRwdXQhXG4gIGxldCBvdXRwdXQgPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c0hvLCBoaWRkZW4pXG4gIG91dHB1dC5hZGQodGhpcy5iaWFzTylcbiAgb3V0cHV0Lm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5mdW5jKVxuXG4gIC8vIFNlbmRpbmcgYmFjayB0byB0aGUgY2FsbGVyIVxuICByZXR1cm4gb3V0cHV0LnRvQXJyYXkoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayN0cmFpblxuICogQHBhcmFtIHtBcnJheX0gaW5wdXRBcnJheVxuICogQHBhcmFtIHtBcnJheX0gdGFyZ2V0QXJyYXlcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbiAoaW5wdXRBcnJheSwgdGFyZ2V0QXJyYXkpIHtcbiAgLy8gR2VuZXJhdGluZyB0aGUgSGlkZGVuIE91dHB1dHNcbiAgbGV0IGlucHV0cyA9IE1hdHJpeC5mcm9tQXJyYXkoaW5wdXRBcnJheSlcbiAgbGV0IGhpZGRlbiA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzSWgsIGlucHV0cylcblxuICBoaWRkZW4uYWRkKHRoaXMuYmlhc0gpXG4gIC8vIGFjdGl2YXRpb24gZnVuY3Rpb24hXG4gIGhpZGRlbi5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZnVuYylcblxuICAvLyBHZW5lcmF0aW5nIHRoZSBvdXRwdXQncyBvdXRwdXQhXG4gIGxldCBvdXRwdXRzID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNIbywgaGlkZGVuKVxuICBvdXRwdXRzLmFkZCh0aGlzLmJpYXNPKVxuICBvdXRwdXRzLm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5mdW5jKVxuXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gbWF0cml4IG9iamVjdFxuICBsZXQgdGFyZ2V0cyA9IE1hdHJpeC5mcm9tQXJyYXkodGFyZ2V0QXJyYXkpXG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBlcnJvclxuICAvLyBFUlJPUiA9IFRBUkdFVFMgLSBPVVRQVVRTXG4gIGxldCBvdXRwdXRFcnJvcnMgPSBNYXRyaXgub2YodGFyZ2V0cykuc3VidHJhY3Qob3V0cHV0cylcblxuICAvLyBsZXQgZ3JhZGllbnQgPSBvdXRwdXRzICogKDEgLSBvdXRwdXRzKTtcbiAgLy8gQ2FsY3VsYXRlIGdyYWRpZW50XG4gIGxldCBncmFkaWVudHMgPSBNYXRyaXgub2YoW1tvdXRwdXRzLm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5kZnVuYyldXSlcbiAgY29uc29sZS5sb2coMCwgb3V0cHV0cywgZ3JhZGllbnRzLCBvdXRwdXRFcnJvcnMpXG4gIGdyYWRpZW50cyA9IGdyYWRpZW50c1xuICAgIC5tdWx0aXBseShvdXRwdXRFcnJvcnMpXG4gIGNvbnNvbGUubG9nKDEsIGdyYWRpZW50cywgdGhpcy5sZWFybmluZ1JhdGUpXG4gIGdyYWRpZW50cyA9IGdyYWRpZW50c1xuICAgIC5tdWx0aXBseSh0aGlzLmxlYXJuaW5nUmF0ZSlcbiAgY29uc29sZS5sb2coMiwgZ3JhZGllbnRzKVxuXG4gIC8vIENhbGN1bGF0ZSBkZWx0YXNcbiAgbGV0IGhpZGRlblQgPSBNYXRyaXgudHJhbnNwb3NlKGhpZGRlbilcbiAgbGV0IHdlaWdodEhvRGVsdGFzID0gTWF0cml4LmRvdChncmFkaWVudHMsIGhpZGRlblQpXG5cbiAgLy8gQWRqdXN0IHRoZSB3ZWlnaHRzIGJ5IGRlbHRhc1xuICB0aGlzLndlaWdodHNIby5hZGQod2VpZ2h0SG9EZWx0YXMpXG4gIC8vIEFkanVzdCB0aGUgYmlhcyBieSBpdHMgZGVsdGFzICh3aGljaCBpcyBqdXN0IHRoZSBncmFkaWVudHMpXG4gIHRoaXMuYmlhc08uYWRkKGdyYWRpZW50cylcblxuICAvLyBDYWxjdWxhdGUgdGhlIGhpZGRlbiBsYXllciBlcnJvcnNcbiAgbGV0IHdob1QgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMud2VpZ2h0c0hvKVxuICBsZXQgaGlkZGVuRXJyb3JzID0gTWF0cml4LmRvdCh3aG9ULCBvdXRwdXRFcnJvcnMpXG5cbiAgLy8gQ2FsY3VsYXRlIGhpZGRlbiBncmFkaWVudFxuICBsZXQgaGlkZGVuR3JhZGllbnQgPSBNYXRyaXgub2YoaGlkZGVuKVxuICAgIC5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZGZ1bmMpXG4gICAgLm11bHRpcGx5KGhpZGRlbkVycm9ycylcbiAgICAubXVsdGlwbHkodGhpcy5sZWFybmluZ1JhdGUpXG5cbiAgLy8gQ2FsY3VhdGUgaW5wdXQtPmhpZGRlbiBkZWx0YXNcbiAgbGV0IGlucHV0c1QgPSBNYXRyaXgudHJhbnNwb3NlKGlucHV0cylcbiAgbGV0IHdlaWdodEloRGVsdGFzID0gTWF0cml4LmRvdChoaWRkZW5HcmFkaWVudCwgaW5wdXRzVClcblxuICB0aGlzLndlaWdodHNJaC5hZGQod2VpZ2h0SWhEZWx0YXMpXG4gIC8vIEFkanVzdCB0aGUgYmlhcyBieSBpdHMgZGVsdGFzICh3aGljaCBpcyBqdXN0IHRoZSBncmFkaWVudHMpXG4gIHRoaXMuYmlhc0guYWRkKGhpZGRlbkdyYWRpZW50KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXVyYWxOZXR3b3JrXG4iLCIvKipcbiAqIEBjbGFzcyBQZXJjZXB0cm9uXG4gKiBAY2xhc3NkZXNjIFBlcmNlcHRyb24gdG8gdHJhaW4gYW5kIHByZWRpY3RcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKFswLjIzNjU2OTgsIDAuNDU2Nzg5NywgMC45NTk4OTg5OCwgLTAuNDU3ODc4Nzg3XSlcbiAqXG4gKi9cbmxldCBQZXJjZXB0cm9uID0gZnVuY3Rpb24gKHdlaWdodHMpIHtcbiAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cyB8fCBbXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gUGVyY2VwdHJvbi5vZlxuICogQGRlc2MgQ3JlYXRlcyBhIFBlcmNlcHRyb24gb2JqZWN0XG4gKiBAcGFyYW0gd2VpZ2h0cyB7YXJyYXl9IFdlaWdodHMgZm9yIHByZWRpY3RpbmdcbiAqIEByZXR1cm5zIHtQZXJjZXB0cm9ufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCB3ZWlnaHRzID0gWzAuMTIzNDU2LCAwLjQ1ODc4OSwgMC45OTg3NDU0XVxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKHdlaWdodHMpXG4gKlxuICovXG5QZXJjZXB0cm9uLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgUGVyY2VwdHJvbikgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIFBlcmNlcHRyb24pIHtcbiAgICB0aGlzLndlaWdodHMgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgUGVyY2VwdHJvbih2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnR5cGUgPSAnUGVyY2VwdHJvbidcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQGZ1bmN0aW9uIFBlcmNlcHRyb24jcHJlZGljdFxuICogQHBhcmFtIHJvdyB7QXJyYXl9IEFycmF5IG9mIHZhbHVlcyB0byBwcmVkaWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKClcbiAqIGNvbnN0IHRyYWluICA9IFsuLi5dIC8vIGRhdGFzZXQ6IFtbMCwxLDJdLCBbMSwyLDNdXVxuICogbS50cmFpbih0cmFpbiwgMC4xLCAxMDAwMClcbiAqIG0ucHJlZGljdChbMSwyLDFdKSAvLyByZXR1cm5zIDEgb3IgMFxuICovXG5QZXJjZXB0cm9uLnByb3RvdHlwZS5wcmVkaWN0ID0gZnVuY3Rpb24gKHJvdykge1xuICB2YXIgYWN0aXZhdGlvbiA9IHRoaXMud2VpZ2h0c1swXVxuICByb3cuZm9yRWFjaCgoeCwgaSkgPT4ge1xuICAgIGFjdGl2YXRpb24gKz0gdGhpcy53ZWlnaHRzW2kgKyAxXSAqIHhcbiAgfSlcbiAgcmV0dXJuIGFjdGl2YXRpb24gPj0gMCA/IDEgOiAwXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEBmdW5jdGlvbiBQZXJjZXB0cm9uI3RyYWluXG4gKiBAcGFyYW0gdHJhaW4ge0FycmF5fSBEYXRhc2V0IHRvIHRyYWluIHRoZSBwcmVjZXB0cm9uXG4gKiBAcGFyYW0gbFJhdGUge051bWJlcn0gU2V0IHRoZSBsZWFybmluZyByYXRlIG9mIHRoZSBwZXJjZXB0cm9uXG4gKiBAcGFyYW0gbkVwb2NoIHtOdW1iZXJ9IFNldCB0aGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gdHJhaW4gdGhlIHBlcmNlcHRyb25cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKClcbiAqIGNvbnN0IHRyYWluICA9IFsuLi5dIC8vIGRhdGFzZXQ6IFtbMCwxLDJdLCBbMSwyLDNdXVxuICogbS50cmFpbih0cmFpbiwgMC4xLCAxMDAwMClcbiAqIG0ud2VpZ2h0cyA9IFswLjIxMzEzMSwgLTAuNDU0NjQsIDAuNzg5Nzk3XVxuICpcbiAqL1xuUGVyY2VwdHJvbi5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbiAodHJhaW4sIGxSYXRlLCBuRXBvY2gpIHtcbiAgdGhpcy53ZWlnaHRzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodHJhaW5bMF0ubGVuZ3RoKSkubWFwKHggPT4gMClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuRXBvY2g7IGkrKykge1xuICAgIHRyYWluLmZvckVhY2goKHgsIGlkeCkgPT4ge1xuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB4LnNsaWNlKC0xKVswXVxuICAgICAgY29uc3Qgcm93ID0geC5zbGljZSgwLCAtMSlcbiAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSB0aGlzLnByZWRpY3Qocm93KVxuICAgICAgY29uc3QgZXJyb3IgPSBleHBlY3RlZCAtIHByZWRpY3Rpb25cbiAgICAgIHJvdy5mb3JFYWNoKCh5LCBqKSA9PiB7XG4gICAgICAgIHRoaXMud2VpZ2h0c1tqICsgMV0gKz0gbFJhdGUgKiBlcnJvciAqIHlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJjZXB0cm9uXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBlcmNlcHRyb24gfSBmcm9tICcuL1BlcmNlcHRyb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5ldXJhbE5ldHdvcmsgfSBmcm9tICcuL05ldXJhbE5ldHdvcmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGl2YXRpb25GdW5jdGlvbiB9IGZyb20gJy4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaWdtb2lkIH0gZnJvbSAnLi91dGlsL3NpZ21vaWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhbmggfSBmcm9tICcuL3V0aWwvdGFuaCdcbiIsImltcG9ydCBBY3RpdmF0aW9uRnVuY3Rpb24gZnJvbSAnLi4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBzaWdtb2lkXG4gKiBAdHlwZSB7QWN0aXZhdGlvbkZ1bmN0aW9ufVxuICovXG5jb25zdCBzaWdtb2lkID0gbmV3IEFjdGl2YXRpb25GdW5jdGlvbihcbiAgeCA9PiAxIC8gKDEgKyBNYXRoLmV4cCgteCkpLFxuICB5ID0+IHkgKiAoMSAtIHkpXG4pXG5leHBvcnQgZGVmYXVsdCBzaWdtb2lkXG4iLCJpbXBvcnQgQWN0aXZhdGlvbkZ1bmN0aW9uIGZyb20gJy4uL0FjdGl2YXRpb25GdW5jdGlvbidcblxuLyoqXG4gKiBAZnVuY3Rpb24gdGFuaFxuICogQHR5cGUge0FjdGl2YXRpb25GdW5jdGlvbn1cbiAqL1xuY29uc3QgdGFuaCA9IG5ldyBBY3RpdmF0aW9uRnVuY3Rpb24oXG4gIHggPT4gTWF0aC50YW5oKHgpLFxuICB5ID0+IDEgLSAoeSAqIHkpXG4pXG5leHBvcnQgZGVmYXVsdCB0YW5oXG4iXSwic291cmNlUm9vdCI6IiJ9