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
/* harmony import */ var fun_js_src_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fun.js/src/max */ "./node_modules/fun.js/src/max.js");
/* harmony import */ var fun_js_src_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fun.js/src/min */ "./node_modules/fun.js/src/min.js");
/* harmony import */ var fun_js_src_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fun.js/src/reduce */ "./node_modules/fun.js/src/reduce.js");
/* harmony import */ var fun_js_src_equals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fun.js/src/equals */ "./node_modules/fun.js/src/equals.js");
/* harmony import */ var fun_js_src_not__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fun.js/src/not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _util_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/concat */ "./node_modules/@astuanax/funmatrix/src/util/concat.js");
/* harmony import */ var _util_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/empty */ "./node_modules/@astuanax/funmatrix/src/util/empty.js");
/* harmony import */ var _util_dot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/dot */ "./node_modules/@astuanax/funmatrix/src/util/dot.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/identity */ "./node_modules/@astuanax/funmatrix/src/util/identity.js");
/* harmony import */ var _util_transpose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/transpose */ "./node_modules/@astuanax/funmatrix/src/util/transpose.js");
/* harmony import */ var _util_generate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/generate */ "./node_modules/@astuanax/funmatrix/src/util/generate.js");
/* harmony import */ var _util_solve__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/solve */ "./node_modules/@astuanax/funmatrix/src/util/solve.js");

















/**
 * @class Matrix
 * @classdesc Matrix applicative providing standard matrix operations
 * @summary The Matrix class should not be instantiated with the new keyword. Instead use the Matrix.of syntax to create a new Matrix. Unfortunatly jsdocs does not allow for the constructor to be hidden.
 * @hidecontructor
 * @see Matrix.of
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
 * @param {Array|Function} val - An array of arrays
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
 * @property {String} type - Returns the string 'Matrix' for all Matrix objects
 * @type {String}
 * @example
 *
 * const m =  Matrix.of([[1,2],[2,3],[4,5]])
 * m.type === 'Matrix'
 */
Matrix.prototype.type = 'Matrix'

/**
 * @memberOf Matrix
 * @property {Number} precision - Floating point precision is set to 4 by default
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
 * @desc The precision is used in floating point calculations for the dot product
 * @param {Number} [precision=4] - Set the number of decimals for rounding
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
 * @function Matrix#isSymmetric
 * @desc Boolean indicating whether the Matrix is symmetric by testing for equality of the transposed Matrix.
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
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_6__["default"])(a, b)
}

/**
 * @memberOf Matrix
 * @function Matrix#isSquare
 * @desc Boolean indicating whether the Matrix object is square.
 * @returns {Boolean}
 * @example
 *
 * const A = Matrix.of([[1, 1], [1, 1]])
 * true === A.isSquare()
 *
 */
Matrix.prototype.isSquare = function () {
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_6__["default"])(this.getCols(), this.getRows())
}

/**
 * @memberOf Matrix
 * @function Matrix#isOrthogonal
 * @desc Boolean indicating whether the Matrix is orthogonal by testing for equality between Identity Matrix and the dot product of the Matrix and its transpose.
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
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_6__["default"])(AxAt, I)
}

/**
 * @memberOf Matrix
 * @function Matrix#getCols
 * @desc Number indicating the number of columns in the Matrix
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
 * @desc Function returning a boolean testing for equality of the values of a Matrix or Array
 * @param {Matrix|Array} M - Matrix or Array to compare for equality
 * @returns {Boolean}
 * @example
 *
 * var a = [[1, 1], [1, 1]]
 * var A = Matrix.of(a)
 * var B = Matrix.of(a)
 * true  === A.equals(B)
 */
Matrix.prototype.equals = function (M) {
  return Object(fun_js_src_equals__WEBPACK_IMPORTED_MODULE_6__["default"])(this.__value, M.__value || M)
}

/**
 * @memberOf Matrix
 * @function Matrix#getRows
 * @desc Number indicating the number of rows in the Matrix
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
 * @param {Function} f - An iterator function
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
 * @description Curried function that maps over the rows of the matrix using a map function
 * @param {Function} f - An iterator function
 * @param {Matrix|Array} M - Matrix or array to map
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
 * @param {Function} f - A reduce/fold function
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
 * @param {Function} f - A reduce/fold function
 * @param {Matrix|Array} M - The Matrix to reduce
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
 * @description Function that applies a function to a Matrix
 * @param {Matrix|Array} M - Matrix or Array to apply a function
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
 * @description Curried function that applies a function to a Matrix
 * @param {Function} f - Function that accepts a Matrix as input
 * @param {Matrix|Array} M - Matrix or Array to apply a function
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
 * @param {Matrix} M - The right side of the concatenation/product
 * @param {Function} [f=concat] - A curried function accepting 2 matrices as input
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
Matrix.prototype.concat = function (M, f = _util_concat__WEBPACK_IMPORTED_MODULE_8__["default"]) {
  return Matrix.of(this).map(f(M))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.concat
 * @description A curried function that concatenates 2 Matrices using a function as operator
 * @param {Matrix} A - Left side Matrix of the concatenation
 * @param {Matrix} B - Right side Matrix of the concatenation
 * @param {Function} [f=concat] - A curried function accepting 2 matrices as input
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
Matrix.concat = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (A, B, f = _util_concat__WEBPACK_IMPORTED_MODULE_8__["default"]) {
  return Matrix.of(A).map(f(B))
})

/**
 * @memberOf Matrix
 * @function Matrix#empty
 * @description Returns an empty Matrix from an existing Matrix
 * @returns {Matrix}
 */
Matrix.prototype.empty = function () {
  return Matrix.of(this).map(_util_empty__WEBPACK_IMPORTED_MODULE_9__["default"])
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.empty
 * @description Returns an empty Matrix from an existing Matrix
 * @param {Number} [rows=0] - Rows to generate
 * @param {Number} [cols=0] - Cols to generate
 * @returns {Matrix}
 */
Matrix.empty = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (rows = 0, cols = 0) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(rows, cols) // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(m).map(_util_empty__WEBPACK_IMPORTED_MODULE_9__["default"])
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
  return Matrix.of(_util_identity__WEBPACK_IMPORTED_MODULE_11__["default"]).ap(this)
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.identity
 * @desc curried fucntion that returns an identity matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.identity(3, 2)
 * // [[1, 0, 0], [0, 1, 0]]
 *
 */
Matrix.identity = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(rows, cols) // Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)))
  return Matrix.of(_util_identity__WEBPACK_IMPORTED_MODULE_11__["default"]).ap(m)
})

/**
 * @memberOf Matrix
 * @function Matrix#combine
 * @desc Concatenates 2 Matrices together.
 * @see Matrix.concat
 * @param {Matrix } M - Right side Matrix of the combine operation
 * @returns {Matrix}
 */
Matrix.prototype.combine = function (M) {
  return Matrix.of(this).concat(Matrix.of(M), _util_concat__WEBPACK_IMPORTED_MODULE_8__["default"])
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.combine
 * @desc Curried fucntion that combines 2 Matrices
 * @see Matrix.concat
 * @param {Matrix} A - Left side of the combine operator
 * @param {Matrix} A - Right side of the combine operator
 * @returns {Matrix}
 */
Matrix.combine = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (A, B) {
  return Matrix.of(A).concat(Matrix.of(B), _util_concat__WEBPACK_IMPORTED_MODULE_8__["default"])
})

/**
 * @memberOf Matrix
 * @function Matrix#dot
 * @description Returns the dot product between 2 matrices
 * @param {Matrix|Array} M - Right side of the dot product
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
  return Matrix.of(this).concat(Matrix.of(M), Object(_util_dot__WEBPACK_IMPORTED_MODULE_10__["default"])(this.precision))
}

/**
 * @memberOf Matrix
 * @static
 * @function Matrix.dot
 * @description Curried fucntion that returns the dot product of 2 matrices
 * @param {Matrix|Array} A - Left side of the dot product
 * @param {Matrix|Array} B - Right side of the dot product
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
Matrix.dot = Object(fun_js_src_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (A, B) {
  return Matrix.of(A).dot(Matrix.of(B))
})

/**
 * @memberOf Matrix
 * @function Matrix#fill
 * @desc Fill up an empty matrix with the provided map function
 * @param {Function} f - Function that generates a value
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
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.zeros(3, 3)
 * // [[0,0,0], [0,0,0], [0,0,0]]
 *
 */
Matrix.zeros = function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(rows, cols)
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
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.ones(1, 1)
 * // [[1,1,1], [1,1,1], [1,1,1]]
 *
 */
Matrix.ones = function (rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(rows, cols)
  return Matrix.of(m).fill(x => 1)
}

/**
 * @memberOf Matrix
 * @function Matrix#random
 * @desc Fill up an empty matrix with random values
 * @param {Function} [f = e => Math.random() * 2 - 1] - Function producing random values, can be any type of value
 * @returns {Matrix}
 */
Matrix.prototype.random = function (f = e => Math.random() * 2 - 1) {
  return Matrix.of(this).fill(f)
}

/**
 * @memberOf Matrix
 * @function Matrix.random
 * @desc Fill up an empty matrix with random numbers
 * @param {Function} f - Function which returns random values. Default random values are between -1 and 1
 * @param {Number} rows - Defines the rows of the matrix
 * @param {Number} cols - Defines the columns of the matrix
 * @returns {Matrix}
 */
Matrix.random = function (f = e => (Math.random() * 2 - 1), rows, cols) {
  const m = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(rows, cols)
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
  const M = Matrix.fromArray(this.__value)
  M.setPrecision(this.precision)
  return M
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
  return Matrix.of(Object(fun_js_src_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_util_transpose__WEBPACK_IMPORTED_MODULE_12__["default"], [], this.__value))
}

/**
 * @memberOf Matrix
 * @function Matrix.transpose
 * @desc Returns a transposed Matrix
 * @param {Matrix|Array} M - A Matrix or a matrix array
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
 * @desc Adds a number or a Matrix to this
 * @param {Matrix|Number} M - Add a Matrix or a number
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
 * @desc Subtracts a number or a Matrix from this
 * @param {Matrix|Number} M - Subtract a Matrix or a number
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
 * @desc Mutliply a scalar or a matrix with a matrix. Throws an error if the multiplication is not possible.
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
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
 * @desc Hadamar is an alias of the multiply function
 * @see Matrix.multiply
 * @param {Matrix|Number} M - A Matrix M or a Number to multiply a Matrix
 * @returns {Matrix}
 * @see Matrix.hadamard
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
 * @desc Calculates LU decomposition of the Matrix
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
 * @desc Returns a Matrix containing the row reduced echelon form
 * @returns {Matrix}
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
 * @desc Returns the solution for a system of linear equations
 * @param {Array} b - The numbers for which to solve the system of linear equations
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
  const LU = this.lu()
  const L = LU[0]
  const U = LU[1]
  const n = this.getRows()
  // let s = 0
  // const c = []
  // const x = []

  return Object(_util_solve__WEBPACK_IMPORTED_MODULE_14__["default"])(n, L, U, b)

  // for (let k = 0; k < n; ++k) {
  //   for (let j = 0; j < k; ++j) {
  //     s = s + L.__value[k][j] * c[j]
  //   }
  //   c[k] = b[k] - s
  //   s = 0
  // }
  // for (let a = n - 1; a > -1; --a) {
  //   let t = 0
  //   for (let b = a + 1; b < n; ++b) {
  //     t = t + U.__value[a][b] * x[b]
  //   }
  //   x[a] = (c[a] - t) / U.__value[a][a]
  // }
  // return x
}

/**
 * @memberOf Matrix
 * @function Matrix#inverse
 * @desc Returns the inverse of a Matrix
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
 * @desc Number indicating the maximum number of linearly independent columns.
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
 * @desc Number indicating the maximum number of linearly independent columns.
 * @see Matrix.rank
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
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @param {Matrix|Array} M - Matrix from which to return the diagonal
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
 * @param {Matrix} M - The right side Matrix of the product (this ⊗ M)
 * @returns {Matrix}
 */
Matrix.prototype.kronecker = function (M) {
  const m = this.getRows()
  const n = this.getCols()
  const p = M.getRows()
  const q = M.getCols()

  const left = this.__value
  const right = M.__value

  const frame = Object(_util_generate__WEBPACK_IMPORTED_MODULE_13__["default"])(m * p, n * q)

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
 * @param {Matrix} A - The left side Matrix of the product (A ⊗ B)
 * @param {Matrix} B - The right side Matrix of the product (A ⊗ B)
 * @returns {Matrix}
 */
Matrix.kronecker = function (A, B) {
  return Matrix.of(A).kronecker(B)
}

/**
 * @memberOf Matrix
 * @function Matrix#determinant
 * @desc Calculates the determinant of a square Matrix using Sarrus' rule or LU decomposition
 * @returns {Number}
 */
Matrix.prototype.determinant = function () {
  if (this.isSquare()) {
    if (this.getCols() === 2) {
      const a = this.__value[0][0]
      const b = this.__value[0][1]
      const c = this.__value[1][0]
      const d = this.__value[1][1]

      return a * d - b * c
    }
    const lu = this.lu()
    const detA = Number(lu[0].diagproduct())
    const detB = Number(lu[1].diagproduct())
    return detA * detB
  } else {
    throw Error('The Matrix needs to be a square Matrix to calculate the determinant')
  }
}

/**
 * @memberOf Matrix
 * @function Matrix.determinant
 * @desc Calculates the determinant of a square Matrix using Sarrus' rule or LU decomposition
 * @param {Matrix|Array} A - Matrix as input to calculate the determinant
 * @returns {Number}
 */
Matrix.determinant = function (A) {
  return Matrix.of(A).determinant()
}

/**
 * @memberOf Matrix
 * @function Matrix#max
 * @desc Returns the largest number in the Matrix
 * @returns {*}
 */
Matrix.prototype.max = function () {
  return Object(fun_js_src_reduce__WEBPACK_IMPORTED_MODULE_5__["default"])(fun_js_src_max__WEBPACK_IMPORTED_MODULE_3__["default"], [].concat.apply([], this.__value))
}

/**
 * @memberOf Matrix
 * @function Matrix#min
 * @desc Returns the smallest number in the Matrix
 * @returns {*}
 */
Matrix.prototype.min = function () {
  return Object(fun_js_src_reduce__WEBPACK_IMPORTED_MODULE_5__["default"])(fun_js_src_min__WEBPACK_IMPORTED_MODULE_4__["default"], [].concat.apply([], this.__value))
}

/**
 * @memberOf Matrix
 * @function Matrix#divide
 * @desc Divide a scalar or a matrix by a matrix. Throws an error if the division is not possible.
 * @param {Matrix|Number} M - A Matrix M or a Number to divide a Matrix
 * @returns {Matrix}
 * @example
 *
 * const A = Matrix.of([[5, 4]])
 * A.divide(2) // [[10, 8]]
 * const B = Matrix.of([[1, 1], [2, 4]])
 * B.divide(B) // [[1, 0], [0, 1]]
 *
 */
Matrix.prototype.divide = function (M) {
  if (M instanceof Matrix) {
    if (this.getCols() !== M.getCols() || this.getRows() !== M.getRows()) {
      throw new Error('Matrices do not match, cannot create division')
    }
    if (Object(fun_js_src_not__WEBPACK_IMPORTED_MODULE_7__["default"])(M.isSquare())) {
      throw new Error('Matrix is not square, cannot create inverse')
    }
    const mInv = M.inverse()
    return this.dot(mInv)
  } else {
    return this.multiply(1 / M)
  }
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
 * @desc Helper function concatenating/combining 2 Matrices
 * @param {Matrix} M - Left side of the concat operatior
 * @param {Array} m - right side of the contac operator
 * @param {Number} idx - Index of the row
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
 * @desc Helper function to generate the dotproduct of 2 Matrices
 * @param {Matrix} B - Right side of hte dot product
 * @param {Array} a - Array representing theleft side of the dot product
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


/**
 * @function empty
 * @desc Helper function to generate an empty Matrix
 */
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
 * @param {Number} rows
 * @param {Number} cols
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
 * @param idx {Number}
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
 * @param value {Number}
 * @param decimals {Number}
 * @returns {Number}
 */
function round (value, decimals = 4) {
  return Number(Number.parseFloat(value).toPrecision(decimals))
}


/***/ }),

/***/ "./node_modules/@astuanax/funmatrix/src/util/solve.js":
/*!************************************************************!*\
  !*** ./node_modules/@astuanax/funmatrix/src/util/solve.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return solve; });
/**
 * @function solveL
 * @desc solve the xA = b equation for lower triangular
 * @param n
 * @param L
 * @param b
 * @returns {Array}
 */
function solveL (n, L, b) {
  let s = 0
  const c = []

  for (let k = 0; k < n; ++k) {
    for (let j = 0; j < k; ++j) {
      s = s + L.__value[k][j] * c[j]
    }
    c[k] = b[k] - s
    s = 0
  }
  return c
}

/**
 * @function solveU
 * @desc solve the xA = b equation for upper triangular
 * @param n
 * @param U
 * @param c
 * @param b
 */
function solveU (n, U, c, b) {
  const x = []
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
 * @function solve
 * @desc Helper function for xA = b solver
 * @param n
 * @param L
 * @param U
 * @param b
 */
function solve (n, L, U, b) {
  const c = solveL(n, L, b)
  return solveU(n, U, c, b)
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
 * @param idx {Number}
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

/***/ "./node_modules/fun.js/src/addIndex.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/addIndex.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Adds a specified index to iterate a collection
 *
 * @function addIndex
 * @summary Adds a specified index to iterate a collection
 * @param {Function} f Iterator function
 * @param {Function} g Function to which to add the index
 * @param {Array} a The array on which to work
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const array = [1, 2, 3, 4]
 * addIndex(map, (v, i) => v + i, array) // [1, 3, 5, 7]
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function addIndex (f, g, a) {
  let i = 0
  return f(
    function (v) {
      return g(v, i++)
    },
    a
  )
}));


/***/ }),

/***/ "./node_modules/fun.js/src/adjust.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/adjust.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Modifies an item in an array using the provided function
 *
 * @function adjust
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @param {Function} fn - to modify the item at the specified index
 * @param {Number} i - The index at which to modify the array, accepts postitive and negative indexes
 * @param {Array} a - Array with data
 * @return {Array} Array with the adjusted item
 * @example
 *
 * adjust(add(1), -3, [0, 1, 2, 3]) // [0, 2, 2, 3]
 *
 * const addTen = add(10)
 * adjust(addTen, 2, [2, 3, 4, 5, 6]) // [2, 3, 14, 5, 6]
 *
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjust (fn, i, a) {
  const r = Array.prototype.slice.call(a)
  const idx = i < 0 ? r.length + i : i
  if (!a[idx]) return r
  r[idx] = fn(r[idx])
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/adjustWith.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/adjustWith.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/**
 * Modifies an item in an array using the provided function
 *
 * @function adjustWith
 * @description Modifies an item in an array using the provided function
 * @since v1.0.2
 * @sig (a -> a) -> ((a -> [a]) -> [a] -> num) -> [a] -> [a]
 * @param {Function} fn - to modify the item at the specified index
 * @param {Function} pred - The predicate that returns the indexes if found
 * @param {Iterable} [a]
 * @return {Iterable} [a]
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function adjustWith (fn, pred, a) {
  const _fn = x => {
    if (pred(x)) {
      return fn(x)
    }
    return x
  }
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])(_fn, Array.prototype.slice.call(a))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/all.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/all.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function all
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function all (cb, a) {
  let res = true
  for (let i in a) {
    if (!cb(a[i])) {
      res = false
      break
    }
  }
  return res
}));


/***/ }),

/***/ "./node_modules/fun.js/src/allPass.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/allPass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Applies a list of predicates to the data and returns true if all pass
 *
 * @function allPass
 * @description Applies a list of predicates to the data and returns true if all pass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*... -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function allPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (!cbs[i](a)) return false
  }
  return true
}));


/***/ }),

/***/ "./node_modules/fun.js/src/always.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/always.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns a function with the initial value provided
 *
 * @function always
 * @description Returns a function with the initial value provided
 * @since v1.0.2
 * @sig a -> (* -> a)
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function always (x) {
  return function () { return x }
}));


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

/***/ "./node_modules/fun.js/src/any.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/any.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if at least on of the items in the enumerable match the predicate
 *
 * @function any
 * @description Returns true if at least on of the items in the enumerable match the predicate
 * @since v1.0.2
 * @sig (TODO)
 * @param {Function} cb
 * @param {Iterable} a
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function any (cb, a) {
  let res = false
  for (let i in a) {
    if (cb(a[i])) {
      res = true
      break
    }
  }
  return res
}));


/***/ }),

/***/ "./node_modules/fun.js/src/anyPass.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/anyPass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Applies a list of predicates to the data and returns true if one passes
 *
 * @function anyPass
 * @since v1.0.2
 * @sig [(*... -> Boolean)] -> (*...) -> Boolean
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function anyPass (cbs, a) {
  for (let i = 0; i < cbs.length; i++) {
    if (cbs[i](a)) return true
  }
  return false
}));


/***/ }),

/***/ "./node_modules/fun.js/src/ap.js":
/*!***************************************!*\
  !*** ./node_modules/fun.js/src/ap.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/map */ "./node_modules/fun.js/src/array/map.js");
/**
 * Applies a list of functions to a list of values and returns a combined result array
 *
 * @function ap
 * @description Applies a list of functions to a list of values and returns a combined result array
 * @since v1.0.2
 * @sig @sig [a -> b] -> [a] -> [b]
 * @param {(Function[]|Function|Applicative)} fns - An array of functions or a function or an applicative
 * @param {Array} vals - An array of values
 * @return {Iterable} [a]
 **/






const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Function')

/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function ap (fns, vals) {
  if (isFunction(fns.ap)) {
    return fns.ap(vals)
  }
  if (isFunction(fns)) {
    return x => fns(x)(vals(x))
  }
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_3__["default"])((acc, f) => acc.concat(Object(_array_map__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(f), vals)), [], fns)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/aperture.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/aperture.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");



/**
 * @function aperture
 * @param n
 * @param arr
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function aperture (n, a) {
  if (a.length < n) {
    return []
  }
  const res = Array(a.length - n + 1)
  return Object(_map__WEBPACK_IMPORTED_MODULE_1__["default"])((item, idx) => a.slice(idx, idx + n), res)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/append.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/append.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/**
 * @function append
 * @description Append an elment to a list
 * @param {*} el - Element to add to a list
 * @param {array} list - List to which to add the element
 * @return {array}
 * @example
 *
 * const l = [0, 1]
 * append('a', l) // reutnr [0, 1, 'a']
 *
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function append (el, list) {
  return Object(_concat__WEBPACK_IMPORTED_MODULE_1__["default"])(list, [ el ])
}));


/***/ }),

/***/ "./node_modules/fun.js/src/apply.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/apply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function apply
 * @description The apply() method calls a function with the given arguments provided as an array, and the function as context.
 * @param fn
 * @param args
 * @return {*}
 * @example
 *
 * var a = apply(function () {
 *      return [].slice.call(arguments).map(x => x * 2)
 *   })
 * a([1, 2, 3])
 * // [2, 4, 6]
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function apply (fn, args) {
  return fn.apply(fn, args)
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

/***/ "./node_modules/fun.js/src/array/filter.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/array/filter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function arrayFilter
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function arrayFilter (fn, a) {
  var r = []
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) r.push(a[i])
  }
  return r
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

/***/ "./node_modules/fun.js/src/array/to.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/array/to.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/**
 * @function toArray
 * @description Converts the input to an array
 * @param {ArrayLike} x - Object to convert to an array
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = toArray("string")
 * // result = ['s','t','r','i','n','g']
 *
 * function () {
 *  const args = toArray(arguments)
 *  console.log(typeof args) // Array
 * }
 *
 **/
function toArray (x) {
  return x.length === 1 ? [x[0]] : Array.apply(null, x)
};


/***/ }),

/***/ "./node_modules/fun.js/src/array/union.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/array/union.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function unionArray
 * @description Merges 2 arrays
 * @param {Array} aL - Array to merge
 * @param {Array} aR - Array to merge
 * @return {Array}
 * @since 1.0.2
 * @example
 *
 * const result = unionArray([0,1,2], [3,4,5])
 * // result = [0.1.2.3.4.5]
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function unionArray (aL, aR) {
  return Array.from(new Set(aL.concat(aR)))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/binary.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/binary.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function binary
 * @param cb
 * @returns {function(*=, *=): *}
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function binary (cb) {
  return Object(_curry__WEBPACK_IMPORTED_MODULE_1__["default"])(function (a, b) {
    return cb(a, b)
  })
}));


/***/ }),

/***/ "./node_modules/fun.js/src/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/bind.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");


/**
 * @function bind
 * @description Bind a function to a context
 * @param {function }fn
 * @param {*} context
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function bind (fn, context) {
  return fn.bind(context)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/F.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/F.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./node_modules/fun.js/src/always.js");
/**
 * Always returns a function with a False boolean
 *
 * @function F
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(false));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/T.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/boolean/T.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../always */ "./node_modules/fun.js/src/always.js");
/**
 * Always returns a function with a False boolean
 *
 * @function T
 * @description Always returns a function with a False boolean
 * @since v1.0.2
 * @param {*} a
 * @return {Function}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_always__WEBPACK_IMPORTED_MODULE_0__["default"])(true));


/***/ }),

/***/ "./node_modules/fun.js/src/boolean/both.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/boolean/both.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lift */ "./node_modules/fun.js/src/lift.js");
/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../and */ "./node_modules/fun.js/src/and.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Returns true when both predicates return true
 *
 * @function
 * @since v1.0.2
 * @param {Function} fn1 A predicate function
 * @param {Function} fn2 A predicate function
 * @return {Boolean}
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function both (fn1, fn2) {
  return Object(_is__WEBPACK_IMPORTED_MODULE_3__["default"])('Function')(fn1)
    ? function _both () { return fn1.apply(this, arguments) && fn2.apply(this, arguments) }
    : Object(_lift__WEBPACK_IMPORTED_MODULE_1__["default"])(_and__WEBPACK_IMPORTED_MODULE_2__["default"])(fn1, fn2)
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

/***/ "./node_modules/fun.js/src/call.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/call.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function call
 * @param fn
 * @returns {*}
 */
// import curry1 from './_private/curry1'


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function call (fn) {
  return fn.apply(fn, [].slice.call(arguments, 1))
}));


/***/ }),

/***/ "./node_modules/fun.js/src/complement.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/complement.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lift */ "./node_modules/fun.js/src/lift.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/**
 * @function complement
 * @description Lifts a predicate function and returns the complement
 * @param {Function} A predicate function
 * @return {Function}
 * @see not
 * @see lift
 * @since v1.0.2
 * @example
 *
 * const isNotEmpty = complement(isEmpty)
 * isNotEmpty([]) // false
 * isNotEmpty({'a' : 1}) // true
 *
 * complement(Maybe.of(false)) // true
 * complement(Maybe.of(true)) // false
 */



const complement = Object(_lift__WEBPACK_IMPORTED_MODULE_0__["default"])(_not__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony default export */ __webpack_exports__["default"] = (complement);


/***/ }),

/***/ "./node_modules/fun.js/src/compose.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/compose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * @function compose
 * @returns {function(): *}
 */
function compose () {
  let fns = Array.prototype.slice.call(arguments)

  return function _compose () {
    let init = fns[fns.length - 1]
    let result = [init.apply(init, arguments)]
    let i = fns.length - 2

    for (i; i >= 0; --i) {
      const fn = fns[i]

      result = [fn.apply(fn, result)]
    }
    return result[0]
  }
};


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

/***/ "./node_modules/fun.js/src/cond.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/cond.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cond; });
/**
 * @function cond
 * @param conds
 * @returns {Function}
 */
function cond (conds) {
  return function (value) {
    for (var i = 0; i < conds.length; i++) {
      if (conds[i][0](value)) return conds[i][1](value)
    }
  }
}


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

