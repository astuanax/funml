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
  * @function NeuralNetwork#setActivationFunction
   * @param func
   */


  _createClass(NeuralNetwork, [{
    key: "setActivationFunction",
    value: function setActivationFunction() {
      var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sigmoid.default;
      this.activation_function = func;
    }
    /**
    * @function NeuralNetwork#setLearningRate
     * @param learningRate
     */

  }, {
    key: "setLearningRate",
    value: function setLearningRate() {
      var learningRate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
      this.learning_rate = learningRate;
    }
    /**
    * @function NeuralNetwork#predict
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
    * @function NeuralNetwork#train
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9AYXN0dWFuYXgvZnVubWF0cml4L3NyYy91dGlsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL19wcml2YXRlL2N1cnJ5MS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL25vdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2lzTmFuLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2ZvbGQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90eXBlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy9BY3RpdmF0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL1BlcmNlcHRyb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL3NpZ21vaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvdGFuaC5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uRnVuY3Rpb24iLCJmdW5jIiwiZGZ1bmMiLCJOZXVyYWxOZXR3b3JrIiwidmFsdWVzIiwiaW5wdXRfbm9kZXMiLCJoaWRkZW5fbm9kZXMiLCJvdXRwdXRfbm9kZXMiLCJ3ZWlnaHRzX2loIiwid2VpZ2h0c19obyIsInJhbmRvbWl6ZSIsImJpYXNfaCIsImJpYXNfbyIsInNldEFjdGl2YXRpb25GdW5jdGlvbiIsInNldExlYXJuaW5nUmF0ZSIsImFjdGl2YXRpb25fZnVuY3Rpb24iLCJsZWFybmluZ1JhdGUiLCJsZWFybmluZ19yYXRlIiwiaW5wdXRBcnJheSIsImlucHV0cyIsImZyb21BcnJheSIsImhpZGRlbiIsImRvdCIsImFkZCIsIm1hcCIsIm91dHB1dCIsInRvQXJyYXkiLCJ0YXJnZXRBcnJheSIsIm91dHB1dHMiLCJ0YXJnZXRzIiwib3V0cHV0RXJyb3JzIiwic3VidHJhY3QiLCJncmFkaWVudHMiLCJtdWx0aXBseSIsImhpZGRlblQiLCJ0cmFuc3Bvc2UiLCJ3ZWlnaHRIb0RlbHRhcyIsIndob1QiLCJoaWRkZW5FcnJvcnMiLCJoaWRkZW5HcmFkaWVudCIsImlucHV0c1QiLCJ3ZWlnaHRJaERlbHRhcyIsIlBlcmNlcHRyb24iLCJ3ZWlnaHRzIiwib2YiLCJ2YWwiLCJwcm90b3R5cGUiLCJ0eXBlIiwicHJlZGljdCIsInJvdyIsImFjdGl2YXRpb24iLCJmb3JFYWNoIiwieCIsImkiLCJ0cmFpbiIsImxSYXRlIiwibkVwb2NoIiwiQXJyYXkiLCJhcHBseSIsImxlbmd0aCIsImlkeCIsImV4cGVjdGVkIiwic2xpY2UiLCJwcmVkaWN0aW9uIiwiZXJyb3IiLCJ5IiwiaiIsInNpZ21vaWQiLCJNYXRoIiwiZXhwIiwidGFuaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hB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Q29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBhc3R1YW5heC9mdW5tbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAYXN0dWFuYXgvZnVubWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGFzdHVhbmF4L2Z1bm1sXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnZnVuLmpzL3NyYy9lcXVhbHMnXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vdXRpbC9jb25jYXQnXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi91dGlsL2VtcHR5J1xuaW1wb3J0IGRvdCBmcm9tICcuL3V0aWwvZG90J1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vdXRpbC9pZGVudGl0eSdcbmltcG9ydCB0cmFuc3Bvc2UgZnJvbSAnLi91dGlsL3RyYW5zcG9zZSdcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL3V0aWwvZ2VuZXJhdGUnXG5cbi8qKlxuICogQGNsYXNzIE1hdHJpeFxuICogQGNsYXNzZGVzYyBNYXRyaXggYXBwbGljYXRpdmUgcHJvdmlkaW5nIHN0YW5kYXJkIG1hdHJpeCBvcGVyYXRpb25zXG4gKiBAc3VtbWFyeSBUaGUgTWF0cml4IGNsYXNzIHNob3VsZCBub3QgYmUgaW5zdGFudGlhdGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkLiBJbnN0ZWFkIHVzZSB0aGUgTWF0cml4Lm9mIHN5bnRheCB0byBjcmVhdGUgYSBuZXcgTWF0cml4LiBVbmZvcnR1bmF0bHkganNkb2NzIGRvZXMgbm90IGFsbG93IGZvciB0aGUgY29uc3RydWN0b3IgdG8gYmUgaGlkZGVuLlxuICogQGhpZGVjb250cnVjdG9yXG4gKiBAc2VlIG9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHZhbCB7QXJyYXl8ZnVuY3Rpb259IEFuIGFycmF5IG9mIGFycmF5c1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbk1hdHJpeC5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdHJpeCkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXRyaXgodmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS50eXBlID09PSAnTWF0cml4J1xuICovXG5NYXRyaXgucHJvdG90eXBlLnR5cGUgPSAnTWF0cml4J1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBwcmVjaXNpb25cbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NldFByZWNpc2lvblxuICogQHBhcmFtIHByZWNpc2lvbiB7TnVtYmVyfSBTZXQgdGhlIG51bWJlciBvZiBkZWNpbWFscyBmb3Igcm91bmRpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0uc2V0UHJlY2lzaW9uKDEwKVxuICogbS5wcmVjaXNpb24gPT09IDEwXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc2V0UHJlY2lzaW9uID0gZnVuY3Rpb24gKHByZWNpc2lvbikge1xuICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvblxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBtZW1iZXIgaXNTeW1tZXRyaWNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3ltbWV0cmljKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTeW1tZXRyaWMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UodGhpcykuX192YWx1ZVxuICByZXR1cm4gZXF1YWxzKGEsIGIpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5zIGEgc3F1YXJlIE1hdHJpeFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTcXVhcmUoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1NxdWFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLmdldENvbHMoKSwgdGhpcy5nZXRSb3dzKCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzT3J0aG9nb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldENvbHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Q29scygpICA9PT0gMlxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRDb2xzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlWzBdLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNlcXVhbHNcbiAqIEBwYXJhbSBNIHtNYXRyaXh8QXJyYXl9XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGEgPSBbWzEsIDFdLCBbMSwgMV1dXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihhKVxuICogdmFyIEIgPSBNYXRyaXgub2YoYSlcbiAqIHRydWUgID09PSBBLmVxdWFscyhCKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5fX3ZhbHVlLCBNLl9fdmFsdWUgfHwgTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Um93c1xuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRSb3dzKCkgIC8vIDJcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRTaGFwZVxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFNoYXBlKCkgIC8vIFsyLCAyXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFNoYXBlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW3RoaXMuZ2V0Um93cygpLCB0aGlzLmdldENvbHMoKV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBmIHtmdW5jdGlvbn0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAoZikodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm1hcFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBNYXRyaXggb3IgYXJyYXkgdG8gbWFwXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gTWF0cml4Lm1hcCh4PSA+IHgubWFwKHkgPT4geSsgMSksIFtbMSwgMV0sIFsxLCAxXV0pXG4gKiAvLyBbWzIsIDJdLCBbMiwgMl1dXG4gKlxuICovXG5NYXRyaXgubWFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEZsYXR0ZW4gTWF0cml4XG4gKiBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSkuZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldi5jb25jYXQobmV4dCkpXG4gKiAvLyBbMSwgMSwgMSwgMV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmb2xkKGYsIFtdKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguZm9sZFxuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBmdW5jdGlvbiB0byByZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZiB7ZnVuY3Rpb259IEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEBwYXJhbSBNIHtNYXRyaXh9IFRoZSBNYXRyaXggdG8gcmVkdWNlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcblxuICogLy8gU3VtIG9mIGFsbCBtYXRyaXggdmFsdWVzXG4gKiBjb25zdCByZWR1Y2VyID0gKHByZXYsIG5leHQpID0+IE51bWJlcihwcmV2KSArIG5leHQucmVkdWNlKChhY2MsIHgpID0+IGFjYyArIHgsIDApXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV1cbiAqIE1hdHJpeC5mb2xkKHJlZHVjZXIsIEEpXG4gKiAvLyA0XG4gKi9cbk1hdHJpeC5mb2xkID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5mb2xkKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNhcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogTWF0cml4Lm9mKGYpLmFwKE0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYXAgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5hcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpZXMgYSBNYXRyaXggdG8gYSBmdW5jdGlvblxuICogQHBhcmFtIGYge2Z1bmN0aW9ufVxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGYgPSB4ID0+IHgucmVkdWNlKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dClcbiAqIE1hdHJpeC5hcChmLCBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiAvLyBbWzZdLCBbMTVdLCBbMjRdXG4gKi9cbk1hdHJpeC5hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZikuYXAoTSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSBNIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIEEge01hdHJpeH1cbiAqIEBwYXJhbSBCIHtNYXRyaXh9XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBNYXRyaXguY29uY2F0KEEsIEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXguY29uY2F0ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIsIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5tYXAoZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2VtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZW1wdHkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5lbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybiBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEBwYXJhbSByb3dzIHtOdW1iZXJ9XG4gKiBAcGFyYW0gY29scyB7TnVtYmVyfVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmVtcHR5ID0gY3VycnkoZnVuY3Rpb24gKHJvd3MgPSAwLCBjb2xzID0gMCkge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5tYXAoZW1wdHkpXG59KVxuXG4vLyAjIyMjICMjIyMgIyMjIyAvL1xuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNpZGVudGl0eVxuICogQGRlc2MgUmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBBaWRlbnRpdHkgPSBBLmlkZW50aXR5KClcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKHRoaXMpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5pZGVudGl0eVxuICogQGRlc2MgUmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguaWRlbnRpdHkoMywgMilcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5pZGVudGl0eSA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcChtKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNjb21iaW5lXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGNvbmNhdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmNvbWJpbmVcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIE1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5jb21iaW5lID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5jb25jYXQoTWF0cml4Lm9mKEIpLCBjb25jYXQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2RvdFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW4gMiBtYXRyaWNlc1xuICogQHBhcmFtIE1cbiAqIEBwYXJhbSBmXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBDcmVhdGUgbWF0cml4XG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMl0sIFszLCA0XV0pXG4gKlxuICogLy8gR2VuZXJhdGUgaWRlbnRpdHkgbWF0cml4XG4gKiBjb25zdCBJICA9IG0uaWRlbnRpdHkoKSAvLyBbWzEsIDBdLCBbMCwgMV1dXG4gKlxuICogaWYobS5kb3QoSSkuZXF1YWxzKG0pKSB7XG4gKiAgICBjb25zb2xlLmxvZygnRG90IHByb2R1Y3Qgd2l0aCBpZGVudGl0eSBtYXRyaXggcmV0dXJucyB0aGUgc2FtZSBtYXRyaXgnKVxuICogfVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGRvdCh0aGlzLnByZWNpc2lvbikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5kb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBiID0gW1s3LCA4XSwgWzksIDEwXSwgWzExLCAxMl1dXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICpcbiAqIE1hdHJpeC5kb3QoQSwgQikgLy8gW1s1OCwgNjRdLCBbMTM5LCAxNTRdXVxuICpcbiAqL1xuTWF0cml4LmRvdCA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZG90KE1hdHJpeC5vZihCKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjZmlsbFxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCB0aGUgcHJvdmlkZWQgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gZlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLmZpbGwoeCA9PiA0MilcbiAqIC8vIFtbNDIsNDIsNDJdLCBbNDIsNDIsNDJdLCBbNDIsNDIsNDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAobWFwKHggPT4gZih4KSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3plcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLnplcm9zKClcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS56ZXJvcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lnplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcGFyYW0gcm93cyB7TnVtYmVyfSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSBjb2xzIHtOdW1iZXJ9IERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC56ZXJvcygzLCAzKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXguemVyb3MgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkub25lcygpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUub25lcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHBhcmFtIHJvd3Mge051bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7TnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub25lcygxLCAxKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgub25lcyA9IGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoeCA9PiAxKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNyYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIHZhbHVlc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gW2YgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMV1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIGYge2Z1bmN0aW9ufSBGdW5jdGlvbiB3aGljaCByZXR1cm5zIHJhbmRvbSB2YWx1ZXMuIERlZmF1bHQgcmFuZG9tIHZhbHVlcyBhcmUgYmV0d2VlbiAtMSBhbmQgMVxuICogQHBhcmFtIHJvd3Mge051bWJlcn0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0gY29scyB7TnVtYmVyfSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCN0b0FycmF5XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBhcnJheSBmcm9tIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlLm1hcChyb3cgPT4gcm93Lm1hcChjb2wgPT4gY29sKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjY2xvbmVcbiAqIEBkZXNjIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4LmZyb21BcnJheSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I2Zyb21BcnJheVxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBmcm9tIGFuIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBNYXRyaXgub2YobWFwKHJvdyA9PiBtYXAoY29sID0+IGNvbCkocm93KSkoYXJyKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdKVxuICogY29uc3QgYiA9IEEudHJhbnNwb3NlKCkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQodHJhbnNwb3NlLCBbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnRyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcGFyYW0gTSB7TWF0cml4fEFycmF5fSBBIE1hdHJpeCBvciBhIG1hdHJpeCBhcnJheVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFstMSwgMl0sIFszLCA0XSwgWy04LCAyXVxuICogY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UoYSkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLnRyYW5zcG9zZSgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRcbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfSBBZGQgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmFkZCgxKSAvLyBbWzYsIDVdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuYWRkKEIpIC8vIFtbMTAsIDEwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBhZGQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgKyBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICsgTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3N1YnRyYWN0XG4gKiBAcGFyYW0gTSB7TWF0cml4fG51bWJlcn0gU3VidHJhY3QgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLnN1YnRyYWN0KDEpIC8vIFtbNCwgMl1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5zdWJ0cmFjdChCKSAvLyBbWzAsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3Qgc3VidHJhY3QnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgLSBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4IC0gTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I211bHRpcGx5XG4gKiBAZGVzYyBNdXRsaXBseSBhIHNjYWxhciBvciBhIG10cmFpeCB3aXRoIGEgbWF0cml4LiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIG11bHRpcGxpY2F0aW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAqIEBwYXJhbSBNIHtNYXRyaXh8bnVtYmVyfVxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEubXVsdGlwbHkoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5tdWx0aXBseShCKSAvLyBbWzI1LCAyNV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzZSBzdGF0aWMgbWV0aG9kIFxcJ2RvdFxcJyB0byBkbyBtYXRyaXggbXVsdGlwbGljYXRpb24nKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBjcmVhdGUgaGFkYW1hcmQgcHJvZHVjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgoY29sLCBqZHgpID0+IGNvbCAqIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKiBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkaXRpdmVpbnZlcnNlXG4gKiBAZGVzYyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1hdHJpeCBvYnRhaW5lZCBieSBjaGFuZ2luZyB0aGUgc2lnbiBvZiBldmVyeSBtYXRyaXggZWxlbWVudC4gVGhlIGFkZGl0aXZlIGludmVyc2Ugb2YgbWF0cml4IEEgaXMgd3JpdHRlbiDigJNBLlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsLTVdLCBbLTQsIDRdXSlcbiAqIGNvbnN0IG1pbnVzQSA9IEEuYWRkaXRpdmVpbnZlcnNlKClcbiAqIC8vIFtbLTUsIDVdLCBbNCwgLTRdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZGl0aXZlaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseSgtMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2hhZGFtYXJkXG5cbiAqIEBzZWUgbXVsdGlwbHlcbiAqIEBwYXJhbSBNXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeFtdfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWzMsIC03LCAtMiwgMl0sIFstMywgNSwgMSwgMF0sIFs2LCAtNCwgMCwgLTVdLCBbLTksIDUsIC01LCAxMl1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiBjb25zdCBsdSA9IEEubHUoKVxuICogLy8gTC5fX3ZhbHVlID0gWyBbIDEsIDAsIDAsIDAgXSwgWyAtMSwgMSwgMCwgMCBdLCBbIDIsIC01LCAxLCAwIF0sIFsgLTMsIDgsIDMsIDEgXSBdXG4gKiAvLyBVLl9fdmFsdWUgPSAgWyBbIDMsIC03LCAtMiwgMiBdLCBbIDAsIC0yLCAtMSwgMiBdLCBbIDAsIDAsIC0xLCAxIF0sIFsgMCwgMCwgMCwgLTEgXSBdXG4gKiBNYXRyaXguZG90KGx1WzBdLCBsdVsxXSkgLy8gcmV0dXJucyBjbG9uZSBvZiBBXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmx1ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgY29uc3QgdG9sID0gMWUtNlxuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEwgPSB0aGlzLnplcm9zKClcbiAgY29uc3QgVSA9IHRoaXMuemVyb3MoKVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgaWYgKE1hdGguYWJzKEEuX192YWx1ZVtrXVtrXSkgPCB0b2wpIHRocm93IEVycm9yKCdDYW5ub3QgcHJvY2VlZCB3aXRob3V0IGEgcm93IGV4Y2hhbmdlJylcbiAgICBMLl9fdmFsdWVba11ba10gPSAxXG4gICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBMLl9fdmFsdWVbaV1ba10gPSBBLl9fdmFsdWVbaV1ba10gLyBBLl9fdmFsdWVba11ba11cbiAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47ICsraikge1xuICAgICAgICBBLl9fdmFsdWVbaV1bal0gPSBBLl9fdmFsdWVbaV1bal0gLSBMLl9fdmFsdWVbaV1ba10gKiBBLl9fdmFsdWVba11bal1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCA9IGs7IGwgPCBuOyArK2wpIHtcbiAgICAgIFUuX192YWx1ZVtrXVtsXSA9IEEuX192YWx1ZVtrXVtsXVxuICAgIH1cbiAgfVxuICByZXR1cm4gW0wsIFVdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I3JyZWZcbiAqIEByZXR1cm5zIHtNYXRyaXh8QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcblxuICogQGZ1bmN0aW9uIE1hdHJpeCNzb2x2ZVxuICogQHBhcmFtIGJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMVSA9IEEubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG4gIGNvbnN0IHggPSBbXVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAgIH1cbiAgICBjW2tdID0gYltrXSAtIHNcbiAgICBzID0gMFxuICB9XG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpbnZlcnNlXG5cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzIsIDRdXSkuaW52ZXJzZSgpXG4gKiAvLyBbIFsgMiwgLTAuNSBdLCBbIC0xLCAwLjUgXSBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgSSA9IEEuaWRlbnRpdHkoKVxuICBjb25zdCBJbnYgPSBBLmNvbmNhdChJKS5ycmVmKClcblxuICBjb25zdCByZXN1bHQgPSBJbnYuX192YWx1ZS5yZWR1Y2UoKHJlc3VsdCwgeCwgaWR4KSA9PiB7XG4gICAgY29uc3QgaGFsZiA9IHgubGVuZ3RoIC8gMlxuICAgIHJlc3VsdC5wdXNoKHguc2xpY2UoaGFsZiwgeC5sZW5ndGgpKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSwgW10pXG4gIHJldHVybiBNYXRyaXgub2YocmVzdWx0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjcmFua1xuXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJyZWYgPSB0aGlzLnJyZWYoKVxuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJyZWYuZ2V0Q29scygpOyArK2kpIHtcbiAgICByZXN1bHQgKz0gcnJlZi5fX3ZhbHVlW2ldW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGltZW5zaW9uXG5cbiAqIEBzZWUgcmFua1xuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmsoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ1xuXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFnKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyBbMiwgNV1cbiAqXG4gKi9cbk1hdHJpeC5kaWFnID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFnKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDFcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFncHJvZHVjdCgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICBhY2MgKj0geFtpZHhdXG4gICAgcmV0dXJuIGFjY1xuICB9KSgxKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5kaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguZGlhZ3Byb2R1Y3QoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIDEwXG4gKlxuICovXG5NYXRyaXguZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWdwcm9kdWN0KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3N1bVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5zdW0oKVxuICogLy8gOVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLnN1bSgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4ge1xuICAgIGFjYyArPSBmb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2ICsgbmV4dCkoMCkoeClcbiAgICByZXR1cm4gYWNjXG4gIH0pKDApKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnN1bVxuICogQGRlc2MgUmV0dXJucyB0aGUgc3VtIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIE1hdHJpeFxuICogQHBhcmFtIE0ge01hdHJpeHxBcnJheX0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguc3VtKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyA5XG4gKlxuICovXG5NYXRyaXguc3VtID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5zdW0oKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgja3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0gTSB7TWF0cml4fSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKHRoaXMg4oqXIE0pXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmtyb25lY2tlciA9IGZ1bmN0aW9uIChNKSB7XG4gIGNvbnN0IG0gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCBuID0gdGhpcy5nZXRDb2xzKClcbiAgY29uc3QgcCA9IE0uZ2V0Um93cygpXG4gIGNvbnN0IHEgPSBNLmdldENvbHMoKVxuXG4gIGNvbnN0IGxlZnQgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgcmlnaHQgPSBNLl9fdmFsdWVcblxuICBjb25zdCBmcmFtZSA9IGdlbmVyYXRlKG0gKiBwLCBuICogcSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHE7IGwrKykge1xuICAgICAgICAgIGZyYW1lW3AgKiBpICsga11bcSAqIGogKyBsXSA9IGxlZnRbaV1bal0gKiByaWdodFtrXVtsXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdHJpeC5vZihmcmFtZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lmtyb25lY2tlclxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIEEge01hdHJpeH0gVGhlIGxlZnQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcGFyYW0gQiB7TWF0cml4fSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgua3JvbmVja2VyID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5rcm9uZWNrZXIoQilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBjb25jYXQgZnJvbSAnZnVuLmpzL3NyYy9jb25jYXQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQHBhcmFtIE0ge01hdHJpeH1cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge251bWJlcn1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gKE0sIG0sIGlkeCkge1xuICByZXR1cm4gY29uY2F0KG0sIE0uX192YWx1ZVtpZHhdKVxufSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGZvbGQgZnJvbSAnZnVuLmpzL3NyYy9mb2xkJ1xuaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCByb3VuZCBmcm9tICcuL3JvdW5kJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBkb3RcbiAqIEBwYXJhbSBCIHtNYXRyaXh9XG4gKiBAcGFyYW0gYSB7QXJyYXl9XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChkZWNpbWFscywgQiwgYSkgPT4gbWFwKChpdGVtLCBpKSA9PiB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGopID0+IHtcbiAgICBhY2MgKz0gcm91bmQoeCAqIEIuX192YWx1ZVtqXVtpXSwgZGVjaW1hbHMpXG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKShhKVxufSkoQi5fX3ZhbHVlWzBdKSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShtID0+IFtdKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBkZXNjIEdlbmVyYXRvciBmdW5jdGlvbiBmb3IgYSBtYXRyaXggYXJyYXksIHZhbHVlcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICogQHBhcmFtIHJvd3Mge251bWJlcn1cbiAqIEBwYXJhbSBjb2xzIHtudW1iZXJ9XG4gKiBAcmV0dXJucyB7YW55W11bXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJvd3MsIGNvbHMpID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge251bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7bnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscykge1xuICByZXR1cm4gTnVtYmVyKE1hdGgucm91bmQodmFsdWUgKyAnZScgKyBkZWNpbWFscykgKyAnZS0nICsgZGVjaW1hbHMpXG59XG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5cbi8qKlxuICogQGZ1bmN0aW9uIHRyYW5zcG9zZVxuICogQGRlc2MgVHJhbnNwb3NlcyBhIGFycmF5IG9mIGFycmF5cyB1c2luZyB0aGUgTWF0cml4Lm1hcCBmdW5jdGlvblxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7bnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgocHJldiwgbmV4dCkgPT4gbWFwKChpdGVtLCBpKSA9PiAocHJldltpXSB8fCBbXSkuY29uY2F0KG5leHRbaV0pKShuZXh0KSlcbiIsIi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZnVuY3Rpb24gd2l0aCBhcml0eSAxXG4gKiBAZnVuY3Rpb24gY3VycnkxXG4gKiBAcHJpdmF0ZVxuICogQHNpbmNlIHYxLjAuMlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyeTEgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkIChhKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgID8gdGhpc1xuICAgICAgOiBmbihhKVxuICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqXG4gKiBAZnVuY3Rpb24gYW5kXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoeCwgeSkgLT4gYm9vbGVhblxuICogQHBhcmFtIHsqfSB4IC0gQSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7Kn0geSAtIEEgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFuZCAoeCwgeSkge1xuICByZXR1cm4geCAmJiB5XG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGFycmF5Q29uY2F0XG4gKiBAcGFyYW0gYTFcbiAqIEBwYXJhbSBhMlxuICogQHJldHVybnMge1RbXX1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoYSwgYilcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZXF1YWxzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiBmb3IgZGVlcCBjb21wYXJpc29uIG9mIGFycmF5c1xuICogQHBhcmFtIHthfSB4IC0gT2JqZWN0IHRvIGNvbXBhcmUgb2YgdHlwZSBhXG4gKiBAcGFyYW0ge2F9IHkgLSBPYmplY3QgeCB0byBjb21wYXJlIHdpdGggb2JqZWN0IHhcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFsc0FycmF5ICh4LCB5KSB7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm90KGVxdWFscyh4W2ldLCB5W2ldKSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IHZlcmlmaWVzIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudCBpcyBhIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gSXRlbSB0byB2ZXJpZnlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdCb29sZWFuJylcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qKlxuICogQGZ1bmN0aW9uIGN1cnJ5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5IChmdW4pIHtcbiAgY29uc3QgYXJnc2xlbiA9IGZ1bi5sZW5ndGhcblxuICBpZiAoYXJnc2xlbiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5cbiAgfVxuICByZXR1cm4gY3JlYXRlUmVjdXJzZXIoW10pXG5cbiAgZnVuY3Rpb24gcmVjdXJzZSAoYWNjLCBhcmdzKSB7XG4gICAgY29uc3QgX2FjYyA9IGFjYy5jb25jYXQoYXJncylcbiAgICByZXR1cm4gX2FjYy5sZW5ndGggPCBhcmdzbGVuXG4gICAgICA/IGNyZWF0ZVJlY3Vyc2VyKF9hY2MpXG4gICAgICA6IGZ1bi5hcHBseSh0aGlzLCBfYWNjKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUmVjdXJzZXIgKGFjYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjdXJzZShhY2MsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eSAoeCkge1xuICByZXR1cm4gbmV3IHguY29uc3RydWN0b3IoKVxufTtcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZXF1YWxzXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGVxdWFsaXR5IG9mIDIgaXRlbXNcbiAqIEBwYXJhbSB7Kn0geCAtIExlZnQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEBwYXJhbSB7Kn0geSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBuYW4gPSBOdW1iZXIuTmFOXG4gKiBlcXVhbChuYW4sIG5hbikgLy8gcmV0dXJucyB0cnVlXG4gKlxuICogY29uc3QgYXJyMSA9IFswLCAxLCAyLCAzXVxuICogY29uc3QgYXJyMiA9IFtudWxsLCAxLCAyLCAzXVxuICogZXF1YWxzKGFycjEsIGFycjIpIC8vIHJldHVybnMgZmFsc2VcbiAqXG4gKiBlcXVhbHMobmV3IE9iamVjdCh7J2EnOiAwLCAnYic6IDF9KSwgeydhJzogMCwgJ2InOiAxfSkgLy8gdHJ1ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGlkZW50aWNhbCBmcm9tICcuL2lkZW50aWNhbCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnXG5pbXBvcnQgb3IgZnJvbSAnLi9vcidcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vYXJyYXkvaXMnXG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vYm9vbGVhbi9pcydcbmltcG9ydCBpc051bWJlciBmcm9tICcuL251bWJlci9pcydcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL3N0cmluZy9pcydcbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9kYXRlL2lzJ1xuaW1wb3J0IGVxdWFsc0FycmF5IGZyb20gJy4vYXJyYXkvZXF1YWxzJ1xuaW1wb3J0IGVxdWFsc09iamVjdCBmcm9tICcuL29iamVjdC9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGVxdWFscyAoeCwgeSkge1xuICBpZiAoaWRlbnRpY2FsKHgsIHkpKSByZXR1cm4gdHJ1ZVxuXG4gIGlmICh0eXBlKHgpICE9PSB0eXBlKHkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAob3Iobm90KGV4aXN0cyh4KSksIG5vdChleGlzdHMoeSkpKSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZVxuXG4gIGlmIChpc1N0cmluZyh4KSB8fCBpc0Jvb2xlYW4oeCkgfHwgaXNOdW1iZXIoeCkgfHwgaXNEYXRlKHgpKSB7XG4gICAgcmV0dXJuIGlkZW50aWNhbCh4LnZhbHVlT2YoKSwgeS52YWx1ZU9mKCkpXG4gIH1cbiAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzQXJyYXkoeCwgeSlcbiAgfSBlbHNlIGlmIChpc09iamVjdCh4KSkge1xuICAgIHJldHVybiBlcXVhbHNPYmplY3QoeCwgeSlcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBleGlzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhpc3RzICh4KSB7XG4gIHJldHVybiAhKHggPT0gbnVsbClcbn07XG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgoYSwgYiwgYywgYSkg4oaSIGEpIOKGkiBhIOKGkiBbYl0g4oaSIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gYSBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHsqfSBbYl0gdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IGEgaXMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlXG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIC8vIGlmIChhLm5leHQpIHtcbiAgLy8gICByZXR1cm4gaXRlcmFibGVGb2xkKGNiLCBpbml0LCBhKVxuICAvLyB9XG4gIC8vIGlmICh0eXBlKFN5bWJvbCkgIT09ICd1bmRlZmluZWQnICYmIGFbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAvLyAgIHJldHVybiBpdGVyYWJsZUZvbGQoY2IsIGluaXQsIGFbU3ltYm9sLml0ZXJhdG9yXSgpKVxuICAvLyB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcblxuLy8gZnVuY3Rpb24gaXRlcmFibGVGb2xkIChjYiwgYWNjLCBnZW4pIHtcbi8vICAgbGV0IHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4vLyAgICAgYWNjID0gY2IoYWNjLCBzdGVwLnZhbHVlKVxuLy8gICAgIHN0ZXAgPSBnZW4ubmV4dCgpXG4vLyAgIH1cbi8vICAgcmV0dXJuIGFjY1xuLy8gfVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyIChpdGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSlcbn1cbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIEl0ZXJhdG9yIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjNcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBhXG4gKiBAcmV0dXJuIHtJdGVyYXRvcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYWxsYmFjaywgaXRlcmF0b3IpIHtcbiAgbGV0IHIgPSBbXVxuICBmb3IgKGxldCBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7IG5leHRWYWx1ZS5kb25lICE9PSB0cnVlOyBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICByLnB1c2goY2FsbGJhY2soaXRlcmF0b3IudmFsdWUoKSkpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuL3N0cmluZy9tYXAnXG5pbXBvcnQgaXRlcmF0b3JNYXAgZnJvbSAnLi9pdGVyYXRvci9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNJdGVyYXRvcihhKVxuICAgICAgICA/IGl0ZXJhdG9yTWFwKGNiLCBhKVxuICAgICAgICA6IGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBub3RcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG5vdCAoeCkge1xuICByZXR1cm4gIXhcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG5cbiAqIGVxdWFsc1xuICogY2hlY2tzIGZvciBlcXVhbGl0eVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4uL2V4aXN0cydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KCh4LCB5KSA9PiB7XG4gIGZvciAobGV0IGtleVggaW4geCkge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICBpZiAobm90KGVxdWFscyh4W2tleVhdLCB5W2tleVhdKSkpIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yIChsZXQga2V5WSBpbiB5KSB7XG4gICAgaWYgKG5vdChleGlzdHMoeFtrZXlZXSkpICYmIGV4aXN0cyh5W2tleVldKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBvKSB7XG4gIGNvbnN0IGsgPSBrZXlzKG8pXG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGsubGVuZ3RoXG4gIGxldCByID0gT2JqZWN0KGluaXQpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciA9IGNiKHIsIG9ba1tpXV0sIGtbaV0sIG8pXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdPYmplY3QnKVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBvd24ga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKE9iamVjdChhKSlcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gc3RyaW5nQ29uY2F0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7IC8vIHVzZSBmdW5jdGlvbigpLCBhcnJvdyBmdW5jdGlvbiBkb2Vzbid0IGJpbmQgYXJndW1lbnRzXG4gIHJldHVybiBTdHJpbmcoYSkgKyBTdHJpbmcoYilcbn1cbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ1N0cmluZycpXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhIHN0cmluZyBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgbGV0IHIgPSAnJ1xuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgKz0gY2IoYS5jaGFyQXQoaSksIGksIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiB0eXBlXG4gKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi9fcHJpdmF0ZS9jdXJyeTEnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5MShmdW5jdGlvbiB0eXBlICh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkuc2xpY2UoOCwgLTEpXG59KVxuIiwiLyoqXG4gKiBAY2xhc3MgQWN0aXZhdGlvbkZ1bmN0aW9uXG4gKiBAcGFyYW0gZnVuY1xuICogQHBhcmFtIGRmdW5jXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2YXRpb25GdW5jdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChmdW5jLCBkZnVuYykge1xuICAgIHRoaXMuZnVuYyA9IGZ1bmNcbiAgICB0aGlzLmRmdW5jID0gZGZ1bmNcbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICdAYXN0dWFuYXgvZnVubWF0cml4J1xuaW1wb3J0IHNpZ21vaWQgZnJvbSAnLi91dGlsL3NpZ21vaWQnXG5cbi8qKlxuICogQGNsYXNzIE5ldXJhbE5ldHdvcmtcbiAqXG4gKi9cbmNsYXNzIE5ldXJhbE5ldHdvcmsge1xuICBjb25zdHJ1Y3RvciAoLi4udmFsdWVzKSB7XG4gICAgW3RoaXMuaW5wdXRfbm9kZXMsIHRoaXMuaGlkZGVuX25vZGVzLCB0aGlzLm91dHB1dF9ub2Rlc10gPSB2YWx1ZXNcblxuICAgIHRoaXMud2VpZ2h0c19paCA9IG5ldyBNYXRyaXgodGhpcy5oaWRkZW5fbm9kZXMsIHRoaXMuaW5wdXRfbm9kZXMpXG4gICAgdGhpcy53ZWlnaHRzX2hvID0gbmV3IE1hdHJpeCh0aGlzLm91dHB1dF9ub2RlcywgdGhpcy5oaWRkZW5fbm9kZXMpXG4gICAgdGhpcy53ZWlnaHRzX2loLnJhbmRvbWl6ZSgpXG4gICAgdGhpcy53ZWlnaHRzX2hvLnJhbmRvbWl6ZSgpXG5cbiAgICB0aGlzLmJpYXNfaCA9IG5ldyBNYXRyaXgodGhpcy5oaWRkZW5fbm9kZXMsIDEpXG4gICAgdGhpcy5iaWFzX28gPSBuZXcgTWF0cml4KHRoaXMub3V0cHV0X25vZGVzLCAxKVxuICAgIHRoaXMuYmlhc19oLnJhbmRvbWl6ZSgpXG4gICAgdGhpcy5iaWFzX28ucmFuZG9taXplKClcblxuICAgIHRoaXMuc2V0QWN0aXZhdGlvbkZ1bmN0aW9uKClcbiAgICB0aGlzLnNldExlYXJuaW5nUmF0ZSgpXG4gIH1cblxuICAvKipcbiogQGZ1bmN0aW9uIE5ldXJhbE5ldHdvcmsjc2V0QWN0aXZhdGlvbkZ1bmN0aW9uXG4gICAqIEBwYXJhbSBmdW5jXG4gICAqL1xuICBzZXRBY3RpdmF0aW9uRnVuY3Rpb24gKGZ1bmMgPSBzaWdtb2lkKSB7XG4gICAgdGhpcy5hY3RpdmF0aW9uX2Z1bmN0aW9uID0gZnVuY1xuICB9XG5cbiAgLyoqXG4qIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3NldExlYXJuaW5nUmF0ZVxuICAgKiBAcGFyYW0gbGVhcm5pbmdSYXRlXG4gICAqL1xuICBzZXRMZWFybmluZ1JhdGUgKGxlYXJuaW5nUmF0ZSA9IDAuMSkge1xuICAgIHRoaXMubGVhcm5pbmdfcmF0ZSA9IGxlYXJuaW5nUmF0ZVxuICB9XG5cbiAgLyoqXG4qIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3ByZWRpY3RcbiAgICogQHBhcmFtIGlucHV0QXJyYXlcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgcHJlZGljdCAoaW5wdXRBcnJheSkge1xuICAgIC8vIEdlbmVyYXRpbmcgdGhlIEhpZGRlbiBPdXRwdXRzXG4gICAgbGV0IGlucHV0cyA9IE1hdHJpeC5mcm9tQXJyYXkoaW5wdXRBcnJheSlcbiAgICBsZXQgaGlkZGVuID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNfaWgsIGlucHV0cylcbiAgICBoaWRkZW4uYWRkKHRoaXMuYmlhc19oKVxuICAgIC8vIGFjdGl2YXRpb24gZnVuY3Rpb24hXG4gICAgaGlkZGVuLm1hcCh0aGlzLmFjdGl2YXRpb25fZnVuY3Rpb24uZnVuYylcblxuICAgIC8vIEdlbmVyYXRpbmcgdGhlIG91dHB1dCdzIG91dHB1dCFcbiAgICBsZXQgb3V0cHV0ID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNfaG8sIGhpZGRlbilcbiAgICBvdXRwdXQuYWRkKHRoaXMuYmlhc19vKVxuICAgIG91dHB1dC5tYXAodGhpcy5hY3RpdmF0aW9uX2Z1bmN0aW9uLmZ1bmMpXG5cbiAgICAvLyBTZW5kaW5nIGJhY2sgdG8gdGhlIGNhbGxlciFcbiAgICByZXR1cm4gb3V0cHV0LnRvQXJyYXkoKVxuICB9XG5cbiAgLyoqXG4qIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3RyYWluXG4gICAqIEBwYXJhbSBpbnB1dEFycmF5XG4gICAqIEBwYXJhbSB0YXJnZXRBcnJheVxuICAgKi9cbiAgdHJhaW4gKGlucHV0QXJyYXksIHRhcmdldEFycmF5KSB7IC8vIHJhdyBkYXRhID0+IGV4cGVjdGVkIG91dHB1dFxuICAgIC8vIEdlbmVyYXRpbmcgdGhlIEhpZGRlbiBPdXRwdXRzXG4gICAgbGV0IGlucHV0cyA9IE1hdHJpeC5mcm9tQXJyYXkoaW5wdXRBcnJheSlcbiAgICBsZXQgaGlkZGVuID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNfaWgsIGlucHV0cylcblxuICAgIGhpZGRlbi5hZGQodGhpcy5iaWFzX2gpXG4gICAgLy8gYWN0aXZhdGlvbiBmdW5jdGlvbiFcbiAgICBoaWRkZW4ubWFwKHRoaXMuYWN0aXZhdGlvbl9mdW5jdGlvbi5mdW5jKVxuXG4gICAgLy8gR2VuZXJhdGluZyB0aGUgb3V0cHV0J3Mgb3V0cHV0IVxuICAgIGxldCBvdXRwdXRzID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNfaG8sIGhpZGRlbilcbiAgICBvdXRwdXRzLmFkZCh0aGlzLmJpYXNfbylcbiAgICBvdXRwdXRzLm1hcCh0aGlzLmFjdGl2YXRpb25fZnVuY3Rpb24uZnVuYylcblxuICAgIC8vIENvbnZlcnQgYXJyYXkgdG8gbWF0cml4IG9iamVjdFxuICAgIGxldCB0YXJnZXRzID0gTWF0cml4LmZyb21BcnJheSh0YXJnZXRBcnJheSlcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZXJyb3JcbiAgICAvLyBFUlJPUiA9IFRBUkdFVFMgLSBPVVRQVVRTXG4gICAgbGV0IG91dHB1dEVycm9ycyA9IE1hdHJpeC5zdWJ0cmFjdCh0YXJnZXRzLCBvdXRwdXRzKVxuXG4gICAgLy8gbGV0IGdyYWRpZW50ID0gb3V0cHV0cyAqICgxIC0gb3V0cHV0cyk7XG4gICAgLy8gQ2FsY3VsYXRlIGdyYWRpZW50XG4gICAgbGV0IGdyYWRpZW50cyA9IE1hdHJpeC5tYXAob3V0cHV0cywgdGhpcy5hY3RpdmF0aW9uX2Z1bmN0aW9uLmRmdW5jKVxuICAgIGdyYWRpZW50cy5tdWx0aXBseShvdXRwdXRFcnJvcnMpXG4gICAgZ3JhZGllbnRzLm11bHRpcGx5KHRoaXMubGVhcm5pbmdfcmF0ZSlcblxuICAgIC8vIENhbGN1bGF0ZSBkZWx0YXNcbiAgICBsZXQgaGlkZGVuVCA9IE1hdHJpeC50cmFuc3Bvc2UoaGlkZGVuKVxuICAgIGxldCB3ZWlnaHRIb0RlbHRhcyA9IE1hdHJpeC5kb3QoZ3JhZGllbnRzLCBoaWRkZW5UKVxuXG4gICAgLy8gQWRqdXN0IHRoZSB3ZWlnaHRzIGJ5IGRlbHRhc1xuICAgIHRoaXMud2VpZ2h0c19oby5hZGQod2VpZ2h0SG9EZWx0YXMpXG4gICAgLy8gQWRqdXN0IHRoZSBiaWFzIGJ5IGl0cyBkZWx0YXMgKHdoaWNoIGlzIGp1c3QgdGhlIGdyYWRpZW50cylcbiAgICB0aGlzLmJpYXNfby5hZGQoZ3JhZGllbnRzKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBoaWRkZW4gbGF5ZXIgZXJyb3JzXG4gICAgbGV0IHdob1QgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMud2VpZ2h0c19obylcbiAgICBsZXQgaGlkZGVuRXJyb3JzID0gTWF0cml4LmRvdCh3aG9ULCBvdXRwdXRFcnJvcnMpXG5cbiAgICAvLyBDYWxjdWxhdGUgaGlkZGVuIGdyYWRpZW50XG4gICAgbGV0IGhpZGRlbkdyYWRpZW50ID0gTWF0cml4Lm1hcChoaWRkZW4sIHRoaXMuYWN0aXZhdGlvbl9mdW5jdGlvbi5kZnVuYylcbiAgICBoaWRkZW5HcmFkaWVudC5tdWx0aXBseShoaWRkZW5FcnJvcnMpXG4gICAgaGlkZGVuR3JhZGllbnQubXVsdGlwbHkodGhpcy5sZWFybmluZ19yYXRlKVxuXG4gICAgLy8gQ2FsY3VhdGUgaW5wdXQtPmhpZGRlbiBkZWx0YXNcbiAgICBsZXQgaW5wdXRzVCA9IE1hdHJpeC50cmFuc3Bvc2UoaW5wdXRzKVxuICAgIGxldCB3ZWlnaHRJaERlbHRhcyA9IE1hdHJpeC5kb3QoaGlkZGVuR3JhZGllbnQsIGlucHV0c1QpXG5cbiAgICB0aGlzLndlaWdodHNfaWguYWRkKHdlaWdodEloRGVsdGFzKVxuICAgIC8vIEFkanVzdCB0aGUgYmlhcyBieSBpdHMgZGVsdGFzICh3aGljaCBpcyBqdXN0IHRoZSBncmFkaWVudHMpXG4gICAgdGhpcy5iaWFzX2guYWRkKGhpZGRlbkdyYWRpZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ldXJhbE5ldHdvcmtcbiIsIi8qKlxuICogQGNsYXNzIFBlcmNlcHRyb25cbiAqIEBjbGFzc2Rlc2MgUGVyY2VwdHJvbiB0byB0cmFpbiBhbmQgcHJlZGljdFxuICogQHNlZSBvZlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoWzAuMjM2NTY5OCwgMC40NTY3ODk3LCAwLjk1OTg5ODk4LCAtMC40NTc4Nzg3ODddKVxuICpcbiAqL1xubGV0IFBlcmNlcHRyb24gPSBmdW5jdGlvbiAod2VpZ2h0cykge1xuICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzIHx8IFtdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBQZXJjZXB0cm9uLm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgUGVyY2VwdHJvbiBvYmplY3RcbiAqIEBwYXJhbSB3ZWlnaHRzIHthcnJheX0gV2VpZ2h0cyBmb3IgcHJlZGljdGluZ1xuICogQHJldHVybnMge1BlcmNlcHRyb259XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHdlaWdodHMgPSBbMC4xMjM0NTYsIDAuNDU4Nzg5LCAwLjk5ODc0NTRdXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2Yod2VpZ2h0cylcbiAqXG4gKi9cblBlcmNlcHRyb24ub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBQZXJjZXB0cm9uKSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUGVyY2VwdHJvbikge1xuICAgIHRoaXMud2VpZ2h0cyA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBQZXJjZXB0cm9uKHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuUGVyY2VwdHJvbi5wcm90b3R5cGUudHlwZSA9ICdQZXJjZXB0cm9uJ1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAZnVuY3Rpb24gUGVyY2VwdHJvbiNwcmVkaWN0XG4gKiBAcGFyYW0gcm93IHtBcnJheX0gQXJyYXkgb2YgdmFsdWVzIHRvIHByZWRpY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoKVxuICogY29uc3QgdHJhaW4gID0gWy4uLl0gLy8gZGF0YXNldDogW1swLDEsMl0sIFsxLDIsM11dXG4gKiBtLnRyYWluKHRyYWluLCAwLjEsIDEwMDAwKVxuICogbS5wcmVkaWN0KFsxLDIsMV0pIC8vIHJldHVybnMgMSBvciAwXG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAocm93KSB7XG4gIHZhciBhY3RpdmF0aW9uID0gdGhpcy53ZWlnaHRzWzBdXG4gIHJvdy5mb3JFYWNoKCh4LCBpKSA9PiB7XG4gICAgYWN0aXZhdGlvbiArPSB0aGlzLndlaWdodHNbaSArIDFdICogeFxuICB9KVxuICByZXR1cm4gYWN0aXZhdGlvbiA+PSAwID8gMSA6IDBcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQGZ1bmN0aW9uIFBlcmNlcHRyb24jdHJhaW5cbiAqIEBwYXJhbSB0cmFpbiB7QXJyYXl9IERhdGFzZXQgdG8gdHJhaW4gdGhlIHByZWNlcHRyb25cbiAqIEBwYXJhbSBsUmF0ZSB7TnVtYmVyfSBTZXQgdGhlIGxlYXJuaW5nIHJhdGUgb2YgdGhlIHBlcmNlcHRyb25cbiAqIEBwYXJhbSBuRXBvY2gge051bWJlcn0gU2V0IHRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byB0cmFpbiB0aGUgcGVyY2VwdHJvblxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoKVxuICogY29uc3QgdHJhaW4gID0gWy4uLl0gLy8gZGF0YXNldDogW1swLDEsMl0sIFsxLDIsM11dXG4gKiBtLnRyYWluKHRyYWluLCAwLjEsIDEwMDAwKVxuICogbS53ZWlnaHRzID0gWzAuMjEzMTMxLCAtMC40NTQ2NCwgMC43ODk3OTddXG4gKlxuICovXG5QZXJjZXB0cm9uLnByb3RvdHlwZS50cmFpbiA9IGZ1bmN0aW9uICh0cmFpbiwgbFJhdGUsIG5FcG9jaCkge1xuICB0aGlzLndlaWdodHMgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh0cmFpblswXS5sZW5ndGgpKS5tYXAoeCA9PiAwKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5FcG9jaDsgaSsrKSB7XG4gICAgdHJhaW4uZm9yRWFjaCgoeCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IHguc2xpY2UoLTEpWzBdXG4gICAgICBjb25zdCByb3cgPSB4LnNsaWNlKDAsIC0xKVxuICAgICAgY29uc3QgcHJlZGljdGlvbiA9IHRoaXMucHJlZGljdChyb3cpXG4gICAgICBjb25zdCBlcnJvciA9IGV4cGVjdGVkIC0gcHJlZGljdGlvblxuICAgICAgcm93LmZvckVhY2goKHksIGopID0+IHtcbiAgICAgICAgdGhpcy53ZWlnaHRzW2ogKyAxXSArPSBsUmF0ZSAqIGVycm9yICogeVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmNlcHRyb25cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VwdHJvbiB9IGZyb20gJy4vUGVyY2VwdHJvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV1cmFsTmV0d29yayB9IGZyb20gJy4vTmV1cmFsTmV0d29yaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aXZhdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi9BY3RpdmF0aW9uRnVuY3Rpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpZ21vaWQgfSBmcm9tICcuL3V0aWwvc2lnbW9pZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFuaCB9IGZyb20gJy4vdXRpbC90YW5oJ1xuIiwiaW1wb3J0IEFjdGl2YXRpb25GdW5jdGlvbiBmcm9tICcuLi9BY3RpdmF0aW9uRnVuY3Rpb24nXG5cbi8qKlxuICogQGZ1bmN0aW9uIHNpZ21vaWRcbiAqIEB0eXBlIHtBY3RpdmF0aW9uRnVuY3Rpb259XG4gKi9cbmNvbnN0IHNpZ21vaWQgPSBuZXcgQWN0aXZhdGlvbkZ1bmN0aW9uKFxuICB4ID0+IDEgLyAoMSArIE1hdGguZXhwKC14KSksXG4gIHkgPT4geSAqICgxIC0geSlcbilcbmV4cG9ydCBkZWZhdWx0IHNpZ21vaWRcbiIsImltcG9ydCBBY3RpdmF0aW9uRnVuY3Rpb24gZnJvbSAnLi4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0YW5oXG4gKiBAdHlwZSB7QWN0aXZhdGlvbkZ1bmN0aW9ufVxuICovXG5jb25zdCB0YW5oID0gbmV3IEFjdGl2YXRpb25GdW5jdGlvbihcbiAgeCA9PiBNYXRoLnRhbmgoeCksXG4gIHkgPT4gMSAtICh5ICogeSlcbilcbmV4cG9ydCBkZWZhdWx0IHRhbmhcbiJdLCJzb3VyY2VSb290IjoiIn0=