/***/ "./node_modules/fun.js/src/date/diffDate.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/date/diffDate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function diffDate
 * @description Returns the difference between 2 dates in millisecond
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @return {number} REturn the difference in milliseconds
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function diffDate (start, end) {
  return (new Date(start).getTime() - new Date(end).getTime())
}));


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

/***/ "./node_modules/fun.js/src/date/isFutureDate.js":
/*!******************************************************!*\
  !*** ./node_modules/fun.js/src/date/isFutureDate.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diffDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffDate */ "./node_modules/fun.js/src/date/diffDate.js");
/**
 * Created by dierickx.len on 09/03/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = ((d) => {
  return Object(_diffDate__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date())(d) < 0
});


/***/ }),

/***/ "./node_modules/fun.js/src/date/isValid.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/date/isValid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValid; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/date/is.js");
/**
 *
 */


function isValid (x) {
  // noinspection JSCheckFunctionSignatures
  return Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])(x) && isFinite(x.valueOf())
};


/***/ }),

/***/ "./node_modules/fun.js/src/date/toDay.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/date/toDay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 86400000); // 24*60*60*1000 = 86400000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toHour.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/date/toHour.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 3600000); // 60*60*1000 = 3600000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toMinutes.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/date/toMinutes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 60000); // 60*1000 = 60000


/***/ }),

/***/ "./node_modules/fun.js/src/date/toSeconds.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/date/toSeconds.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by dierickx.len on 26/03/2017.
 */
/* harmony default export */ __webpack_exports__["default"] = ((d) => d / 1000);


/***/ }),

/***/ "./node_modules/fun.js/src/defaultTo.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/defaultTo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if all items in the enumerable match the predicate
 *
 * @function defaultTo
 * @description Returns true if all items in the enumerable match the predicate
 * @since v1.0.2
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function defaultTo (d, v) {
// eslint-disable-next-line no-self-compare
  return v == null || v !== v ? d : v
}));


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

/***/ "./node_modules/fun.js/src/filter.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/filter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/filter */ "./node_modules/fun.js/src/array/filter.js");
/* harmony import */ var _object_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/filter */ "./node_modules/fun.js/src/object/filter.js");
/* harmony import */ var _map_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/filter */ "./node_modules/fun.js/src/map/filter.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * @function filter
 * @description Autocurried fucntion that filters Objects, Arrays and Maps
 *
 */




// TODO
// import setFilter from '../set/filter'


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function filter (fn, a) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_4__["default"])(a)) {
    // switch (Object.prototype.toString.call(a)) {
    // case 'Function':
    //   return curry(function () {
    //     return cb.call(this, a.apply(this, arguments))
    //   })
    case 'Object':
      return Object(_object_filter__WEBPACK_IMPORTED_MODULE_2__["default"])(fn, a)
    // case 'String':
    //   return stringMap(cb, a)
    case 'Map':
      return Object(_map_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(fn, a)
    // case 'Set':
    //   return setFilter(fn, a)
    default:
      return Object(_array_filter__WEBPACK_IMPORTED_MODULE_1__["default"])(fn, a)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/findIndex.js":
/*!**********************************************!*\
  !*** ./node_modules/fun.js/src/findIndex.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Find the index matching a predicate
 *
 * @function findIndex
 * @description Find the index matching a predicate
 * @since v1.0.2
 * @sig (a -> boolean) -> [a] -> number
 * @param {Function} Predicate function returns a boolean
 * @param {Array} An array like object
 * @return {number}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function findIndex (fn, a) {
  let i = 0
  const l = a.length
  while (i < l) {
    if (fn(a[i])) {
      return i
    }
    i += 1
  }
  return -1
}));


/***/ }),

/***/ "./node_modules/fun.js/src/first.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/first.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function first
 * @param [a]
 * @return a | undefined
 * @example
 *
 * const arr = [1, 2, 4]
 * first([1, 2, 4]) // returns 1
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function first (a) {
  return a && a.length ? a[0] : undefined
}));


/***/ }),

/***/ "./node_modules/fun.js/src/flatMap.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/flatMap.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");






const isFunction = Object(_is__WEBPACK_IMPORTED_MODULE_4__["default"])('Function')

/**
 * @function flatMap
 * @param fn
 * @param a
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_3__["default"])(function flatMap (fn, a) {
  if (isFunction(a)) {
    return function (x) {
      return fn(a(x))(x)
    }
  }
  if (isFunction(a.flatMap)) {
    return a.flatMap(fn)
  }
  return Object(_fold__WEBPACK_IMPORTED_MODULE_0__["default"])((acc, x) => Object(_concat__WEBPACK_IMPORTED_MODULE_2__["default"])(acc, fn(x)), Object(_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(a), a)
}));


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

/***/ "./node_modules/fun.js/src/identity.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/identity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/**

 * @function identity
 * @description Returns the value supplied to the function
 */

function identity (x) {
  return x
};


/***/ }),

/***/ "./node_modules/fun.js/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/fun.js/src/index.js ***!
  \******************************************/
/*! exports provided: add, addIndex, adjust, adjustWith, all, allPass, always, and, any, anyPass, ap, aperture, append, apply, binary, bind, both, call, complement, compose, concat, cond, curry, defaultTo, diffDate, divide, Either, Left, Right, empty, equals, exists, F, filter, findIndex, first, flatMap, fold, formatString, has, hasIn, identical, identity, is, isArray, isBoolean, isDate, isEmpty, isFutureDate, isMap, isNan, isNull, isNumber, isObject, isSet, isString, isUndefined, isValidDate, Just, keys, keysIn, last, lift, map, max, Maybe, merge, min, multiply, not, Nothing, omit, or, path, pick, prop, reduce, sort, sum, T, toDay, toHour, toMinutes, toSeconds, truthy, type, union, values, zip, zipObj, zipWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number/add */ "./node_modules/fun.js/src/number/add.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _number_add__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _addIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIndex */ "./node_modules/fun.js/src/addIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addIndex", function() { return _addIndex__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _adjust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust */ "./node_modules/fun.js/src/adjust.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjust", function() { return _adjust__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _adjustWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustWith */ "./node_modules/fun.js/src/adjustWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustWith", function() { return _adjustWith__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all */ "./node_modules/fun.js/src/all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _all__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _allPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allPass */ "./node_modules/fun.js/src/allPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allPass", function() { return _allPass__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _always__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./always */ "./node_modules/fun.js/src/always.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _always__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _and__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./and */ "./node_modules/fun.js/src/and.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _and__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./any */ "./node_modules/fun.js/src/any.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _any__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _anyPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anyPass */ "./node_modules/fun.js/src/anyPass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyPass", function() { return _anyPass__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ap */ "./node_modules/fun.js/src/ap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _ap__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _aperture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aperture */ "./node_modules/fun.js/src/aperture.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aperture", function() { return _aperture__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./append */ "./node_modules/fun.js/src/append.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _append__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply */ "./node_modules/fun.js/src/apply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _apply__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./binary */ "./node_modules/fun.js/src/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binary", function() { return _binary__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bind */ "./node_modules/fun.js/src/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _boolean_both__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./boolean/both */ "./node_modules/fun.js/src/boolean/both.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _boolean_both__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call */ "./node_modules/fun.js/src/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _complement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./complement */ "./node_modules/fun.js/src/complement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return _complement__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./compose */ "./node_modules/fun.js/src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./concat */ "./node_modules/fun.js/src/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cond__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cond */ "./node_modules/fun.js/src/cond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cond", function() { return _cond__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _curry__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _defaultTo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defaultTo */ "./node_modules/fun.js/src/defaultTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTo", function() { return _defaultTo__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _date_diffDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./date/diffDate */ "./node_modules/fun.js/src/date/diffDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffDate", function() { return _date_diffDate__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _number_divide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./number/divide */ "./node_modules/fun.js/src/number/divide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return _number_divide__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _monads_Either__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./monads/Either */ "./node_modules/fun.js/src/monads/Either.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Either", function() { return _monads_Either__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _monads_Left__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./monads/Left */ "./node_modules/fun.js/src/monads/Left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return _monads_Left__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _monads_Right__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./monads/Right */ "./node_modules/fun.js/src/monads/Right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return _monads_Right__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./equals */ "./node_modules/fun.js/src/equals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _equals__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return _exists__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _boolean_F__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./boolean/F */ "./node_modules/fun.js/src/boolean/F.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _boolean_F__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filter */ "./node_modules/fun.js/src/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./findIndex */ "./node_modules/fun.js/src/findIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./first */ "./node_modules/fun.js/src/first.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _flatMap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./flatMap */ "./node_modules/fun.js/src/flatMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _flatMap__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return _fold__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _string_formatString__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./string/formatString */ "./node_modules/fun.js/src/string/formatString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatString", function() { return _string_formatString__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _object_has__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./object/has */ "./node_modules/fun.js/src/object/has.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _object_has__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _object_hasIn__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./object/hasIn */ "./node_modules/fun.js/src/object/hasIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return _object_hasIn__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./identical */ "./node_modules/fun.js/src/identical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identical", function() { return _identical__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./identity */ "./node_modules/fun.js/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./is */ "./node_modules/fun.js/src/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _array_is__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _boolean_is__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./boolean/is */ "./node_modules/fun.js/src/boolean/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _boolean_is__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _date_is__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./date/is */ "./node_modules/fun.js/src/date/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _date_is__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./isEmpty */ "./node_modules/fun.js/src/isEmpty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _date_isFutureDate__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./date/isFutureDate */ "./node_modules/fun.js/src/date/isFutureDate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFutureDate", function() { return _date_isFutureDate__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _map_is__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./map/is */ "./node_modules/fun.js/src/map/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _map_is__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _number_isNan__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./number/isNan */ "./node_modules/fun.js/src/number/isNan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNan", function() { return _number_isNan__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _null_is__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./null/is */ "./node_modules/fun.js/src/null/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _null_is__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _number_is__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./number/is */ "./node_modules/fun.js/src/number/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _number_is__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _object_is__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _set_is__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./set/is */ "./node_modules/fun.js/src/set/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _set_is__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _string_is__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./string/is */ "./node_modules/fun.js/src/string/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _string_is__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _undefined_is__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./undefined/is */ "./node_modules/fun.js/src/undefined/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _undefined_is__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _date_isValid__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./date/isValid */ "./node_modules/fun.js/src/date/isValid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _date_isValid__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _monads_Just__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./monads/Just */ "./node_modules/fun.js/src/monads/Just.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Just", function() { return _monads_Just__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _object_keysIn__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./object/keysIn */ "./node_modules/fun.js/src/object/keysIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keysIn", function() { return _object_keysIn__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _last__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./last */ "./node_modules/fun.js/src/last.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _lift__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./lift */ "./node_modules/fun.js/src/lift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lift", function() { return _lift__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./max */ "./node_modules/fun.js/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _monads_Maybe__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./monads/Maybe */ "./node_modules/fun.js/src/monads/Maybe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return _monads_Maybe__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _object_merge__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./object/merge */ "./node_modules/fun.js/src/object/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _object_merge__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./min */ "./node_modules/fun.js/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _number_multiply__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./number/multiply */ "./node_modules/fun.js/src/number/multiply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return _number_multiply__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./not */ "./node_modules/fun.js/src/not.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _not__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _monads_Nothing__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./monads/Nothing */ "./node_modules/fun.js/src/monads/Nothing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nothing", function() { return _monads_Nothing__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _object_omit__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./object/omit */ "./node_modules/fun.js/src/object/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _object_omit__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _or__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./or */ "./node_modules/fun.js/src/or.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _or__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _object_path__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./object/path */ "./node_modules/fun.js/src/object/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _object_path__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _object_pick__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./object/pick */ "./node_modules/fun.js/src/object/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _object_pick__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _object_prop__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./object/prop */ "./node_modules/fun.js/src/object/prop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _object_prop__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./reduce */ "./node_modules/fun.js/src/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./sort */ "./node_modules/fun.js/src/sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _sort__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _number_sum__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./number/sum */ "./node_modules/fun.js/src/number/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _number_sum__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _boolean_T__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./boolean/T */ "./node_modules/fun.js/src/boolean/T.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _boolean_T__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _date_toDay__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./date/toDay */ "./node_modules/fun.js/src/date/toDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return _date_toDay__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _date_toHour__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./date/toHour */ "./node_modules/fun.js/src/date/toHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toHour", function() { return _date_toHour__WEBPACK_IMPORTED_MODULE_81__["default"]; });

/* harmony import */ var _date_toMinutes__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./date/toMinutes */ "./node_modules/fun.js/src/date/toMinutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMinutes", function() { return _date_toMinutes__WEBPACK_IMPORTED_MODULE_82__["default"]; });

/* harmony import */ var _date_toSeconds__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./date/toSeconds */ "./node_modules/fun.js/src/date/toSeconds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSeconds", function() { return _date_toSeconds__WEBPACK_IMPORTED_MODULE_83__["default"]; });

/* harmony import */ var _truthy__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./truthy */ "./node_modules/fun.js/src/truthy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truthy", function() { return _truthy__WEBPACK_IMPORTED_MODULE_84__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type__WEBPACK_IMPORTED_MODULE_85__["default"]; });

/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./array/union */ "./node_modules/fun.js/src/array/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _array_union__WEBPACK_IMPORTED_MODULE_86__["default"]; });

/* harmony import */ var _object_values__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./object/values */ "./node_modules/fun.js/src/object/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object_values__WEBPACK_IMPORTED_MODULE_87__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./zip */ "./node_modules/fun.js/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_88__["default"]; });

/* harmony import */ var _zipObj__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./zipObj */ "./node_modules/fun.js/src/zipObj.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipObj", function() { return _zipObj__WEBPACK_IMPORTED_MODULE_89__["default"]; });

/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./zipWith */ "./node_modules/fun.js/src/zipWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return _zipWith__WEBPACK_IMPORTED_MODULE_90__["default"]; });






























































































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

/***/ "./node_modules/fun.js/src/isEmpty.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/isEmpty.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ "./node_modules/fun.js/src/empty.js");
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/* harmony import */ var _equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equals */ "./node_modules/fun.js/src/equals.js");
/**

 * @function empty
 * @description Returns the empty equivalent of the first argument
 */




function isEmpty (x) {
  return Object(_exists__WEBPACK_IMPORTED_MODULE_1__["default"])(x) && Object(_equals__WEBPACK_IMPORTED_MODULE_2__["default"])(x, Object(_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(x))
};


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

/***/ "./node_modules/fun.js/src/keys.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/keys.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/keys */ "./node_modules/fun.js/src/object/keys.js");
/* harmony import */ var _map_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/keys */ "./node_modules/fun.js/src/map/keys.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/fun.js/src/type.js");
/**
 * Returns the keys of the provided object or iterator
 *
 * @function keys
 * @description Autocurried function which returns the keys of the provided object or iterator
 * @since v1.0.2
 * @sig obj -> [*]
 * @param {Object} obj - Obj from zhich to take the keys
 * @return {Iterable}
 **/





/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function map (obj) {
  switch (Object(_type__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)) {
    case 'Map':
      return Object(_map_keys__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)
    default:
      return Object(_object_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)
  }
}));


/***/ }),

/***/ "./node_modules/fun.js/src/last.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/last.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/**
 * @function last
 * @param [a]
 * @return a | undefined
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function last (a) {
  return a && a.length ? a[a.length - 1] : undefined
}));


/***/ }),

/***/ "./node_modules/fun.js/src/lift.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/lift.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fold */ "./node_modules/fun.js/src/fold.js");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ "./node_modules/fun.js/src/ap.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/fun.js/src/map.js");
/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function
 *
 * @function lift
 * @since v1.0.2
 * @sig (*... -> *) -> ([*]... -> [*])
 **/






/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function lift (fn) {
  const lifted = Object(_private_curry1__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(fn))
  return Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function _lift () {
    return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_ap__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_map__WEBPACK_IMPORTED_MODULE_4__["default"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1))
  })
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

/***/ "./node_modules/fun.js/src/map/filter.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/map/filter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function mapFilter
 * @private
 *
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapFilter (fn, m) {
  let r = new Map()

  let it = m.entries()
  let result = it.next()

  while (!result.done) {
    const k = result.value[0]
    const v = result.value[1]
    if (fn(k, v)) r.set(k, v)
    result = it.next()
  }

  // Limited browser support
  // m.forEach((v, k) => {
  //   if (fn(k, v)) r.set(k, v)
  // })

  // babel transpile issues
  // for (const [k, v] of m.entries()) {
  //
  // }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/map/is.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/map/is.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Map'));


/***/ }),

/***/ "./node_modules/fun.js/src/map/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/fun.js/src/map/keys.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the own keys of an Map as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  return a.keys()
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

/***/ "./node_modules/fun.js/src/max.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/max.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the largest of the 2 arguments provided
 *
 * @function max
 * @since v1.0.2
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function max (a, b) {
  return b > a ? b : a
}));


/***/ }),

/***/ "./node_modules/fun.js/src/min.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/min.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the smallest of the 2 arguments provided
 *
 * @function min
 * @desc Returns the smallest of the 2 arguments provided
 * @since v1.0.4
 * @param {*} a
 * @param {*} b
 * @return {*}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function min (a, b) {
  return b < a ? b : a
}));


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Either.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Either.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right */ "./node_modules/fun.js/src/monads/Right.js");
/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left */ "./node_modules/fun.js/src/monads/Left.js");



/**
 * @class Either
 * @desc Either monad
 * @param {*} val - Value to be validated
 * @constructor
 * @example
 *
 * const m = Either.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */
let Either = function (val) {
  return this.Right(val)
}

/**
 * @memberOf Either
 * @function Either.of
 * @desc Creates a Either monad from the provided argument
 * @param {*} val - Val to turn in to a Either monad, can be a function
 * @returns {Either}
 * @example
 *
 * const m = Either.of(props.customers).map(customer => customer[0]).getOrElse('No customer found')
 */

Either.of = function (val) {
  if (val instanceof Either) return val
  if (this instanceof Either) {
    return this.Right(val)
  }
  return new Either(val)
}

/**
 * @memberOf Either
 * @property {String} type - Returns the string 'Either' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Either'
 */
Either.prototype.type = 'Either'

/**
 * @memberOf Either
 * @property Either#isLeft
 * @returns {boolean}
 */
Either.prototype.isLeft = false

/**
 * @memberOf Either
 * @property Either#isRight
 * @returns {boolean}
 */
Either.prototype.isRight = false

/**
 * @private
 * @memberOf Either
 * @function Either#Left
 * @returns {Left}
 */
Either.prototype.Left = function (val) {
  return new _Left__WEBPACK_IMPORTED_MODULE_1__["default"](val)
}

/**
 * @private
 * @memberOf Either
 * @function Either.Left
 * @returns {Left}
 */
Either.Left = function (val) {
  return new _Left__WEBPACK_IMPORTED_MODULE_1__["default"](val)
}

/**
 * @private
 * @memberOf Either
 * @function Either#Right
 * @returns {Right}
 */
Either.prototype.Right = function (val) {
  return new _Right__WEBPACK_IMPORTED_MODULE_0__["default"](val)
}

/**
 * @private
 * @memberOf Either
 * @function Either.Right
 * @returns {Right}
 */
Either.Right = function (val) {
  return new _Right__WEBPACK_IMPORTED_MODULE_0__["default"](val)
}

/* harmony default export */ __webpack_exports__["default"] = (Either);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Just.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Just.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class Just
 * @param val
 * @returns {Just}
 * @constructor
 */
let Just = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Just
 * @function Just#isJust
 * @returns {boolean}
 */
Just.prototype.isJust = function () {
  return true
}

/**
 * @memberOf Just
 * @function Just#isNothing
 * @returns {boolean}
 */
Just.prototype.isNothing = function () {
  return false
}

/* harmony default export */ __webpack_exports__["default"] = (Just);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Left.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Left.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class Left
 * @param val
 * @returns {Left}
 * @constructor
 */
let Left = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Left
 * @property {String} type - Returns the string 'Left' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Left'
 */
Left.prototype.type = 'Left'

/**
 * @memberOf Left
 * @function Left#isLeft
 * @returns {boolean}
 */
Left.prototype.isLeft = function () {
  return true
}

/**
 * @memberOf Left
 * @function Left#isRight
 * @returns {boolean}
 */
Left.prototype.isRight = function () {
  return false
}

/**
 * @memberOf Left
 * @function Left#ap
 * @param {*} b
 * @returns {Left}
 */
Left.prototype.ap = function (b) {
  return this
}

/**
 * @memberOf Left
 * @function Left#map
 * @param {Function} f
 * @returns {Left}
 */
Left.prototype.map = function (f) {
  return this
}

/**
 * @memberOf Left
 * @function Left#chain
 * @param {Function} f
 * @returns {Left}
 */
Left.prototype.chain = function (f) {
  return this
}

/**
 * @memberOf Left
 * @function Left#toString
 * @returns {String}
 */
Left.prototype.toString = function () {
  return 'Either.Left(' + this.__value + ')'
}

/**
 * @memberOf Left
 * @function Left#cata
 * @param {Function} f
 * @param {Placeholder} _
 * @returns {*}
 */
Left.prototype.cata = function (f, _) {
  return f(this.__value)
}

/**
 * @memberOf Left
 * @function Left#get
 * @throws {TypeError}
 */
Left.prototype.get = function () {
  throw new TypeError("Can't extract the value of a Left(a).")
}

/**
 * @memberOf Left
 * @function Left#getOrElse
 * @param {*} a
 * @returns {*}
 */
Left.prototype.getOrElse = function (a) {
  return a
}

/* harmony default export */ __webpack_exports__["default"] = (Left);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Maybe.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Maybe.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Just__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Just */ "./node_modules/fun.js/src/monads/Just.js");
/* harmony import */ var _Nothing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nothing */ "./node_modules/fun.js/src/monads/Nothing.js");



/**
 * @class Maybe
 * @desc Maybe monad provides a way to safely wrap null values
 * @param {*} val - Value to be wrapped
 * @constructor
 * @example
 *
 * const m = Maybe.of(props.customers).map(contract => customer[0]).getOrElse('No customer found')
 */
let Maybe = function (val) {
  this.__value = val
}

/**
 * @memberOf Maybe
 * @function Maybe.of
 * @desc Creates a Maybe monad from the provided argument
 * @param {*} val - Val to turn in to a Maybe monad, can be a function
 * @returns {Maybe}
 * @example
 *
 * const m = Maybe.of(props.customers).map(customer => customer[0]).getOrElse('No customer found')
 */

Maybe.of = function (val) {
  if (val instanceof Maybe) return val
  if (this instanceof Maybe) {
    this.__value = val
    return this
  }
  return new Maybe(val)
}

/**
 * @memberOf Maybe
 * @property {String} type - Returns the string 'Maybe' for all Maybe objects
 * @type {String}
 * @example
 *
 * const m =  Maybe.of([[1,2],[2,3],[4,5]])
 * m.type === 'Maybe'
 */
Maybe.prototype.type = 'Maybe'

/**
 * @memberOf Maybe
 * @function Maybe#getOrElse
 * @desc Evaluates the Maybe monad and returns either the value from the Maybe or the default value
 * @param {*} n - Default value to return if the Maybe evaluates to undefined or null
 * @returns {*}
 * @example
 *
 * // Get customer from component props
 * const m = Maybe.of(props.customers).map(customer => customer.filter(custObj => custObj.id = 'c001112')).getOrElse([])
 * // Map over the provided array
 * m.map(x => <div>Customer ID: {x.id} </div>)
 *
 */
Maybe.prototype.getOrElse = function (n) {
  return this.isNothing() ? n : this.__value
}

/**
 * @memberOf Maybe
 * @function Maybe#map
 * @param {Function} f
 * @returns {Maybe}
 */
Maybe.prototype.map = function (f) {
  if (this.isNothing()) {
    return Maybe.of(null)
  }
  return Maybe.of(f(this.__value))
}

/**
 * @memberOf Maybe
 * @function Maybe#flatMap
 * @param {Function} f
 * @returns {Maybe}
 */
Maybe.prototype.flatMap = function (f) {
  return this.map(f)
}

/**
 * @memberOf Maybe
 * @function Mayeb#ap
 * @param {Maybe} m
 * @returns {Maybe}
 */
Maybe.prototype.ap = function (m) {
  return Maybe.of(m).map(this.__value)
}

/**
 * @memberOf Maybe
 * @function Maybe#isNothing
 * @returns {boolean}
 */
Maybe.prototype.isNothing = function () {
  return (this.__value == null)
}

/**
 * @memberOf Maybe
 * @function Maybe#isJust
 * @returns {boolean}
 */
Maybe.prototype.isJust = function () {
  return !this.isNothing()
}

/**
 * @private
 * @memberOf Maybe
 * @function Maybe#Nothing
 * @returns {Nothing}
 * @constructor
 */
Maybe.prototype.Nothing = function () {
  return new _Nothing__WEBPACK_IMPORTED_MODULE_1__["default"]()
}

/**
 * @private
 * @memberOf Maybe
 * @fucntion Maybe#Just
 * @returns {Just}
 * @constructor
 */
Maybe.prototype.Just = function () {
  return new _Just__WEBPACK_IMPORTED_MODULE_0__["default"](this._value)
}

/* harmony default export */ __webpack_exports__["default"] = (Maybe);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Nothing.js":
/*!***************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Nothing.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class Nothing
 * @constructor
 */
let Nothing = function () {
}

/**
 * @memberOf Nothing
 * @function Nothing#isJust
 * @returns {boolean}
 */
Nothing.prototype.isJust = function () {
  return false
}

/**
 * @memberOf Nothing
 * @function Nothing#isNothing
 * @returns {boolean}
 */
Nothing.prototype.isNothing = function () {
  return true
}

/* harmony default export */ __webpack_exports__["default"] = (Nothing);


/***/ }),

/***/ "./node_modules/fun.js/src/monads/Right.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/monads/Right.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class Right
 * @param val
 * @returns {Right}
 * @constructor
 */
let Right = function (val) {
  this.__value = val
  return this
}

/**
 * @memberOf Right
 * @property {String} type - Returns the string 'Right' for all Either objects
 * @type {String}
 * @example
 *
 * const m =  Either.of([[1,2],[2,3],[4,5]])
 * m.type === 'Right'
 */
Right.prototype.type = 'Right'

/**
 * @memberOf Right
 * @function Right#isRight
 * @returns {boolean}
 */
Right.prototype.isRight = function () {
  return true
}

/**
 * @memberOf Right
 * @function Right#isLeft
 * @returns {boolean}
 */
Right.prototype.isLeft = function () {
  return false
}

/**
 * @memberOf Right
 * @function Right#ap
 * @param a
 * @returns {Right}
 */
Right.prototype.ap = function (b) {
  return b.map(this.__value)
}

/**
 * @memberOf Right
 * @function Right#map
 * @param {Function} f
 * @returns {*}
 */
Right.prototype.map = function (f) {
  return new Right(f(this.__value))
}

/**
 * @memberOf Right
 * @function Right#chain
 * @param {Function} f
 * @returns {*}
 */
Right.prototype.chain = function (f) {
  return f(this.__value)
}

/**
 * @memberOf Right
 * @function Right#toString
 * @returns {string}
 */
Right.prototype.toString = function () {
  return 'Either.Right(' + this.__value + ')'
}

/**
 * @memberOf Right
 * @function Right#cata
 * @param {Placeholder} _
 * @param {Function} g
 * @returns {*}
 */
Right.prototype.cata = function (_, g) {
  return g(this.__value)
}

/**
 * @memberOf Right
 * @function Right#get
 * @returns {*}
 */
Right.prototype.get = function () {
  return this.__value
}

/**
 * @memberOf Right
 * @function Right#getOrElse
 * @param {Function} f
 * @returns {*}
 */

Right.prototype.getOrElse = function (f) {
  return this.__value
}

/* harmony default export */ __webpack_exports__["default"] = (Right);


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

/***/ "./node_modules/fun.js/src/null/is.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/null/is.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 03/02/2019
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('null'));


/***/ }),

/***/ "./node_modules/fun.js/src/number/add.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/number/add.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the sum of the 2 arguments
 *
 * @function add
 * @description Returns the sum of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function add (a, b) {
  return +a + +b
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/divide.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/number/divide.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 *
 *
 * @function divide
 * @description Returns the division of the 2 arguments
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function divide (a, b) {
  return +a / +b
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

/***/ "./node_modules/fun.js/src/number/multiply.js":
/*!****************************************************!*\
  !*** ./node_modules/fun.js/src/number/multiply.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns the product of the 2 arguments
 *
 * @function
 * @since v1.0.2
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function multiply (a, b) {
  return +a * +b
}));


/***/ }),

/***/ "./node_modules/fun.js/src/number/sum.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/number/sum.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ "./node_modules/fun.js/src/number/add.js");
/* harmony import */ var _fold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fold */ "./node_modules/fun.js/src/fold.js");
/**
 * Returns the sum of the numbers in an array
 *
 * @function
 * @since v1.0.2
 * @sig [Number] -> Number
 * @param {Array} a
 * @return {Number}
 **/




/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function sum (a) {
  return Object(_fold__WEBPACK_IMPORTED_MODULE_2__["default"])(_add__WEBPACK_IMPORTED_MODULE_1__["default"], 0, a)
}));


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

/***/ "./node_modules/fun.js/src/object/filter.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/filter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function objectFilter
 * @private
 *
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function objectFilter (fn, o) {
  let r = {}
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(o)
  for (let i = 0; i < k.length; i++) {
    if (fn(o[k[i]])) r[k[i]] = o[k[i]]
  }
  return r
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

/***/ "./node_modules/fun.js/src/object/has.js":
/*!***********************************************!*\
  !*** ./node_modules/fun.js/src/object/has.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if an object has the property
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function has (prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/hasIn.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/object/hasIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns true if an object has the property, even if it is inherited
 *
 * @function
 * @since v1.0.2
 * @sig {String} -> {Object} -> Boolean
 * @param {String} prop
 * @param {Object} obj
 * @return {Boolean}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasIn (prop, obj) {
  return prop in obj
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

/***/ "./node_modules/fun.js/src/object/keysIn.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/keysIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns all the keys of an object as an Array
 *
 * @function
 * @since v1.0.2
 * @sig a -> [b]
 * @param {Object}
 * @return {Array}
 **/


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys (a) {
  const r = []
  for (const k in a) {
    r.push(k)
  }
  return r
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

/***/ "./node_modules/fun.js/src/object/merge.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/object/merge.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _identical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identical */ "./node_modules/fun.js/src/identical.js");
/* harmony import */ var _object_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/is */ "./node_modules/fun.js/src/object/is.js");
/* harmony import */ var _array_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array/is */ "./node_modules/fun.js/src/array/is.js");
/* harmony import */ var _array_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../array/union */ "./node_modules/fun.js/src/array/union.js");
/**

 * equals
 * checks for equality
 */






const merge = Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((objL, objR) => {
  let result = Object.assign({}, objL)

  if (Object(_identical__WEBPACK_IMPORTED_MODULE_1__["default"])(objL, objR)) {
    return Object.assign({}, objL)
  }
  for (let key in objR) {
    if (!Object.prototype.hasOwnProperty.call(objR, key)) {
      continue
    }
    const oldValue = objR[key]
    const newValue = objL[key]

    if (Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(oldValue) && Object(_object_is__WEBPACK_IMPORTED_MODULE_2__["default"])(newValue)) {
      result[key] = merge(oldValue, newValue)
    } else if (Object(_array_is__WEBPACK_IMPORTED_MODULE_3__["default"])(newValue)) {
      result[key] = Object(_array_union__WEBPACK_IMPORTED_MODULE_4__["default"])(newValue, oldValue)
    } else {
      result[key] = oldValue // TODO: this is a reference, should be clone
    }
  }
  return result
})

/* harmony default export */ __webpack_exports__["default"] = (merge);


/***/ }),

/***/ "./node_modules/fun.js/src/object/omit.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/omit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**

 * equals
 * checks for equality
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])((obj, names) => {
  let result = {}

  Object.keys(obj).filter((key) => {
    return names.indexOf(key) === -1
  }).forEach((key) => {
    result[key] = obj[key]
  })
  return result
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/path.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/path.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function path
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function path (path, obj) {
  let val = obj
  let idx = 0
  let p
  while (idx < path.length) {
    if (val == null) {
      return
    }
    p = path[idx]
    val = Number.isInteger(p)
      ? p < 0 ? val[val.length + p] : val[p]
      : val[p]
    idx += 1
  }
  return val
}));
// let r = obj
// for (let i = 0; i < path.length; i++) {
//   if (r == null) return undefined
//   r = r[path[i]]
// }
// return r
// })


/***/ }),

/***/ "./node_modules/fun.js/src/object/pick.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/pick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function pick
 * @description returns a new bject with only the props that are provided
 * @param {Array} props - Array of property names
 * @param {Object} obj - The object from which to take the properties
 * @return {Object}
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function pick (props, obj) {
  const r = {}
  let i = 0
  while (i < props.length) {
    if (props[i] in obj) {
      r[props[i]] = obj[props[i]]
    }
    i += 1
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/prop.js":
/*!************************************************!*\
  !*** ./node_modules/fun.js/src/object/prop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../curry */ "./node_modules/fun.js/src/curry.js");
/**
 * @function prop
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function prop (p, obj) {
  return obj[p]
}));


/***/ }),

/***/ "./node_modules/fun.js/src/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/fun.js/src/object/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_curry1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/curry1 */ "./node_modules/fun.js/src/_private/curry1.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./node_modules/fun.js/src/object/keys.js");
/**
 * @function values
 * @description REturns a list of values taken from an objects own properties
 * @param {object} - obj The object from which to take the values
 * @return {array}
 *
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_private_curry1__WEBPACK_IMPORTED_MODULE_0__["default"])(function values (obj) {
  const k = Object(_keys__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)
  const l = k.length
  const r = []
  let i = 0
  while (i < l) {
    r[i] = obj[k[i]]
    i += 1
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

/***/ "./node_modules/fun.js/src/reduce.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/reduce.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _array_fold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/fold */ "./node_modules/fun.js/src/array/fold.js");
/**
 * Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * The initial value is taken from the iterator.
 * Reduce works only on Arrays and returns a valueof the type of the first element in the Array
 *
 * @function reduce
 * @desc Returns a single item by iterating over an array like object and call a function on each item, starting from the first item in the iterator
 * @since v1.0.4
 * @param {Function} cb - receives 4 values: the accumulator, the item, the index, and the initial value.
 * @param {Array} a - The iterator to apply the function
 * @return {*}
 **/



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function reduce (cb, a) {
  const arr = a.slice()
  const init = arr.shift()
  return Object(_array_fold__WEBPACK_IMPORTED_MODULE_1__["default"])(cb, init, arr)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/set/is.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/set/is.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 01/04/2017.
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('Set'));


/***/ }),

/***/ "./node_modules/fun.js/src/sort.js":
/*!*****************************************!*\
  !*** ./node_modules/fun.js/src/sort.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**
 * Returns a copy of the list, sorted according to the function.
 *
 * @func sort
 * @since v1.0.4
 * @param {Function} comp - A sorting function
 * @param {Array} a - The list to sort
 * @return {Array} a new array with its elements sorted by the comp function.
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function sort (comp, a) {
  return Array.prototype.slice.call(a, 0).sort(comp)
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

/***/ "./node_modules/fun.js/src/string/formatString.js":
/*!********************************************************!*\
  !*** ./node_modules/fun.js/src/string/formatString.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatString; });
/* harmony import */ var _array_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/to */ "./node_modules/fun.js/src/array/to.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not */ "./node_modules/fun.js/src/not.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 26/03/2017.
 */




function formatString (str) { // use function(), arrow function doesn't bind arguments
  let args = Object(_array_to__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments)

  args.shift()
  return str.replace(/{(\d+)}/g, (match, idx) => {
    return Object(_not__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_is__WEBPACK_IMPORTED_MODULE_2__["default"])('Undefined', args[idx])) ? args[idx] : match
  })
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

/***/ "./node_modules/fun.js/src/truthy.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/truthy.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return truthy; });
/* harmony import */ var _exists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exists */ "./node_modules/fun.js/src/exists.js");
/**
 * @function truthy
 */


function truthy (x) {
  return (x !== false) && Object(_exists__WEBPACK_IMPORTED_MODULE_0__["default"])(x)
};


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

/***/ "./node_modules/fun.js/src/undefined/is.js":
/*!*************************************************!*\
  !*** ./node_modules/fun.js/src/undefined/is.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is */ "./node_modules/fun.js/src/is.js");
/**
 * Created by dierickx.len on 03/02/2019
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_is__WEBPACK_IMPORTED_MODULE_0__["default"])('undefined'));


/***/ }),

/***/ "./node_modules/fun.js/src/zip.js":
/*!****************************************!*\
  !*** ./node_modules/fun.js/src/zip.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/* harmony import */ var _zipWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipWith */ "./node_modules/fun.js/src/zipWith.js");
/**

 * zip
 *
 * @function zip
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zip (a, b) {
  return Object(_zipWith__WEBPACK_IMPORTED_MODULE_1__["default"])(function _zipWith (x, y) { return [x, y] }, a, b)
}));


/***/ }),

/***/ "./node_modules/fun.js/src/zipObj.js":
/*!*******************************************!*\
  !*** ./node_modules/fun.js/src/zipObj.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");


/**
 * @function zipObj
 * @param {array} a
 * @param {array} b
 * @return {object}
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipObj (a, b) {
  var i = 0
  var l = Math.min(a.length, b.length)
  var r = {}
  while (i < l) {
    r[a[i]] = b[i]
    i += 1
  }
  return r
}));


/***/ }),

/***/ "./node_modules/fun.js/src/zipWith.js":
/*!********************************************!*\
  !*** ./node_modules/fun.js/src/zipWith.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./node_modules/fun.js/src/curry.js");
/**

 * zipWith
 *
 *  @function zipWith
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function zipWith (cb, a, b) {
  const arr = []
  const len = Math.min(a.length, b.length)
  let i = 0
  for (i = 0; i < len; i++) {
    arr.push(cb(a[i], b[i]))
  }
  return arr
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

/***/ "./src/DecisionTree.js":
/*!*****************************!*\
  !*** ./src/DecisionTree.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _funmatrix = _interopRequireDefault(__webpack_require__(/*! @astuanax/funmatrix */ "./node_modules/@astuanax/funmatrix/src/matrix.js"));

var _entropy = _interopRequireDefault(__webpack_require__(/*! ./util/entropy */ "./src/util/entropy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(col, value, left, right, results) {
  _classCallCheck(this, Node);

  this.col = col || -1;
  this.value = null;
  this.left = left;
  this.right = right;
  this.results = results || [];
};

var DecisionTree = function DecisionTree(data) {
  var evalFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _entropy.default;

  _classCallCheck(this, DecisionTree);

  this.data = _funmatrix.default.of(data);
  this.evalFunction = evalFunction;
};

exports.default = DecisionTree;

DecisionTree.prototype.getColumn = function (index) {
  return this.data.map(function (x) {
    return x[index];
  });
};

DecisionTree.prototype.split = function (data, m, n) {
  var splittingFunction; //   splittingFunction = None

  if (isNaN(m) || isNaN(n)) {
    // strings
    splittingFunction = function splittingFunction(row) {
      return row[m] === n;
    };
  } else {
    // numbers
    splittingFunction = function splittingFunction(row) {
      return row[m] >= n;
    };
  }

  var left = data.fold(function (acc, x) {
    if (splittingFunction(x)) {
      acc.push(x);
      return acc;
    }
  });
  var right = data.fold(function (acc, x) {
    if (!splittingFunction(x)) {
      acc.push(x);
      return acc;
    }
  });
  return [left, right];
};

DecisionTree.prototype.train = function () {
  var _this = this;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;

  if (this.data.getRows() === 0) {
    return new Node();
  }

  var score = this.evalFunction.func(data); // Matrix

  var bestGain = 0.0;
  var bestAttribute = [];
  var bestSets = [];
  var columnCount = this.data.getCols() - 1; // remove last cell >> dependant value

  var _loop = function _loop(i) {
    var columnValues = _this.getColumn(i).toArray();

    console.table(columnValues);
    columnValues.forEach(function (value, idx, arr) {
      var matrixSplit = _this.split(i, value);

      var p = matrixSplit[0].getRows() / _this.data.getRows();

      var gain = score - p * _this.evalFunction(matrixSplit[0]) - (1 - p) * _this.evalFunction(matrixSplit[0]);

      if (gain > bestGain && matrixSplit.length > 0 && matrixSplit.length > 0) {
        bestGain = gain;
        bestAttribute = [i, columnValues[idx]];
        bestSets = matrixSplit;
      }
    });
  };

  for (var i = 0; i < columnCount; ++i) {
    _loop(i);
  }

  if (bestGain > 0) {
    var left = this.train(bestSets[0]);
    var right = this.train(bestSets[1]);
    return new Node([], bestAttribute[0], bestAttribute[1], left, right);
  } else {
    return new Node(this.classes());
  }
};

DecisionTree.prototype.predict = function predict() {};

module.exports = exports["default"];

/***/ }),

/***/ "./src/Impurity.js":
/*!*************************!*\
  !*** ./src/Impurity.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Impurity
 * @param func
 */
var Impurity = function Impurity(func) {
  _classCallCheck(this, Impurity);

  this.func = func;
};

exports.default = Impurity;
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
  var _this = this;

  // Generating the Hidden Outputs
  var inputs = _funmatrix.default.fromArray(inputArray);

  var hidden = _funmatrix.default.dot(this.weightsIh, inputs);

  hidden = _funmatrix.default.of(hidden).add(this.biasH); // activation function!

  hidden = hidden.map(function (row) {
    return row.map(_this.activationFunction.func);
  }); // Generating the output's output!

  var output = _funmatrix.default.dot(this.weightsHo, hidden);

  output = _funmatrix.default.of(output).add(this.biasO);
  output = output.map(function (row) {
    return row.map(_this.activationFunction.func);
  }); // Sending back to the caller!

  return output.toArray();
};
/**
 * @memberOf NeuralNetwork
 * @function NeuralNetwork#train
 * @param {Array} inputArray
 * @param {Array} targetArray
 */


NeuralNetwork.prototype.train = function (inputArray, targetArray) {
  var _this2 = this;

  // Generating the Hidden Outputs
  var inputs = _funmatrix.default.fromArray(inputArray);

  var hidden = _funmatrix.default.dot(this.weightsIh, inputs);

  hidden = _funmatrix.default.of(hidden).add(this.biasH); // activation function!

  hidden = hidden.map(function (row) {
    return row.map(_this2.activationFunction.func);
  }); // Generating the output's output!

  var outputs = _funmatrix.default.dot(this.weightsHo, hidden);

  outputs = _funmatrix.default.of(outputs).add(this.biasO);
  outputs = outputs.map(function (row) {
    return row.map(_this2.activationFunction.func);
  }); // Convert array to matrix object

  var targets = _funmatrix.default.fromArray(targetArray); // Calculate the error
  // ERROR = TARGETS - OUTPUTS


  var outputErrors = _funmatrix.default.of(targets).subtract(outputs); // let gradient = outputs * (1 - outputs);
  // Calculate gradient


  var gradients = outputs.map(function (row) {
    return row.map(_this2.activationFunction.dfunc);
  });
  gradients = gradients.multiply(outputErrors);
  gradients = gradients.multiply(this.learningRate); // Calculate deltas

  var hiddenT = _funmatrix.default.transpose(hidden);

  var weightHoDeltas = _funmatrix.default.dot(gradients, hiddenT); // Adjust the weights by deltas


  this.weightsHo = _funmatrix.default.of(this.weightsHo).add(weightHoDeltas); // Adjust the bias by its deltas (which is just the gradients)

  this.biasO = _funmatrix.default.of(this.biasO).add(gradients); // Calculate the hidden layer errors

  var whoT = _funmatrix.default.transpose(this.weightsHo);

  var hiddenErrors = _funmatrix.default.dot(whoT, outputErrors); // Calculate hidden gradient


  var hiddenGradient = _funmatrix.default.of(hidden).map(function (row) {
    return row.map(_this2.activationFunction.dfunc);
  }).multiply(hiddenErrors).multiply(this.learningRate); // Calcuate input->hidden deltas


  var inputsT = _funmatrix.default.transpose(inputs);

  var weightIhDeltas = _funmatrix.default.dot(hiddenGradient, inputsT);

  this.weightsIh = _funmatrix.default.of(this.weightsIh).add(weightIhDeltas); // Adjust the bias by its deltas (which is just the gradients)

  this.biasH = _funmatrix.default.of(this.biasH).add(hiddenGradient);
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
Object.defineProperty(exports, "entropy", {
  enumerable: true,
  get: function get() {
    return _entropy.default;
  }
});
Object.defineProperty(exports, "DecisionTree", {
  enumerable: true,
  get: function get() {
    return _DecisionTree.default;
  }
});
Object.defineProperty(exports, "Impurity", {
  enumerable: true,
  get: function get() {
    return _Impurity.default;
  }
});

var _Perceptron = _interopRequireDefault(__webpack_require__(/*! ./Perceptron */ "./src/Perceptron.js"));

var _NeuralNetwork = _interopRequireDefault(__webpack_require__(/*! ./NeuralNetwork */ "./src/NeuralNetwork.js"));

var _ActivationFunction = _interopRequireDefault(__webpack_require__(/*! ./ActivationFunction */ "./src/ActivationFunction.js"));

var _sigmoid = _interopRequireDefault(__webpack_require__(/*! ./util/sigmoid */ "./src/util/sigmoid.js"));

var _tanh = _interopRequireDefault(__webpack_require__(/*! ./util/tanh */ "./src/util/tanh.js"));

var _entropy = _interopRequireDefault(__webpack_require__(/*! ./util/entropy */ "./src/util/entropy.js"));

var _DecisionTree = _interopRequireDefault(__webpack_require__(/*! ./DecisionTree */ "./src/DecisionTree.js"));

var _Impurity = _interopRequireDefault(__webpack_require__(/*! ./Impurity */ "./src/Impurity.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/util/entropy.js":
/*!*****************************!*\
  !*** ./src/util/entropy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Impurity = _interopRequireDefault(__webpack_require__(/*! ../Impurity */ "./src/Impurity.js"));

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

var _mapReduce = _interopRequireDefault(__webpack_require__(/*! ./mapReduce */ "./src/util/mapReduce.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqsCount = (0, _fun.fold)(function (acc, val) {
  acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
  return acc;
}, {});

var frequencies = function frequencies(total) {
  return function (obj) {
    return (0, _fun.fold)(function (acc, y) {
      acc.push(y / total);
      return acc;
    })([])(obj);
  };
};
/**
 * @function emtropy
 * @type {Impurity}
 */


var entropy = new _Impurity.default(function (matrix) {
  // TODO check instanceof Matrix
  var arr = matrix.__value.map(function (row) {
    return row[row.length - 1];
  });

  var countedClasses = uniqsCount(arr);
  var nrRows = matrix.getRows();
  var classFrequencies = frequencies(nrRows)(countedClasses);
  return (0, _fun.fold)((0, _mapReduce.default)(function (x) {
    return -x * Math.log2(x);
  }, _fun.add), 0, classFrequencies);
});
var _default = entropy;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/util/mapReduce.js":
/*!*******************************!*\
  !*** ./src/util/mapReduce.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fun = __webpack_require__(/*! fun.js */ "./node_modules/fun.js/src/index.js");

var mapReduce = (0, _fun.curry)(function (m, r) {
  return function (x, y) {
    return r(x, m(y));
  };
});
var _default = mapReduce;
exports.default = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9AYXN0dWFuYXgvZnVubWF0cml4L3NyYy91dGlsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvc29sdmUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL19wcml2YXRlL2N1cnJ5MS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hZGRJbmRleC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hZGp1c3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWRqdXN0V2l0aC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbGwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYWxsUGFzcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbHdheXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYW5kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FueS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbnlQYXNzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwZXJ0dXJlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcHBseS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS90by5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS91bmlvbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYmluZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL0YuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYm9vbGVhbi9ULmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2Jvb2xlYW4vYm90aC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvY29tcGxlbWVudC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jb21wb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jb25kLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2N1cnJ5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2RhdGUvZGlmZkRhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzRnV0dXJlRGF0ZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZGF0ZS90b0RheS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvSG91ci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvTWludXRlcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL3RvU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kZWZhdWx0VG8uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZXF1YWxzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZmluZEluZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2ZpcnN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2ZsYXRNYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pdGVyYXRvci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pdGVyYXRvci9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9sYXN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2xpZnQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWFwL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9rZXlzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbWF4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21pbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tb25hZHMvRWl0aGVyLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9KdXN0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9MZWZ0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21vbmFkcy9NYXliZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tb25hZHMvTm90aGluZy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tb25hZHMvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbm90LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bGwvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL2FkZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvZGl2aWRlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbnVtYmVyL211bHRpcGx5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9zdW0uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZmlsdGVyLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9oYXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2hhc0luLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9tYXAuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21lcmdlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9vbWl0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9wYXRoLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9waWNrLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC9wcm9wLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb3IuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvcmVkdWNlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3NldC9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zb3J0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3N0cmluZy9jb25jYXQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2Zvcm1hdFN0cmluZy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90cnV0aHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvdHlwZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy91bmRlZmluZWQvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvemlwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL3ppcE9iai5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy96aXBXaXRoLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy9BY3RpdmF0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL0RlY2lzaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9zcmMvSW1wdXJpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL1BlcmNlcHRyb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL2VudHJvcHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvbWFwUmVkdWNlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL3NpZ21vaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvdGFuaC5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uRnVuY3Rpb24iLCJmdW5jIiwiZGZ1bmMiLCJOb2RlIiwiY29sIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJyZXN1bHRzIiwiRGVjaXNpb25UcmVlIiwiZGF0YSIsImV2YWxGdW5jdGlvbiIsIm9mIiwicHJvdG90eXBlIiwiZ2V0Q29sdW1uIiwiaW5kZXgiLCJtYXAiLCJ4Iiwic3BsaXQiLCJtIiwibiIsInNwbGl0dGluZ0Z1bmN0aW9uIiwiaXNOYU4iLCJyb3ciLCJmb2xkIiwiYWNjIiwicHVzaCIsInRyYWluIiwiZ2V0Um93cyIsInNjb3JlIiwiYmVzdEdhaW4iLCJiZXN0QXR0cmlidXRlIiwiYmVzdFNldHMiLCJjb2x1bW5Db3VudCIsImdldENvbHMiLCJpIiwiY29sdW1uVmFsdWVzIiwidG9BcnJheSIsImNvbnNvbGUiLCJ0YWJsZSIsImZvckVhY2giLCJpZHgiLCJhcnIiLCJtYXRyaXhTcGxpdCIsInAiLCJnYWluIiwibGVuZ3RoIiwiY2xhc3NlcyIsInByZWRpY3QiLCJJbXB1cml0eSIsIk5ldXJhbE5ldHdvcmsiLCJ2YWx1ZXMiLCJpbnB1dE5vZGVzIiwiaGlkZGVuTm9kZXMiLCJvdXRwdXROb2RlcyIsImYiLCJlIiwiTWF0aCIsInJhbmRvbSIsIndlaWdodHNJaCIsIndlaWdodHNIbyIsImJpYXNIIiwiYmlhc08iLCJzZXRBY3RpdmF0aW9uRnVuY3Rpb24iLCJzZXRMZWFybmluZ1JhdGUiLCJ0eXBlIiwiYWN0aXZhdGlvbkZ1bmN0aW9uIiwibGVhcm5pbmdSYXRlIiwiaW5wdXRBcnJheSIsImlucHV0cyIsImZyb21BcnJheSIsImhpZGRlbiIsImRvdCIsImFkZCIsIm91dHB1dCIsInRhcmdldEFycmF5Iiwib3V0cHV0cyIsInRhcmdldHMiLCJvdXRwdXRFcnJvcnMiLCJzdWJ0cmFjdCIsImdyYWRpZW50cyIsIm11bHRpcGx5IiwiaGlkZGVuVCIsInRyYW5zcG9zZSIsIndlaWdodEhvRGVsdGFzIiwid2hvVCIsImhpZGRlbkVycm9ycyIsImhpZGRlbkdyYWRpZW50IiwiaW5wdXRzVCIsIndlaWdodEloRGVsdGFzIiwiUGVyY2VwdHJvbiIsIndlaWdodHMiLCJ2YWwiLCJhY3RpdmF0aW9uIiwibFJhdGUiLCJuRXBvY2giLCJBcnJheSIsImFwcGx5IiwiZXhwZWN0ZWQiLCJzbGljZSIsInByZWRpY3Rpb24iLCJlcnJvciIsInkiLCJqIiwidW5pcXNDb3VudCIsInVuZGVmaW5lZCIsImZyZXF1ZW5jaWVzIiwidG90YWwiLCJvYmoiLCJlbnRyb3B5IiwibWF0cml4IiwiX192YWx1ZSIsImNvdW50ZWRDbGFzc2VzIiwibnJSb3dzIiwiY2xhc3NGcmVxdWVuY2llcyIsImxvZzIiLCJtYXBSZWR1Y2UiLCJyIiwic2lnbW9pZCIsImV4cCIsInRhbmgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0o7QUFDRTtBQUNGO0FBQ0E7QUFDTTtBQUNBO0FBQ047QUFDRTtBQUNGO0FBQ0o7QUFDVTtBQUNFO0FBQ0Y7O0FBRU47O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ0c7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNGO0FBQ047QUFDQTtBQUNRO0FBQ1Y7QUFDWTtBQUNKO0FBQ0Y7QUFDRTtBQUNKO0FBQ1E7QUFDUjtBQUNZO0FBQ047QUFDRjtBQUNK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RUEsSUFBTU8sU0FBUyxHQUFHLGdCQUFNLFVBQUNqRyxDQUFELEVBQUlrRyxDQUFKO0FBQUEsU0FBVSxVQUFDcEcsQ0FBRCxFQUFJcUYsQ0FBSjtBQUFBLFdBQVVlLENBQUMsQ0FBQ3BHLENBQUQsRUFBSUUsQ0FBQyxDQUFDbUYsQ0FBRCxDQUFMLENBQVg7QUFBQSxHQUFWO0FBQUEsQ0FBTixDQUFsQjtlQUNlYyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7OztBQUVBOzs7O0FBSUEsSUFBTUUsT0FBTyxHQUFHLGdDQUNkLFVBQUFyRyxDQUFDO0FBQUEsU0FBSSxLQUFLLElBQUl3QyxJQUFJLENBQUM4RCxHQUFMLENBQVMsQ0FBQ3RHLENBQVYsQ0FBVCxDQUFKO0FBQUEsQ0FEYSxFQUVkLFVBQUFxRixDQUFDO0FBQUEsU0FBSUEsQ0FBQyxJQUFJLElBQUlBLENBQVIsQ0FBTDtBQUFBLENBRmEsQ0FBaEI7ZUFJZWdCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBRUE7Ozs7QUFJQSxJQUFNRSxJQUFJLEdBQUcsZ0NBQ1gsVUFBQXZHLENBQUM7QUFBQSxTQUFJd0MsSUFBSSxDQUFDK0QsSUFBTCxDQUFVdkcsQ0FBVixDQUFKO0FBQUEsQ0FEVSxFQUVYLFVBQUFxRixDQUFDO0FBQUEsU0FBSSxJQUFLQSxDQUFDLEdBQUdBLENBQWI7QUFBQSxDQUZVLENBQWI7ZUFJZWtCLEkiLCJmaWxlIjoiQGFzdHVhbmF4L2Z1bm1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAYXN0dWFuYXgvZnVubWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1sXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhc3R1YW5heC9mdW5tbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWF4IGZyb20gJ2Z1bi5qcy9zcmMvbWF4J1xuaW1wb3J0IG1pbiBmcm9tICdmdW4uanMvc3JjL21pbidcbmltcG9ydCByZWR1Y2UgZnJvbSAnZnVuLmpzL3NyYy9yZWR1Y2UnXG5pbXBvcnQgZXF1YWxzIGZyb20gJ2Z1bi5qcy9zcmMvZXF1YWxzJ1xuaW1wb3J0IG5vdCBmcm9tICdmdW4uanMvc3JjL25vdCdcbmltcG9ydCBjb25jYXQgZnJvbSAnLi91dGlsL2NvbmNhdCdcbmltcG9ydCBlbXB0eSBmcm9tICcuL3V0aWwvZW1wdHknXG5pbXBvcnQgZG90IGZyb20gJy4vdXRpbC9kb3QnXG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi91dGlsL2lkZW50aXR5J1xuaW1wb3J0IHRyYW5zcG9zZSBmcm9tICcuL3V0aWwvdHJhbnNwb3NlJ1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJy4vdXRpbC9nZW5lcmF0ZSdcblxuaW1wb3J0IHNvbHZlIGZyb20gJy4vdXRpbC9zb2x2ZSdcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4XG4gKiBAY2xhc3NkZXNjIE1hdHJpeCBhcHBsaWNhdGl2ZSBwcm92aWRpbmcgc3RhbmRhcmQgbWF0cml4IG9wZXJhdGlvbnNcbiAqIEBzdW1tYXJ5IFRoZSBNYXRyaXggY2xhc3Mgc2hvdWxkIG5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQuIEluc3RlYWQgdXNlIHRoZSBNYXRyaXgub2Ygc3ludGF4IHRvIGNyZWF0ZSBhIG5ldyBNYXRyaXguIFVuZm9ydHVuYXRseSBqc2RvY3MgZG9lcyBub3QgYWxsb3cgZm9yIHRoZSBjb25zdHJ1Y3RvciB0byBiZSBoaWRkZW4uXG4gKiBAaGlkZWNvbnRydWN0b3JcbiAqIEBzZWUgTWF0cml4Lm9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKlxuICovXG5sZXQgTWF0cml4ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgTWF0cml4IG9iamVjdCBhbmQgZmxhdHRlbnMgdGhlIE1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gdmFsIC0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xuTWF0cml4Lm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgTWF0cml4KSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1hdHJpeCh2YWwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgLSBSZXR1cm5zIHRoZSBzdHJpbmcgJ01hdHJpeCcgZm9yIGFsbCBNYXRyaXggb2JqZWN0c1xuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ01hdHJpeCdcbiAqL1xuTWF0cml4LnByb3RvdHlwZS50eXBlID0gJ01hdHJpeCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAcHJvcGVydHkge051bWJlcn0gcHJlY2lzaW9uIC0gRmxvYXRpbmcgcG9pbnQgcHJlY2lzaW9uIGlzIHNldCB0byA0IGJ5IGRlZmF1bHRcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnByZWNpc2lvbiA9PT0gNFxuICovXG5NYXRyaXgucHJvdG90eXBlLnByZWNpc2lvbiA9IDRcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NldFByZWNpc2lvblxuICogQGRlc2MgVGhlIHByZWNpc2lvbiBpcyB1c2VkIGluIGZsb2F0aW5nIHBvaW50IGNhbGN1bGF0aW9ucyBmb3IgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3ByZWNpc2lvbj00XSAtIFNldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciByb3VuZGluZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5zZXRQcmVjaXNpb24oMTApXG4gKiBtLnByZWNpc2lvbiA9PT0gMTBcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zZXRQcmVjaXNpb24gPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG4gIHRoaXMucHJlY2lzaW9uID0gcHJlY2lzaW9uXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc1N5bW1ldHJpY1xuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBzeW1tZXRyaWMgYnkgdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHRyYW5zcG9zZWQgTWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTeW1tZXRyaWMoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1N5bW1ldHJpYyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYSA9IHRoaXMuX192YWx1ZVxuICBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzKS5fX3ZhbHVlXG4gIHJldHVybiBlcXVhbHMoYSwgYilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzU3F1YXJlXG4gKiBAZGVzYyBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgTWF0cml4IG9iamVjdCBpcyBzcXVhcmUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogdHJ1ZSA9PT0gQS5pc1NxdWFyZSgpXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzU3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXF1YWxzKHRoaXMuZ2V0Q29scygpLCB0aGlzLmdldFJvd3MoKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lzT3J0aG9nb25hbFxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBpcyBvcnRob2dvbmFsIGJ5IHRlc3RpbmcgZm9yIGVxdWFsaXR5IGJldHdlZW4gSWRlbnRpdHkgTWF0cml4IGFuZCB0aGUgZG90IHByb2R1Y3Qgb2YgdGhlIE1hdHJpeCBhbmQgaXRzIHRyYW5zcG9zZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBbWy0wLjMwOTIsIC0wLjk1MTBdLCBbLTAuOTUxMCwgMC4zMDkyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIHRydWUgID09PSBBLmlzT3J0aG9nb25hbCgpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNPcnRob2dvbmFsID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBeEF0ID0gdGhpcy5kb3QodGhpcy50cmFuc3Bvc2UoKSlcbiAgY29uc3QgSSA9IHRoaXMuaWRlbnRpdHkoKVxuICByZXR1cm4gZXF1YWxzKEF4QXQsIEkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRDb2xzXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIE1hdHJpeFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogQS5nZXRDb2xzKCkgID09PSAyXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldENvbHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVbMF0ubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlcXVhbHNcbiAqIEBkZXNjIEZ1bmN0aW9uIHJldHVybmluZyBhIGJvb2xlYW4gdGVzdGluZyBmb3IgZXF1YWxpdHkgb2YgdGhlIHZhbHVlcyBvZiBhIE1hdHJpeCBvciBBcnJheVxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgQXJyYXkgdG8gY29tcGFyZSBmb3IgZXF1YWxpdHlcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IFtbMSwgMV0sIFsxLCAxXV1cbiAqIHZhciBBID0gTWF0cml4Lm9mKGEpXG4gKiB2YXIgQiA9IE1hdHJpeC5vZihhKVxuICogdHJ1ZSAgPT09IEEuZXF1YWxzKEIpXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLl9fdmFsdWUsIE0uX192YWx1ZSB8fCBNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Um93c1xuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Um93cygpICAvLyAyXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFNoYXBlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0U2hhcGUoKSAgLy8gWzIsIDJdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZ2V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbdGhpcy5nZXRSb3dzKCksIHRoaXMuZ2V0Q29scygpXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWFwXG4gKiBAZGVzY3JpcHRpb24gTWFwcyBvdmVyIHRoZSByb3dzIG9mIHRoZSBtYXRyaXggdXNpbmcgYSBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKVxuICogbS5tYXAoeCA9PiB4Lm1hcCh5ID0+IHkrIDEpKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChmKSh0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXgubWFwXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIGFycmF5IHRvIG1hcFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1hdHJpeC5tYXAoeD0gPiB4Lm1hcCh5ID0+IHkrIDEpLCBbWzEsIDFdLCBbMSwgMV1dKVxuICogLy8gW1syLCAyXSwgWzIsIDJdXVxuICpcbiAqL1xuTWF0cml4Lm1hcCA9IGN1cnJ5KGZ1bmN0aW9uIChmLCBNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZm9sZFxuICogQGRlc2NyaXB0aW9uIFJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBGbGF0dGVuIE1hdHJpeFxuICogTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pLmZvbGQoKHByZXYsIG5leHQpID0+IHByZXYuY29uY2F0KG5leHQpKVxuICogLy8gWzEsIDEsIDEsIDFdXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZChmLCBbXSkodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmZvbGRcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgZnVuY3Rpb24gdG8gcmVkdWNlIHRoZSBtYXRyaXggcm93cyB1c2luZyBhIHJlZHVjZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEEgcmVkdWNlL2ZvbGQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gVGhlIE1hdHJpeCB0byByZWR1Y2VcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuXG4gKiAvLyBTdW0gb2YgYWxsIG1hdHJpeCB2YWx1ZXNcbiAqIGNvbnN0IHJlZHVjZXIgPSAocHJldiwgbmV4dCkgPT4gTnVtYmVyKHByZXYpICsgbmV4dC5yZWR1Y2UoKGFjYywgeCkgPT4gYWNjICsgeCwgMClcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXVxuICogTWF0cml4LmZvbGQocmVkdWNlciwgQSlcbiAqIC8vIDRcbiAqL1xuTWF0cml4LmZvbGQgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmZvbGQoZilcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhcFxuICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIE1hdHJpeC5vZihmKS5hcChNKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFwID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguYXBcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGEgTWF0cml4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gRnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgTWF0cml4IGFzIGlucHV0XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBBcnJheSB0byBhcHBseSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBmID0geCA9PiB4LnJlZHVjZSgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpXG4gKiBNYXRyaXguYXAoZiwgW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbNywgOCwgOV1dKVxuICogLy8gW1s2XSwgWzE1XSwgWzI0XVxuICovXG5NYXRyaXguYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKGYpLmFwKE0pXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBUaGUgcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvbi9wcm9kdWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBBLmNvbmNhdChCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoTSwgZiA9IGNvbmNhdCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChmKE0pKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQSBjdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY29uY2F0ZW5hdGVzIDIgTWF0cmljZXMgdXNpbmcgYSBmdW5jdGlvbiBhcyBvcGVyYXRvclxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge01hdHJpeH0gQiAtIFJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZj1jb25jYXRdIC0gQSBjdXJyaWVkIGZ1bmN0aW9uIGFjY2VwdGluZyAyIG1hdHJpY2VzIGFzIGlucHV0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gW1swLCAxLCAxXSwgWzIsIDMsIDRdXVxuICogY29uc3QgYiA9IFtbMiwgMiwgMl0sIFszLCAzLCAzXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoYilcbiAqIGNvbnN0IE0gPSBNYXRyaXguY29uY2F0KEEsIEIpXG4gKiAvLyBbWzAsIDEsIDEsIDIsIDIsIDJdLCBbMiwgMywgNCwgMywgMywgM11dXG4gKlxuICovXG5NYXRyaXguY29uY2F0ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIsIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5tYXAoZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChlbXB0eSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhbiBlbXB0eSBNYXRyaXggZnJvbSBhbiBleGlzdGluZyBNYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcm93cz0wXSAtIFJvd3MgdG8gZ2VuZXJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbY29scz0wXSAtIENvbHMgdG8gZ2VuZXJhdGVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5lbXB0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzID0gMCwgY29scyA9IDApIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpIC8vIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4gIHJldHVybiBNYXRyaXgub2YobSkubWFwKGVtcHR5KVxufSlcblxuLy8gIyMjIyAjIyMjICMjIyMgLy9cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2lkZW50aXR5XG4gKiBAZGVzYyBSZXR1cm5zIGFuIGlkZW50aXR5IG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoYSlcbiAqIGNvbnN0IEFpZGVudGl0eSA9IEEuaWRlbnRpdHkoKVxuICogLy8gW1sxLCAwLCAwXSwgWzAsIDEsIDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAodGhpcylcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmlkZW50aXR5XG4gKiBAZGVzYyBjdXJyaWVkIGZ1Y250aW9uIHRoYXQgcmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguaWRlbnRpdHkoMywgMilcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5pZGVudGl0eSA9IGN1cnJ5KGZ1bmN0aW9uIChyb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKGlkZW50aXR5KS5hcChtKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbWJpbmVcbiAqIEBkZXNjIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHRvZ2V0aGVyLlxuICogQHNlZSBNYXRyaXguY29uY2F0XG4gKiBAcGFyYW0ge01hdHJpeCB9IE0gLSBSaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgY29tYmluZSBvcGVyYXRpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgY29uY2F0KVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBNYXRyaXguY29tYmluZVxuICogQGRlc2MgQ3VycmllZCBmdWNudGlvbiB0aGF0IGNvbWJpbmVzIDIgTWF0cmljZXNcbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbWJpbmUgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gUmlnaHQgc2lkZSBvZiB0aGUgY29tYmluZSBvcGVyYXRvclxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LmNvbWJpbmUgPSBjdXJyeShmdW5jdGlvbiAoQSwgQikge1xuICByZXR1cm4gTWF0cml4Lm9mKEEpLmNvbmNhdChNYXRyaXgub2YoQiksIGNvbmNhdClcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkb3RcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuIDIgbWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIENyZWF0ZSBtYXRyaXhcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAyXSwgWzMsIDRdXSlcbiAqXG4gKiAvLyBHZW5lcmF0ZSBpZGVudGl0eSBtYXRyaXhcbiAqIGNvbnN0IEkgID0gbS5pZGVudGl0eSgpIC8vIFtbMSwgMF0sIFswLCAxXV1cbiAqXG4gKiBpZihtLmRvdChJKS5lcXVhbHMobSkpIHtcbiAqICAgIGNvbnNvbGUubG9nKCdEb3QgcHJvZHVjdCB3aXRoIGlkZW50aXR5IG1hdHJpeCByZXR1cm5zIHRoZSBzYW1lIG1hdHJpeCcpXG4gKiB9XG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuY29uY2F0KE1hdHJpeC5vZihNKSwgZG90KHRoaXMucHJlY2lzaW9uKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmRvdFxuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVjbnRpb24gdGhhdCByZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gQSAtIExlZnQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBCIC0gUmlnaHQgc2lkZSBvZiB0aGUgZG90IHByb2R1Y3RcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICogY29uc3QgYSA9IFtbMSwgMiwgM10sIFs0LCA1LCA2XV1cbiAqIGNvbnN0IGIgPSBbWzcsIDhdLCBbOSwgMTBdLCBbMTEsIDEyXV1cbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKlxuICogTWF0cml4LmRvdChBLCBCKSAvLyBbWzU4LCA2NF0sIFsxMzksIDE1NF1dXG4gKlxuICovXG5NYXRyaXguZG90ID0gY3VycnkoZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kb3QoTWF0cml4Lm9mKEIpKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZpbGxcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggdGhlIHByb3ZpZGVkIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLDIsM10sIFszLDIsMV0sIFs0LDUsNl1dKS5maWxsKHggPT4gNDIpXG4gKiAvLyBbWzQyLDQyLDQyXSwgWzQyLDQyLDQyXSwgWzQyLDQyLDQyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykubWFwKG1hcCh4ID0+IGYoeCkpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuemVyb3MoKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnplcm9zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoeCA9PiAwKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguemVyb3NcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggemVyb3NcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzIC0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gY29scyAtIERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC56ZXJvcygzLCAzKVxuICogLy8gW1swLDAsMF0sIFswLDAsMF0sIFswLDAsMF1dXG4gKlxuICovXG5NYXRyaXguemVyb3MgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG5cbiAqIEBmdW5jdGlvbiBNYXRyaXgjb25lc1xuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCBvbmVzXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkub25lcygpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUub25lcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lm9uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3MgLSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzIC0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9uZXMoMSwgMSlcbiAqIC8vIFtbMSwxLDFdLCBbMSwxLDFdLCBbMSwxLDFdXVxuICpcbiAqL1xuTWF0cml4Lm9uZXMgPSBmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scylcbiAgcmV0dXJuIE1hdHJpeC5vZihtKS5maWxsKHggPT4gMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gdmFsdWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZiA9IGUgPT4gTWF0aC5yYW5kb20oKSAqIDIgLSAxXSAtIEZ1bmN0aW9uIHByb2R1Y2luZyByYW5kb20gdmFsdWVzLCBjYW4gYmUgYW55IHR5cGUgb2YgdmFsdWVcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnJhbmRvbVxuICogQGRlc2MgRmlsbCB1cCBhbiBlbXB0eSBtYXRyaXggd2l0aCByYW5kb20gbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHdoaWNoIHJldHVybnMgcmFuZG9tIHZhbHVlcy4gRGVmYXVsdCByYW5kb20gdmFsdWVzIGFyZSBiZXR3ZWVuIC0xIGFuZCAxXG4gKiBAcGFyYW0ge051bWJlcn0gcm93cyAtIERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvbHMgLSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5yYW5kb20gPSBmdW5jdGlvbiAoZiA9IGUgPT4gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSksIHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjdG9BcnJheVxuICogQGRlc2MgUmV0dXJucyB0aGUgYXJyYXkgZnJvbSB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZS5tYXAocm93ID0+IHJvdy5tYXAoY29sID0+IGNvbCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNjbG9uZVxuICogQGRlc2MgUmV0dXJucyBhIGNsb25lIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IE0gPSBNYXRyaXguZnJvbUFycmF5KHRoaXMuX192YWx1ZSlcbiAgTS5zZXRQcmVjaXNpb24odGhpcy5wcmVjaXNpb24pXG4gIHJldHVybiBNXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNmcm9tQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggZnJvbSBhbiBhcnJheVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXguZnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gTWF0cml4Lm9mKG1hcChyb3cgPT4gbWFwKGNvbCA9PiBjb2wpKHJvdykpKGFycikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCN0cmFuc3Bvc2VcbiAqIEBkZXNjIFJldHVybnMgYSB0cmFuc3Bvc2VkIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbLTEsIDJdLCBbMywgNF0sIFstOCwgMl0pXG4gKiBjb25zdCBiID0gQS50cmFuc3Bvc2UoKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS50cmFuc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoZm9sZCh0cmFuc3Bvc2UsIFtdLCB0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgudHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gQSBNYXRyaXggb3IgYSBtYXRyaXggYXJyYXlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbLTEsIDJdLCBbMywgNF0sIFstOCwgMl1cbiAqIGNvbnN0IGIgPSBNYXRyaXgudHJhbnNwb3NlKGEpLnRvQXJyYXkoKVxuICogLy8gcmV0dXJucyBbWy0xLCAzLC04XSwgWzIsIDQsIDJdXVxuICovXG5NYXRyaXgudHJhbnNwb3NlID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS50cmFuc3Bvc2UoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkXG4gKiBAZGVzYyBBZGRzIGEgbnVtYmVyIG9yIGEgTWF0cml4IHRvIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEFkZCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuYWRkKDEpIC8vIFtbNiwgNV1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5hZGQoQikgLy8gW1sxMCwgMTBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGFkZCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCArIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKyBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VidHJhY3RcbiAqIEBkZXNjIFN1YnRyYWN0cyBhIG51bWJlciBvciBhIE1hdHJpeCBmcm9tIHRoaXNcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIFN1YnRyYWN0IGEgTWF0cml4IG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5zdWJ0cmFjdCgxKSAvLyBbWzQsIDJdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuc3VidHJhY3QoQikgLy8gW1swLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IHN1YnRyYWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKCh2YWwsIGpkeCkgPT4gdmFsIC0gTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAtIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtdWx0aXBseVxuICogQGRlc2MgTXV0bGlwbHkgYSBzY2FsYXIgb3IgYSBtYXRyaXggd2l0aCBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBtdWx0aXBsaWNhdGlvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBIE1hdHJpeCBNIG9yIGEgTnVtYmVyIHRvIG11bHRpcGx5IGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5tdWx0aXBseSgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLm11bHRpcGx5KEIpIC8vIFtbMjUsIDI1XV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlIHN0YXRpYyBtZXRob2QgXFwnZG90XFwnIHRvIGRvIG1hdHJpeCBtdWx0aXBsaWNhdGlvbicpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBoYWRhbWFyZCBwcm9kdWN0JylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwKChyb3csIGlkeCkgPT4gbWFwKChjb2wsIGpkeCkgPT4gY29sICogTS5fX3ZhbHVlW2lkeF1bamR4XSkocm93KSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tYXAobWFwKHggPT4geCAqIE0pKVxuICB9XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNhZGRpdGl2ZWludmVyc2VcbiAqIEBkZXNjIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbWF0cml4IG9idGFpbmVkIGJ5IGNoYW5naW5nIHRoZSBzaWduIG9mIGV2ZXJ5IG1hdHJpeCBlbGVtZW50LiBUaGUgYWRkaXRpdmUgaW52ZXJzZSBvZiBtYXRyaXggQSBpcyB3cml0dGVuIOKAk0EuXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwtNV0sIFstNCwgNF1dKVxuICogY29uc3QgbWludXNBID0gQS5hZGRpdGl2ZWludmVyc2UoKVxuICogLy8gW1stNSwgNV0sIFs0LCAtNF1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkaXRpdmVpbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KC0xKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaGFkYW1hcmRcbiAqIEBkZXNjIEhhZGFtYXIgaXMgYW4gYWxpYXMgb2YgdGhlIG11bHRpcGx5IGZ1bmN0aW9uXG4gKiBAc2VlIE1hdHJpeC5tdWx0aXBseVxuICogQHBhcmFtIHtNYXRyaXh8TnVtYmVyfSBNIC0gQSBNYXRyaXggTSBvciBhIE51bWJlciB0byBtdWx0aXBseSBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBzZWUgTWF0cml4LmhhZGFtYXJkXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmhhZGFtYXJkKDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuaGFkYW1hcmQoQikgLy8gW1syNSwgMjVdXVxuXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaGFkYW1hcmQgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm11bHRpcGx5KE0pXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNsdVxuICogQGRlc2MgQ2FsY3VsYXRlcyBMVSBkZWNvbXBvc2l0aW9uIG9mIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXhbXX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1szLCAtNywgLTIsIDJdLCBbLTMsIDUsIDEsIDBdLCBbNiwgLTQsIDAsIC01XSwgWy05LCA1LCAtNSwgMTJdXVxuICogY29uc3QgQSA9IE1hdHJpeC5mcm9tQXJyYXkocmVzdWx0KVxuICogY29uc3QgbHUgPSBBLmx1KClcbiAqIC8vIEwuX192YWx1ZSA9IFsgWyAxLCAwLCAwLCAwIF0sIFsgLTEsIDEsIDAsIDAgXSwgWyAyLCAtNSwgMSwgMCBdLCBbIC0zLCA4LCAzLCAxIF0gXVxuICogLy8gVS5fX3ZhbHVlID0gIFsgWyAzLCAtNywgLTIsIDIgXSwgWyAwLCAtMiwgLTEsIDIgXSwgWyAwLCAwLCAtMSwgMSBdLCBbIDAsIDAsIDAsIC0xIF0gXVxuICogTWF0cml4LmRvdChsdVswXSwgbHVbMV0pIC8vIHJldHVybnMgY2xvbmUgb2YgQVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5sdSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbiA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IHRvbCA9IDFlLTZcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBMID0gdGhpcy56ZXJvcygpXG4gIGNvbnN0IFUgPSB0aGlzLnplcm9zKClcblxuICBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAgIGlmIChNYXRoLmFicyhBLl9fdmFsdWVba11ba10pIDwgdG9sKSB0aHJvdyBFcnJvcignQ2Fubm90IHByb2NlZWQgd2l0aG91dCBhIHJvdyBleGNoYW5nZScpXG4gICAgTC5fX3ZhbHVlW2tdW2tdID0gMVxuICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47ICsraSkge1xuICAgICAgTC5fX3ZhbHVlW2ldW2tdID0gQS5fX3ZhbHVlW2ldW2tdIC8gQS5fX3ZhbHVlW2tdW2tdXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyArK2opIHtcbiAgICAgICAgQS5fX3ZhbHVlW2ldW2pdID0gQS5fX3ZhbHVlW2ldW2pdIC0gTC5fX3ZhbHVlW2ldW2tdICogQS5fX3ZhbHVlW2tdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGwgPSBrOyBsIDwgbjsgKytsKSB7XG4gICAgICBVLl9fdmFsdWVba11bbF0gPSBBLl9fdmFsdWVba11bbF1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtMLCBVXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjcnJlZlxuICogQGRlc2MgUmV0dXJucyBhIE1hdHJpeCBjb250YWluaW5nIHRoZSByb3cgcmVkdWNlZCBlY2hlbG9uIGZvcm1cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBBID0gTWF0cml4Lm9mKFtbLTEsIDFdLCBbLTEsIDBdLCBbMCwgLTFdLCBbLTEsIC0yXV0pXG4gKiBBLnJyZWYoKSAvLyAgWyBbIDEsIDAgXSwgWyAtMCwgMSBdLCBbIDAsIDAgXSwgWyAwLCAwIF0gXVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJyZWYgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBsZWFkID0gMFxuICBjb25zdCByZXN1bHRNYXRyaXggPSB0aGlzLmNsb25lKClcblxuICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZ2V0Um93cygpOyArK3IpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPD0gbGVhZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgIH1cbiAgICBsZXQgaSA9IHJcbiAgICB3aGlsZSAocmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bbGVhZF0gPT09IDApIHtcbiAgICAgICsraVxuICAgICAgaWYgKHRoaXMuZ2V0Um93cygpID09PSBpKSB7XG4gICAgICAgIGkgPSByXG4gICAgICAgICsrbGVhZFxuICAgICAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IGxlYWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0TWF0cml4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdG1wID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1cbiAgICByZXN1bHRNYXRyaXguX192YWx1ZVtpXSA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl0gPSB0bXBcblxuICAgIGxldCB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVtsZWFkXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nZXRDb2xzKCk7ICsraikge1xuICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal0gLz0gdmFsXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvd3MoKTsgKytpKSB7XG4gICAgICBpZiAoaSA9PT0gcikgY29udGludWVcbiAgICAgIHZhbCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV1bal0gLT0gdmFsICogcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bal1cbiAgICAgIH1cbiAgICB9XG4gICAgbGVhZCsrXG4gIH1cbiAgcmV0dXJuIHJlc3VsdE1hdHJpeFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc29sdmVcbiAqIEBkZXNjIFJldHVybnMgdGhlIHNvbHV0aW9uIGZvciBhIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zXG4gKiBAcGFyYW0ge0FycmF5fSBiIC0gVGhlIG51bWJlcnMgZm9yIHdoaWNoIHRvIHNvbHZlIHRoZSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9uc1xuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBTb2x2ZSB4QSA9IGJcbiAqIC8vIDV4ICsgeSAgPSA3XG4gKiAvLyAzeCAtIDR5ID0gMThcbiAqIC8vIFNvbHV0aW9uIGZvciB4IGFuZCB5OlxuICogLy8geCA9IDJcbiAqIC8vIHkgPSAtM1xuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCAxXSwgWzMsIC00XV0pXG4gKiBjb25zdCBzb2x2ZUEgPSBBLnNvbHZlKFs3LCAxOF0pIC8vIFsyLCAtM11cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc29sdmUgPSBmdW5jdGlvbiAoYikge1xuICBjb25zdCBMVSA9IHRoaXMubHUoKVxuICBjb25zdCBMID0gTFVbMF1cbiAgY29uc3QgVSA9IExVWzFdXG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICAvLyBsZXQgcyA9IDBcbiAgLy8gY29uc3QgYyA9IFtdXG4gIC8vIGNvbnN0IHggPSBbXVxuXG4gIHJldHVybiBzb2x2ZShuLCBMLCBVLCBiKVxuXG4gIC8vIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gIC8vICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgLy8gICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAvLyAgIH1cbiAgLy8gICBjW2tdID0gYltrXSAtIHNcbiAgLy8gICBzID0gMFxuICAvLyB9XG4gIC8vIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgLy8gICBsZXQgdCA9IDBcbiAgLy8gICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgLy8gICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAvLyAgIH1cbiAgLy8gICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICAvLyB9XG4gIC8vIHJldHVybiB4XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpbnZlcnNlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pLmludmVyc2UoKVxuICogLy8gWyBbIDIsIC0wLjUgXSwgWyAtMSwgMC41IF0gXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pbnZlcnNlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBBID0gdGhpcy5jbG9uZSgpXG4gIGNvbnN0IEkgPSBBLmlkZW50aXR5KClcbiAgY29uc3QgSW52ID0gQS5jb25jYXQoSSkucnJlZigpXG5cbiAgY29uc3QgcmVzdWx0ID0gSW52Ll9fdmFsdWUucmVkdWNlKChyZXN1bHQsIHgsIGlkeCkgPT4ge1xuICAgIGNvbnN0IGhhbGYgPSB4Lmxlbmd0aCAvIDJcbiAgICByZXN1bHQucHVzaCh4LnNsaWNlKGhhbGYsIHgubGVuZ3RoKSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxuICByZXR1cm4gTWF0cml4Lm9mKHJlc3VsdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JhbmtcbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaW5lYXJseSBpbmRlcGVuZGVudCBjb2x1bW5zLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5yYW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBycmVmID0gdGhpcy5ycmVmKClcbiAgbGV0IHJlc3VsdCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBycmVmLmdldENvbHMoKTsgKytpKSB7XG4gICAgcmVzdWx0ICs9IHJyZWYuX192YWx1ZVtpXVtpXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpbWVuc2lvblxuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxpbmVhcmx5IGluZGVwZW5kZW50IGNvbHVtbnMuXG4gKiBAc2VlIE1hdHJpeC5yYW5rXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmFuaygpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaWFnXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXgub25lcygzLCAzKS5kaWFnKClcbiAqIC8vIFsxLCAxLCAxXVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWcoKVxuICogLy8gWzAsIDAsIDAsIDAsIDBdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KHhbaWR4XSlcbiAgfSkoW10pKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdcbiAqIEBkZXNjIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWcoW1syLCAxXSwgWzEsIDVdXSlcbiAqIC8vIFsyLCA1XVxuICpcbiAqL1xuTWF0cml4LmRpYWcgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLmRpYWcoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ3Byb2R1Y3RcbiAqIEBkZXNjIFJldHVybnMgdGhlIHByb2R1Y3Qgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZ3Byb2R1Y3QoKVxuICogLy8gMVxuICpcbiAqIGNvbnN0IGRpYWcwID0gTWF0cml4Lnplcm9zKDUsIDUpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGlhZ3Byb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGlkeCkgPT4ge1xuICAgIGFjYyAqPSB4W2lkeF1cbiAgICByZXR1cm4gYWNjXG4gIH0pKDEpKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LmRpYWdwcm9kdWN0KFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyAxMFxuICpcbiAqL1xuTWF0cml4LmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFncHJvZHVjdCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuc3VtKClcbiAqIC8vIDlcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5zdW0oKVxuICogLy8gMFxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgpID0+IHtcbiAgICBhY2MgKz0gZm9sZCgocHJldiwgbmV4dCkgPT4gcHJldiArIG5leHQpKDApKHgpXG4gICAgcmV0dXJuIGFjY1xuICB9KSgwKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5zdW1cbiAqIEBkZXNjIFJldHVybnMgdGhlIHN1bSBvZiB0aGUgdmFsdWVzIGluIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZGlhZzEgPSBNYXRyaXguc3VtKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyA5XG4gKlxuICovXG5NYXRyaXguc3VtID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5zdW0oKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgja3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gTSAtIFRoZSByaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAodGhpcyDiipcgTSlcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUua3JvbmVja2VyID0gZnVuY3Rpb24gKE0pIHtcbiAgY29uc3QgbSA9IHRoaXMuZ2V0Um93cygpXG4gIGNvbnN0IG4gPSB0aGlzLmdldENvbHMoKVxuICBjb25zdCBwID0gTS5nZXRSb3dzKClcbiAgY29uc3QgcSA9IE0uZ2V0Q29scygpXG5cbiAgY29uc3QgbGVmdCA9IHRoaXMuX192YWx1ZVxuICBjb25zdCByaWdodCA9IE0uX192YWx1ZVxuXG4gIGNvbnN0IGZyYW1lID0gZ2VuZXJhdGUobSAqIHAsIG4gKiBxKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgZnJhbWVbcCAqIGkgKyBrXVtxICogaiArIGxdID0gbGVmdFtpXVtqXSAqIHJpZ2h0W2tdW2xdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0cml4Lm9mKGZyYW1lKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgua3JvbmVja2VyXG4gKiBAZGVzYyBUaGUgS3JvbmVja2VyIHByb2R1Y3QgaXMgYW4gb3BlcmF0aW9uIG9uIHR3byBtYXRyaWNlcyBvZiBhcmJpdHJhcnkgc2l6ZSByZXN1bHRpbmcgaW4gYSBibG9jayBtYXRyaXguXG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIFRoZSBsZWZ0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKEEg4oqXIEIpXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgua3JvbmVja2VyID0gZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5rcm9uZWNrZXIoQilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RldGVybWluYW50XG4gKiBAZGVzYyBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIHNxdWFyZSBNYXRyaXggdXNpbmcgU2FycnVzJyBydWxlIG9yIExVIGRlY29tcG9zaXRpb25cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgPT09IDIpIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVbMF1bMF1cbiAgICAgIGNvbnN0IGIgPSB0aGlzLl9fdmFsdWVbMF1bMV1cbiAgICAgIGNvbnN0IGMgPSB0aGlzLl9fdmFsdWVbMV1bMF1cbiAgICAgIGNvbnN0IGQgPSB0aGlzLl9fdmFsdWVbMV1bMV1cblxuICAgICAgcmV0dXJuIGEgKiBkIC0gYiAqIGNcbiAgICB9XG4gICAgY29uc3QgbHUgPSB0aGlzLmx1KClcbiAgICBjb25zdCBkZXRBID0gTnVtYmVyKGx1WzBdLmRpYWdwcm9kdWN0KCkpXG4gICAgY29uc3QgZGV0QiA9IE51bWJlcihsdVsxXS5kaWFncHJvZHVjdCgpKVxuICAgIHJldHVybiBkZXRBICogZGV0QlxuICB9IGVsc2Uge1xuICAgIHRocm93IEVycm9yKCdUaGUgTWF0cml4IG5lZWRzIHRvIGJlIGEgc3F1YXJlIE1hdHJpeCB0byBjYWxjdWxhdGUgdGhlIGRldGVybWluYW50JylcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguZGV0ZXJtaW5hbnRcbiAqIEBkZXNjIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgc3F1YXJlIE1hdHJpeCB1c2luZyBTYXJydXMnIHJ1bGUgb3IgTFUgZGVjb21wb3NpdGlvblxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IEEgLSBNYXRyaXggYXMgaW5wdXQgdG8gY2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LmRldGVybWluYW50ID0gZnVuY3Rpb24gKEEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5kZXRlcm1pbmFudCgpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtYXhcbiAqIEBkZXNjIFJldHVybnMgdGhlIGxhcmdlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtYXgsIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I21pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3QgbnVtYmVyIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHsqfVxuICovXG5NYXRyaXgucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHJlZHVjZShtaW4sIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpdmlkZVxuICogQGRlc2MgRGl2aWRlIGEgc2NhbGFyIG9yIGEgbWF0cml4IGJ5IGEgbWF0cml4LiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGRpdmlzaW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEEgTWF0cml4IE0gb3IgYSBOdW1iZXIgdG8gZGl2aWRlIGEgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5kaXZpZGUoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsyLCA0XV0pXG4gKiBCLmRpdmlkZShCKSAvLyBbWzEsIDBdLCBbMCwgMV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uIChNKSB7XG4gIGlmIChNIGluc3RhbmNlb2YgTWF0cml4KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpICE9PSBNLmdldENvbHMoKSB8fCB0aGlzLmdldFJvd3MoKSAhPT0gTS5nZXRSb3dzKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cmljZXMgZG8gbm90IG1hdGNoLCBjYW5ub3QgY3JlYXRlIGRpdmlzaW9uJylcbiAgICB9XG4gICAgaWYgKG5vdChNLmlzU3F1YXJlKCkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3Qgc3F1YXJlLCBjYW5ub3QgY3JlYXRlIGludmVyc2UnKVxuICAgIH1cbiAgICBjb25zdCBtSW52ID0gTS5pbnZlcnNlKClcbiAgICByZXR1cm4gdGhpcy5kb3QobUludilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseSgxIC8gTSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICdmdW4uanMvc3JjL2NvbmNhdCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gY29uY2F0ZW5hdGluZy9jb21iaW5pbmcgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBMZWZ0IHNpZGUgb2YgdGhlIGNvbmNhdCBvcGVyYXRpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IG0gLSByaWdodCBzaWRlIG9mIHRoZSBjb250YWMgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSBJbmRleCBvZiB0aGUgcm93XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIChNLCBtLCBpZHgpIHtcbiAgcmV0dXJuIGNvbmNhdChtLCBNLl9fdmFsdWVbaWR4XSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJ2Z1bi5qcy9zcmMvZm9sZCdcbmltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZG90XG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGRvdHByb2R1Y3Qgb2YgMiBNYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBSaWdodCBzaWRlIG9mIGh0ZSBkb3QgcHJvZHVjdFxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHJlcHJlc2VudGluZyB0aGVsZWZ0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChkZWNpbWFscywgQiwgYSkgPT4gbWFwKChpdGVtLCBpKSA9PiB7XG4gIHJldHVybiBmb2xkKChhY2MsIHgsIGopID0+IHtcbiAgICBhY2MgKz0gcm91bmQoeCAqIEIuX192YWx1ZVtqXVtpXSwgZGVjaW1hbHMpXG4gICAgcmV0dXJuIGFjY1xuICB9LCAwKShhKVxufSkoQi5fX3ZhbHVlWzBdKSlcbiIsImltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFuIGVtcHR5IE1hdHJpeFxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShtID0+IFtdKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2VuZXJhdGVcbiAqIEBkZXNjIEdlbmVyYXRvciBmdW5jdGlvbiBmb3IgYSBtYXRyaXggYXJyYXksIHZhbHVlcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzXG4gKiBAcmV0dXJucyB7YW55W11bXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHJvd3MsIGNvbHMpID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoeCA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShjb2xzKSkpXG4iLCJpbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2MgQ3JlYXRlcyBhbiBpZGVudGl5IG1hdHJpeCBmcm9tIGFuIGVtcHR5IGFycmF5XG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtOdW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChtLCBpZHgpID0+IG1hcCgocm93cywgamR4KSA9PiAoaWR4ID09PSBqZHgpICogMSkobSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHJvdW5kXG4gKiBAcGFyYW0gdmFsdWUge051bWJlcn1cbiAqIEBwYXJhbSBkZWNpbWFscyB7TnVtYmVyfVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91bmQgKHZhbHVlLCBkZWNpbWFscyA9IDQpIHtcbiAgcmV0dXJuIE51bWJlcihOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkudG9QcmVjaXNpb24oZGVjaW1hbHMpKVxufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gc29sdmVMXG4gKiBAZGVzYyBzb2x2ZSB0aGUgeEEgPSBiIGVxdWF0aW9uIGZvciBsb3dlciB0cmlhbmd1bGFyXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIExcbiAqIEBwYXJhbSBiXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNvbHZlTCAobiwgTCwgYikge1xuICBsZXQgcyA9IDBcbiAgY29uc3QgYyA9IFtdXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7ICsraikge1xuICAgICAgcyA9IHMgKyBMLl9fdmFsdWVba11bal0gKiBjW2pdXG4gICAgfVxuICAgIGNba10gPSBiW2tdIC0gc1xuICAgIHMgPSAwXG4gIH1cbiAgcmV0dXJuIGNcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gc29sdmVVXG4gKiBAZGVzYyBzb2x2ZSB0aGUgeEEgPSBiIGVxdWF0aW9uIGZvciB1cHBlciB0cmlhbmd1bGFyXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIFVcbiAqIEBwYXJhbSBjXG4gKiBAcGFyYW0gYlxuICovXG5mdW5jdGlvbiBzb2x2ZVUgKG4sIFUsIGMsIGIpIHtcbiAgY29uc3QgeCA9IFtdXG4gIGZvciAobGV0IGEgPSBuIC0gMTsgYSA+IC0xOyAtLWEpIHtcbiAgICBsZXQgdCA9IDBcbiAgICBmb3IgKGxldCBiID0gYSArIDE7IGIgPCBuOyArK2IpIHtcbiAgICAgIHQgPSB0ICsgVS5fX3ZhbHVlW2FdW2JdICogeFtiXVxuICAgIH1cbiAgICB4W2FdID0gKGNbYV0gLSB0KSAvIFUuX192YWx1ZVthXVthXVxuICB9XG4gIHJldHVybiB4XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIHNvbHZlXG4gKiBAZGVzYyBIZWxwZXIgZnVuY3Rpb24gZm9yIHhBID0gYiBzb2x2ZXJcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gTFxuICogQHBhcmFtIFVcbiAqIEBwYXJhbSBiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvbHZlIChuLCBMLCBVLCBiKSB7XG4gIGNvbnN0IGMgPSBzb2x2ZUwobiwgTCwgYilcbiAgcmV0dXJuIHNvbHZlVShuLCBVLCBjLCBiKVxufVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcbmltcG9ydCBjdXJyeSBmcm9tICdmdW4uanMvc3JjL2N1cnJ5J1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0cmFuc3Bvc2VcbiAqIEBkZXNjIFRyYW5zcG9zZXMgYSBhcnJheSBvZiBhcnJheXMgdXNpbmcgdGhlIE1hdHJpeC5tYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSBtIHtBcnJheX1cbiAqIEBwYXJhbSBpZHgge051bWJlcn1cbiAqIEByZXR1cm4ge01hdHJpeH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHByZXYsIG5leHQpID0+IG1hcCgoaXRlbSwgaSkgPT4gKHByZXZbaV0gfHwgW10pLmNvbmNhdChuZXh0W2ldKSkobmV4dCkpXG4iLCIvKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdpdGggYXJpdHkgMVxuICogQGZ1bmN0aW9uIGN1cnJ5MVxuICogQHByaXZhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkxIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCAoYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAwXG4gICAgICA/IHRoaXNcbiAgICAgIDogZm4oYSlcbiAgfVxufVxuIiwiLyoqXG4gKiBBZGRzIGEgc3BlY2lmaWVkIGluZGV4IHRvIGl0ZXJhdGUgYSBjb2xsZWN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkZEluZGV4XG4gKiBAc3VtbWFyeSBBZGRzIGEgc3BlY2lmaWVkIGluZGV4IHRvIGl0ZXJhdGUgYSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIEZ1bmN0aW9uIHRvIHdoaWNoIHRvIGFkZCB0aGUgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXl9IGEgVGhlIGFycmF5IG9uIHdoaWNoIHRvIHdvcmtcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGFycmF5ID0gWzEsIDIsIDMsIDRdXG4gKiBhZGRJbmRleChtYXAsICh2LCBpKSA9PiB2ICsgaSwgYXJyYXkpIC8vIFsxLCAzLCA1LCA3XVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFkZEluZGV4IChmLCBnLCBhKSB7XG4gIGxldCBpID0gMFxuICByZXR1cm4gZihcbiAgICBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIGcodiwgaSsrKVxuICAgIH0sXG4gICAgYVxuICApXG59KVxuIiwiLyoqXG4gKiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBhZGp1c3RcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0byBtb2RpZnkgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGkgLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gbW9kaWZ5IHRoZSBhcnJheSwgYWNjZXB0cyBwb3N0aXRpdmUgYW5kIG5lZ2F0aXZlIGluZGV4ZXNcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSB3aXRoIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSB3aXRoIHRoZSBhZGp1c3RlZCBpdGVtXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFkanVzdChhZGQoMSksIC0zLCBbMCwgMSwgMiwgM10pIC8vIFswLCAyLCAyLCAzXVxuICpcbiAqIGNvbnN0IGFkZFRlbiA9IGFkZCgxMClcbiAqIGFkanVzdChhZGRUZW4sIDIsIFsyLCAzLCA0LCA1LCA2XSkgLy8gWzIsIDMsIDE0LCA1LCA2XVxuICpcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3QgKGZuLCBpLCBhKSB7XG4gIGNvbnN0IHIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKVxuICBjb25zdCBpZHggPSBpIDwgMCA/IHIubGVuZ3RoICsgaSA6IGlcbiAgaWYgKCFhW2lkeF0pIHJldHVybiByXG4gIHJbaWR4XSA9IGZuKHJbaWR4XSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1vZGlmaWVzIGFuIGl0ZW0gaW4gYW4gYXJyYXkgdXNpbmcgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIGFkanVzdFdpdGhcbiAqIEBkZXNjcmlwdGlvbiBNb2RpZmllcyBhbiBpdGVtIGluIGFuIGFycmF5IHVzaW5nIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBhKSAtPiAoKGEgLT4gW2FdKSAtPiBbYV0gLT4gbnVtKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIHRvIG1vZGlmeSB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIC0gVGhlIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdGhlIGluZGV4ZXMgaWYgZm91bmRcbiAqIEBwYXJhbSB7SXRlcmFibGV9IFthXVxuICogQHJldHVybiB7SXRlcmFibGV9IFthXVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhZGp1c3RXaXRoIChmbiwgcHJlZCwgYSkge1xuICBjb25zdCBfZm4gPSB4ID0+IHtcbiAgICBpZiAocHJlZCh4KSkge1xuICAgICAgcmV0dXJuIGZuKHgpXG4gICAgfVxuICAgIHJldHVybiB4XG4gIH1cbiAgcmV0dXJuIG1hcChfZm4sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpKVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFsbFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsIChjYiwgYSkge1xuICBsZXQgcmVzID0gdHJ1ZVxuICBmb3IgKGxldCBpIGluIGEpIHtcbiAgICBpZiAoIWNiKGFbaV0pKSB7XG4gICAgICByZXMgPSBmYWxzZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIGFsbCBwYXNzXG4gKlxuICogQGZ1bmN0aW9uIGFsbFBhc3NcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWVzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIHRvIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRydWUgaWYgYWxsIHBhc3NcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgWygqLi4uIC0+IEJvb2xlYW4pXSAtPiAoKi4uLiAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWxsUGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFjYnNbaV0oYSkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBhbHdheXNcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCB0aGUgaW5pdGlhbCB2YWx1ZSBwcm92aWRlZFxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFsd2F5cyAoeCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4geCB9XG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKlxuICogQGZ1bmN0aW9uIGFuZFxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBib3RoIHByZWRpY2F0ZXMgYXJlIHRydWVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKHgsIHkpIC0+IGJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCAtIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHkgLSBBIHByZWRpY2F0ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhbmQgKHgsIHkpIHtcbiAgcmV0dXJuIHggJiYgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uIG9mIHRoZSBpdGVtcyBpbiB0aGUgZW51bWVyYWJsZSBtYXRjaCB0aGUgcHJlZGljYXRlXG4gKlxuICogQGZ1bmN0aW9uIGFueVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbiBvZiB0aGUgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoVE9ETylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFueSAoY2IsIGEpIHtcbiAgbGV0IHJlcyA9IGZhbHNlXG4gIGZvciAobGV0IGkgaW4gYSkge1xuICAgIGlmIChjYihhW2ldKSkge1xuICAgICAgcmVzID0gdHJ1ZVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufSlcbiIsIi8qKlxuICogQXBwbGllcyBhIGxpc3Qgb2YgcHJlZGljYXRlcyB0byB0aGUgZGF0YSBhbmQgcmV0dXJucyB0cnVlIGlmIG9uZSBwYXNzZXNcbiAqXG4gKiBAZnVuY3Rpb24gYW55UGFzc1xuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uKSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW55UGFzcyAoY2JzLCBhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNic1tpXShhKSkgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn0pXG4iLCIvKipcbiAqIEFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzIGFuZCByZXR1cm5zIGEgY29tYmluZWQgcmVzdWx0IGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIGFwXG4gKiBAZGVzY3JpcHRpb24gQXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIHJldHVybnMgYSBjb21iaW5lZCByZXN1bHQgYXJyYXlcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAcGFyYW0geyhGdW5jdGlvbltdfEZ1bmN0aW9ufEFwcGxpY2F0aXZlKX0gZm5zIC0gQW4gYXJyYXkgb2YgZnVuY3Rpb25zIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXBwbGljYXRpdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHMgLSBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfSBbYV1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBpcyBmcm9tICcuL2lzJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi9hcnJheS9mb2xkJ1xuaW1wb3J0IG1hcCBmcm9tICcuL2FycmF5L21hcCdcblxuY29uc3QgaXNGdW5jdGlvbiA9IGlzKCdGdW5jdGlvbicpXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGFwIChmbnMsIHZhbHMpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm5zLmFwKSkge1xuICAgIHJldHVybiBmbnMuYXAodmFscylcbiAgfVxuICBpZiAoaXNGdW5jdGlvbihmbnMpKSB7XG4gICAgcmV0dXJuIHggPT4gZm5zKHgpKHZhbHMoeCkpXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgZikgPT4gYWNjLmNvbmNhdChtYXAoY3VycnkxKGYpLCB2YWxzKSksIFtdLCBmbnMpXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiBhcGVydHVyZVxuICogQHBhcmFtIG5cbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcGVydHVyZSAobiwgYSkge1xuICBpZiAoYS5sZW5ndGggPCBuKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgY29uc3QgcmVzID0gQXJyYXkoYS5sZW5ndGggLSBuICsgMSlcbiAgcmV0dXJuIG1hcCgoaXRlbSwgaWR4KSA9PiBhLnNsaWNlKGlkeCwgaWR4ICsgbiksIHJlcylcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBhcHBlbmRcbiAqIEBkZXNjcmlwdGlvbiBBcHBlbmQgYW4gZWxtZW50IHRvIGEgbGlzdFxuICogQHBhcmFtIHsqfSBlbCAtIEVsZW1lbnQgdG8gYWRkIHRvIGEgbGlzdFxuICogQHBhcmFtIHthcnJheX0gbGlzdCAtIExpc3QgdG8gd2hpY2ggdG8gYWRkIHRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHthcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbCA9IFswLCAxXVxuICogYXBwZW5kKCdhJywgbCkgLy8gcmV1dG5yIFswLCAxLCAnYSddXG4gKlxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vY29uY2F0J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcHBlbmQgKGVsLCBsaXN0KSB7XG4gIHJldHVybiBjb25jYXQobGlzdCwgWyBlbCBdKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFwcGx5XG4gKiBAZGVzY3JpcHRpb24gVGhlIGFwcGx5KCkgbWV0aG9kIGNhbGxzIGEgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzIHByb3ZpZGVkIGFzIGFuIGFycmF5LCBhbmQgdGhlIGZ1bmN0aW9uIGFzIGNvbnRleHQuXG4gKiBAcGFyYW0gZm5cbiAqIEBwYXJhbSBhcmdzXG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYSA9IGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAqICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoeCA9PiB4ICogMilcbiAqICAgfSlcbiAqIGEoWzEsIDIsIDNdKVxuICogLy8gWzIsIDQsIDZdXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcHBseSAoZm4sIGFyZ3MpIHtcbiAgcmV0dXJuIGZuLmFwcGx5KGZuLCBhcmdzKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBhcnJheUNvbmNhdFxuICogQHBhcmFtIGExXG4gKiBAcGFyYW0gYTJcbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGVxdWFsc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gZm9yIGRlZXAgY29tcGFyaXNvbiBvZiBhcnJheXNcbiAqIEBwYXJhbSB7YX0geCAtIE9iamVjdCB0byBjb21wYXJlIG9mIHR5cGUgYVxuICogQHBhcmFtIHthfSB5IC0gT2JqZWN0IHggdG8gY29tcGFyZSB3aXRoIG9iamVjdCB4XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbm90IGZyb20gJy4uL25vdCdcbmltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHNBcnJheSAoeCwgeSkge1xuICBpZiAoeC5sZW5ndGggIT09IHkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vdChlcXVhbHMoeFtpXSwgeVtpXSkpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGFycmF5RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBhcnJheUZpbHRlciAoZm4sIGEpIHtcbiAgdmFyIHIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZm4oYVtpXSkpIHIucHVzaChhW2ldKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgbWFwcGluZyBvdmVyIHRoZSBwcm92aWRlZCBhcnJheSBhbmQgY2FsbGluZyBhbiBpdGVyYXRvciBmdW5jdGlvblxuICogQHBhcmFtIHtjYkZ1bmN0aW9ufSBjYiAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaXRlbVxuICogQHBhcmFtIHsqfSBpbml0IC0gSW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gYSAtIEFycmF5IHdpdGggaXRlbXMgdG8gbW9kaWZ5IGJ5IHRoZSBjYiBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYWxpYXMgcmVkdWNlXG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gZm9sZChhZGQsIDAsIFsxLDEsMV0pXG4gKiAvLyByZXN1bHQgPSAzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgY2JGdW5jdGlvblxuICogQHBhcmFtIHsqfSByIC0gQWNjdW11bGF0b3Igd2hpY2ggYWNjdW11bGF0ZXMgdGhlIGNhbGxiYWNrJ3MgcmV0dXJuIHZhbHVlc1xuICogQHBhcmFtIHsqfSBpdGVtIC0gdGhlIGN1cnJlbnQgZWxlbWVudCBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleSBvZiB0aGUgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaW5pdGlhbCBhcnJheVxuICogQHJldHVybiB7Kn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9IGluaXRcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2IociwgYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBpc0FycmF5XG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgYW4gYXJyYXksIGF1dG9jdXJyaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IE9iamVjdCB0byB2ZXJpZml5XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzQXJyYXkoWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IHRydWVcbiAqL1xuXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdBcnJheScpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBcbiAqIEBkZXNjcmlwdGlvbiBNYXBzIG92ZXIgYW4gYXJyYXkgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICogQHNpbmNlIHYxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGlkZW50aXR5LCBbMCwyLDNdKVxuICogIC8vIHJlc3VsdCA9IFswLDIsM11cbiAqICBjb25zdCBhZGQyID0gYWRkKDIpXG4gKiAgY29uc3QgcmVzdWx0ID0gbWFwKGFkZDIsIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzIsNCw1XVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGNvbnN0IHIgPSBuZXcgQXJyYXkobClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2ldID0gY2IoYVtpXSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHRvQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0cyB0aGUgaW5wdXQgdG8gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSB4IC0gT2JqZWN0IHRvIGNvbnZlcnQgdG8gYW4gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNpbmNlIDEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvQXJyYXkoXCJzdHJpbmdcIilcbiAqIC8vIHJlc3VsdCA9IFsncycsJ3QnLCdyJywnaScsJ24nLCdnJ11cbiAqXG4gKiBmdW5jdGlvbiAoKSB7XG4gKiAgY29uc3QgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxuICogIGNvbnNvbGUubG9nKHR5cGVvZiBhcmdzKSAvLyBBcnJheVxuICogfVxuICpcbiAqKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkgKHgpIHtcbiAgcmV0dXJuIHgubGVuZ3RoID09PSAxID8gW3hbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgeClcbn07XG4iLCIvKipcbiAqIEBmdW5jdGlvbiB1bmlvbkFycmF5XG4gKiBAZGVzY3JpcHRpb24gTWVyZ2VzIDIgYXJyYXlzXG4gKiBAcGFyYW0ge0FycmF5fSBhTCAtIEFycmF5IHRvIG1lcmdlXG4gKiBAcGFyYW0ge0FycmF5fSBhUiAtIEFycmF5IHRvIG1lcmdlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSB1bmlvbkFycmF5KFswLDEsMl0sIFszLDQsNV0pXG4gKiAvLyByZXN1bHQgPSBbMC4xLjIuMy40LjVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHVuaW9uQXJyYXkgKGFMLCBhUikge1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFMLmNvbmNhdChhUikpKVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGJpbmFyeVxuICogQHBhcmFtIGNiXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogKn1cbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gYmluYXJ5IChjYikge1xuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gY2IoYSwgYilcbiAgfSlcbn0pXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gYmluZFxuICogQGRlc2NyaXB0aW9uIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHRcbiAqIEBwYXJhbSB7ZnVuY3Rpb24gfWZuXG4gKiBAcGFyYW0geyp9IGNvbnRleHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBiaW5kIChmbiwgY29udGV4dCkge1xuICByZXR1cm4gZm4uYmluZChjb250ZXh0KVxufSlcbiIsIi8qKlxuICogQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICpcbiAqIEBmdW5jdGlvbiBGXG4gKiBAZGVzY3JpcHRpb24gQWx3YXlzIHJldHVybnMgYSBmdW5jdGlvbiB3aXRoIGEgRmFsc2UgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqKi9cbmltcG9ydCBhbHdheXMgZnJvbSAnLi4vYWx3YXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBhbHdheXMoZmFsc2UpXG4iLCIvKipcbiAqIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqXG4gKiBAZnVuY3Rpb24gVFxuICogQGRlc2NyaXB0aW9uIEFsd2F5cyByZXR1cm5zIGEgZnVuY3Rpb24gd2l0aCBhIEZhbHNlIGJvb2xlYW5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiovXG5pbXBvcnQgYWx3YXlzIGZyb20gJy4uL2Fsd2F5cydcblxuZXhwb3J0IGRlZmF1bHQgYWx3YXlzKHRydWUpXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSB3aGVuIGJvdGggcHJlZGljYXRlcyByZXR1cm4gdHJ1ZVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4xIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbjIgQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgbGlmdCBmcm9tICcuLi9saWZ0J1xuaW1wb3J0IGFuZCBmcm9tICcuLi9hbmQnXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGJvdGggKGZuMSwgZm4yKSB7XG4gIHJldHVybiBpcygnRnVuY3Rpb24nKShmbjEpXG4gICAgPyBmdW5jdGlvbiBfYm90aCAoKSB7IHJldHVybiBmbjEuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBmbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9XG4gICAgOiBsaWZ0KGFuZCkoZm4xLCBmbjIpXG59KVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuLy8gaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjYWxsIChmbikge1xuICByZXR1cm4gZm4uYXBwbHkoZm4sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb21wbGVtZW50XG4gKiBAZGVzY3JpcHRpb24gTGlmdHMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gYW5kIHJldHVybnMgdGhlIGNvbXBsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgbm90XG4gKiBAc2VlIGxpZnRcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgaXNOb3RFbXB0eSA9IGNvbXBsZW1lbnQoaXNFbXB0eSlcbiAqIGlzTm90RW1wdHkoW10pIC8vIGZhbHNlXG4gKiBpc05vdEVtcHR5KHsnYScgOiAxfSkgLy8gdHJ1ZVxuICpcbiAqIGNvbXBsZW1lbnQoTWF5YmUub2YoZmFsc2UpKSAvLyB0cnVlXG4gKiBjb21wbGVtZW50KE1heWJlLm9mKHRydWUpKSAvLyBmYWxzZVxuICovXG5pbXBvcnQgbGlmdCBmcm9tICcuL2xpZnQnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuXG5jb25zdCBjb21wbGVtZW50ID0gbGlmdChub3QpXG5leHBvcnQgZGVmYXVsdCBjb21wbGVtZW50XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBjb21wb3NlXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSAoKSB7XG4gIGxldCBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jb21wb3NlICgpIHtcbiAgICBsZXQgaW5pdCA9IGZuc1tmbnMubGVuZ3RoIC0gMV1cbiAgICBsZXQgcmVzdWx0ID0gW2luaXQuYXBwbHkoaW5pdCwgYXJndW1lbnRzKV1cbiAgICBsZXQgaSA9IGZucy5sZW5ndGggLSAyXG5cbiAgICBmb3IgKGk7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBjb25zdCBmbiA9IGZuc1tpXVxuXG4gICAgICByZXN1bHQgPSBbZm4uYXBwbHkoZm4sIHJlc3VsdCldXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRbMF1cbiAgfVxufTtcbiIsIi8qKlxuICogQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqXG4gKiBAZnVuY3Rpb24gY29uY2F0XG4gKiBAZGVzY3JpcHRpb24gQ29uY2F0ZW5hdGVzIDIgaXRlbXMgdG9nZXRoZXJcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7YX0gYSAtIExlZnQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHthfSBiIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHJldHVybiB7YX0gQ29uY2F0ZW5hdGVkIGl0ZW1cbiAqKi9cblxuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlDb25jYXQgZnJvbSAnLi9hcnJheS9jb25jYXQnXG5pbXBvcnQgc3RyaW5nQ29uY2F0IGZyb20gJy4vc3RyaW5nL2NvbmNhdCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ1N0cmluZyc6IHN0cmluZ0NvbmNhdCxcbiAgICAnQXJyYXknOiBhcnJheUNvbmNhdFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGEsIGIpXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gY29uZFxuICogQHBhcmFtIGNvbmRzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmQgKGNvbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29uZHNbaV1bMF0odmFsdWUpKSByZXR1cm4gY29uZHNbaV1bMV0odmFsdWUpXG4gICAgfVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBAZnVuY3Rpb24gY3VycnlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBjb25zdCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcbiAgICAgIDogZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIGRpZmZEYXRlXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIDIgZGF0ZXMgaW4gbWlsbGlzZWNvbmRcbiAqIEBwYXJhbSB7RGF0ZX0gc3RhcnQgLSBTdGFydCBkYXRlXG4gKiBAcGFyYW0ge0RhdGV9IGVuZCAtIEVuZCBkYXRlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJFdHVybiB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaWZmRGF0ZSAoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKG5ldyBEYXRlKHN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShlbmQpLmdldFRpbWUoKSlcbn0pXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnRGF0ZScpXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDA5LzAzLzIwMTcuXG4gKi9cbmltcG9ydCBkaWZmRGF0ZSBmcm9tICcuL2RpZmZEYXRlJ1xuXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4ge1xuICByZXR1cm4gZGlmZkRhdGUobmV3IERhdGUoKSkoZCkgPCAwXG59XG4iLCIvKipcbiAqXG4gKi9cbmltcG9ydCBpc0RhdGUgZnJvbSAnLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZCAoeCkge1xuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xuICByZXR1cm4gaXNEYXRlKHgpICYmIGlzRmluaXRlKHgudmFsdWVPZigpKVxufTtcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGQpID0+IGQgLyA4NjQwMDAwMCAvLyAyNCo2MCo2MCoxMDAwID0gODY0MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDM2MDAwMDAgLy8gNjAqNjAqMTAwMCA9IDM2MDAwMDBcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDI2LzAzLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZCkgPT4gZCAvIDYwMDAwIC8vIDYwKjEwMDAgPSA2MDAwMFxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMjYvMDMvMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChkKSA9PiBkIC8gMTAwMFxyXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgaW4gdGhlIGVudW1lcmFibGUgbWF0Y2ggdGhlIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBkZWZhdWx0VG9cbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgYWxsIGl0ZW1zIGluIHRoZSBlbnVtZXJhYmxlIG1hdGNoIHRoZSBwcmVkaWNhdGVcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZGVmYXVsdFRvIChkLCB2KSB7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2XG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIGVtcHR5IGVxdWl2YWxlbnQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW1wdHkgKHgpIHtcbiAgcmV0dXJuIG5ldyB4LmNvbnN0cnVjdG9yKClcbn07XG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVxdWFsc1xuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBlcXVhbGl0eSBvZiAyIGl0ZW1zXG4gKiBAcGFyYW0geyp9IHggLSBMZWZ0IHNpZGUgb2YgdGhlIGVxdWFsaXR5IGNoZWNrXG4gKiBAcGFyYW0geyp9IHkgLSBSaWdodCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbmFuID0gTnVtYmVyLk5hTlxuICogZXF1YWwobmFuLCBuYW4pIC8vIHJldHVybnMgdHJ1ZVxuICpcbiAqIGNvbnN0IGFycjEgPSBbMCwgMSwgMiwgM11cbiAqIGNvbnN0IGFycjIgPSBbbnVsbCwgMSwgMiwgM11cbiAqIGVxdWFscyhhcnIxLCBhcnIyKSAvLyByZXR1cm5zIGZhbHNlXG4gKlxuICogZXF1YWxzKG5ldyBPYmplY3QoeydhJzogMCwgJ2InOiAxfSksIHsnYSc6IDAsICdiJzogMX0pIC8vIHRydWVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGV4aXN0cyBmcm9tICcuL2V4aXN0cydcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi9pZGVudGljYWwnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgbm90IGZyb20gJy4vbm90J1xuaW1wb3J0IG9yIGZyb20gJy4vb3InXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9vYmplY3QvaXMnXG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2FycmF5L2lzJ1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4vaXMnXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9udW1iZXIvaXMnXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9zdHJpbmcvaXMnXG5pbXBvcnQgaXNEYXRlIGZyb20gJy4vZGF0ZS9pcydcbmltcG9ydCBlcXVhbHNBcnJheSBmcm9tICcuL2FycmF5L2VxdWFscydcbmltcG9ydCBlcXVhbHNPYmplY3QgZnJvbSAnLi9vYmplY3QvZXF1YWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBlcXVhbHMgKHgsIHkpIHtcbiAgaWYgKGlkZW50aWNhbCh4LCB5KSkgcmV0dXJuIHRydWVcblxuICBpZiAodHlwZSh4KSAhPT0gdHlwZSh5KSkgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKG9yKG5vdChleGlzdHMoeCkpLCBub3QoZXhpc3RzKHkpKSkpIHJldHVybiBmYWxzZVxuXG4gIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2VcblxuICBpZiAoaXNTdHJpbmcoeCkgfHwgaXNCb29sZWFuKHgpIHx8IGlzTnVtYmVyKHgpIHx8IGlzRGF0ZSh4KSkge1xuICAgIHJldHVybiBpZGVudGljYWwoeC52YWx1ZU9mKCksIHkudmFsdWVPZigpKVxuICB9XG4gIGlmIChpc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc0FycmF5KHgsIHkpXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoeCkpIHtcbiAgICByZXR1cm4gZXF1YWxzT2JqZWN0KHgsIHkpXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZXhpc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4aXN0cyAoeCkge1xuICByZXR1cm4gISh4ID09IG51bGwpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZmlsdGVyXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVjbnRpb24gdGhhdCBmaWx0ZXJzIE9iamVjdHMsIEFycmF5cyBhbmQgTWFwc1xuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGaWx0ZXIgZnJvbSAnLi9hcnJheS9maWx0ZXInXG5pbXBvcnQgb2JqZWN0RmlsdGVyIGZyb20gJy4vb2JqZWN0L2ZpbHRlcidcbmltcG9ydCBtYXBGaWx0ZXIgZnJvbSAnLi9tYXAvZmlsdGVyJ1xuLy8gVE9ET1xuLy8gaW1wb3J0IHNldEZpbHRlciBmcm9tICcuLi9zZXQvZmlsdGVyJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaWx0ZXIgKGZuLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIC8vIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpKSB7XG4gICAgLy8gY2FzZSAnRnVuY3Rpb24nOlxuICAgIC8vICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgIC8vICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdEZpbHRlcihmbiwgYSlcbiAgICAvLyBjYXNlICdTdHJpbmcnOlxuICAgIC8vICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcEZpbHRlcihmbiwgYSlcbiAgICAvLyBjYXNlICdTZXQnOlxuICAgIC8vICAgcmV0dXJuIHNldEZpbHRlcihmbiwgYSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFycmF5RmlsdGVyKGZuLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBGaW5kIHRoZSBpbmRleCBtYXRjaGluZyBhIHByZWRpY2F0ZVxuICpcbiAqIEBmdW5jdGlvbiBmaW5kSW5kZXhcbiAqIEBkZXNjcmlwdGlvbiBGaW5kIHRoZSBpbmRleCBtYXRjaGluZyBhIHByZWRpY2F0ZVxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoYSAtPiBib29sZWFuKSAtPiBbYV0gLT4gbnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBhIGJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IEFuIGFycmF5IGxpa2Ugb2JqZWN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmaW5kSW5kZXggKGZuLCBhKSB7XG4gIGxldCBpID0gMFxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgd2hpbGUgKGkgPCBsKSB7XG4gICAgaWYgKGZuKGFbaV0pKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gLTFcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBmaXJzdFxuICogQHBhcmFtIFthXVxuICogQHJldHVybiBhIHwgdW5kZWZpbmVkXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGFyciA9IFsxLCAyLCA0XVxuICogZmlyc3QoWzEsIDIsIDRdKSAvLyByZXR1cm5zIDFcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIGZpcnN0IChhKSB7XG4gIHJldHVybiBhICYmIGEubGVuZ3RoID8gYVswXSA6IHVuZGVmaW5lZFxufSlcbiIsImltcG9ydCBmb2xkIGZyb20gJy4vZm9sZCdcbmltcG9ydCBlbXB0eSBmcm9tICcuL2VtcHR5J1xuaW1wb3J0IGNvbmNhdCBmcm9tICcuL2NvbmNhdCdcbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGlzIGZyb20gJy4vaXMnXG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG4vKipcbiAqIEBmdW5jdGlvbiBmbGF0TWFwXG4gKiBAcGFyYW0gZm5cbiAqIEBwYXJhbSBhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZsYXRNYXAgKGZuLCBhKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGEpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gZm4oYSh4KSkoeClcbiAgICB9XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24oYS5mbGF0TWFwKSkge1xuICAgIHJldHVybiBhLmZsYXRNYXAoZm4pXG4gIH1cbiAgcmV0dXJuIGZvbGQoKGFjYywgeCkgPT4gY29uY2F0KGFjYywgZm4oeCkpLCBlbXB0eShhKSwgYSlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbVxuICpcbiAqIEBmdW5jdGlvbiBmb2xkXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiByZWNlaXZlcyA0IHZhbHVlczogdGhlIGFjY3VtdWxhdG9yLCB0aGUgaXRlbSwgdGhlIGluZGV4LCBhbmQgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgLSB0aGUgdGhlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBhIHRoZSBhcnJheSBsaWtlIGl0ZW0gdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcmV0dXJuIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWVcbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IGFycmF5Rm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5pbXBvcnQgb2JqZWN0Rm9sZCBmcm9tICcuL29iamVjdC9mb2xkJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBmb2xkIChjYiwgaW5pdCwgYSkge1xuICBjb25zdCB0eXBlTWFwID0ge1xuICAgICdPYmplY3QnOiBvYmplY3RGb2xkLFxuICAgICdBcnJheSc6IGFycmF5Rm9sZFxuICB9XG4gIHJldHVybiB0eXBlTWFwW3R5cGUoYSldKGNiLCBpbml0LCBhKVxufSlcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gaWRlbnRpY2FsXG4gKiBAZGVzY3JpcHRpb24gY2hlY2tzIGZvciBpZGVudGludGljYWwgaXRlbXNcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgaXNOYW4gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGlkZW50aWNhbCAoeCwgeSkge1xuICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgcmV0dXJuIDEgLyB4ID09PSAxIC8geVxuICB9XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISEoaXNOYW4oeCkgJiYgaXNOYW4oeSkpXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGl0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHZhbHVlIHN1cHBsaWVkIHRvIHRoZSBmdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlkZW50aXR5ICh4KSB7XG4gIHJldHVybiB4XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhZGQgfSBmcm9tICcuL251bWJlci9hZGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZEluZGV4IH0gZnJvbSAnLi9hZGRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRqdXN0IH0gZnJvbSAnLi9hZGp1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkanVzdFdpdGggfSBmcm9tICcuL2FkanVzdFdpdGgnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbCB9IGZyb20gJy4vYWxsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxQYXNzIH0gZnJvbSAnLi9hbGxQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbHdheXMgfSBmcm9tICcuL2Fsd2F5cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5kIH0gZnJvbSAnLi9hbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFueSB9IGZyb20gJy4vYW55J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbnlQYXNzIH0gZnJvbSAnLi9hbnlQYXNzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcCB9IGZyb20gJy4vYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwZXJ0dXJlIH0gZnJvbSAnLi9hcGVydHVyZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwZW5kIH0gZnJvbSAnLi9hcHBlbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5IH0gZnJvbSAnLi9hcHBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmluYXJ5IH0gZnJvbSAnLi9iaW5hcnknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJpbmQgfSBmcm9tICcuL2JpbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvdGggfSBmcm9tICcuL2Jvb2xlYW4vYm90aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcGxlbWVudCB9IGZyb20gJy4vY29tcGxlbWVudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcG9zZSB9IGZyb20gJy4vY29tcG9zZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uY2F0IH0gZnJvbSAnLi9jb25jYXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmQgfSBmcm9tICcuL2NvbmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1cnJ5IH0gZnJvbSAnLi9jdXJyeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFRvIH0gZnJvbSAnLi9kZWZhdWx0VG8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRpZmZEYXRlIH0gZnJvbSAnLi9kYXRlL2RpZmZEYXRlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkaXZpZGUgfSBmcm9tICcuL251bWJlci9kaXZpZGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVpdGhlciB9IGZyb20gJy4vbW9uYWRzL0VpdGhlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVmdCB9IGZyb20gJy4vbW9uYWRzL0xlZnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJpZ2h0IH0gZnJvbSAnLi9tb25hZHMvUmlnaHQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVtcHR5IH0gZnJvbSAnLi9lbXB0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXF1YWxzIH0gZnJvbSAnLi9lcXVhbHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGV4aXN0cyB9IGZyb20gJy4vZXhpc3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGIH0gZnJvbSAnLi9ib29sZWFuL0YnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlciB9IGZyb20gJy4vZmlsdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaW5kSW5kZXggfSBmcm9tICcuL2ZpbmRJbmRleCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyc3QgfSBmcm9tICcuL2ZpcnN0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0TWFwIH0gZnJvbSAnLi9mbGF0TWFwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb2xkIH0gZnJvbSAnLi9mb2xkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXRTdHJpbmcgfSBmcm9tICcuL3N0cmluZy9mb3JtYXRTdHJpbmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhcyB9IGZyb20gJy4vb2JqZWN0L2hhcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzSW4gfSBmcm9tICcuL29iamVjdC9oYXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWRlbnRpY2FsIH0gZnJvbSAnLi9pZGVudGljYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXMgfSBmcm9tICcuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0FycmF5IH0gZnJvbSAnLi9hcnJheS9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNCb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuL2lzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0RhdGUgfSBmcm9tICcuL2RhdGUvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1wdHkgfSBmcm9tICcuL2lzRW1wdHknXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzRnV0dXJlRGF0ZSB9IGZyb20gJy4vZGF0ZS9pc0Z1dHVyZURhdGUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTWFwIH0gZnJvbSAnLi9tYXAvaXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTmFuIH0gZnJvbSAnLi9udW1iZXIvaXNOYW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTnVsbCB9IGZyb20gJy4vbnVsbC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNOdW1iZXIgfSBmcm9tICcuL251bWJlci9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNPYmplY3QgfSBmcm9tICcuL29iamVjdC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTZXQgfSBmcm9tICcuL3NldC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNTdHJpbmcgfSBmcm9tICcuL3N0cmluZy9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNVbmRlZmluZWQgfSBmcm9tICcuL3VuZGVmaW5lZC9pcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNWYWxpZERhdGUgfSBmcm9tICcuL2RhdGUvaXNWYWxpZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSnVzdCB9IGZyb20gJy4vbW9uYWRzL0p1c3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXMgfSBmcm9tICcuL2tleXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleXNJbiB9IGZyb20gJy4vb2JqZWN0L2tleXNJbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGFzdCB9IGZyb20gJy4vbGFzdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlmdCB9IGZyb20gJy4vbGlmdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFwIH0gZnJvbSAnLi9tYXAnXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1heCB9IGZyb20gJy4vbWF4J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXliZSB9IGZyb20gJy4vbW9uYWRzL01heWJlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZSB9IGZyb20gJy4vb2JqZWN0L21lcmdlJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtaW4gfSBmcm9tICcuL21pbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXVsdGlwbHkgfSBmcm9tICcuL251bWJlci9tdWx0aXBseSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90IH0gZnJvbSAnLi9ub3QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdGhpbmcgfSBmcm9tICcuL21vbmFkcy9Ob3RoaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvbWl0IH0gZnJvbSAnLi9vYmplY3Qvb21pdCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3IgfSBmcm9tICcuL29yJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoIH0gZnJvbSAnLi9vYmplY3QvcGF0aCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGljayB9IGZyb20gJy4vb2JqZWN0L3BpY2snXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb3AgfSBmcm9tICcuL29iamVjdC9wcm9wJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWR1Y2UgfSBmcm9tICcuL3JlZHVjZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc29ydCB9IGZyb20gJy4vc29ydCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VtIH0gZnJvbSAnLi9udW1iZXIvc3VtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUIH0gZnJvbSAnLi9ib29sZWFuL1QnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRvRGF5IH0gZnJvbSAnLi9kYXRlL3RvRGF5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b0hvdXIgfSBmcm9tICcuL2RhdGUvdG9Ib3VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b01pbnV0ZXMgfSBmcm9tICcuL2RhdGUvdG9NaW51dGVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b1NlY29uZHMgfSBmcm9tICcuL2RhdGUvdG9TZWNvbmRzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cnV0aHkgfSBmcm9tICcuL3RydXRoeSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHlwZSB9IGZyb20gJy4vdHlwZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pb24gfSBmcm9tICcuL2FycmF5L3VuaW9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWx1ZXMgfSBmcm9tICcuL29iamVjdC92YWx1ZXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIHppcCB9IGZyb20gJy4vemlwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB6aXBPYmogfSBmcm9tICcuL3ppcE9iaidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgemlwV2l0aCB9IGZyb20gJy4vemlwV2l0aCdcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzXG4gKiBAZGVzY3JpcHRpb24gVmVyaWZpZXMgdGhlIHR5cGUgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKlxuICovXG5cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBpcyAoQ3RvciwgdmFsKSB7XG4gIHJldHVybiB0eXBlKHZhbCkgPT09IEN0b3Jcbn0pXG4iLCIvKipcblxuICogQGZ1bmN0aW9uIGVtcHR5XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZW1wdHkgZXF1aXZhbGVudCBvZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqL1xuaW1wb3J0IGVtcHR5IGZyb20gJy4vZW1wdHknXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuaW1wb3J0IGVxdWFscyBmcm9tICcuL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbXB0eSAoeCkge1xuICByZXR1cm4gZXhpc3RzKHgpICYmIGVxdWFscyh4LCBlbXB0eSh4KSlcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGllcmlja3gubGVuIG9uIDAxLzA0LzIwMTcuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcbmNvbnN0IGlzRnVuY3Rpb24gPSBpcygnRnVuY3Rpb24nKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0l0ZXIgKGl0ZXIpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oaXRlcltTeW1ib2wuaXRlcmF0b3JdKVxufVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYW4gSXRlcmF0b3IgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuM1xuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGFcbiAqIEByZXR1cm4ge0l0ZXJhdG9yfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBpdGVyYXRvcikge1xuICBsZXQgciA9IFtdXG4gIGZvciAobGV0IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKTsgbmV4dFZhbHVlLmRvbmUgIT09IHRydWU7IG5leHRWYWx1ZSA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgIHIucHVzaChjYWxsYmFjayhpdGVyYXRvci52YWx1ZSgpKSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUga2V5cyBvZiB0aGUgcHJvdmlkZWQgb2JqZWN0IG9yIGl0ZXJhdG9yXG4gKlxuICogQGZ1bmN0aW9uIGtleXNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRoZSBrZXlzIG9mIHRoZSBwcm92aWRlZCBvYmplY3Qgb3IgaXRlcmF0b3JcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgb2JqIC0+IFsqXVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIE9iaiBmcm9tIHpoaWNoIHRvIHRha2UgdGhlIGtleXNcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgb2JqZWN0S2V5cyBmcm9tICcuL29iamVjdC9rZXlzJ1xuaW1wb3J0IG1hcEtleXMgZnJvbSAnLi9tYXAva2V5cydcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChvYmopIHtcbiAgc3dpdGNoICh0eXBlKG9iaikpIHtcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcEtleXMob2JqKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gb2JqZWN0S2V5cyhvYmopXG4gIH1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBsYXN0XG4gKiBAcGFyYW0gW2FdXG4gKiBAcmV0dXJuIGEgfCB1bmRlZmluZWRcbiAqL1xuaW1wb3J0IGN1cnJ5MSBmcm9tICcuL19wcml2YXRlL2N1cnJ5MSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkxKGZ1bmN0aW9uIGxhc3QgKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5sZW5ndGggPyBhW2EubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWRcbn0pXG4iLCIvKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvbiBsaWZ0XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi9mb2xkJ1xuaW1wb3J0IGFwIGZyb20gJy4vYXAnXG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBsaWZ0IChmbikge1xuICBjb25zdCBsaWZ0ZWQgPSBjdXJyeTEoY3VycnkoZm4pKVxuICByZXR1cm4gY3VycnkoZnVuY3Rpb24gX2xpZnQgKCkge1xuICAgIHJldHVybiBmb2xkKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxuICB9KVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIGl0ZXJhYmxlIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb24gbWFwXG4gKiBAZGVzY3JpcHRpb24gQXV0b2N1cnJpZWQgZnVuY3Rpb24gd2hpY2ggbWFwcyBvdmVyIGFuIGl0ZXJhYmxlLlxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gYiAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheU1hcCBmcm9tICcuL2FycmF5L21hcCdcbmltcG9ydCBvYmplY3RNYXAgZnJvbSAnLi9vYmplY3QvbWFwJ1xuaW1wb3J0IG1hcE1hcCBmcm9tICcuL21hcC9tYXAnXG5pbXBvcnQgc3RyaW5nTWFwIGZyb20gJy4vc3RyaW5nL21hcCdcbmltcG9ydCBpdGVyYXRvck1hcCBmcm9tICcuL2l0ZXJhdG9yL21hcCdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcbmltcG9ydCBpc0l0ZXJhdG9yIGZyb20gJy4vaXRlcmF0b3IvaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgc3dpdGNoICh0eXBlKGEpKSB7XG4gICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiLmNhbGwodGhpcywgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgICAgfSlcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG9iamVjdE1hcChjYiwgYSlcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgcmV0dXJuIHN0cmluZ01hcChjYiwgYSlcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIG1hcE1hcChjYiwgYSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gYXJyYXlNYXAoY2IsIGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0l0ZXJhdG9yKGEpXG4gICAgICAgID8gaXRlcmF0b3JNYXAoY2IsIGEpXG4gICAgICAgIDogYXJyYXlNYXAoY2IsIGEpXG4gIH1cbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBtYXBGaWx0ZXJcbiAqIEBwcml2YXRlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcEZpbHRlciAoZm4sIG0pIHtcbiAgbGV0IHIgPSBuZXcgTWFwKClcblxuICBsZXQgaXQgPSBtLmVudHJpZXMoKVxuICBsZXQgcmVzdWx0ID0gaXQubmV4dCgpXG5cbiAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IGsgPSByZXN1bHQudmFsdWVbMF1cbiAgICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlWzFdXG4gICAgaWYgKGZuKGssIHYpKSByLnNldChrLCB2KVxuICAgIHJlc3VsdCA9IGl0Lm5leHQoKVxuICB9XG5cbiAgLy8gTGltaXRlZCBicm93c2VyIHN1cHBvcnRcbiAgLy8gbS5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gIC8vICAgaWYgKGZuKGssIHYpKSByLnNldChrLCB2KVxuICAvLyB9KVxuXG4gIC8vIGJhYmVsIHRyYW5zcGlsZSBpc3N1ZXNcbiAgLy8gZm9yIChjb25zdCBbaywgdl0gb2YgbS5lbnRyaWVzKCkpIHtcbiAgLy9cbiAgLy8gfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTWFwJylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gTWFwIGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBhLmtleXMoKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgTWFwIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge01hcH0gYVxuICogQHJldHVybiB7TWFwfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2VtcHR5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGNvbnN0IHIgPSBlbXB0eShhKVxuICBhLmZvckVhY2goKHYsIGssIG1hcCkgPT4ge1xuICAgIHIuc2V0KGssIGNiKHYsIGssIG1hcCkpXG4gIH0pXG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXN0IG9mIHRoZSAyIGFyZ3VtZW50cyBwcm92aWRlZFxuICpcbiAqIEBmdW5jdGlvbiBtYXhcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1heCAoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1pblxuICogQGRlc2MgUmV0dXJucyB0aGUgc21hbGxlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtaW4gKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gYiA6IGFcbn0pXG4iLCJpbXBvcnQgUmlnaHQgZnJvbSAnLi9SaWdodCdcbmltcG9ydCBMZWZ0IGZyb20gJy4vTGVmdCdcblxuLyoqXG4gKiBAY2xhc3MgRWl0aGVyXG4gKiBAZGVzYyBFaXRoZXIgbW9uYWRcbiAqIEBwYXJhbSB7Kn0gdmFsIC0gVmFsdWUgdG8gYmUgdmFsaWRhdGVkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IEVpdGhlci5vZihwcm9wcy5jdXN0b21lcnMpLm1hcChjb250cmFjdCA9PiBjdXN0b21lclswXSkuZ2V0T3JFbHNlKCdObyBjdXN0b21lciBmb3VuZCcpXG4gKi9cbmxldCBFaXRoZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB0aGlzLlJpZ2h0KHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgRWl0aGVyXG4gKiBAZnVuY3Rpb24gRWl0aGVyLm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgRWl0aGVyIG1vbmFkIGZyb20gdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKiBAcGFyYW0geyp9IHZhbCAtIFZhbCB0byB0dXJuIGluIHRvIGEgRWl0aGVyIG1vbmFkLCBjYW4gYmUgYSBmdW5jdGlvblxuICogQHJldHVybnMge0VpdGhlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IEVpdGhlci5vZihwcm9wcy5jdXN0b21lcnMpLm1hcChjdXN0b21lciA9PiBjdXN0b21lclswXSkuZ2V0T3JFbHNlKCdObyBjdXN0b21lciBmb3VuZCcpXG4gKi9cblxuRWl0aGVyLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRWl0aGVyKSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgRWl0aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuUmlnaHQodmFsKVxuICB9XG4gIHJldHVybiBuZXcgRWl0aGVyKHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgRWl0aGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSAtIFJldHVybnMgdGhlIHN0cmluZyAnRWl0aGVyJyBmb3IgYWxsIEVpdGhlciBvYmplY3RzXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIEVpdGhlci5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS50eXBlID09PSAnRWl0aGVyJ1xuICovXG5FaXRoZXIucHJvdG90eXBlLnR5cGUgPSAnRWl0aGVyJ1xuXG4vKipcbiAqIEBtZW1iZXJPZiBFaXRoZXJcbiAqIEBwcm9wZXJ0eSBFaXRoZXIjaXNMZWZ0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRWl0aGVyLnByb3RvdHlwZS5pc0xlZnQgPSBmYWxzZVxuXG4vKipcbiAqIEBtZW1iZXJPZiBFaXRoZXJcbiAqIEBwcm9wZXJ0eSBFaXRoZXIjaXNSaWdodFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkVpdGhlci5wcm90b3R5cGUuaXNSaWdodCA9IGZhbHNlXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJPZiBFaXRoZXJcbiAqIEBmdW5jdGlvbiBFaXRoZXIjTGVmdFxuICogQHJldHVybnMge0xlZnR9XG4gKi9cbkVpdGhlci5wcm90b3R5cGUuTGVmdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBMZWZ0KHZhbClcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlck9mIEVpdGhlclxuICogQGZ1bmN0aW9uIEVpdGhlci5MZWZ0XG4gKiBAcmV0dXJucyB7TGVmdH1cbiAqL1xuRWl0aGVyLkxlZnQgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiBuZXcgTGVmdCh2YWwpXG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJPZiBFaXRoZXJcbiAqIEBmdW5jdGlvbiBFaXRoZXIjUmlnaHRcbiAqIEByZXR1cm5zIHtSaWdodH1cbiAqL1xuRWl0aGVyLnByb3RvdHlwZS5SaWdodCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBSaWdodCh2YWwpXG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJPZiBFaXRoZXJcbiAqIEBmdW5jdGlvbiBFaXRoZXIuUmlnaHRcbiAqIEByZXR1cm5zIHtSaWdodH1cbiAqL1xuRWl0aGVyLlJpZ2h0ID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gbmV3IFJpZ2h0KHZhbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWl0aGVyXG4iLCIvKipcbiAqIEBjbGFzcyBKdXN0XG4gKiBAcGFyYW0gdmFsXG4gKiBAcmV0dXJucyB7SnVzdH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sZXQgSnVzdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQG1lbWJlck9mIEp1c3RcbiAqIEBmdW5jdGlvbiBKdXN0I2lzSnVzdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkp1c3QucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgSnVzdFxuICogQGZ1bmN0aW9uIEp1c3QjaXNOb3RoaW5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuSnVzdC5wcm90b3R5cGUuaXNOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVzdFxuIiwiLyoqXG4gKiBAY2xhc3MgTGVmdFxuICogQHBhcmFtIHZhbFxuICogQHJldHVybnMge0xlZnR9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xubGV0IExlZnQgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHRoaXMuX192YWx1ZSA9IHZhbFxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBMZWZ0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSAtIFJldHVybnMgdGhlIHN0cmluZyAnTGVmdCcgZm9yIGFsbCBFaXRoZXIgb2JqZWN0c1xuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBFaXRoZXIub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ0xlZnQnXG4gKi9cbkxlZnQucHJvdG90eXBlLnR5cGUgPSAnTGVmdCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgTGVmdFxuICogQGZ1bmN0aW9uIExlZnQjaXNMZWZ0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuTGVmdC5wcm90b3R5cGUuaXNMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBMZWZ0XG4gKiBAZnVuY3Rpb24gTGVmdCNpc1JpZ2h0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuTGVmdC5wcm90b3R5cGUuaXNSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQG1lbWJlck9mIExlZnRcbiAqIEBmdW5jdGlvbiBMZWZ0I2FwXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm5zIHtMZWZ0fVxuICovXG5MZWZ0LnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQG1lbWJlck9mIExlZnRcbiAqIEBmdW5jdGlvbiBMZWZ0I21hcFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybnMge0xlZnR9XG4gKi9cbkxlZnQucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQG1lbWJlck9mIExlZnRcbiAqIEBmdW5jdGlvbiBMZWZ0I2NoYWluXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJucyB7TGVmdH1cbiAqL1xuTGVmdC5wcm90b3R5cGUuY2hhaW4gPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBMZWZ0XG4gKiBAZnVuY3Rpb24gTGVmdCN0b1N0cmluZ1xuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuTGVmdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnRWl0aGVyLkxlZnQoJyArIHRoaXMuX192YWx1ZSArICcpJ1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBMZWZ0XG4gKiBAZnVuY3Rpb24gTGVmdCNjYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge1BsYWNlaG9sZGVyfSBfXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTGVmdC5wcm90b3R5cGUuY2F0YSA9IGZ1bmN0aW9uIChmLCBfKSB7XG4gIHJldHVybiBmKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTGVmdFxuICogQGZ1bmN0aW9uIExlZnQjZ2V0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKi9cbkxlZnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbid0IGV4dHJhY3QgdGhlIHZhbHVlIG9mIGEgTGVmdChhKS5cIilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTGVmdFxuICogQGZ1bmN0aW9uIExlZnQjZ2V0T3JFbHNlXG4gKiBAcGFyYW0geyp9IGFcbiAqIEByZXR1cm5zIHsqfVxuICovXG5MZWZ0LnByb3RvdHlwZS5nZXRPckVsc2UgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0XG4iLCJpbXBvcnQgSnVzdCBmcm9tICcuL0p1c3QnXG5pbXBvcnQgTm90aGluZyBmcm9tICcuL05vdGhpbmcnXG5cbi8qKlxuICogQGNsYXNzIE1heWJlXG4gKiBAZGVzYyBNYXliZSBtb25hZCBwcm92aWRlcyBhIHdheSB0byBzYWZlbHkgd3JhcCBudWxsIHZhbHVlc1xuICogQHBhcmFtIHsqfSB2YWwgLSBWYWx1ZSB0byBiZSB3cmFwcGVkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9IE1heWJlLm9mKHByb3BzLmN1c3RvbWVycykubWFwKGNvbnRyYWN0ID0+IGN1c3RvbWVyWzBdKS5nZXRPckVsc2UoJ05vIGN1c3RvbWVyIGZvdW5kJylcbiAqL1xubGV0IE1heWJlID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF5YmVcbiAqIEBmdW5jdGlvbiBNYXliZS5vZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1heWJlIG1vbmFkIGZyb20gdGhlIHByb3ZpZGVkIGFyZ3VtZW50XG4gKiBAcGFyYW0geyp9IHZhbCAtIFZhbCB0byB0dXJuIGluIHRvIGEgTWF5YmUgbW9uYWQsIGNhbiBiZSBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7TWF5YmV9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXliZS5vZihwcm9wcy5jdXN0b21lcnMpLm1hcChjdXN0b21lciA9PiBjdXN0b21lclswXSkuZ2V0T3JFbHNlKCdObyBjdXN0b21lciBmb3VuZCcpXG4gKi9cblxuTWF5YmUub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBNYXliZSkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1heWJlKSB7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IE1heWJlKHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF5YmVcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlIC0gUmV0dXJucyB0aGUgc3RyaW5nICdNYXliZScgZm9yIGFsbCBNYXliZSBvYmplY3RzXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1heWJlLm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnR5cGUgPT09ICdNYXliZSdcbiAqL1xuTWF5YmUucHJvdG90eXBlLnR5cGUgPSAnTWF5YmUnXG5cbi8qKlxuICogQG1lbWJlck9mIE1heWJlXG4gKiBAZnVuY3Rpb24gTWF5YmUjZ2V0T3JFbHNlXG4gKiBAZGVzYyBFdmFsdWF0ZXMgdGhlIE1heWJlIG1vbmFkIGFuZCByZXR1cm5zIGVpdGhlciB0aGUgdmFsdWUgZnJvbSB0aGUgTWF5YmUgb3IgdGhlIGRlZmF1bHQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gbiAtIERlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBNYXliZSBldmFsdWF0ZXMgdG8gdW5kZWZpbmVkIG9yIG51bGxcbiAqIEByZXR1cm5zIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBHZXQgY3VzdG9tZXIgZnJvbSBjb21wb25lbnQgcHJvcHNcbiAqIGNvbnN0IG0gPSBNYXliZS5vZihwcm9wcy5jdXN0b21lcnMpLm1hcChjdXN0b21lciA9PiBjdXN0b21lci5maWx0ZXIoY3VzdE9iaiA9PiBjdXN0T2JqLmlkID0gJ2MwMDExMTInKSkuZ2V0T3JFbHNlKFtdKVxuICogLy8gTWFwIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5XG4gKiBtLm1hcCh4ID0+IDxkaXY+Q3VzdG9tZXIgSUQ6IHt4LmlkfSA8L2Rpdj4pXG4gKlxuICovXG5NYXliZS5wcm90b3R5cGUuZ2V0T3JFbHNlID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIHRoaXMuaXNOb3RoaW5nKCkgPyBuIDogdGhpcy5fX3ZhbHVlXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1heWJlXG4gKiBAZnVuY3Rpb24gTWF5YmUjbWFwXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJucyB7TWF5YmV9XG4gKi9cbk1heWJlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZikge1xuICBpZiAodGhpcy5pc05vdGhpbmcoKSkge1xuICAgIHJldHVybiBNYXliZS5vZihudWxsKVxuICB9XG4gIHJldHVybiBNYXliZS5vZihmKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1heWJlXG4gKiBAZnVuY3Rpb24gTWF5YmUjZmxhdE1hcFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybnMge01heWJlfVxuICovXG5NYXliZS5wcm90b3R5cGUuZmxhdE1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLm1hcChmKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXliZVxuICogQGZ1bmN0aW9uIE1heWViI2FwXG4gKiBAcGFyYW0ge01heWJlfSBtXG4gKiBAcmV0dXJucyB7TWF5YmV9XG4gKi9cbk1heWJlLnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChtKSB7XG4gIHJldHVybiBNYXliZS5vZihtKS5tYXAodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXliZVxuICogQGZ1bmN0aW9uIE1heWJlI2lzTm90aGluZ1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbk1heWJlLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5fX3ZhbHVlID09IG51bGwpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1heWJlXG4gKiBAZnVuY3Rpb24gTWF5YmUjaXNKdXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuTWF5YmUucHJvdG90eXBlLmlzSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICF0aGlzLmlzTm90aGluZygpXG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJPZiBNYXliZVxuICogQGZ1bmN0aW9uIE1heWJlI05vdGhpbmdcbiAqIEByZXR1cm5zIHtOb3RoaW5nfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbk1heWJlLnByb3RvdHlwZS5Ob3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IE5vdGhpbmcoKVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyT2YgTWF5YmVcbiAqIEBmdWNudGlvbiBNYXliZSNKdXN0XG4gKiBAcmV0dXJucyB7SnVzdH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5NYXliZS5wcm90b3R5cGUuSnVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBKdXN0KHRoaXMuX3ZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXliZVxuIiwiLyoqXG4gKiBAY2xhc3MgTm90aGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmxldCBOb3RoaW5nID0gZnVuY3Rpb24gKCkge1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOb3RoaW5nXG4gKiBAZnVuY3Rpb24gTm90aGluZyNpc0p1c3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ob3RoaW5nLnByb3RvdHlwZS5pc0p1c3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOb3RoaW5nXG4gKiBAZnVuY3Rpb24gTm90aGluZyNpc05vdGhpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ob3RoaW5nLnByb3RvdHlwZS5pc05vdGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGhpbmdcbiIsIi8qKlxuICogQGNsYXNzIFJpZ2h0XG4gKiBAcGFyYW0gdmFsXG4gKiBAcmV0dXJucyB7UmlnaHR9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xubGV0IFJpZ2h0ID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9fdmFsdWUgPSB2YWxcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUmlnaHRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlIC0gUmV0dXJucyB0aGUgc3RyaW5nICdSaWdodCcgZm9yIGFsbCBFaXRoZXIgb2JqZWN0c1xuICogQHR5cGUge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBFaXRoZXIub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0udHlwZSA9PT0gJ1JpZ2h0J1xuICovXG5SaWdodC5wcm90b3R5cGUudHlwZSA9ICdSaWdodCdcblxuLyoqXG4gKiBAbWVtYmVyT2YgUmlnaHRcbiAqIEBmdW5jdGlvbiBSaWdodCNpc1JpZ2h0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLmlzUmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFJpZ2h0XG4gKiBAZnVuY3Rpb24gUmlnaHQjaXNMZWZ0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLmlzTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFJpZ2h0XG4gKiBAZnVuY3Rpb24gUmlnaHQjYXBcbiAqIEBwYXJhbSBhXG4gKiBAcmV0dXJucyB7UmlnaHR9XG4gKi9cblJpZ2h0LnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiBiLm1hcCh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFJpZ2h0XG4gKiBAZnVuY3Rpb24gUmlnaHQjbWFwXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBuZXcgUmlnaHQoZih0aGlzLl9fdmFsdWUpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBSaWdodFxuICogQGZ1bmN0aW9uIFJpZ2h0I2NoYWluXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLmNoYWluID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIGYodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBSaWdodFxuICogQGZ1bmN0aW9uIFJpZ2h0I3RvU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5SaWdodC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnRWl0aGVyLlJpZ2h0KCcgKyB0aGlzLl9fdmFsdWUgKyAnKSdcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUmlnaHRcbiAqIEBmdW5jdGlvbiBSaWdodCNjYXRhXG4gKiBAcGFyYW0ge1BsYWNlaG9sZGVyfSBfXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLmNhdGEgPSBmdW5jdGlvbiAoXywgZykge1xuICByZXR1cm4gZyh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFJpZ2h0XG4gKiBAZnVuY3Rpb24gUmlnaHQjZ2V0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuUmlnaHQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX192YWx1ZVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBSaWdodFxuICogQGZ1bmN0aW9uIFJpZ2h0I2dldE9yRWxzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybnMgeyp9XG4gKi9cblxuUmlnaHQucHJvdG90eXBlLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDMvMDIvMjAxOVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdudWxsJylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgc3VtIG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvbiBhZGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIDIgYXJndW1lbnRzXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYWRkIChhLCBiKSB7XG4gIHJldHVybiArYSArICtiXG59KVxuIiwiLyoqXG4gKlxuICpcbiAqIEBmdW5jdGlvbiBkaXZpZGVcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBkaXZpc2lvbiBvZiB0aGUgMiBhcmd1bWVudHNcbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBkaXZpZGUgKGEsIGIpIHtcbiAgcmV0dXJuICthIC8gK2Jcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ051bWJlcicpXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc05hTlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBpZiBudW1iZXIgaXMgTkFOXG5cbiAqL1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXMnXG5pbXBvcnQgYW5kIGZyb20gJy4uL2FuZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOYW4gKHgpIHtcbiAgcmV0dXJuIGFuZChpc051bWJlcih4KSwgaXNOYU4oeCkpXG59O1xuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSAyIGFyZ3VtZW50c1xuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG11bHRpcGx5IChhLCBiKSB7XG4gIHJldHVybiArYSAqICtiXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIG51bWJlcnMgaW4gYW4gYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBhXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgYWRkIGZyb20gJy4vYWRkJ1xuaW1wb3J0IGZvbGQgZnJvbSAnLi4vZm9sZCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gc3VtIChhKSB7XG4gIHJldHVybiBmb2xkKGFkZCwgMCwgYSlcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gb2JqZWN0RmlsdGVyXG4gKiBAcHJpdmF0ZVxuICpcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBvYmplY3RGaWx0ZXIgKGZuLCBvKSB7XG4gIGxldCByID0ge31cbiAgY29uc3QgayA9IGtleXMobylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZuKG9ba1tpXV0pKSByW2tbaV1dID0gb1trW2ldXVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIHtTdHJpbmd9IC0+IHtPYmplY3R9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBoYXMgKHByb3AsIG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcClcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eSwgZXZlbiBpZiBpdCBpcyBpbmhlcml0ZWRcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcge1N0cmluZ30gLT4ge09iamVjdH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGhhc0luIChwcm9wLCBvYmopIHtcbiAgcmV0dXJuIHByb3AgaW4gb2JqXG59KVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnT2JqZWN0JylcbiIsIi8qKlxuICogUmV0dXJucyB0aGUgb3duIGtleXMgb2YgYW4gb2JqZWN0IGFzIGFuIEFycmF5XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIGEgLT4gW2JdXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqIEByZXR1cm4ge0FycmF5fVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBrZXlzIChhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QoYSkpXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFsbCB0aGUga2V5cyBvZiBhbiBvYmplY3QgYXMgYW4gQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgYSAtPiBbYl1cbiAqIEBwYXJhbSB7T2JqZWN0fVxuICogQHJldHVybiB7QXJyYXl9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGtleXMgKGEpIHtcbiAgY29uc3QgciA9IFtdXG4gIGZvciAoY29uc3QgayBpbiBhKSB7XG4gICAgci5wdXNoKGspXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBvYmplY3QgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgayA9IGtleXMoYSlcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgcltrW2ldXSA9IGNiKGFba1tpXV0sIGtbaV0sIGEpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vaWRlbnRpY2FsJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4uL29iamVjdC9pcydcbmltcG9ydCBpc0FycmF5IGZyb20gJy4uL2FycmF5L2lzJ1xuaW1wb3J0IHVuaW9uIGZyb20gJy4uL2FycmF5L3VuaW9uJ1xuXG5jb25zdCBtZXJnZSA9IGN1cnJ5KChvYmpMLCBvYmpSKSA9PiB7XG4gIGxldCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpMKVxuXG4gIGlmIChpZGVudGljYWwob2JqTCwgb2JqUikpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb2JqTClcbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gb2JqUikge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9ialIsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqUltrZXldXG4gICAgY29uc3QgbmV3VmFsdWUgPSBvYmpMW2tleV1cblxuICAgIGlmIChpc09iamVjdChvbGRWYWx1ZSkgJiYgaXNPYmplY3QobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSlcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkobmV3VmFsdWUpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHVuaW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBvbGRWYWx1ZSAvLyBUT0RPOiB0aGlzIGlzIGEgcmVmZXJlbmNlLCBzaG91bGQgYmUgY2xvbmVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VcbiIsIi8qKlxuXG4gKiBlcXVhbHNcbiAqIGNoZWNrcyBmb3IgZXF1YWxpdHlcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgob2JqLCBuYW1lcykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge31cblxuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzLmluZGV4T2Yoa2V5KSA9PT0gLTFcbiAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGF0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHBhdGggKHBhdGgsIG9iaikge1xuICBsZXQgdmFsID0gb2JqXG4gIGxldCBpZHggPSAwXG4gIGxldCBwXG4gIHdoaWxlIChpZHggPCBwYXRoLmxlbmd0aCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHAgPSBwYXRoW2lkeF1cbiAgICB2YWwgPSBOdW1iZXIuaXNJbnRlZ2VyKHApXG4gICAgICA/IHAgPCAwID8gdmFsW3ZhbC5sZW5ndGggKyBwXSA6IHZhbFtwXVxuICAgICAgOiB2YWxbcF1cbiAgICBpZHggKz0gMVxuICB9XG4gIHJldHVybiB2YWxcbn0pXG4vLyBsZXQgciA9IG9ialxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGlmIChyID09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbi8vICAgciA9IHJbcGF0aFtpXV1cbi8vIH1cbi8vIHJldHVybiByXG4vLyB9KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcGlja1xuICogQGRlc2NyaXB0aW9uIHJldHVybnMgYSBuZXcgYmplY3Qgd2l0aCBvbmx5IHRoZSBwcm9wcyB0aGF0IGFyZSBwcm92aWRlZFxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgLSBBcnJheSBvZiBwcm9wZXJ0eSBuYW1lc1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSBvYmplY3QgZnJvbSB3aGljaCB0byB0YWtlIHRoZSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcGljayAocHJvcHMsIG9iaikge1xuICBjb25zdCByID0ge31cbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgcHJvcHMubGVuZ3RoKSB7XG4gICAgaWYgKHByb3BzW2ldIGluIG9iaikge1xuICAgICAgcltwcm9wc1tpXV0gPSBvYmpbcHJvcHNbaV1dXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gcHJvcFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHByb3AgKHAsIG9iaikge1xuICByZXR1cm4gb2JqW3BdXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdmFsdWVzXG4gKiBAZGVzY3JpcHRpb24gUkV0dXJucyBhIGxpc3Qgb2YgdmFsdWVzIHRha2VuIGZyb20gYW4gb2JqZWN0cyBvd24gcHJvcGVydGllc1xuICogQHBhcmFtIHtvYmplY3R9IC0gb2JqIFRoZSBvYmplY3QgZnJvbSB3aGljaCB0byB0YWtlIHRoZSB2YWx1ZXNcbiAqIEByZXR1cm4ge2FycmF5fVxuICpcbiAqKi9cbmltcG9ydCBjdXJyeTEgZnJvbSAnLi4vX3ByaXZhdGUvY3VycnkxJ1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdmFsdWVzIChvYmopIHtcbiAgY29uc3QgayA9IGtleXMob2JqKVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgY29uc3QgciA9IFtdXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGwpIHtcbiAgICByW2ldID0gb2JqW2tbaV1dXG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBvclxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgdHJ1ZSBpZiBvbmUgb3IgdGhlIG90aGVyIGlzIHRydWVcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG9yICh4LCB5KSB7XG4gIHJldHVybiB4IHx8IHlcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbSwgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmF0b3JcbiAqIFRoZSBpbml0aWFsIHZhbHVlIGlzIHRha2VuIGZyb20gdGhlIGl0ZXJhdG9yLlxuICogUmVkdWNlIHdvcmtzIG9ubHkgb24gQXJyYXlzIGFuZCByZXR1cm5zIGEgdmFsdWVvZiB0aGUgdHlwZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgQXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVkdWNlXG4gKiBAZGVzYyBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW0sIHN0YXJ0aW5nIGZyb20gdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGl0ZXJhdG9yXG4gKiBAc2luY2UgdjEuMC40XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgaXRlcmF0b3IgdG8gYXBwbHkgdGhlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICcuL2FycmF5L2ZvbGQnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHJlZHVjZSAoY2IsIGEpIHtcbiAgY29uc3QgYXJyID0gYS5zbGljZSgpXG4gIGNvbnN0IGluaXQgPSBhcnIuc2hpZnQoKVxuICByZXR1cm4gZm9sZChjYiwgaW5pdCwgYXJyKVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU2V0JylcbiIsIi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGxpc3QsIHNvcnRlZCBhY2NvcmRpbmcgdG8gdGhlIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jIHNvcnRcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXAgLSBBIHNvcnRpbmcgZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBUaGUgbGlzdCB0byBzb3J0XG4gKiBAcmV0dXJuIHtBcnJheX0gYSBuZXcgYXJyYXkgd2l0aCBpdHMgZWxlbWVudHMgc29ydGVkIGJ5IHRoZSBjb21wIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIGNvbnN0IGRpZmYgPSBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfTtcbiAqICAgICAgc29ydChkaWZmLCBbNCwyLDcsNV0pOyAvLz0+IFsyLCA0LCA1LCA3XVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gc29ydCAoY29tcCwgYSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwgMCkuc29ydChjb21wKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBzdHJpbmdDb25jYXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHsgLy8gdXNlIGZ1bmN0aW9uKCksIGFycm93IGZ1bmN0aW9uIGRvZXNuJ3QgYmluZCBhcmd1bWVudHNcbiAgcmV0dXJuIFN0cmluZyhhKSArIFN0cmluZyhiKVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAyNi8wMy8yMDE3LlxuICovXG5pbXBvcnQgdG9BcnJheSBmcm9tICcuLi9hcnJheS90bydcbmltcG9ydCBub3QgZnJvbSAnLi4vbm90J1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcgKHN0cikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICBsZXQgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKVxuXG4gIGFyZ3Muc2hpZnQoKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaCwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIG5vdChpcygnVW5kZWZpbmVkJywgYXJnc1tpZHhdKSkgPyBhcmdzW2lkeF0gOiBtYXRjaFxuICB9KVxufVxuIiwiLyoqXG5cbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnU3RyaW5nJylcbiIsIi8qKlxuICogTWFwcyBvdmVyIGEgc3RyaW5nIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBhXG4gKiBAcmV0dXJuIHtJdGVyYWJsZX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBhLmxlbmd0aFxuICBsZXQgciA9ICcnXG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgciArPSBjYihhLmNoYXJBdChpKSwgaSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIHRydXRoeVxuICovXG5pbXBvcnQgZXhpc3RzIGZyb20gJy4vZXhpc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cnV0aHkgKHgpIHtcbiAgcmV0dXJuICh4ICE9PSBmYWxzZSkgJiYgZXhpc3RzKHgpXG59O1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDMvMDIvMjAxOVxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCd1bmRlZmluZWQnKVxuIiwiLyoqXG5cbiAqIHppcFxuICpcbiAqIEBmdW5jdGlvbiB6aXBcbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgemlwV2l0aCBmcm9tICcuL3ppcFdpdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIHppcCAoYSwgYikge1xuICByZXR1cm4gemlwV2l0aChmdW5jdGlvbiBfemlwV2l0aCAoeCwgeSkgeyByZXR1cm4gW3gsIHldIH0sIGEsIGIpXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbi8qKlxuICogQGZ1bmN0aW9uIHppcE9ialxuICogQHBhcmFtIHthcnJheX0gYVxuICogQHBhcmFtIHthcnJheX0gYlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiB6aXBPYmogKGEsIGIpIHtcbiAgdmFyIGkgPSAwXG4gIHZhciBsID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICB2YXIgciA9IHt9XG4gIHdoaWxlIChpIDwgbCkge1xuICAgIHJbYVtpXV0gPSBiW2ldXG4gICAgaSArPSAxXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcblxuICogemlwV2l0aFxuICpcbiAqICBAZnVuY3Rpb24gemlwV2l0aFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gemlwV2l0aCAoY2IsIGEsIGIpIHtcbiAgY29uc3QgYXJyID0gW11cbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICBsZXQgaSA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyLnB1c2goY2IoYVtpXSwgYltpXSkpXG4gIH1cbiAgcmV0dXJuIGFyclxufSlcbiIsIi8qKlxuICogQGNsYXNzIEFjdGl2YXRpb25GdW5jdGlvblxuICogQHBhcmFtIGZ1bmNcbiAqIEBwYXJhbSBkZnVuY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmF0aW9uRnVuY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZnVuYywgZGZ1bmMpIHtcbiAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgdGhpcy5kZnVuYyA9IGRmdW5jXG4gIH1cbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnQGFzdHVhbmF4L2Z1bm1hdHJpeCdcbmltcG9ydCBlbnRyb3B5IGZyb20gJy4vdXRpbC9lbnRyb3B5J1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKGNvbCwgdmFsdWUsIGxlZnQsIHJpZ2h0LCByZXN1bHRzKSB7XG4gICAgdGhpcy5jb2wgPSBjb2wgfHwgLTFcbiAgICB0aGlzLnZhbHVlID0gbnVsbFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHRcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzIHx8IFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjaXNpb25UcmVlIHtcbiAgY29uc3RydWN0b3IgKGRhdGEsIGV2YWxGdW5jdGlvbiA9IGVudHJvcHkpIHtcbiAgICB0aGlzLmRhdGEgPSBNYXRyaXgub2YoZGF0YSlcbiAgICB0aGlzLmV2YWxGdW5jdGlvbiA9IGV2YWxGdW5jdGlvblxuICB9XG59XG5cbkRlY2lzaW9uVHJlZS5wcm90b3R5cGUuZ2V0Q29sdW1uID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIHJldHVybiB0aGlzLmRhdGEubWFwKHggPT4geFtpbmRleF0pXG59XG5cbkRlY2lzaW9uVHJlZS5wcm90b3R5cGUuc3BsaXQgPSBmdW5jdGlvbiAoZGF0YSwgbSwgbikge1xuICBsZXQgc3BsaXR0aW5nRnVuY3Rpb25cbiAgLy8gICBzcGxpdHRpbmdGdW5jdGlvbiA9IE5vbmVcbiAgaWYgKGlzTmFOKG0pIHx8IGlzTmFOKG4pKSB7XG4gICAgLy8gc3RyaW5nc1xuICAgIHNwbGl0dGluZ0Z1bmN0aW9uID0gcm93ID0+IHJvd1ttXSA9PT0gblxuICB9IGVsc2Uge1xuICAgIC8vIG51bWJlcnNcbiAgICBzcGxpdHRpbmdGdW5jdGlvbiA9IHJvdyA9PiByb3dbbV0gPj0gblxuICB9XG4gIGNvbnN0IGxlZnQgPSBkYXRhLmZvbGQoKGFjYywgeCkgPT4ge1xuICAgIGlmIChzcGxpdHRpbmdGdW5jdGlvbih4KSkge1xuICAgICAgYWNjLnB1c2goeClcbiAgICAgIHJldHVybiBhY2NcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJpZ2h0ID0gZGF0YS5mb2xkKChhY2MsIHgpID0+IHtcbiAgICBpZiAoIXNwbGl0dGluZ0Z1bmN0aW9uKHgpKSB7XG4gICAgICBhY2MucHVzaCh4KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gW2xlZnQsIHJpZ2h0XVxufVxuXG5EZWNpc2lvblRyZWUucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24gKGRhdGEgPSB0aGlzLmRhdGEpIHtcbiAgaWYgKHRoaXMuZGF0YS5nZXRSb3dzKCkgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IE5vZGUoKVxuICB9XG4gIGNvbnN0IHNjb3JlID0gdGhpcy5ldmFsRnVuY3Rpb24uZnVuYyhkYXRhKSAvLyBNYXRyaXhcblxuICBsZXQgYmVzdEdhaW4gPSAwLjBcbiAgbGV0IGJlc3RBdHRyaWJ1dGUgPSBbXVxuICBsZXQgYmVzdFNldHMgPSBbXVxuXG4gIGNvbnN0IGNvbHVtbkNvdW50ID0gdGhpcy5kYXRhLmdldENvbHMoKSAtIDEgLy8gcmVtb3ZlIGxhc3QgY2VsbCA+PiBkZXBlbmRhbnQgdmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyArK2kpIHtcbiAgICBjb25zdCBjb2x1bW5WYWx1ZXMgPSB0aGlzLmdldENvbHVtbihpKS50b0FycmF5KClcbiAgICBjb25zb2xlLnRhYmxlKGNvbHVtblZhbHVlcylcbiAgICBjb2x1bW5WYWx1ZXMuZm9yRWFjaCgodmFsdWUsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBjb25zdCBtYXRyaXhTcGxpdCA9IHRoaXMuc3BsaXQoaSwgdmFsdWUpXG4gICAgICBjb25zdCBwID0gbWF0cml4U3BsaXRbMF0uZ2V0Um93cygpIC8gdGhpcy5kYXRhLmdldFJvd3MoKVxuICAgICAgY29uc3QgZ2FpbiA9IHNjb3JlIC0gKHAgKiB0aGlzLmV2YWxGdW5jdGlvbihtYXRyaXhTcGxpdFswXSkpIC0gKCgxIC0gcCkgKiB0aGlzLmV2YWxGdW5jdGlvbihtYXRyaXhTcGxpdFswXSkpXG4gICAgICBpZiAoZ2FpbiA+IGJlc3RHYWluICYmIG1hdHJpeFNwbGl0Lmxlbmd0aCA+IDAgJiYgbWF0cml4U3BsaXQubGVuZ3RoID4gMCkge1xuICAgICAgICBiZXN0R2FpbiA9IGdhaW5cbiAgICAgICAgYmVzdEF0dHJpYnV0ZSA9IFtpLCBjb2x1bW5WYWx1ZXNbaWR4XV1cbiAgICAgICAgYmVzdFNldHMgPSBtYXRyaXhTcGxpdFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpZiAoYmVzdEdhaW4gPiAwKSB7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMudHJhaW4oYmVzdFNldHNbMF0pXG4gICAgY29uc3QgcmlnaHQgPSB0aGlzLnRyYWluKGJlc3RTZXRzWzFdKVxuICAgIHJldHVybiBuZXcgTm9kZShbXSwgYmVzdEF0dHJpYnV0ZVswXSwgYmVzdEF0dHJpYnV0ZVsxXSwgbGVmdCwgcmlnaHQpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMuY2xhc3NlcygpKVxuICB9XG59XG5cbkRlY2lzaW9uVHJlZS5wcm90b3R5cGUucHJlZGljdCA9IGZ1bmN0aW9uIHByZWRpY3QgKCkge1xuXG59XG4iLCIvKipcbiAqIEBjbGFzcyBJbXB1cml0eVxuICogQHBhcmFtIGZ1bmNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wdXJpdHkge1xuICBjb25zdHJ1Y3RvciAoZnVuYykge1xuICAgIHRoaXMuZnVuYyA9IGZ1bmNcbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICdAYXN0dWFuYXgvZnVubWF0cml4J1xuaW1wb3J0IHNpZ21vaWQgZnJvbSAnLi91dGlsL3NpZ21vaWQnXG5cbi8qKlxuICogQGNsYXNzIE5ldXJhbE5ldHdvcmtcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnB1dE5vZGVzXG4gKiBAcGFyYW0ge05tYmVyfSBoaWRkZW5Ob2Rlc1xuICogQHBhcmFtIHtOdW1iZXJ9IG91dHB1dE5vZGVzXG4gKi9cbmNsYXNzIE5ldXJhbE5ldHdvcmsge1xuICBjb25zdHJ1Y3RvciAoLi4udmFsdWVzKSB7XG4gICAgW3RoaXMuaW5wdXROb2RlcywgdGhpcy5oaWRkZW5Ob2RlcywgdGhpcy5vdXRwdXROb2Rlc10gPSB2YWx1ZXNcblxuICAgIGNvbnN0IGYgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMVxuICAgIHRoaXMud2VpZ2h0c0loID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLmhpZGRlbk5vZGVzLCB0aGlzLmlucHV0Tm9kZXMpXG4gICAgdGhpcy53ZWlnaHRzSG8gPSBNYXRyaXgucmFuZG9tKGYsIHRoaXMub3V0cHV0Tm9kZXMsIHRoaXMuaGlkZGVuTm9kZXMpXG5cbiAgICB0aGlzLmJpYXNIID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLmhpZGRlbk5vZGVzLCAxKVxuICAgIHRoaXMuYmlhc08gPSBNYXRyaXgucmFuZG9tKGYsIHRoaXMub3V0cHV0Tm9kZXMsIDEpXG5cbiAgICB0aGlzLnNldEFjdGl2YXRpb25GdW5jdGlvbigpXG4gICAgdGhpcy5zZXRMZWFybmluZ1JhdGUoKVxuXG4gICAgdGhpcy50eXBlID0gJ05ldXJhbE5ldHdvcmsnXG4gIH1cbn1cbi8qKlxuICogQG1lbWJlck9mIE5ldXJhbE5ldHdvcmtcbiAqIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3NldEFjdGl2YXRpb25GdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICovXG5OZXVyYWxOZXR3b3JrLnByb3RvdHlwZS5zZXRBY3RpdmF0aW9uRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYyA9IHNpZ21vaWQpIHtcbiAgdGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24gPSBmdW5jXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE5ldXJhbE5ldHdvcmtcbiAqIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3NldExlYXJuaW5nUmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlYXJuaW5nUmF0ZVxuICovXG5OZXVyYWxOZXR3b3JrLnByb3RvdHlwZS5zZXRMZWFybmluZ1JhdGUgPSBmdW5jdGlvbiAobGVhcm5pbmdSYXRlID0gMC4xKSB7XG4gIHRoaXMubGVhcm5pbmdSYXRlID0gbGVhcm5pbmdSYXRlXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE5ldXJhbE5ldHdvcmtcbiAqIEBmdW5jdGlvbiBOZXVyYWxOZXR3b3JrI3ByZWRpY3RcbiAqIEBwYXJhbSB7QXJyYXl9IGlucHV0QXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUucHJlZGljdCA9IGZ1bmN0aW9uIChpbnB1dEFycmF5KSB7XG4gIC8vIEdlbmVyYXRpbmcgdGhlIEhpZGRlbiBPdXRwdXRzXG4gIGxldCBpbnB1dHMgPSBNYXRyaXguZnJvbUFycmF5KGlucHV0QXJyYXkpXG4gIGxldCBoaWRkZW4gPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c0loLCBpbnB1dHMpXG4gIGhpZGRlbiA9IE1hdHJpeC5vZihoaWRkZW4pLmFkZCh0aGlzLmJpYXNIKVxuICAvLyBhY3RpdmF0aW9uIGZ1bmN0aW9uIVxuICBoaWRkZW4gPSBoaWRkZW4ubWFwKHJvdyA9PiByb3cubWFwKHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uLmZ1bmMpKVxuXG4gIC8vIEdlbmVyYXRpbmcgdGhlIG91dHB1dCdzIG91dHB1dCFcbiAgbGV0IG91dHB1dCA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzSG8sIGhpZGRlbilcbiAgb3V0cHV0ID0gTWF0cml4Lm9mKG91dHB1dCkuYWRkKHRoaXMuYmlhc08pXG4gIG91dHB1dCA9IG91dHB1dC5tYXAocm93ID0+IHJvdy5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZnVuYykpXG4gIC8vIFNlbmRpbmcgYmFjayB0byB0aGUgY2FsbGVyIVxuICByZXR1cm4gb3V0cHV0LnRvQXJyYXkoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayN0cmFpblxuICogQHBhcmFtIHtBcnJheX0gaW5wdXRBcnJheVxuICogQHBhcmFtIHtBcnJheX0gdGFyZ2V0QXJyYXlcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUudHJhaW4gPSBmdW5jdGlvbiAoaW5wdXRBcnJheSwgdGFyZ2V0QXJyYXkpIHtcbiAgLy8gR2VuZXJhdGluZyB0aGUgSGlkZGVuIE91dHB1dHNcbiAgbGV0IGlucHV0cyA9IE1hdHJpeC5mcm9tQXJyYXkoaW5wdXRBcnJheSlcbiAgbGV0IGhpZGRlbiA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzSWgsIGlucHV0cylcblxuICBoaWRkZW4gPSBNYXRyaXgub2YoaGlkZGVuKS5hZGQodGhpcy5iaWFzSClcbiAgLy8gYWN0aXZhdGlvbiBmdW5jdGlvbiFcbiAgaGlkZGVuID0gaGlkZGVuLm1hcChyb3cgPT4gcm93Lm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5mdW5jKSlcblxuICAvLyBHZW5lcmF0aW5nIHRoZSBvdXRwdXQncyBvdXRwdXQhXG4gIGxldCBvdXRwdXRzID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNIbywgaGlkZGVuKVxuICBvdXRwdXRzID0gTWF0cml4Lm9mKG91dHB1dHMpLmFkZCh0aGlzLmJpYXNPKVxuICBvdXRwdXRzID0gb3V0cHV0cy5tYXAocm93ID0+IHJvdy5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZnVuYykpXG5cbiAgLy8gQ29udmVydCBhcnJheSB0byBtYXRyaXggb2JqZWN0XG4gIGxldCB0YXJnZXRzID0gTWF0cml4LmZyb21BcnJheSh0YXJnZXRBcnJheSlcblxuICAvLyBDYWxjdWxhdGUgdGhlIGVycm9yXG4gIC8vIEVSUk9SID0gVEFSR0VUUyAtIE9VVFBVVFNcbiAgbGV0IG91dHB1dEVycm9ycyA9IE1hdHJpeC5vZih0YXJnZXRzKS5zdWJ0cmFjdChvdXRwdXRzKVxuXG4gIC8vIGxldCBncmFkaWVudCA9IG91dHB1dHMgKiAoMSAtIG91dHB1dHMpO1xuICAvLyBDYWxjdWxhdGUgZ3JhZGllbnRcbiAgbGV0IGdyYWRpZW50cyA9IG91dHB1dHMubWFwKHJvdyA9PiByb3cubWFwKHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uLmRmdW5jKSlcbiAgZ3JhZGllbnRzID0gZ3JhZGllbnRzLm11bHRpcGx5KG91dHB1dEVycm9ycylcbiAgZ3JhZGllbnRzID0gZ3JhZGllbnRzLm11bHRpcGx5KHRoaXMubGVhcm5pbmdSYXRlKVxuXG4gIC8vIENhbGN1bGF0ZSBkZWx0YXNcbiAgbGV0IGhpZGRlblQgPSBNYXRyaXgudHJhbnNwb3NlKGhpZGRlbilcbiAgbGV0IHdlaWdodEhvRGVsdGFzID0gTWF0cml4LmRvdChncmFkaWVudHMsIGhpZGRlblQpXG5cbiAgLy8gQWRqdXN0IHRoZSB3ZWlnaHRzIGJ5IGRlbHRhc1xuICB0aGlzLndlaWdodHNIbyA9IE1hdHJpeC5vZih0aGlzLndlaWdodHNIbykuYWRkKHdlaWdodEhvRGVsdGFzKVxuXG4gIC8vIEFkanVzdCB0aGUgYmlhcyBieSBpdHMgZGVsdGFzICh3aGljaCBpcyBqdXN0IHRoZSBncmFkaWVudHMpXG4gIHRoaXMuYmlhc08gPSBNYXRyaXgub2YodGhpcy5iaWFzTykuYWRkKGdyYWRpZW50cylcblxuICAvLyBDYWxjdWxhdGUgdGhlIGhpZGRlbiBsYXllciBlcnJvcnNcbiAgbGV0IHdob1QgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMud2VpZ2h0c0hvKVxuICBsZXQgaGlkZGVuRXJyb3JzID0gTWF0cml4LmRvdCh3aG9ULCBvdXRwdXRFcnJvcnMpXG5cbiAgLy8gQ2FsY3VsYXRlIGhpZGRlbiBncmFkaWVudFxuICBsZXQgaGlkZGVuR3JhZGllbnQgPSBNYXRyaXgub2YoaGlkZGVuKVxuICAgIC5tYXAocm93ID0+IHJvdy5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZGZ1bmMpKVxuICAgIC5tdWx0aXBseShoaWRkZW5FcnJvcnMpXG4gICAgLm11bHRpcGx5KHRoaXMubGVhcm5pbmdSYXRlKVxuXG4gIC8vIENhbGN1YXRlIGlucHV0LT5oaWRkZW4gZGVsdGFzXG4gIGxldCBpbnB1dHNUID0gTWF0cml4LnRyYW5zcG9zZShpbnB1dHMpXG5cbiAgbGV0IHdlaWdodEloRGVsdGFzID0gTWF0cml4LmRvdChoaWRkZW5HcmFkaWVudCwgaW5wdXRzVClcblxuICB0aGlzLndlaWdodHNJaCA9IE1hdHJpeC5vZih0aGlzLndlaWdodHNJaCkuYWRkKHdlaWdodEloRGVsdGFzKVxuICAvLyBBZGp1c3QgdGhlIGJpYXMgYnkgaXRzIGRlbHRhcyAod2hpY2ggaXMganVzdCB0aGUgZ3JhZGllbnRzKVxuICB0aGlzLmJpYXNIID0gTWF0cml4Lm9mKHRoaXMuYmlhc0gpLmFkZChoaWRkZW5HcmFkaWVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV1cmFsTmV0d29ya1xuIiwiLyoqXG4gKiBAY2xhc3MgUGVyY2VwdHJvblxuICogQGNsYXNzZGVzYyBQZXJjZXB0cm9uIHRvIHRyYWluIGFuZCBwcmVkaWN0XG4gKiBAc2VlIG9mXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgUGVyY2VwdHJvbi5vZihbMC4yMzY1Njk4LCAwLjQ1Njc4OTcsIDAuOTU5ODk4OTgsIC0wLjQ1Nzg3ODc4N10pXG4gKlxuICovXG5sZXQgUGVyY2VwdHJvbiA9IGZ1bmN0aW9uICh3ZWlnaHRzKSB7XG4gIHRoaXMud2VpZ2h0cyA9IHdlaWdodHMgfHwgW11cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIFBlcmNlcHRyb24ub2ZcbiAqIEBkZXNjIENyZWF0ZXMgYSBQZXJjZXB0cm9uIG9iamVjdFxuICogQHBhcmFtIHdlaWdodHMge2FycmF5fSBXZWlnaHRzIGZvciBwcmVkaWN0aW5nXG4gKiBAcmV0dXJucyB7UGVyY2VwdHJvbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3Qgd2VpZ2h0cyA9IFswLjEyMzQ1NiwgMC40NTg3ODksIDAuOTk4NzQ1NF1cbiAqIGNvbnN0IG0gPSAgUGVyY2VwdHJvbi5vZih3ZWlnaHRzKVxuICpcbiAqL1xuUGVyY2VwdHJvbi5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFBlcmNlcHRyb24pIHJldHVybiB2YWxcbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQZXJjZXB0cm9uKSB7XG4gICAgdGhpcy53ZWlnaHRzID0gdmFsXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICByZXR1cm4gbmV3IFBlcmNlcHRyb24odmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5QZXJjZXB0cm9uLnByb3RvdHlwZS50eXBlID0gJ1BlcmNlcHRyb24nXG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEBmdW5jdGlvbiBQZXJjZXB0cm9uI3ByZWRpY3RcbiAqIEBwYXJhbSByb3cge0FycmF5fSBBcnJheSBvZiB2YWx1ZXMgdG8gcHJlZGljdFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgUGVyY2VwdHJvbi5vZigpXG4gKiBjb25zdCB0cmFpbiAgPSBbLi4uXSAvLyBkYXRhc2V0OiBbWzAsMSwyXSwgWzEsMiwzXV1cbiAqIG0udHJhaW4odHJhaW4sIDAuMSwgMTAwMDApXG4gKiBtLnByZWRpY3QoWzEsMiwxXSkgLy8gcmV0dXJucyAxIG9yIDBcbiAqL1xuUGVyY2VwdHJvbi5wcm90b3R5cGUucHJlZGljdCA9IGZ1bmN0aW9uIChyb3cpIHtcbiAgdmFyIGFjdGl2YXRpb24gPSB0aGlzLndlaWdodHNbMF1cbiAgcm93LmZvckVhY2goKHgsIGkpID0+IHtcbiAgICBhY3RpdmF0aW9uICs9IHRoaXMud2VpZ2h0c1tpICsgMV0gKiB4XG4gIH0pXG4gIHJldHVybiBhY3RpdmF0aW9uID49IDAgPyAxIDogMFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAZnVuY3Rpb24gUGVyY2VwdHJvbiN0cmFpblxuICogQHBhcmFtIHRyYWluIHtBcnJheX0gRGF0YXNldCB0byB0cmFpbiB0aGUgcHJlY2VwdHJvblxuICogQHBhcmFtIGxSYXRlIHtOdW1iZXJ9IFNldCB0aGUgbGVhcm5pbmcgcmF0ZSBvZiB0aGUgcGVyY2VwdHJvblxuICogQHBhcmFtIG5FcG9jaCB7TnVtYmVyfSBTZXQgdGhlIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHRyYWluIHRoZSBwZXJjZXB0cm9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgUGVyY2VwdHJvbi5vZigpXG4gKiBjb25zdCB0cmFpbiAgPSBbLi4uXSAvLyBkYXRhc2V0OiBbWzAsMSwyXSwgWzEsMiwzXV1cbiAqIG0udHJhaW4odHJhaW4sIDAuMSwgMTAwMDApXG4gKiBtLndlaWdodHMgPSBbMC4yMTMxMzEsIC0wLjQ1NDY0LCAwLjc4OTc5N11cbiAqXG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24gKHRyYWluLCBsUmF0ZSwgbkVwb2NoKSB7XG4gIHRoaXMud2VpZ2h0cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRyYWluWzBdLmxlbmd0aCkpLm1hcCh4ID0+IDApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbkVwb2NoOyBpKyspIHtcbiAgICB0cmFpbi5mb3JFYWNoKCh4LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0geC5zbGljZSgtMSlbMF1cbiAgICAgIGNvbnN0IHJvdyA9IHguc2xpY2UoMCwgLTEpXG4gICAgICBjb25zdCBwcmVkaWN0aW9uID0gdGhpcy5wcmVkaWN0KHJvdylcbiAgICAgIGNvbnN0IGVycm9yID0gZXhwZWN0ZWQgLSBwcmVkaWN0aW9uXG4gICAgICByb3cuZm9yRWFjaCgoeSwgaikgPT4ge1xuICAgICAgICB0aGlzLndlaWdodHNbaiArIDFdICs9IGxSYXRlICogZXJyb3IgKiB5XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VwdHJvblxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZXB0cm9uIH0gZnJvbSAnLi9QZXJjZXB0cm9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZXVyYWxOZXR3b3JrIH0gZnJvbSAnLi9OZXVyYWxOZXR3b3JrJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3RpdmF0aW9uRnVuY3Rpb24gfSBmcm9tICcuL0FjdGl2YXRpb25GdW5jdGlvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2lnbW9pZCB9IGZyb20gJy4vdXRpbC9zaWdtb2lkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0YW5oIH0gZnJvbSAnLi91dGlsL3RhbmgnXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW50cm9weSB9IGZyb20gJy4vdXRpbC9lbnRyb3B5J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWNpc2lvblRyZWUgfSBmcm9tICcuL0RlY2lzaW9uVHJlZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW1wdXJpdHkgfSBmcm9tICcuL0ltcHVyaXR5J1xuIiwiaW1wb3J0IEltcHVyaXR5IGZyb20gJy4uL0ltcHVyaXR5J1xuaW1wb3J0IHsgYWRkLCBmb2xkIH0gZnJvbSAnZnVuLmpzJ1xuaW1wb3J0IG1hcFJlZHVjZSBmcm9tICcuL21hcFJlZHVjZSdcblxuY29uc3QgdW5pcXNDb3VudCA9IGZvbGQoKGFjYywgdmFsKSA9PiB7XG4gIGFjY1t2YWxdID0gYWNjW3ZhbF0gPT09IHVuZGVmaW5lZCA/IDEgOiBhY2NbdmFsXSArPSAxXG4gIHJldHVybiBhY2Ncbn0sIHt9KVxuXG5jb25zdCBmcmVxdWVuY2llcyA9IHRvdGFsID0+IG9iaiA9PiBmb2xkKChhY2MsIHkpID0+IHtcbiAgYWNjLnB1c2goeSAvIHRvdGFsKVxuICByZXR1cm4gYWNjXG59KShbXSkob2JqKVxuXG4vKipcbiAqIEBmdW5jdGlvbiBlbXRyb3B5XG4gKiBAdHlwZSB7SW1wdXJpdHl9XG4gKi9cbmNvbnN0IGVudHJvcHkgPSBuZXcgSW1wdXJpdHkoXG4gIG1hdHJpeCA9PiB7XG4gICAgLy8gVE9ETyBjaGVjayBpbnN0YW5jZW9mIE1hdHJpeFxuICAgIGNvbnN0IGFyciA9IG1hdHJpeC5fX3ZhbHVlLm1hcChyb3cgPT4gcm93W3Jvdy5sZW5ndGggLSAxXSlcbiAgICBjb25zdCBjb3VudGVkQ2xhc3NlcyA9IHVuaXFzQ291bnQoYXJyKVxuICAgIGNvbnN0IG5yUm93cyA9IG1hdHJpeC5nZXRSb3dzKClcbiAgICBjb25zdCBjbGFzc0ZyZXF1ZW5jaWVzID0gZnJlcXVlbmNpZXMobnJSb3dzKShjb3VudGVkQ2xhc3NlcylcblxuICAgIHJldHVybiBmb2xkKG1hcFJlZHVjZSh4ID0+IC14ICogTWF0aC5sb2cyKHgpLCBhZGQpLCAwLCBjbGFzc0ZyZXF1ZW5jaWVzKVxuICB9XG4pXG5leHBvcnQgZGVmYXVsdCBlbnRyb3B5XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gJ2Z1bi5qcydcblxuY29uc3QgbWFwUmVkdWNlID0gY3VycnkoKG0sIHIpID0+ICh4LCB5KSA9PiByKHgsIG0oeSkpKVxuZXhwb3J0IGRlZmF1bHQgbWFwUmVkdWNlXG4iLCJpbXBvcnQgQWN0aXZhdGlvbkZ1bmN0aW9uIGZyb20gJy4uL0FjdGl2YXRpb25GdW5jdGlvbidcblxuLyoqXG4gKiBAZnVuY3Rpb24gc2lnbW9pZFxuICogQHR5cGUge0FjdGl2YXRpb25GdW5jdGlvbn1cbiAqL1xuY29uc3Qgc2lnbW9pZCA9IG5ldyBBY3RpdmF0aW9uRnVuY3Rpb24oXG4gIHggPT4gMSAvICgxICsgTWF0aC5leHAoLXgpKSxcbiAgeSA9PiB5ICogKDEgLSB5KVxuKVxuZXhwb3J0IGRlZmF1bHQgc2lnbW9pZFxuIiwiaW1wb3J0IEFjdGl2YXRpb25GdW5jdGlvbiBmcm9tICcuLi9BY3RpdmF0aW9uRnVuY3Rpb24nXG5cbi8qKlxuICogQGZ1bmN0aW9uIHRhbmhcbiAqIEB0eXBlIHtBY3RpdmF0aW9uRnVuY3Rpb259XG4gKi9cbmNvbnN0IHRhbmggPSBuZXcgQWN0aXZhdGlvbkZ1bmN0aW9uKFxuICB4ID0+IE1hdGgudGFuaCh4KSxcbiAgeSA9PiAxIC0gKHkgKiB5KVxuKVxuZXhwb3J0IGRlZmF1bHQgdGFuaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==