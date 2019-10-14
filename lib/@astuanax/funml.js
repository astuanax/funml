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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvbWF0cml4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9AYXN0dWFuYXgvZnVubWF0cml4L3NyYy91dGlsL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvQGFzdHVhbmF4L2Z1bm1hdHJpeC9zcmMvdXRpbC9kb3QuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvcm91bmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvc29sdmUuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL0Bhc3R1YW5heC9mdW5tYXRyaXgvc3JjL3V0aWwvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL19wcml2YXRlL2N1cnJ5MS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hbmQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvYXJyYXkvY29uY2F0LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9hcnJheS9mb2xkLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2FycmF5L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9ib29sZWFuL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9jdXJyeS5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9kYXRlL2lzLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VtcHR5LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9pZGVudGljYWwuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvaXRlcmF0b3IvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9tYXAvbWFwLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL21heC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvbm90LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL25vZGVfbW9kdWxlcy9mdW4uanMvc3JjL251bWJlci9pcy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9udW1iZXIvaXNOYW4uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2VxdWFscy5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvZm9sZC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vYmplY3QvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9vci5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy9zdHJpbmcvaXMuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vbm9kZV9tb2R1bGVzL2Z1bi5qcy9zcmMvc3RyaW5nL21hcC5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9ub2RlX21vZHVsZXMvZnVuLmpzL3NyYy90eXBlLmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy9BY3RpdmF0aW9uRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL05ldXJhbE5ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL1BlcmNlcHRyb24uanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC8uL3NyYy91dGlsL3NpZ21vaWQuanMiLCJ3ZWJwYWNrOi8vQGFzdHVhbmF4L2Z1bm1sLy4vc3JjL3V0aWwvdGFuaC5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uRnVuY3Rpb24iLCJmdW5jIiwiZGZ1bmMiLCJOZXVyYWxOZXR3b3JrIiwidmFsdWVzIiwiaW5wdXROb2RlcyIsImhpZGRlbk5vZGVzIiwib3V0cHV0Tm9kZXMiLCJmIiwiZSIsIk1hdGgiLCJyYW5kb20iLCJ3ZWlnaHRzSWgiLCJ3ZWlnaHRzSG8iLCJiaWFzSCIsImJpYXNPIiwic2V0QWN0aXZhdGlvbkZ1bmN0aW9uIiwic2V0TGVhcm5pbmdSYXRlIiwidHlwZSIsInByb3RvdHlwZSIsImFjdGl2YXRpb25GdW5jdGlvbiIsImxlYXJuaW5nUmF0ZSIsInByZWRpY3QiLCJpbnB1dEFycmF5IiwiaW5wdXRzIiwiZnJvbUFycmF5IiwiaGlkZGVuIiwiZG90Iiwib2YiLCJhZGQiLCJtYXAiLCJyb3ciLCJvdXRwdXQiLCJ0b0FycmF5IiwidHJhaW4iLCJ0YXJnZXRBcnJheSIsIm91dHB1dHMiLCJ0YXJnZXRzIiwib3V0cHV0RXJyb3JzIiwic3VidHJhY3QiLCJncmFkaWVudHMiLCJtdWx0aXBseSIsImhpZGRlblQiLCJ0cmFuc3Bvc2UiLCJ3ZWlnaHRIb0RlbHRhcyIsIndob1QiLCJoaWRkZW5FcnJvcnMiLCJoaWRkZW5HcmFkaWVudCIsImlucHV0c1QiLCJ3ZWlnaHRJaERlbHRhcyIsIlBlcmNlcHRyb24iLCJ3ZWlnaHRzIiwidmFsIiwiYWN0aXZhdGlvbiIsImZvckVhY2giLCJ4IiwiaSIsImxSYXRlIiwibkVwb2NoIiwiQXJyYXkiLCJhcHBseSIsImxlbmd0aCIsImlkeCIsImV4cGVjdGVkIiwic2xpY2UiLCJwcmVkaWN0aW9uIiwiZXJyb3IiLCJ5IiwiaiIsInNpZ21vaWQiLCJleHAiLCJ0YW5oIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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VUFBQVksQ0FBQztBQUFBLFNBQUlBLENBQUMsSUFBSSxJQUFJQSxDQUFSLENBQUw7QUFBQSxDQUZhLENBQWhCO2VBSWVFLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBRUE7Ozs7QUFJQSxJQUFNRSxJQUFJLEdBQUcsZ0NBQ1gsVUFBQWhCLENBQUM7QUFBQSxTQUFJN0MsSUFBSSxDQUFDNkQsSUFBTCxDQUFVaEIsQ0FBVixDQUFKO0FBQUEsQ0FEVSxFQUVYLFVBQUFZLENBQUM7QUFBQSxTQUFJLElBQUtBLENBQUMsR0FBR0EsQ0FBYjtBQUFBLENBRlUsQ0FBYjtlQUllSSxJIiwiZmlsZSI6IkBhc3R1YW5heC9mdW5tbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGFzdHVhbmF4L2Z1bm1sXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBhc3R1YW5heC9mdW5tbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAYXN0dWFuYXgvZnVubWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IGZvbGQgZnJvbSAnZnVuLmpzL3NyYy9mb2xkJ1xuaW1wb3J0IG1heCBmcm9tICdmdW4uanMvc3JjL21heCdcbmltcG9ydCBtaW4gZnJvbSAnZnVuLmpzL3NyYy9taW4nXG5pbXBvcnQgcmVkdWNlIGZyb20gJ2Z1bi5qcy9zcmMvcmVkdWNlJ1xuaW1wb3J0IGVxdWFscyBmcm9tICdmdW4uanMvc3JjL2VxdWFscydcbmltcG9ydCBub3QgZnJvbSAnZnVuLmpzL3NyYy9ub3QnXG5pbXBvcnQgY29uY2F0IGZyb20gJy4vdXRpbC9jb25jYXQnXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi91dGlsL2VtcHR5J1xuaW1wb3J0IGRvdCBmcm9tICcuL3V0aWwvZG90J1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vdXRpbC9pZGVudGl0eSdcbmltcG9ydCB0cmFuc3Bvc2UgZnJvbSAnLi91dGlsL3RyYW5zcG9zZSdcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL3V0aWwvZ2VuZXJhdGUnXG5cbmltcG9ydCBzb2x2ZSBmcm9tICcuL3V0aWwvc29sdmUnXG5cbi8qKlxuICogQGNsYXNzIE1hdHJpeFxuICogQGNsYXNzZGVzYyBNYXRyaXggYXBwbGljYXRpdmUgcHJvdmlkaW5nIHN0YW5kYXJkIG1hdHJpeCBvcGVyYXRpb25zXG4gKiBAc3VtbWFyeSBUaGUgTWF0cml4IGNsYXNzIHNob3VsZCBub3QgYmUgaW5zdGFudGlhdGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkLiBJbnN0ZWFkIHVzZSB0aGUgTWF0cml4Lm9mIHN5bnRheCB0byBjcmVhdGUgYSBuZXcgTWF0cml4LiBVbmZvcnR1bmF0bHkganNkb2NzIGRvZXMgbm90IGFsbG93IGZvciB0aGUgY29uc3RydWN0b3IgdG8gYmUgaGlkZGVuLlxuICogQGhpZGVjb250cnVjdG9yXG4gKiBAc2VlIE1hdHJpeC5vZlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICpcbiAqL1xubGV0IE1hdHJpeCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgdGhpcy5fX3ZhbHVlID0gdmFsXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5vZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYW5kIGZsYXR0ZW5zIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IHZhbCAtIEFuIGFycmF5IG9mIGFycmF5c1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqXG4gKi9cbk1hdHJpeC5vZiA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdHJpeCkgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBNYXRyaXgodmFsKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlIC0gUmV0dXJucyB0aGUgc3RyaW5nICdNYXRyaXgnIGZvciBhbGwgTWF0cml4IG9iamVjdHNcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgTWF0cml4Lm9mKFtbMSwyXSxbMiwzXSxbNCw1XV0pXG4gKiBtLnR5cGUgPT09ICdNYXRyaXgnXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHlwZSA9ICdNYXRyaXgnXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHByZWNpc2lvbiAtIEZsb2F0aW5nIHBvaW50IHByZWNpc2lvbiBpcyBzZXQgdG8gNCBieSBkZWZhdWx0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIE1hdHJpeC5vZihbWzEsMl0sWzIsM10sWzQsNV1dKVxuICogbS5wcmVjaXNpb24gPT09IDRcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5wcmVjaXNpb24gPSA0XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNzZXRQcmVjaXNpb25cbiAqIEBkZXNjIFRoZSBwcmVjaXNpb24gaXMgdXNlZCBpbiBmbG9hdGluZyBwb2ludCBjYWxjdWxhdGlvbnMgZm9yIHRoZSBkb3QgcHJvZHVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtwcmVjaXNpb249NF0gLSBTZXQgdGhlIG51bWJlciBvZiBkZWNpbWFscyBmb3Igcm91bmRpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBNYXRyaXgub2YoW1sxLDJdLFsyLDNdLFs0LDVdXSlcbiAqIG0uc2V0UHJlY2lzaW9uKDEwKVxuICogbS5wcmVjaXNpb24gPT09IDEwXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc2V0UHJlY2lzaW9uID0gZnVuY3Rpb24gKHByZWNpc2lvbikge1xuICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvblxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaXNTeW1tZXRyaWNcbiAqIEBkZXNjIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBNYXRyaXggaXMgc3ltbWV0cmljIGJ5IHRlc3RpbmcgZm9yIGVxdWFsaXR5IG9mIHRoZSB0cmFuc3Bvc2VkIE1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiB0cnVlID09PSBBLmlzU3ltbWV0cmljKClcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaXNTeW1tZXRyaWMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGEgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgYiA9IE1hdHJpeC50cmFuc3Bvc2UodGhpcykuX192YWx1ZVxuICByZXR1cm4gZXF1YWxzKGEsIGIpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc1NxdWFyZVxuICogQGRlc2MgQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIE1hdHJpeCBvYmplY3QgaXMgc3F1YXJlLlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIHRydWUgPT09IEEuaXNTcXVhcmUoKVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5pc1NxdWFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVxdWFscyh0aGlzLmdldENvbHMoKSwgdGhpcy5nZXRSb3dzKCkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpc09ydGhvZ29uYWxcbiAqIEBkZXNjIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBNYXRyaXggaXMgb3J0aG9nb25hbCBieSB0ZXN0aW5nIGZvciBlcXVhbGl0eSBiZXR3ZWVuIElkZW50aXR5IE1hdHJpeCBhbmQgdGhlIGRvdCBwcm9kdWN0IG9mIHRoZSBNYXRyaXggYW5kIGl0cyB0cmFuc3Bvc2UuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gW1stMC4zMDkyLCAtMC45NTEwXSwgWy0wLjk1MTAsIDAuMzA5Ml1dXG4gKiBjb25zdCBBID0gTWF0cml4LmZyb21BcnJheShyZXN1bHQpXG4gKiB0cnVlICA9PT0gQS5pc09ydGhvZ29uYWwoKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmlzT3J0aG9nb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQXhBdCA9IHRoaXMuZG90KHRoaXMudHJhbnNwb3NlKCkpXG4gIGNvbnN0IEkgPSB0aGlzLmlkZW50aXR5KClcbiAgcmV0dXJuIGVxdWFscyhBeEF0LCBJKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZ2V0Q29sc1xuICogQGRlc2MgTnVtYmVyIGluZGljYXRpbmcgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBNYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIEEuZ2V0Q29scygpICA9PT0gMlxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5nZXRDb2xzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fX3ZhbHVlWzBdLmxlbmd0aFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZXF1YWxzXG4gKiBAZGVzYyBGdW5jdGlvbiByZXR1cm5pbmcgYSBib29sZWFuIHRlc3RpbmcgZm9yIGVxdWFsaXR5IG9mIHRoZSB2YWx1ZXMgb2YgYSBNYXRyaXggb3IgQXJyYXlcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IG9yIEFycmF5IHRvIGNvbXBhcmUgZm9yIGVxdWFsaXR5XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGEgPSBbWzEsIDFdLCBbMSwgMV1dXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihhKVxuICogdmFyIEIgPSBNYXRyaXgub2YoYSlcbiAqIHRydWUgID09PSBBLmVxdWFscyhCKVxuICovXG5NYXRyaXgucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBlcXVhbHModGhpcy5fX3ZhbHVlLCBNLl9fdmFsdWUgfHwgTSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2dldFJvd3NcbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFJvd3MoKSAgLy8gMlxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNnZXRTaGFwZVxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV0pXG4gKiBBLmdldFNoYXBlKCkgIC8vIFsyLCAyXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmdldFNoYXBlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW3RoaXMuZ2V0Um93cygpLCB0aGlzLmdldENvbHMoKV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I21hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciB0aGUgcm93cyBvZiB0aGUgbWF0cml4IHVzaW5nIGEgbWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQW4gaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgub2YoW1sxLCAxXSwgWzEsIDFdXSlcbiAqIG0ubWFwKHggPT4geC5tYXAoeSA9PiB5KyAxKSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGYpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAoZikodGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4Lm1hcFxuICogQGRlc2NyaXB0aW9uIEN1cnJpZWQgZnVuY3Rpb24gdGhhdCBtYXBzIG92ZXIgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeCB1c2luZyBhIG1hcCBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBvciBhcnJheSB0byBtYXBcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSBNYXRyaXgubWFwKHg9ID4geC5tYXAoeSA9PiB5KyAxKSwgW1sxLCAxXSwgWzEsIDFdXSlcbiAqIC8vIFtbMiwgMl0sIFsyLCAyXV1cbiAqXG4gKi9cbk1hdHJpeC5tYXAgPSBjdXJyeShmdW5jdGlvbiAoZiwgTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKE0pLm1hcChmKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2ZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZWR1Y2UgdGhlIG1hdHJpeCByb3dzIHVzaW5nIGEgcmVkdWNlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIC0gQSByZWR1Y2UvZm9sZCBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gRmxhdHRlbiBNYXRyaXhcbiAqIE1hdHJpeC5vZihbWzEsIDFdLCBbMSwgMV1dKS5mb2xkKChwcmV2LCBuZXh0KSA9PiBwcmV2LmNvbmNhdChuZXh0KSlcbiAqIC8vIFsxLCAxLCAxLCAxXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQoZiwgW10pKHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5mb2xkXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGZ1bmN0aW9uIHRvIHJlZHVjZSB0aGUgbWF0cml4IHJvd3MgdXNpbmcgYSByZWR1Y2UgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBBIHJlZHVjZS9mb2xkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIFRoZSBNYXRyaXggdG8gcmVkdWNlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcblxuICogLy8gU3VtIG9mIGFsbCBtYXRyaXggdmFsdWVzXG4gKiBjb25zdCByZWR1Y2VyID0gKHByZXYsIG5leHQpID0+IE51bWJlcihwcmV2KSArIG5leHQucmVkdWNlKChhY2MsIHgpID0+IGFjYyArIHgsIDApXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwgMV0sIFsxLCAxXV1cbiAqIE1hdHJpeC5mb2xkKHJlZHVjZXIsIEEpXG4gKiAvLyA0XG4gKi9cbk1hdHJpeC5mb2xkID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5mb2xkKGYpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYXBcbiAqIEBkZXNjcmlwdGlvbiBGdW5jdGlvbiB0aGF0IGFwcGxpZXMgYSBmdW5jdGlvbiB0byBhIE1hdHJpeFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgQXJyYXkgdG8gYXBwbHkgYSBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3LCA4LCA5XV0pXG4gKiBNYXRyaXgub2YoZikuYXAoTSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5hcCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkubWFwKHRoaXMuX192YWx1ZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmFwXG4gKiBAZGVzY3JpcHRpb24gQ3VycmllZCBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgYSBmdW5jdGlvbiB0byBhIE1hdHJpeFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiAtIEZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIE1hdHJpeCBhcyBpbnB1dFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggb3IgQXJyYXkgdG8gYXBwbHkgYSBmdW5jdGlvblxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgZiA9IHggPT4geC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KVxuICogTWF0cml4LmFwKGYsIFtbMSwgMiwgM10sIFs0LCA1LCA2XSwgWzcsIDgsIDldXSlcbiAqIC8vIFtbNl0sIFsxNV0sIFsyNF1cbiAqL1xuTWF0cml4LmFwID0gY3VycnkoZnVuY3Rpb24gKGYsIE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihmKS5hcChNKVxufSlcblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2NvbmNhdFxuICogQGRlc2NyaXB0aW9uIENvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TWF0cml4fSBNIC0gVGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGNvbmNhdGVuYXRpb24vcHJvZHVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2Y9Y29uY2F0XSAtIEEgY3VycmllZCBmdW5jdGlvbiBhY2NlcHRpbmcgMiBtYXRyaWNlcyBhcyBpbnB1dFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gQS5jb25jYXQoQilcbiAqIC8vIFtbMCwgMSwgMSwgMiwgMiwgMl0sIFsyLCAzLCA0LCAzLCAzLCAzXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKE0sIGYgPSBjb25jYXQpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZihNKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmNvbmNhdFxuICogQGRlc2NyaXB0aW9uIEEgY3VycmllZCBmdW5jdGlvbiB0aGF0IGNvbmNhdGVuYXRlcyAyIE1hdHJpY2VzIHVzaW5nIGEgZnVuY3Rpb24gYXMgb3BlcmF0b3JcbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gTGVmdCBzaWRlIE1hdHJpeCBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHtNYXRyaXh9IEIgLSBSaWdodCBzaWRlIE1hdHJpeCBvZiB0aGUgY29uY2F0ZW5hdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2Y9Y29uY2F0XSAtIEEgY3VycmllZCBmdW5jdGlvbiBhY2NlcHRpbmcgMiBtYXRyaWNlcyBhcyBpbnB1dFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgYSA9IFtbMCwgMSwgMV0sIFsyLCAzLCA0XV1cbiAqIGNvbnN0IGIgPSBbWzIsIDIsIDJdLCBbMywgMywgM11dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKGIpXG4gKiBjb25zdCBNID0gTWF0cml4LmNvbmNhdChBLCBCKVxuICogLy8gW1swLCAxLCAxLCAyLCAyLCAyXSwgWzIsIDMsIDQsIDMsIDMsIDNdXVxuICpcbiAqL1xuTWF0cml4LmNvbmNhdCA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCLCBmID0gY29uY2F0KSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkubWFwKGYoQikpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGFuIGVtcHR5IE1hdHJpeCBmcm9tIGFuIGV4aXN0aW5nIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tYXAoZW1wdHkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5lbXB0eVxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYW4gZW1wdHkgTWF0cml4IGZyb20gYW4gZXhpc3RpbmcgTWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gW3Jvd3M9MF0gLSBSb3dzIHRvIGdlbmVyYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW2NvbHM9MF0gLSBDb2xzIHRvIGdlbmVyYXRlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXguZW1wdHkgPSBjdXJyeShmdW5jdGlvbiAocm93cyA9IDAsIGNvbHMgPSAwKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKSAvLyBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLm1hcChlbXB0eSlcbn0pXG5cbi8vICMjIyMgIyMjIyAjIyMjIC8vXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNpZGVudGl0eVxuICogQGRlc2MgUmV0dXJucyBhbiBpZGVudGl0eSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKGEpXG4gKiBjb25zdCBBaWRlbnRpdHkgPSBBLmlkZW50aXR5KClcbiAqIC8vIFtbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YoaWRlbnRpdHkpLmFwKHRoaXMpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5pZGVudGl0eVxuICogQGRlc2MgY3VycmllZCBmdWNudGlvbiB0aGF0IHJldHVybnMgYW4gaWRlbnRpdHkgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4LmlkZW50aXR5KDMsIDIpXG4gKiAvLyBbWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gKlxuICovXG5NYXRyaXguaWRlbnRpdHkgPSBjdXJyeShmdW5jdGlvbiAocm93cywgY29scykge1xuICBjb25zdCBtID0gZ2VuZXJhdGUocm93cywgY29scykgLy8gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocm93cykpLm1hcCh4ID0+IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvbHMpKSlcbiAgcmV0dXJuIE1hdHJpeC5vZihpZGVudGl0eSkuYXAobSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNjb21iaW5lXG4gKiBAZGVzYyBDb25jYXRlbmF0ZXMgMiBNYXRyaWNlcyB0b2dldGhlci5cbiAqIEBzZWUgTWF0cml4LmNvbmNhdFxuICogQHBhcmFtIHtNYXRyaXggfSBNIC0gUmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIGNvbWJpbmUgb3BlcmF0aW9uXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGNvbmNhdClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAc3RhdGljXG4gKiBAZnVuY3Rpb24gTWF0cml4LmNvbWJpbmVcbiAqIEBkZXNjIEN1cnJpZWQgZnVjbnRpb24gdGhhdCBjb21iaW5lcyAyIE1hdHJpY2VzXG4gKiBAc2VlIE1hdHJpeC5jb25jYXRcbiAqIEBwYXJhbSB7TWF0cml4fSBBIC0gTGVmdCBzaWRlIG9mIHRoZSBjb21iaW5lIG9wZXJhdG9yXG4gKiBAcGFyYW0ge01hdHJpeH0gQSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGNvbWJpbmUgb3BlcmF0b3JcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKi9cbk1hdHJpeC5jb21iaW5lID0gY3VycnkoZnVuY3Rpb24gKEEsIEIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihBKS5jb25jYXQoTWF0cml4Lm9mKEIpLCBjb25jYXQpXG59KVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZG90XG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiAyIG1hdHJpY2VzXG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIFJpZ2h0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBDcmVhdGUgbWF0cml4XG4gKiBjb25zdCBtID0gTWF0cml4Lm9mKFtbMSwgMl0sIFszLCA0XV0pXG4gKlxuICogLy8gR2VuZXJhdGUgaWRlbnRpdHkgbWF0cml4XG4gKiBjb25zdCBJICA9IG0uaWRlbnRpdHkoKSAvLyBbWzEsIDBdLCBbMCwgMV1dXG4gKlxuICogaWYobS5kb3QoSSkuZXF1YWxzKG0pKSB7XG4gKiAgICBjb25zb2xlLmxvZygnRG90IHByb2R1Y3Qgd2l0aCBpZGVudGl0eSBtYXRyaXggcmV0dXJucyB0aGUgc2FtZSBtYXRyaXgnKVxuICogfVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAoTSkge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLmNvbmNhdChNYXRyaXgub2YoTSksIGRvdCh0aGlzLnByZWNpc2lvbikpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQHN0YXRpY1xuICogQGZ1bmN0aW9uIE1hdHJpeC5kb3RcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1Y250aW9uIHRoYXQgcmV0dXJucyB0aGUgZG90IHByb2R1Y3Qgb2YgMiBtYXRyaWNlc1xuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IEEgLSBMZWZ0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gQiAtIFJpZ2h0IHNpZGUgb2YgdGhlIGRvdCBwcm9kdWN0XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGEgPSBbWzEsIDIsIDNdLCBbNCwgNSwgNl1dXG4gKiBjb25zdCBiID0gW1s3LCA4XSwgWzksIDEwXSwgWzExLCAxMl1dXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihhKVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihiKVxuICpcbiAqIE1hdHJpeC5kb3QoQSwgQikgLy8gW1s1OCwgNjRdLCBbMTM5LCAxNTRdXVxuICpcbiAqL1xuTWF0cml4LmRvdCA9IGN1cnJ5KGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZG90KE1hdHJpeC5vZihCKSlcbn0pXG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNmaWxsXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHRoZSBwcm92aWRlZCBtYXAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBGdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyBhIHZhbHVlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbMSwyLDNdLCBbMywyLDFdLCBbNCw1LDZdXSkuZmlsbCh4ID0+IDQyKVxuICogLy8gW1s0Miw0Miw0Ml0sIFs0Miw0Miw0Ml0sIFs0Miw0Miw0Ml1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gTWF0cml4Lm9mKHRoaXMpLm1hcChtYXAoeCA9PiBmKHgpKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3plcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLnplcm9zKClcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS56ZXJvcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKHggPT4gMClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lnplcm9zXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIHplcm9zXG4gKiBAcGFyYW0ge051bWJlcn0gcm93cyAtIERlZmluZXMgdGhlIHJvd3Mgb2YgdGhlIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGNvbHMgLSBEZWZpbmVzIHRoZSBjb2x1bW5zIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXguemVyb3MoMywgMylcbiAqIC8vIFtbMCwwLDBdLCBbMCwwLDBdLCBbMCwwLDBdXVxuICpcbiAqL1xuTWF0cml4Lnplcm9zID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDApXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuXG4gKiBAZnVuY3Rpb24gTWF0cml4I29uZXNcbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggb25lc1xuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsMiwzXSwgWzMsMiwxXSwgWzQsNSw2XV0pLm9uZXMoKVxuICogLy8gW1sxLDEsMV0sIFsxLDEsMV0sIFsxLDEsMV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm9uZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRyaXgub2YodGhpcykuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5vbmVzXG4gKiBAZGVzYyBGaWxsIHVwIGFuIGVtcHR5IG1hdHJpeCB3aXRoIG9uZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzIC0gRGVmaW5lcyB0aGUgcm93cyBvZiB0aGUgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gY29scyAtIERlZmluZXMgdGhlIGNvbHVtbnMgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vbmVzKDEsIDEpXG4gKiAvLyBbWzEsMSwxXSwgWzEsMSwxXSwgWzEsMSwxXV1cbiAqXG4gKi9cbk1hdHJpeC5vbmVzID0gZnVuY3Rpb24gKHJvd3MsIGNvbHMpIHtcbiAgY29uc3QgbSA9IGdlbmVyYXRlKHJvd3MsIGNvbHMpXG4gIHJldHVybiBNYXRyaXgub2YobSkuZmlsbCh4ID0+IDEpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNyYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIHZhbHVlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2YgPSBlID0+IE1hdGgucmFuZG9tKCkgKiAyIC0gMV0gLSBGdW5jdGlvbiBwcm9kdWNpbmcgcmFuZG9tIHZhbHVlcywgY2FuIGJlIGFueSB0eXBlIG9mIHZhbHVlXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIChmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDEpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5maWxsKGYpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5yYW5kb21cbiAqIEBkZXNjIEZpbGwgdXAgYW4gZW1wdHkgbWF0cml4IHdpdGggcmFuZG9tIG51bWJlcnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgLSBGdW5jdGlvbiB3aGljaCByZXR1cm5zIHJhbmRvbSB2YWx1ZXMuIERlZmF1bHQgcmFuZG9tIHZhbHVlcyBhcmUgYmV0d2VlbiAtMSBhbmQgMVxuICogQHBhcmFtIHtOdW1iZXJ9IHJvd3MgLSBEZWZpbmVzIHRoZSByb3dzIG9mIHRoZSBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xzIC0gRGVmaW5lcyB0aGUgY29sdW1ucyBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucmFuZG9tID0gZnVuY3Rpb24gKGYgPSBlID0+IChNYXRoLnJhbmRvbSgpICogMiAtIDEpLCByb3dzLCBjb2xzKSB7XG4gIGNvbnN0IG0gPSBnZW5lcmF0ZShyb3dzLCBjb2xzKVxuICByZXR1cm4gTWF0cml4Lm9mKG0pLmZpbGwoZilcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3RvQXJyYXlcbiAqIEBkZXNjIFJldHVybnMgdGhlIGFycmF5IGZyb20gdGhlIG1hdHJpeFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5NYXRyaXgucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fdmFsdWUubWFwKHJvdyA9PiByb3cubWFwKGNvbCA9PiBjb2wpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjY2xvbmVcbiAqIEBkZXNjIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBNID0gTWF0cml4LmZyb21BcnJheSh0aGlzLl9fdmFsdWUpXG4gIE0uc2V0UHJlY2lzaW9uKHRoaXMucHJlY2lzaW9uKVxuICByZXR1cm4gTVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZnJvbUFycmF5XG4gKiBAZGVzYyBSZXR1cm5zIGEgTWF0cml4IGZyb20gYW4gYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuTWF0cml4LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihtYXAocm93ID0+IG1hcChjb2wgPT4gY29sKShyb3cpKShhcnIpKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjdHJhbnNwb3NlXG4gKiBAZGVzYyBSZXR1cm5zIGEgdHJhbnNwb3NlZCBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdKVxuICogY29uc3QgYiA9IEEudHJhbnNwb3NlKCkudG9BcnJheSgpXG4gKiAvLyByZXR1cm5zIFtbLTEsIDMsLThdLCBbMiwgNCwgMl1dXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUudHJhbnNwb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTWF0cml4Lm9mKGZvbGQodHJhbnNwb3NlLCBbXSwgdGhpcy5fX3ZhbHVlKSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LnRyYW5zcG9zZVxuICogQGRlc2MgUmV0dXJucyBhIHRyYW5zcG9zZWQgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIEEgTWF0cml4IG9yIGEgbWF0cml4IGFycmF5XG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBhID0gWy0xLCAyXSwgWzMsIDRdLCBbLTgsIDJdXG4gKiBjb25zdCBiID0gTWF0cml4LnRyYW5zcG9zZShhKS50b0FycmF5KClcbiAqIC8vIHJldHVybnMgW1stMSwgMywtOF0sIFsyLCA0LCAyXV1cbiAqL1xuTWF0cml4LnRyYW5zcG9zZSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkudHJhbnNwb3NlKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2FkZFxuICogQGRlc2MgQWRkcyBhIG51bWJlciBvciBhIE1hdHJpeCB0byB0aGlzXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBZGQgYSBNYXRyaXggb3IgYSBudW1iZXJcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IEEgPSBNYXRyaXgub2YoW1s1LCA0XV0pXG4gKiBBLmFkZCgxKSAvLyBbWzYsIDVdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzUsIDVdXSlcbiAqIEIuYWRkKEIpIC8vIFtbMTAsIDEwXV1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBhZGQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXAoKHJvdywgaWR4KSA9PiBtYXAoKHZhbCwgamR4KSA9PiB2YWwgKyBNLl9fdmFsdWVbaWR4XVtqZHhdKShyb3cpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLm1hcChtYXAoeCA9PiB4ICsgTSkpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3N1YnRyYWN0XG4gKiBAZGVzYyBTdWJ0cmFjdHMgYSBudW1iZXIgb3IgYSBNYXRyaXggZnJvbSB0aGlzXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBTdWJ0cmFjdCBhIE1hdHJpeCBvciBhIG51bWJlclxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuc3VidHJhY3QoMSkgLy8gW1s0LCAyXV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLnN1YnRyYWN0KEIpIC8vIFtbMCwgMF1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBzdWJ0cmFjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgodmFsLCBqZHgpID0+IHZhbCAtIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggLSBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbXVsdGlwbHlcbiAqIEBkZXNjIE11dGxpcGx5IGEgc2NhbGFyIG9yIGEgbWF0cml4IHdpdGggYSBtYXRyaXguIFRocm93cyBhbiBlcnJvciBpZiB0aGUgbXVsdGlwbGljYXRpb24gaXMgbm90IHBvc3NpYmxlLlxuICogQHBhcmFtIHtNYXRyaXh8TnVtYmVyfSBNIC0gQSBNYXRyaXggTSBvciBhIE51bWJlciB0byBtdWx0aXBseSBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEubXVsdGlwbHkoMikgLy8gW1sxMCwgOF1dXG4gKiBjb25zdCBCID0gTWF0cml4Lm9mKFtbNSwgNV1dKVxuICogQi5tdWx0aXBseShCKSAvLyBbWzI1LCAyNV1dXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKE0pIHtcbiAgaWYgKE0gaW5zdGFuY2VvZiBNYXRyaXgpIHtcbiAgICBpZiAodGhpcy5nZXRDb2xzKCkgIT09IE0uZ2V0Q29scygpIHx8IHRoaXMuZ2V0Um93cygpICE9PSBNLmdldFJvd3MoKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzZSBzdGF0aWMgbWV0aG9kIFxcJ2RvdFxcJyB0byBkbyBtYXRyaXggbXVsdGlwbGljYXRpb24nKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaWNlcyBkbyBub3QgbWF0Y2gsIGNhbm5vdCBjcmVhdGUgaGFkYW1hcmQgcHJvZHVjdCcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcCgocm93LCBpZHgpID0+IG1hcCgoY29sLCBqZHgpID0+IGNvbCAqIE0uX192YWx1ZVtpZHhdW2pkeF0pKHJvdykpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKG1hcCh4ID0+IHggKiBNKSlcbiAgfVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjYWRkaXRpdmVpbnZlcnNlXG4gKiBAZGVzYyBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG1hdHJpeCBvYnRhaW5lZCBieSBjaGFuZ2luZyB0aGUgc2lnbiBvZiBldmVyeSBtYXRyaXggZWxlbWVudC4gVGhlIGFkZGl0aXZlIGludmVyc2Ugb2YgbWF0cml4IEEgaXMgd3JpdHRlbiDigJNBLlxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsLTVdLCBbLTQsIDRdXSlcbiAqIGNvbnN0IG1pbnVzQSA9IEEuYWRkaXRpdmVpbnZlcnNlKClcbiAqIC8vIFtbLTUsIDVdLCBbNCwgLTRdXVxuICovXG5NYXRyaXgucHJvdG90eXBlLmFkZGl0aXZlaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseSgtMSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2hhZGFtYXJkXG4gKiBAZGVzYyBIYWRhbWFyIGlzIGFuIGFsaWFzIG9mIHRoZSBtdWx0aXBseSBmdW5jdGlvblxuICogQHNlZSBNYXRyaXgubXVsdGlwbHlcbiAqIEBwYXJhbSB7TWF0cml4fE51bWJlcn0gTSAtIEEgTWF0cml4IE0gb3IgYSBOdW1iZXIgdG8gbXVsdGlwbHkgYSBNYXRyaXhcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAc2VlIE1hdHJpeC5oYWRhbWFyZFxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgNF1dKVxuICogQS5oYWRhbWFyZCgyKSAvLyBbWzEwLCA4XV1cbiAqIGNvbnN0IEIgPSBNYXRyaXgub2YoW1s1LCA1XV0pXG4gKiBCLmhhZGFtYXJkKEIpIC8vIFtbMjUsIDI1XV1cblxuICovXG5NYXRyaXgucHJvdG90eXBlLmhhZGFtYXJkID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZih0aGlzKS5tdWx0aXBseShNKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbHVcbiAqIEBkZXNjIENhbGN1bGF0ZXMgTFUgZGVjb21wb3NpdGlvbiBvZiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TWF0cml4W119XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IFtbMywgLTcsIC0yLCAyXSwgWy0zLCA1LCAxLCAwXSwgWzYsIC00LCAwLCAtNV0sIFstOSwgNSwgLTUsIDEyXV1cbiAqIGNvbnN0IEEgPSBNYXRyaXguZnJvbUFycmF5KHJlc3VsdClcbiAqIGNvbnN0IGx1ID0gQS5sdSgpXG4gKiAvLyBMLl9fdmFsdWUgPSBbIFsgMSwgMCwgMCwgMCBdLCBbIC0xLCAxLCAwLCAwIF0sIFsgMiwgLTUsIDEsIDAgXSwgWyAtMywgOCwgMywgMSBdIF1cbiAqIC8vIFUuX192YWx1ZSA9ICBbIFsgMywgLTcsIC0yLCAyIF0sIFsgMCwgLTIsIC0xLCAyIF0sIFsgMCwgMCwgLTEsIDEgXSwgWyAwLCAwLCAwLCAtMSBdIF1cbiAqIE1hdHJpeC5kb3QobHVbMF0sIGx1WzFdKSAvLyByZXR1cm5zIGNsb25lIG9mIEFcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUubHUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG4gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCB0b2wgPSAxZS02XG4gIGNvbnN0IEEgPSB0aGlzLmNsb25lKClcbiAgY29uc3QgTCA9IHRoaXMuemVyb3MoKVxuICBjb25zdCBVID0gdGhpcy56ZXJvcygpXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyArK2spIHtcbiAgICBpZiAoTWF0aC5hYnMoQS5fX3ZhbHVlW2tdW2tdKSA8IHRvbCkgdGhyb3cgRXJyb3IoJ0Nhbm5vdCBwcm9jZWVkIHdpdGhvdXQgYSByb3cgZXhjaGFuZ2UnKVxuICAgIEwuX192YWx1ZVtrXVtrXSA9IDFcbiAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyArK2kpIHtcbiAgICAgIEwuX192YWx1ZVtpXVtrXSA9IEEuX192YWx1ZVtpXVtrXSAvIEEuX192YWx1ZVtrXVtrXVxuICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbjsgKytqKSB7XG4gICAgICAgIEEuX192YWx1ZVtpXVtqXSA9IEEuX192YWx1ZVtpXVtqXSAtIEwuX192YWx1ZVtpXVtrXSAqIEEuX192YWx1ZVtrXVtqXVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBsID0gazsgbCA8IG47ICsrbCkge1xuICAgICAgVS5fX3ZhbHVlW2tdW2xdID0gQS5fX3ZhbHVlW2tdW2xdXG4gICAgfVxuICB9XG4gIHJldHVybiBbTCwgVV1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3JyZWZcbiAqIEBkZXNjIFJldHVybnMgYSBNYXRyaXggY29udGFpbmluZyB0aGUgcm93IHJlZHVjZWQgZWNoZWxvbiBmb3JtXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgQSA9IE1hdHJpeC5vZihbWy0xLCAxXSwgWy0xLCAwXSwgWzAsIC0xXSwgWy0xLCAtMl1dKVxuICogQS5ycmVmKCkgLy8gIFsgWyAxLCAwIF0sIFsgLTAsIDEgXSwgWyAwLCAwIF0sIFsgMCwgMCBdIF1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5ycmVmID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbGVhZCA9IDBcbiAgY29uc3QgcmVzdWx0TWF0cml4ID0gdGhpcy5jbG9uZSgpXG5cbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmdldFJvd3MoKTsgKytyKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpIDw9IGxlYWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRNYXRyaXhcbiAgICB9XG4gICAgbGV0IGkgPSByXG4gICAgd2hpbGUgKHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2xlYWRdID09PSAwKSB7XG4gICAgICArK2lcbiAgICAgIGlmICh0aGlzLmdldFJvd3MoKSA9PT0gaSkge1xuICAgICAgICBpID0gclxuICAgICAgICArK2xlYWRcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSBsZWFkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdE1hdHJpeFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcCA9IHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldXG4gICAgcmVzdWx0TWF0cml4Ll9fdmFsdWVbaV0gPSByZXN1bHRNYXRyaXguX192YWx1ZVtyXVxuICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdID0gdG1wXG5cbiAgICBsZXQgdmFsID0gcmVzdWx0TWF0cml4Ll9fdmFsdWVbcl1bbGVhZF1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0Q29scygpOyArK2opIHtcbiAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdIC89IHZhbFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRSb3dzKCk7ICsraSkge1xuICAgICAgaWYgKGkgPT09IHIpIGNvbnRpbnVlXG4gICAgICB2YWwgPSByZXN1bHRNYXRyaXguX192YWx1ZVtpXVtsZWFkXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldENvbHMoKTsgKytqKSB7XG4gICAgICAgIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW2ldW2pdIC09IHZhbCAqIHJlc3VsdE1hdHJpeC5fX3ZhbHVlW3JdW2pdXG4gICAgICB9XG4gICAgfVxuICAgIGxlYWQrK1xuICB9XG4gIHJldHVybiByZXN1bHRNYXRyaXhcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I3NvbHZlXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzb2x1dGlvbiBmb3IgYSBzeXN0ZW0gb2YgbGluZWFyIGVxdWF0aW9uc1xuICogQHBhcmFtIHtBcnJheX0gYiAtIFRoZSBudW1iZXJzIGZvciB3aGljaCB0byBzb2x2ZSB0aGUgc3lzdGVtIG9mIGxpbmVhciBlcXVhdGlvbnNcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gU29sdmUgeEEgPSBiXG4gKiAvLyA1eCArIHkgID0gN1xuICogLy8gM3ggLSA0eSA9IDE4XG4gKiAvLyBTb2x1dGlvbiBmb3IgeCBhbmQgeTpcbiAqIC8vIHggPSAyXG4gKiAvLyB5ID0gLTNcbiAqXG4gKiBjb25zdCBBID0gTWF0cml4Lm9mKFtbNSwgMV0sIFszLCAtNF1dKVxuICogY29uc3Qgc29sdmVBID0gQS5zb2x2ZShbNywgMThdKSAvLyBbMiwgLTNdXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLnNvbHZlID0gZnVuY3Rpb24gKGIpIHtcbiAgY29uc3QgTFUgPSB0aGlzLmx1KClcbiAgY29uc3QgTCA9IExVWzBdXG4gIGNvbnN0IFUgPSBMVVsxXVxuICBjb25zdCBuID0gdGhpcy5nZXRSb3dzKClcbiAgLy8gbGV0IHMgPSAwXG4gIC8vIGNvbnN0IGMgPSBbXVxuICAvLyBjb25zdCB4ID0gW11cblxuICByZXR1cm4gc29sdmUobiwgTCwgVSwgYilcblxuICAvLyBmb3IgKGxldCBrID0gMDsgayA8IG47ICsraykge1xuICAvLyAgIGZvciAobGV0IGogPSAwOyBqIDwgazsgKytqKSB7XG4gIC8vICAgICBzID0gcyArIEwuX192YWx1ZVtrXVtqXSAqIGNbal1cbiAgLy8gICB9XG4gIC8vICAgY1trXSA9IGJba10gLSBzXG4gIC8vICAgcyA9IDBcbiAgLy8gfVxuICAvLyBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gIC8vICAgbGV0IHQgPSAwXG4gIC8vICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gIC8vICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgLy8gICB9XG4gIC8vICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgLy8gfVxuICAvLyByZXR1cm4geFxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjaW52ZXJzZVxuICogQGRlc2MgUmV0dXJucyB0aGUgaW52ZXJzZSBvZiBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMiwgNF1dKS5pbnZlcnNlKClcbiAqIC8vIFsgWyAyLCAtMC41IF0sIFsgLTEsIDAuNSBdIF1cbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgQSA9IHRoaXMuY2xvbmUoKVxuICBjb25zdCBJID0gQS5pZGVudGl0eSgpXG4gIGNvbnN0IEludiA9IEEuY29uY2F0KEkpLnJyZWYoKVxuXG4gIGNvbnN0IHJlc3VsdCA9IEludi5fX3ZhbHVlLnJlZHVjZSgocmVzdWx0LCB4LCBpZHgpID0+IHtcbiAgICBjb25zdCBoYWxmID0geC5sZW5ndGggLyAyXG4gICAgcmVzdWx0LnB1c2goeC5zbGljZShoYWxmLCB4Lmxlbmd0aCkpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCBbXSlcbiAgcmV0dXJuIE1hdHJpeC5vZihyZXN1bHQpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNyYW5rXG4gKiBAZGVzYyBOdW1iZXIgaW5kaWNhdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgbGluZWFybHkgaW5kZXBlbmRlbnQgY29sdW1ucy5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5wcm90b3R5cGUucmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcnJlZiA9IHRoaXMucnJlZigpXG4gIGxldCByZXN1bHQgPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcnJlZi5nZXRDb2xzKCk7ICsraSkge1xuICAgIHJlc3VsdCArPSBycmVmLl9fdmFsdWVbaV1baV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaW1lbnNpb25cbiAqIEBkZXNjIE51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaW5lYXJseSBpbmRlcGVuZGVudCBjb2x1bW5zLlxuICogQHNlZSBNYXRyaXgucmFua1xuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJhbmsoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjZGlhZ1xuICogQGRlc2MgUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4Lm9uZXMoMywgMykuZGlhZygpXG4gKiAvLyBbMSwgMSwgMV1cbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFnKClcbiAqIC8vIFswLCAwLCAwLCAwLCAwXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaWFnID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdCh4W2lkeF0pXG4gIH0pKFtdKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5kaWFnXG4gKiBAZGVzYyBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcyBvbiB0aGUgZGlhZ29uYWxcbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBNIC0gTWF0cml4IGZyb20gd2hpY2ggdG8gcmV0dXJuIHRoZSBkaWFnb25hbFxuICogQHJldHVybnMge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFnKFtbMiwgMV0sIFsxLCA1XV0pXG4gKiAvLyBbMiwgNV1cbiAqXG4gKi9cbk1hdHJpeC5kaWFnID0gZnVuY3Rpb24gKE0pIHtcbiAgcmV0dXJuIE1hdHJpeC5vZihNKS5kaWFnKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2RpYWdwcm9kdWN0XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBwcm9kdWN0IG9mIHRoZSB2YWx1ZXMgb24gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLmRpYWdwcm9kdWN0KClcbiAqIC8vIDFcbiAqXG4gKiBjb25zdCBkaWFnMCA9IE1hdHJpeC56ZXJvcyg1LCA1KS5kaWFncHJvZHVjdCgpXG4gKiAvLyAwXG4gKlxuICovXG5NYXRyaXgucHJvdG90eXBlLmRpYWdwcm9kdWN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBpZHgpID0+IHtcbiAgICBhY2MgKj0geFtpZHhdXG4gICAgcmV0dXJuIGFjY1xuICB9KSgxKSh0aGlzLl9fdmFsdWUpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeC5kaWFncHJvZHVjdFxuICogQGRlc2MgUmV0dXJucyB0aGUgcHJvZHVjdCBvZiB0aGUgdmFsdWVzIG9uIHRoZSBkaWFnb25hbFxuICogQHBhcmFtIHtNYXRyaXh8QXJyYXl9IE0gLSBNYXRyaXggZnJvbSB3aGljaCB0byByZXR1cm4gdGhlIGRpYWdvbmFsXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5kaWFncHJvZHVjdChbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gMTBcbiAqXG4gKi9cbk1hdHJpeC5kaWFncHJvZHVjdCA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuZGlhZ3Byb2R1Y3QoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBkaWFnMSA9IE1hdHJpeC5vbmVzKDMsIDMpLnN1bSgpXG4gKiAvLyA5XG4gKlxuICogY29uc3QgZGlhZzAgPSBNYXRyaXguemVyb3MoNSwgNSkuc3VtKClcbiAqIC8vIDBcbiAqXG4gKi9cbk1hdHJpeC5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4KSA9PiB7XG4gICAgYWNjICs9IGZvbGQoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0KSgwKSh4KVxuICAgIHJldHVybiBhY2NcbiAgfSkoMCkodGhpcy5fX3ZhbHVlKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXguc3VtXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeHxBcnJheX0gTSAtIE1hdHJpeCBmcm9tIHdoaWNoIHRvIHJldHVybiB0aGUgZGlhZ29uYWxcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IGRpYWcxID0gTWF0cml4LnN1bShbWzIsIDFdLCBbMSwgNV1dKVxuICogLy8gOVxuICpcbiAqL1xuTWF0cml4LnN1bSA9IGZ1bmN0aW9uIChNKSB7XG4gIHJldHVybiBNYXRyaXgub2YoTSkuc3VtKClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4I2tyb25lY2tlclxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIHtNYXRyaXh9IE0gLSBUaGUgcmlnaHQgc2lkZSBNYXRyaXggb2YgdGhlIHByb2R1Y3QgKHRoaXMg4oqXIE0pXG4gKiBAcmV0dXJucyB7TWF0cml4fVxuICovXG5NYXRyaXgucHJvdG90eXBlLmtyb25lY2tlciA9IGZ1bmN0aW9uIChNKSB7XG4gIGNvbnN0IG0gPSB0aGlzLmdldFJvd3MoKVxuICBjb25zdCBuID0gdGhpcy5nZXRDb2xzKClcbiAgY29uc3QgcCA9IE0uZ2V0Um93cygpXG4gIGNvbnN0IHEgPSBNLmdldENvbHMoKVxuXG4gIGNvbnN0IGxlZnQgPSB0aGlzLl9fdmFsdWVcbiAgY29uc3QgcmlnaHQgPSBNLl9fdmFsdWVcblxuICBjb25zdCBmcmFtZSA9IGdlbmVyYXRlKG0gKiBwLCBuICogcSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHE7IGwrKykge1xuICAgICAgICAgIGZyYW1lW3AgKiBpICsga11bcSAqIGogKyBsXSA9IGxlZnRbaV1bal0gKiByaWdodFtrXVtsXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdHJpeC5vZihmcmFtZSlcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4Lmtyb25lY2tlclxuICogQGRlc2MgVGhlIEtyb25lY2tlciBwcm9kdWN0IGlzIGFuIG9wZXJhdGlvbiBvbiB0d28gbWF0cmljZXMgb2YgYXJiaXRyYXJ5IHNpemUgcmVzdWx0aW5nIGluIGEgYmxvY2sgbWF0cml4LlxuICogQHBhcmFtIHtNYXRyaXh9IEEgLSBUaGUgbGVmdCBzaWRlIE1hdHJpeCBvZiB0aGUgcHJvZHVjdCAoQSDiipcgQilcbiAqIEBwYXJhbSB7TWF0cml4fSBCIC0gVGhlIHJpZ2h0IHNpZGUgTWF0cml4IG9mIHRoZSBwcm9kdWN0IChBIOKKlyBCKVxuICogQHJldHVybnMge01hdHJpeH1cbiAqL1xuTWF0cml4Lmtyb25lY2tlciA9IGZ1bmN0aW9uIChBLCBCKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkua3JvbmVja2VyKEIpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkZXRlcm1pbmFudFxuICogQGRlc2MgQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBzcXVhcmUgTWF0cml4IHVzaW5nIFNhcnJ1cycgcnVsZSBvciBMVSBkZWNvbXBvc2l0aW9uXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NYXRyaXgucHJvdG90eXBlLmRldGVybWluYW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pc1NxdWFyZSgpKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29scygpID09PSAyKSB7XG4gICAgICBjb25zdCBhID0gdGhpcy5fX3ZhbHVlWzBdWzBdXG4gICAgICBjb25zdCBiID0gdGhpcy5fX3ZhbHVlWzBdWzFdXG4gICAgICBjb25zdCBjID0gdGhpcy5fX3ZhbHVlWzFdWzBdXG4gICAgICBjb25zdCBkID0gdGhpcy5fX3ZhbHVlWzFdWzFdXG5cbiAgICAgIHJldHVybiBhICogZCAtIGIgKiBjXG4gICAgfVxuICAgIGNvbnN0IGx1ID0gdGhpcy5sdSgpXG4gICAgY29uc3QgZGV0QSA9IE51bWJlcihsdVswXS5kaWFncHJvZHVjdCgpKVxuICAgIGNvbnN0IGRldEIgPSBOdW1iZXIobHVbMV0uZGlhZ3Byb2R1Y3QoKSlcbiAgICByZXR1cm4gZGV0QSAqIGRldEJcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcignVGhlIE1hdHJpeCBuZWVkcyB0byBiZSBhIHNxdWFyZSBNYXRyaXggdG8gY2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudCcpXG4gIH1cbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTWF0cml4XG4gKiBAZnVuY3Rpb24gTWF0cml4LmRldGVybWluYW50XG4gKiBAZGVzYyBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIHNxdWFyZSBNYXRyaXggdXNpbmcgU2FycnVzJyBydWxlIG9yIExVIGRlY29tcG9zaXRpb25cbiAqIEBwYXJhbSB7TWF0cml4fEFycmF5fSBBIC0gTWF0cml4IGFzIGlucHV0IHRvIGNhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk1hdHJpeC5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uIChBKSB7XG4gIHJldHVybiBNYXRyaXgub2YoQSkuZGV0ZXJtaW5hbnQoKVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBmdW5jdGlvbiBNYXRyaXgjbWF4XG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBsYXJnZXN0IG51bWJlciBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiByZWR1Y2UobWF4LCBbXS5jb25jYXQuYXBwbHkoW10sIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNtaW5cbiAqIEBkZXNjIFJldHVybnMgdGhlIHNtYWxsZXN0IG51bWJlciBpbiB0aGUgTWF0cml4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTWF0cml4LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiByZWR1Y2UobWluLCBbXS5jb25jYXQuYXBwbHkoW10sIHRoaXMuX192YWx1ZSkpXG59XG5cbi8qKlxuICogQG1lbWJlck9mIE1hdHJpeFxuICogQGZ1bmN0aW9uIE1hdHJpeCNkaXZpZGVcbiAqIEBkZXNjIERpdmlkZSBhIHNjYWxhciBvciBhIG1hdHJpeCBieSBhIG1hdHJpeC4gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBkaXZpc2lvbiBpcyBub3QgcG9zc2libGUuXG4gKiBAcGFyYW0ge01hdHJpeHxOdW1iZXJ9IE0gLSBBIE1hdHJpeCBNIG9yIGEgTnVtYmVyIHRvIGRpdmlkZSBhIE1hdHJpeFxuICogQHJldHVybnMge01hdHJpeH1cbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgQSA9IE1hdHJpeC5vZihbWzUsIDRdXSlcbiAqIEEuZGl2aWRlKDIpIC8vIFtbMTAsIDhdXVxuICogY29uc3QgQiA9IE1hdHJpeC5vZihbWzEsIDFdLCBbMiwgNF1dKVxuICogQi5kaXZpZGUoQikgLy8gW1sxLCAwXSwgWzAsIDFdXVxuICpcbiAqL1xuTWF0cml4LnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAoTSkge1xuICBpZiAoTSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgIGlmICh0aGlzLmdldENvbHMoKSAhPT0gTS5nZXRDb2xzKCkgfHwgdGhpcy5nZXRSb3dzKCkgIT09IE0uZ2V0Um93cygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpY2VzIGRvIG5vdCBtYXRjaCwgY2Fubm90IGNyZWF0ZSBkaXZpc2lvbicpXG4gICAgfVxuICAgIGlmIChub3QoTS5pc1NxdWFyZSgpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IHNxdWFyZSwgY2Fubm90IGNyZWF0ZSBpbnZlcnNlJylcbiAgICB9XG4gICAgY29uc3QgbUludiA9IE0uaW52ZXJzZSgpXG4gICAgcmV0dXJuIHRoaXMuZG90KG1JbnYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkoMSAvIE0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4XG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcbmltcG9ydCBjb25jYXQgZnJvbSAnZnVuLmpzL3NyYy9jb25jYXQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNvbmNhdFxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIGNvbmNhdGVuYXRpbmcvY29tYmluaW5nIDIgTWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fSBNIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXQgb3BlcmF0aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBtIC0gcmlnaHQgc2lkZSBvZiB0aGUgY29udGFjIG9wZXJhdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gSW5kZXggb2YgdGhlIHJvd1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiAoTSwgbSwgaWR4KSB7XG4gIHJldHVybiBjb25jYXQobSwgTS5fX3ZhbHVlW2lkeF0pXG59KVxuIiwiaW1wb3J0IGN1cnJ5IGZyb20gJ2Z1bi5qcy9zcmMvY3VycnknXG5pbXBvcnQgZm9sZCBmcm9tICdmdW4uanMvc3JjL2ZvbGQnXG5pbXBvcnQgbWFwIGZyb20gJ2Z1bi5qcy9zcmMvbWFwJ1xuaW1wb3J0IHJvdW5kIGZyb20gJy4vcm91bmQnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGRvdFxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBkb3Rwcm9kdWN0IG9mIDIgTWF0cmljZXNcbiAqIEBwYXJhbSB7TWF0cml4fSBCIC0gUmlnaHQgc2lkZSBvZiBodGUgZG90IHByb2R1Y3RcbiAqIEBwYXJhbSB7QXJyYXl9IGEgLSBBcnJheSByZXByZXNlbnRpbmcgdGhlbGVmdCBzaWRlIG9mIHRoZSBkb3QgcHJvZHVjdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBjdXJyeSgoZGVjaW1hbHMsIEIsIGEpID0+IG1hcCgoaXRlbSwgaSkgPT4ge1xuICByZXR1cm4gZm9sZCgoYWNjLCB4LCBqKSA9PiB7XG4gICAgYWNjICs9IHJvdW5kKHggKiBCLl9fdmFsdWVbal1baV0sIGRlY2ltYWxzKVxuICAgIHJldHVybiBhY2NcbiAgfSwgMCkoYSlcbn0pKEIuX192YWx1ZVswXSkpXG4iLCJpbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhbiBlbXB0eSBNYXRyaXhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3VycnkobSA9PiBbXSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdlbmVyYXRlXG4gKiBAZGVzYyBHZW5lcmF0b3IgZnVuY3Rpb24gZm9yIGEgbWF0cml4IGFycmF5LCB2YWx1ZXMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3dzXG4gKiBAcGFyYW0ge051bWJlcn0gY29sc1xuICogQHJldHVybnMge2FueVtdW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChyb3dzLCBjb2xzKSA9PiBBcnJheS5hcHBseShudWxsLCBBcnJheShyb3dzKSkubWFwKHggPT4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoY29scykpKVxuIiwiaW1wb3J0IG1hcCBmcm9tICdmdW4uanMvc3JjL21hcCdcblxuLyoqXG4gKiBAZnVuY3Rpb24gaWRlbnRpdHlcbiAqIEBkZXNjIENyZWF0ZXMgYW4gaWRlbnRpeSBtYXRyaXggZnJvbSBhbiBlbXB0eSBhcnJheVxuICogQHBhcmFtIG0ge0FycmF5fVxuICogQHBhcmFtIGlkeCB7TnVtYmVyfVxuICogQHJldHVybiB7TWF0cml4fVxuICovXG5leHBvcnQgZGVmYXVsdCAobSwgaWR4KSA9PiBtYXAoKHJvd3MsIGpkeCkgPT4gKGlkeCA9PT0gamR4KSAqIDEpKG0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiByb3VuZFxuICogQHBhcmFtIHZhbHVlIHtOdW1iZXJ9XG4gKiBAcGFyYW0gZGVjaW1hbHMge051bWJlcn1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kICh2YWx1ZSwgZGVjaW1hbHMgPSA0KSB7XG4gIHJldHVybiBOdW1iZXIoTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpLnRvUHJlY2lzaW9uKGRlY2ltYWxzKSlcbn1cbiIsIi8qKlxuICogQGZ1bmN0aW9uIHNvbHZlTFxuICogQGRlc2Mgc29sdmUgdGhlIHhBID0gYiBlcXVhdGlvbiBmb3IgbG93ZXIgdHJpYW5ndWxhclxuICogQHBhcmFtIG5cbiAqIEBwYXJhbSBMXG4gKiBAcGFyYW0gYlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiBzb2x2ZUwgKG4sIEwsIGIpIHtcbiAgbGV0IHMgPSAwXG4gIGNvbnN0IGMgPSBbXVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgKytrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyArK2opIHtcbiAgICAgIHMgPSBzICsgTC5fX3ZhbHVlW2tdW2pdICogY1tqXVxuICAgIH1cbiAgICBjW2tdID0gYltrXSAtIHNcbiAgICBzID0gMFxuICB9XG4gIHJldHVybiBjXG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIHNvbHZlVVxuICogQGRlc2Mgc29sdmUgdGhlIHhBID0gYiBlcXVhdGlvbiBmb3IgdXBwZXIgdHJpYW5ndWxhclxuICogQHBhcmFtIG5cbiAqIEBwYXJhbSBVXG4gKiBAcGFyYW0gY1xuICogQHBhcmFtIGJcbiAqL1xuZnVuY3Rpb24gc29sdmVVIChuLCBVLCBjLCBiKSB7XG4gIGNvbnN0IHggPSBbXVxuICBmb3IgKGxldCBhID0gbiAtIDE7IGEgPiAtMTsgLS1hKSB7XG4gICAgbGV0IHQgPSAwXG4gICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgbjsgKytiKSB7XG4gICAgICB0ID0gdCArIFUuX192YWx1ZVthXVtiXSAqIHhbYl1cbiAgICB9XG4gICAgeFthXSA9IChjW2FdIC0gdCkgLyBVLl9fdmFsdWVbYV1bYV1cbiAgfVxuICByZXR1cm4geFxufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBzb2x2ZVxuICogQGRlc2MgSGVscGVyIGZ1bmN0aW9uIGZvciB4QSA9IGIgc29sdmVyXG4gKiBAcGFyYW0gblxuICogQHBhcmFtIExcbiAqIEBwYXJhbSBVXG4gKiBAcGFyYW0gYlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb2x2ZSAobiwgTCwgVSwgYikge1xuICBjb25zdCBjID0gc29sdmVMKG4sIEwsIGIpXG4gIHJldHVybiBzb2x2ZVUobiwgVSwgYywgYilcbn1cbiIsImltcG9ydCBtYXAgZnJvbSAnZnVuLmpzL3NyYy9tYXAnXG5pbXBvcnQgY3VycnkgZnJvbSAnZnVuLmpzL3NyYy9jdXJyeSdcblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhbnNwb3NlXG4gKiBAZGVzYyBUcmFuc3Bvc2VzIGEgYXJyYXkgb2YgYXJyYXlzIHVzaW5nIHRoZSBNYXRyaXgubWFwIGZ1bmN0aW9uXG4gKiBAcGFyYW0gbSB7QXJyYXl9XG4gKiBAcGFyYW0gaWR4IHtOdW1iZXJ9XG4gKiBAcmV0dXJuIHtNYXRyaXh9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KChwcmV2LCBuZXh0KSA9PiBtYXAoKGl0ZW0sIGkpID0+IChwcmV2W2ldIHx8IFtdKS5jb25jYXQobmV4dFtpXSkpKG5leHQpKVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBmdW5jdGlvbiB3aXRoIGFyaXR5IDFcbiAqIEBmdW5jdGlvbiBjdXJyeTFcbiAqIEBwcml2YXRlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJ5MSAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQgKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0aGlzXG4gICAgICA6IGZuKGEpXG4gIH1cbn1cbiIsIi8qKlxuICogQ2hlY2tzIGlmIGJvdGggcHJlZGljYXRlcyBhcmUgdHJ1ZVxuICpcbiAqIEBmdW5jdGlvbiBhbmRcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgYm90aCBwcmVkaWNhdGVzIGFyZSB0cnVlXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnICh4LCB5KSAtPiBib29sZWFuXG4gKiBAcGFyYW0geyp9IHggLSBBIHByZWRpY2F0ZVxuICogQHBhcmFtIHsqfSB5IC0gQSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gYW5kICh4LCB5KSB7XG4gIHJldHVybiB4ICYmIHlcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gYXJyYXlDb25jYXRcbiAqIEBwYXJhbSBhMVxuICogQHBhcmFtIGEyXG4gKiBAcmV0dXJucyB7VFtdfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdChhLCBiKVxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIEBmdW5jdGlvbiBlcXVhbHNBcnJheVxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIGZvciBkZWVwIGNvbXBhcmlzb24gb2YgYXJyYXlzXG4gKiBAcGFyYW0ge2F9IHggLSBPYmplY3QgdG8gY29tcGFyZSBvZiB0eXBlIGFcbiAqIEBwYXJhbSB7YX0geSAtIE9iamVjdCB4IHRvIGNvbXBhcmUgd2l0aCBvYmplY3QgeFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzQXJyYXkgKHgsIHkpIHtcbiAgaWYgKHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub3QoZXF1YWxzKHhbaV0sIHlbaV0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn0pXG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQGRlc2NyaXB0aW9uIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBtYXBwaW5nIG92ZXIgdGhlIHByb3ZpZGVkIGFycmF5IGFuZCBjYWxsaW5nIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2NiRnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gbW9kaWZ5IHRoZSBpdGVtXG4gKiBAcGFyYW0geyp9IGluaXQgLSBJbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBhIC0gQXJyYXkgd2l0aCBpdGVtcyB0byBtb2RpZnkgYnkgdGhlIGNiIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhbGlhcyByZWR1Y2VcbiAqIEBzaW5jZSAxLjAuMlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBmb2xkKGFkZCwgMCwgWzEsMSwxXSlcbiAqIC8vIHJlc3VsdCA9IDNcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBjYkZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IHIgLSBBY2N1bXVsYXRvciB3aGljaCBhY2N1bXVsYXRlcyB0aGUgY2FsbGJhY2sncyByZXR1cm4gdmFsdWVzXG4gKiBAcGFyYW0geyp9IGl0ZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV5IG9mIHRoZSBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpbml0aWFsIGFycmF5XG4gKiBAcmV0dXJuIHsqfVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gaW5pdFxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHIgPSBjYihyLCBhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBhbiBhcnJheSwgYXV0b2N1cnJpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gT2JqZWN0IHRvIHZlcmlmaXlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAc2luY2UgMS4wLjJcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgcmVzdWx0ID0gaXNBcnJheShbMSwxLDFdKVxuICogLy8gcmVzdWx0ID0gdHJ1ZVxuICovXG5cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0FycmF5JylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIE1hcHMgb3ZlciBhbiBhcnJheSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtJdGVyYWJsZX0gYVxuICogQHJldHVybiB7SXRlcmFibGV9XG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAZXhhbXBsZVxuICpcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoaWRlbnRpdHksIFswLDIsM10pXG4gKiAgLy8gcmVzdWx0ID0gWzAsMiwzXVxuICogIGNvbnN0IGFkZDIgPSBhZGQoMilcbiAqICBjb25zdCByZXN1bHQgPSBtYXAoYWRkMiwgWzAsMiwzXSlcbiAqICAvLyByZXN1bHQgPSBbMiw0LDVdXG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gYS5sZW5ndGhcbiAgY29uc3QgciA9IG5ldyBBcnJheShsKVxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHJbaV0gPSBjYihhW2ldLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gaXNcbiAqIEBkZXNjcmlwdGlvbiBDdXJyaWVkIGZ1bmN0aW9uIHRoYXQgdmVyaWZpZXMgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50IGlzIGEgYm9vbGVhblxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBJdGVtIHRvIHZlcmlmeVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ0Jvb2xlYW4nKVxuIiwiLyoqXG4gKiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICpcbiAqIEBmdW5jdGlvbiBjb25jYXRcbiAqIEBkZXNjcmlwdGlvbiBDb25jYXRlbmF0ZXMgMiBpdGVtcyB0b2dldGhlclxuICogQHNpbmNlIHYxLjAuNFxuICogQHBhcmFtIHthfSBhIC0gTGVmdCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcGFyYW0ge2F9IGIgLSByaWdodCBzaWRlIG9mIHRoZSBjb25jYXRlbmF0aW9uXG4gKiBAcmV0dXJuIHthfSBDb25jYXRlbmF0ZWQgaXRlbVxuICoqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBhcnJheUNvbmNhdCBmcm9tICcuL2FycmF5L2NvbmNhdCdcbmltcG9ydCBzdHJpbmdDb25jYXQgZnJvbSAnLi9zdHJpbmcvY29uY2F0J1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgY29uc3QgdHlwZU1hcCA9IHtcbiAgICAnU3RyaW5nJzogc3RyaW5nQ29uY2F0LFxuICAgICdBcnJheSc6IGFycmF5Q29uY2F0XG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oYSwgYilcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyoqXG4gKiBAZnVuY3Rpb24gY3VycnlcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycnkgKGZ1bikge1xuICBjb25zdCBhcmdzbGVuID0gZnVuLmxlbmd0aFxuXG4gIGlmIChhcmdzbGVuID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1blxuICB9XG4gIHJldHVybiBjcmVhdGVSZWN1cnNlcihbXSlcblxuICBmdW5jdGlvbiByZWN1cnNlIChhY2MsIGFyZ3MpIHtcbiAgICBjb25zdCBfYWNjID0gYWNjLmNvbmNhdChhcmdzKVxuICAgIHJldHVybiBfYWNjLmxlbmd0aCA8IGFyZ3NsZW5cbiAgICAgID8gY3JlYXRlUmVjdXJzZXIoX2FjYylcbiAgICAgIDogZnVuLmFwcGx5KHRoaXMsIF9hY2MpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSZWN1cnNlciAoYWNjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWN1cnNlKGFjYywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaWVyaWNreC5sZW4gb24gMDEvMDQvMjAxNy5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdEYXRlJylcbiIsIi8qKlxuXG4gKiBAZnVuY3Rpb24gZW1wdHlcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoZSBlbXB0eSBlcXVpdmFsZW50IG9mIHRoZSBmaXJzdCBhcmd1bWVudFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtcHR5ICh4KSB7XG4gIHJldHVybiBuZXcgeC5jb25zdHJ1Y3RvcigpXG59O1xuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBlcXVhbHNcbiAqIEBkZXNjcmlwdGlvbiBBdXRvY3VycmllZCBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgZXF1YWxpdHkgb2YgMiBpdGVtc1xuICogQHBhcmFtIHsqfSB4IC0gTGVmdCBzaWRlIG9mIHRoZSBlcXVhbGl0eSBjaGVja1xuICogQHBhcmFtIHsqfSB5IC0gUmlnaHQgc2lkZSBvZiB0aGUgZXF1YWxpdHkgY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG5hbiA9IE51bWJlci5OYU5cbiAqIGVxdWFsKG5hbiwgbmFuKSAvLyByZXR1cm5zIHRydWVcbiAqXG4gKiBjb25zdCBhcnIxID0gWzAsIDEsIDIsIDNdXG4gKiBjb25zdCBhcnIyID0gW251bGwsIDEsIDIsIDNdXG4gKiBlcXVhbHMoYXJyMSwgYXJyMikgLy8gcmV0dXJucyBmYWxzZVxuICpcbiAqIGVxdWFscyhuZXcgT2JqZWN0KHsnYSc6IDAsICdiJzogMX0pLCB7J2EnOiAwLCAnYic6IDF9KSAvLyB0cnVlXG4gKlxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi9leGlzdHMnXG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4vaWRlbnRpY2FsJ1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IG5vdCBmcm9tICcuL25vdCdcbmltcG9ydCBvciBmcm9tICcuL29yJ1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2lzJ1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9hcnJheS9pcydcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9ib29sZWFuL2lzJ1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vbnVtYmVyL2lzJ1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vc3RyaW5nL2lzJ1xuaW1wb3J0IGlzRGF0ZSBmcm9tICcuL2RhdGUvaXMnXG5pbXBvcnQgZXF1YWxzQXJyYXkgZnJvbSAnLi9hcnJheS9lcXVhbHMnXG5pbXBvcnQgZXF1YWxzT2JqZWN0IGZyb20gJy4vb2JqZWN0L2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZXF1YWxzICh4LCB5KSB7XG4gIGlmIChpZGVudGljYWwoeCwgeSkpIHJldHVybiB0cnVlXG5cbiAgaWYgKHR5cGUoeCkgIT09IHR5cGUoeSkpIHJldHVybiBmYWxzZVxuXG4gIGlmIChvcihub3QoZXhpc3RzKHgpKSwgbm90KGV4aXN0cyh5KSkpKSByZXR1cm4gZmFsc2VcblxuICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlXG5cbiAgaWYgKGlzU3RyaW5nKHgpIHx8IGlzQm9vbGVhbih4KSB8fCBpc051bWJlcih4KSB8fCBpc0RhdGUoeCkpIHtcbiAgICByZXR1cm4gaWRlbnRpY2FsKHgudmFsdWVPZigpLCB5LnZhbHVlT2YoKSlcbiAgfVxuICBpZiAoaXNBcnJheSh4KSkge1xuICAgIHJldHVybiBlcXVhbHNBcnJheSh4LCB5KVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHgpKSB7XG4gICAgcmV0dXJuIGVxdWFsc09iamVjdCh4LCB5KVxuICB9XG4gIHJldHVybiBmYWxzZVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGV4aXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGlzdHMgKHgpIHtcbiAgcmV0dXJuICEoeCA9PSBudWxsKVxufTtcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtXG4gKlxuICogQGZ1bmN0aW9uIGZvbGRcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgbGlrZSBvYmplY3QgYW5kIGNhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGl0ZW1cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHJlY2VpdmVzIDQgdmFsdWVzOiB0aGUgYWNjdW11bGF0b3IsIHRoZSBpdGVtLCB0aGUgaW5kZXgsIGFuZCB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gaW5pdCAtIHRoZSB0aGUgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGEgdGhlIGFycmF5IGxpa2UgaXRlbSB0byBpdGVyYXRlIG92ZXJcbiAqIEByZXR1cm4geyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlGb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcbmltcG9ydCBvYmplY3RGb2xkIGZyb20gJy4vb2JqZWN0L2ZvbGQnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIGZvbGQgKGNiLCBpbml0LCBhKSB7XG4gIGNvbnN0IHR5cGVNYXAgPSB7XG4gICAgJ09iamVjdCc6IG9iamVjdEZvbGQsXG4gICAgJ0FycmF5JzogYXJyYXlGb2xkXG4gIH1cbiAgcmV0dXJuIHR5cGVNYXBbdHlwZShhKV0oY2IsIGluaXQsIGEpXG59KVxuIiwiLyoqXG5cbiAqIEBmdW5jdGlvbiBpZGVudGljYWxcbiAqIEBkZXNjcmlwdGlvbiBjaGVja3MgZm9yIGlkZW50aW50aWNhbCBpdGVtc1xuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBpc05hbiBmcm9tICcuL251bWJlci9pc05hbidcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaWRlbnRpY2FsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICByZXR1cm4gMSAvIHggPT09IDEgLyB5XG4gIH1cbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAhIShpc05hbih4KSAmJiBpc05hbih5KSlcbn0pXG4iLCIvKipcbiAqIEBmdW5jdGlvbiBpc1xuICogQGRlc2NyaXB0aW9uIFZlcmlmaWVzIHRoZSB0eXBlIG9mIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICpcbiAqL1xuXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gaXMgKEN0b3IsIHZhbCkge1xuICByZXR1cm4gdHlwZSh2YWwpID09PSBDdG9yXG59KVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpZXJpY2t4LmxlbiBvbiAwMS8wNC8yMDE3LlxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5jb25zdCBpc0Z1bmN0aW9uID0gaXMoJ0Z1bmN0aW9uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJdGVyIChpdGVyKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSlcbn1cbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIEl0ZXJhdG9yIGFuZCBhcHBsaWVzIGEgZnVuY3Rpb25cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaW5jZSB2MS4wLjNcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IHtifSAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBhXG4gKiBAcmV0dXJuIHtJdGVyYXRvcn1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYWxsYmFjaywgaXRlcmF0b3IpIHtcbiAgbGV0IHIgPSBbXVxuICBmb3IgKGxldCBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCk7IG5leHRWYWx1ZS5kb25lICE9PSB0cnVlOyBuZXh0VmFsdWUgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICByLnB1c2goY2FsbGJhY2soaXRlcmF0b3IudmFsdWUoKSkpXG4gIH1cbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIE1hcHMgb3ZlciBhbiBpdGVyYWJsZSBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uIG1hcFxuICogQGRlc2NyaXB0aW9uIEF1dG9jdXJyaWVkIGZ1bmN0aW9uIHdoaWNoIG1hcHMgb3ZlciBhbiBpdGVyYWJsZS5cbiAqIEBzaW5jZSB2MS4wLjJcbiAqIEBzaWcgKGN1cnJlbnRWYWx1ZSwgaWR4LCBbYV0pIC0+IGIgLT4gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9hcnJheS9tYXAnXG5pbXBvcnQgb2JqZWN0TWFwIGZyb20gJy4vb2JqZWN0L21hcCdcbmltcG9ydCBtYXBNYXAgZnJvbSAnLi9tYXAvbWFwJ1xuaW1wb3J0IHN0cmluZ01hcCBmcm9tICcuL3N0cmluZy9tYXAnXG5pbXBvcnQgaXRlcmF0b3JNYXAgZnJvbSAnLi9pdGVyYXRvci9tYXAnXG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnXG5pbXBvcnQgaXNJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjdXJyeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYi5jYWxsKHRoaXMsIGEuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH0pXG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBvYmplY3RNYXAoY2IsIGEpXG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIHJldHVybiBzdHJpbmdNYXAoY2IsIGEpXG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBtYXBNYXAoY2IsIGEpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIGFycmF5TWFwKGNiLCBhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNJdGVyYXRvcihhKVxuICAgICAgICA/IGl0ZXJhdG9yTWFwKGNiLCBhKVxuICAgICAgICA6IGFycmF5TWFwKGNiLCBhKVxuICB9XG59KVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBNYXAgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4ge2J9IC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7TWFwfSBhXG4gKiBAcmV0dXJuIHtNYXB9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi4vY3VycnknXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vZW1wdHknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1hcCAoY2IsIGEpIHtcbiAgY29uc3QgciA9IGVtcHR5KGEpXG4gIGEuZm9yRWFjaCgodiwgaywgbWFwKSA9PiB7XG4gICAgci5zZXQoaywgY2IodiwgaywgbWFwKSlcbiAgfSlcbiAgcmV0dXJuIHJcbn0pXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIGxhcmdlc3Qgb2YgdGhlIDIgYXJndW1lbnRzIHByb3ZpZGVkXG4gKlxuICogQGZ1bmN0aW9uIG1heFxuICogQHNpbmNlIHYxLjAuMlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWF4IChhLCBiKSB7XG4gIHJldHVybiBiID4gYSA/IGIgOiBhXG59KVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSBzbWFsbGVzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqXG4gKiBAZnVuY3Rpb24gbWluXG4gKiBAZGVzYyBSZXR1cm5zIHRoZSBzbWFsbGVzdCBvZiB0aGUgMiBhcmd1bWVudHMgcHJvdmlkZWRcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5KGZ1bmN0aW9uIG1pbiAoYSwgYikge1xuICByZXR1cm4gYiA8IGEgPyBiIDogYVxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG5vdFxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbm90ICh4KSB7XG4gIHJldHVybiAheFxufSlcbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuaW1wb3J0IGlzIGZyb20gJy4uL2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBpcygnTnVtYmVyJylcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGlzTmFOXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIG51bWJlciBpcyBOQU5cblxuICovXG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pcydcbmltcG9ydCBhbmQgZnJvbSAnLi4vYW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc05hbiAoeCkge1xuICByZXR1cm4gYW5kKGlzTnVtYmVyKHgpLCBpc05hTih4KSlcbn07XG4iLCIvKipcblxuICogZXF1YWxzXG4gKiBjaGVja3MgZm9yIGVxdWFsaXR5XG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBleGlzdHMgZnJvbSAnLi4vZXhpc3RzJ1xuaW1wb3J0IG5vdCBmcm9tICcuLi9ub3QnXG5pbXBvcnQgZXF1YWxzIGZyb20gJy4uL2VxdWFscydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoKHgsIHkpID0+IHtcbiAgZm9yIChsZXQga2V5WCBpbiB4KSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgIGlmIChub3QoZXF1YWxzKHhba2V5WF0sIHlba2V5WF0pKSkgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGxldCBrZXlZIGluIHkpIHtcbiAgICBpZiAobm90KGV4aXN0cyh4W2tleVldKSkgJiYgZXhpc3RzKHlba2V5WV0pKSByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZm9sZFxuICogQHByaXZhdGVcbiAqXG4gKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gZm9sZCAoY2IsIGluaXQsIG8pIHtcbiAgY29uc3QgayA9IGtleXMobylcbiAgbGV0IGkgPSAtMVxuICBjb25zdCBsID0gay5sZW5ndGhcbiAgbGV0IHIgPSBPYmplY3QoaW5pdClcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByID0gY2Iociwgb1trW2ldXSwga1tpXSwgbylcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuXG4gKi9cbmltcG9ydCBpcyBmcm9tICcuLi9pcydcblxuZXhwb3J0IGRlZmF1bHQgaXMoJ09iamVjdCcpXG4iLCIvKipcbiAqIFJldHVybnMgdGhlIG93biBrZXlzIG9mIGFuIG9iamVjdCBhcyBhbiBBcnJheVxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyBhIC0+IFtiXVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24ga2V5cyAoYSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0KGEpKVxufSlcbiIsIi8qKlxuICogTWFwcyBvdmVyIGFuIG9iamVjdCBhbmQgYXBwbGllcyBhIGZ1bmN0aW9uXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2luY2UgdjEuMC4yXG4gKiBAc2lnIChjdXJyZW50VmFsdWUsIGlkeCwgW2FdKSAtPiB7Yn0gLT4gW2JdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqKi9cbmltcG9ydCBjdXJyeSBmcm9tICcuLi9jdXJyeSdcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9lbXB0eSdcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cydcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gbWFwIChjYiwgYSkge1xuICBjb25zdCBrID0ga2V5cyhhKVxuICBsZXQgaSA9IC0xXG4gIGNvbnN0IGwgPSBrLmxlbmd0aFxuICBjb25zdCByID0gZW1wdHkoYSlcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByW2tbaV1dID0gY2IoYVtrW2ldXSwga1tpXSwgYSlcbiAgfVxuICByZXR1cm4gclxufSlcbiIsIi8qKlxuICogQGZ1bmN0aW9uIG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIG9uZSBvciB0aGUgb3RoZXIgaXMgdHJ1ZVxuICovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gb3IgKHgsIHkpIHtcbiAgcmV0dXJuIHggfHwgeVxufSlcbiIsIi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGxpa2Ugb2JqZWN0IGFuZCBjYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBpdGVtLCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBpdGVyYXRvclxuICogVGhlIGluaXRpYWwgdmFsdWUgaXMgdGFrZW4gZnJvbSB0aGUgaXRlcmF0b3IuXG4gKiBSZWR1Y2Ugd29ya3Mgb25seSBvbiBBcnJheXMgYW5kIHJldHVybnMgYSB2YWx1ZW9mIHRoZSB0eXBlIG9mIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBBcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZWR1Y2VcbiAqIEBkZXNjIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBsaWtlIG9iamVjdCBhbmQgY2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggaXRlbSwgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgaXRlcmF0b3JcbiAqIEBzaW5jZSB2MS4wLjRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gcmVjZWl2ZXMgNCB2YWx1ZXM6IHRoZSBhY2N1bXVsYXRvciwgdGhlIGl0ZW0sIHRoZSBpbmRleCwgYW5kIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheX0gYSAtIFRoZSBpdGVyYXRvciB0byBhcHBseSB0aGUgZnVuY3Rpb25cbiAqIEByZXR1cm4geyp9XG4gKiovXG5pbXBvcnQgY3VycnkgZnJvbSAnLi9jdXJyeSdcbmltcG9ydCBmb2xkIGZyb20gJy4vYXJyYXkvZm9sZCdcblxuZXhwb3J0IGRlZmF1bHQgY3VycnkoZnVuY3Rpb24gcmVkdWNlIChjYiwgYSkge1xuICBjb25zdCBhcnIgPSBhLnNsaWNlKClcbiAgY29uc3QgaW5pdCA9IGFyci5zaGlmdCgpXG4gIHJldHVybiBmb2xkKGNiLCBpbml0LCBhcnIpXG59KVxuIiwiLyoqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIHN0cmluZ0NvbmNhdFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmNhdCAoYSwgYikgeyAvLyB1c2UgZnVuY3Rpb24oKSwgYXJyb3cgZnVuY3Rpb24gZG9lc24ndCBiaW5kIGFyZ3VtZW50c1xuICByZXR1cm4gU3RyaW5nKGEpICsgU3RyaW5nKGIpXG59XG4iLCIvKipcblxuICovXG5pbXBvcnQgaXMgZnJvbSAnLi4vaXMnXG5cbmV4cG9ydCBkZWZhdWx0IGlzKCdTdHJpbmcnKVxuIiwiLyoqXG4gKiBNYXBzIG92ZXIgYSBzdHJpbmcgYW5kIGFwcGxpZXMgYSBmdW5jdGlvblxuICpcbiAqIEBmdW5jdGlvblxuICogQHNpbmNlIHYxLjAuMlxuICogQHNpZyAoY3VycmVudFZhbHVlLCBpZHgsIFthXSkgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGFcbiAqIEByZXR1cm4ge0l0ZXJhYmxlfVxuICoqL1xuaW1wb3J0IGN1cnJ5IGZyb20gJy4uL2N1cnJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeShmdW5jdGlvbiBtYXAgKGNiLCBhKSB7XG4gIGxldCBpID0gLTFcbiAgY29uc3QgbCA9IGEubGVuZ3RoXG4gIGxldCByID0gJydcbiAgd2hpbGUgKCsraSA8IGwpIHtcbiAgICByICs9IGNiKGEuY2hhckF0KGkpLCBpLCBhKVxuICB9XG4gIHJldHVybiByXG59KVxuIiwiLyoqXG4gKiBAZnVuY3Rpb24gdHlwZVxuICovXG5pbXBvcnQgY3VycnkxIGZyb20gJy4vX3ByaXZhdGUvY3VycnkxJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyeTEoZnVuY3Rpb24gdHlwZSAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpLnNsaWNlKDgsIC0xKVxufSlcbiIsIi8qKlxuICogQGNsYXNzIEFjdGl2YXRpb25GdW5jdGlvblxuICogQHBhcmFtIGZ1bmNcbiAqIEBwYXJhbSBkZnVuY1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmF0aW9uRnVuY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZnVuYywgZGZ1bmMpIHtcbiAgICB0aGlzLmZ1bmMgPSBmdW5jXG4gICAgdGhpcy5kZnVuYyA9IGRmdW5jXG4gIH1cbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnQGFzdHVhbmF4L2Z1bm1hdHJpeCdcbmltcG9ydCBzaWdtb2lkIGZyb20gJy4vdXRpbC9zaWdtb2lkJ1xuXG4vKipcbiAqIEBjbGFzcyBOZXVyYWxOZXR3b3JrXG4gKiBAcGFyYW0ge051bWJlcn0gaW5wdXROb2Rlc1xuICogQHBhcmFtIHtObWJlcn0gaGlkZGVuTm9kZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvdXRwdXROb2Rlc1xuICovXG5jbGFzcyBOZXVyYWxOZXR3b3JrIHtcbiAgY29uc3RydWN0b3IgKC4uLnZhbHVlcykge1xuICAgIFt0aGlzLmlucHV0Tm9kZXMsIHRoaXMuaGlkZGVuTm9kZXMsIHRoaXMub3V0cHV0Tm9kZXNdID0gdmFsdWVzXG5cbiAgICBjb25zdCBmID0gZSA9PiBNYXRoLnJhbmRvbSgpICogMiAtIDFcbiAgICB0aGlzLndlaWdodHNJaCA9IE1hdHJpeC5yYW5kb20oZiwgdGhpcy5oaWRkZW5Ob2RlcywgdGhpcy5pbnB1dE5vZGVzKVxuICAgIHRoaXMud2VpZ2h0c0hvID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLm91dHB1dE5vZGVzLCB0aGlzLmhpZGRlbk5vZGVzKVxuXG4gICAgdGhpcy5iaWFzSCA9IE1hdHJpeC5yYW5kb20oZiwgdGhpcy5oaWRkZW5Ob2RlcywgMSlcbiAgICB0aGlzLmJpYXNPID0gTWF0cml4LnJhbmRvbShmLCB0aGlzLm91dHB1dE5vZGVzLCAxKVxuXG4gICAgdGhpcy5zZXRBY3RpdmF0aW9uRnVuY3Rpb24oKVxuICAgIHRoaXMuc2V0TGVhcm5pbmdSYXRlKClcblxuICAgIHRoaXMudHlwZSA9ICdOZXVyYWxOZXR3b3JrJ1xuICB9XG59XG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNzZXRBY3RpdmF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUuc2V0QWN0aXZhdGlvbkZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMgPSBzaWdtb2lkKSB7XG4gIHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uID0gZnVuY1xufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNzZXRMZWFybmluZ1JhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWFybmluZ1JhdGVcbiAqL1xuTmV1cmFsTmV0d29yay5wcm90b3R5cGUuc2V0TGVhcm5pbmdSYXRlID0gZnVuY3Rpb24gKGxlYXJuaW5nUmF0ZSA9IDAuMSkge1xuICB0aGlzLmxlYXJuaW5nUmF0ZSA9IGxlYXJuaW5nUmF0ZVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBOZXVyYWxOZXR3b3JrXG4gKiBAZnVuY3Rpb24gTmV1cmFsTmV0d29yayNwcmVkaWN0XG4gKiBAcGFyYW0ge0FycmF5fSBpbnB1dEFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbk5ldXJhbE5ldHdvcmsucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAoaW5wdXRBcnJheSkge1xuICAvLyBHZW5lcmF0aW5nIHRoZSBIaWRkZW4gT3V0cHV0c1xuICBsZXQgaW5wdXRzID0gTWF0cml4LmZyb21BcnJheShpbnB1dEFycmF5KVxuICBsZXQgaGlkZGVuID0gTWF0cml4LmRvdCh0aGlzLndlaWdodHNJaCwgaW5wdXRzKVxuICBoaWRkZW4gPSBNYXRyaXgub2YoaGlkZGVuKS5hZGQodGhpcy5iaWFzSClcbiAgLy8gYWN0aXZhdGlvbiBmdW5jdGlvbiFcbiAgaGlkZGVuID0gaGlkZGVuLm1hcChyb3cgPT4gcm93Lm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5mdW5jKSlcblxuICAvLyBHZW5lcmF0aW5nIHRoZSBvdXRwdXQncyBvdXRwdXQhXG4gIGxldCBvdXRwdXQgPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c0hvLCBoaWRkZW4pXG4gIG91dHB1dCA9IE1hdHJpeC5vZihvdXRwdXQpLmFkZCh0aGlzLmJpYXNPKVxuICBvdXRwdXQgPSBvdXRwdXQubWFwKHJvdyA9PiByb3cubWFwKHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uLmZ1bmMpKVxuICAvLyBTZW5kaW5nIGJhY2sgdG8gdGhlIGNhbGxlciFcbiAgcmV0dXJuIG91dHB1dC50b0FycmF5KClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgTmV1cmFsTmV0d29ya1xuICogQGZ1bmN0aW9uIE5ldXJhbE5ldHdvcmsjdHJhaW5cbiAqIEBwYXJhbSB7QXJyYXl9IGlucHV0QXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHRhcmdldEFycmF5XG4gKi9cbk5ldXJhbE5ldHdvcmsucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24gKGlucHV0QXJyYXksIHRhcmdldEFycmF5KSB7XG4gIC8vIEdlbmVyYXRpbmcgdGhlIEhpZGRlbiBPdXRwdXRzXG4gIGxldCBpbnB1dHMgPSBNYXRyaXguZnJvbUFycmF5KGlucHV0QXJyYXkpXG4gIGxldCBoaWRkZW4gPSBNYXRyaXguZG90KHRoaXMud2VpZ2h0c0loLCBpbnB1dHMpXG5cbiAgaGlkZGVuID0gTWF0cml4Lm9mKGhpZGRlbikuYWRkKHRoaXMuYmlhc0gpXG4gIC8vIGFjdGl2YXRpb24gZnVuY3Rpb24hXG4gIGhpZGRlbiA9IGhpZGRlbi5tYXAocm93ID0+IHJvdy5tYXAodGhpcy5hY3RpdmF0aW9uRnVuY3Rpb24uZnVuYykpXG5cbiAgLy8gR2VuZXJhdGluZyB0aGUgb3V0cHV0J3Mgb3V0cHV0IVxuICBsZXQgb3V0cHV0cyA9IE1hdHJpeC5kb3QodGhpcy53ZWlnaHRzSG8sIGhpZGRlbilcbiAgb3V0cHV0cyA9IE1hdHJpeC5vZihvdXRwdXRzKS5hZGQodGhpcy5iaWFzTylcbiAgb3V0cHV0cyA9IG91dHB1dHMubWFwKHJvdyA9PiByb3cubWFwKHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uLmZ1bmMpKVxuXG4gIC8vIENvbnZlcnQgYXJyYXkgdG8gbWF0cml4IG9iamVjdFxuICBsZXQgdGFyZ2V0cyA9IE1hdHJpeC5mcm9tQXJyYXkodGFyZ2V0QXJyYXkpXG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBlcnJvclxuICAvLyBFUlJPUiA9IFRBUkdFVFMgLSBPVVRQVVRTXG4gIGxldCBvdXRwdXRFcnJvcnMgPSBNYXRyaXgub2YodGFyZ2V0cykuc3VidHJhY3Qob3V0cHV0cylcblxuICAvLyBsZXQgZ3JhZGllbnQgPSBvdXRwdXRzICogKDEgLSBvdXRwdXRzKTtcbiAgLy8gQ2FsY3VsYXRlIGdyYWRpZW50XG4gIGxldCBncmFkaWVudHMgPSBvdXRwdXRzLm1hcChyb3cgPT4gcm93Lm1hcCh0aGlzLmFjdGl2YXRpb25GdW5jdGlvbi5kZnVuYykpXG4gIGdyYWRpZW50cyA9IGdyYWRpZW50cy5tdWx0aXBseShvdXRwdXRFcnJvcnMpXG4gIGdyYWRpZW50cyA9IGdyYWRpZW50cy5tdWx0aXBseSh0aGlzLmxlYXJuaW5nUmF0ZSlcblxuICAvLyBDYWxjdWxhdGUgZGVsdGFzXG4gIGxldCBoaWRkZW5UID0gTWF0cml4LnRyYW5zcG9zZShoaWRkZW4pXG4gIGxldCB3ZWlnaHRIb0RlbHRhcyA9IE1hdHJpeC5kb3QoZ3JhZGllbnRzLCBoaWRkZW5UKVxuXG4gIC8vIEFkanVzdCB0aGUgd2VpZ2h0cyBieSBkZWx0YXNcbiAgdGhpcy53ZWlnaHRzSG8gPSBNYXRyaXgub2YodGhpcy53ZWlnaHRzSG8pLmFkZCh3ZWlnaHRIb0RlbHRhcylcblxuICAvLyBBZGp1c3QgdGhlIGJpYXMgYnkgaXRzIGRlbHRhcyAod2hpY2ggaXMganVzdCB0aGUgZ3JhZGllbnRzKVxuICB0aGlzLmJpYXNPID0gTWF0cml4Lm9mKHRoaXMuYmlhc08pLmFkZChncmFkaWVudHMpXG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBoaWRkZW4gbGF5ZXIgZXJyb3JzXG4gIGxldCB3aG9UID0gTWF0cml4LnRyYW5zcG9zZSh0aGlzLndlaWdodHNIbylcbiAgbGV0IGhpZGRlbkVycm9ycyA9IE1hdHJpeC5kb3Qod2hvVCwgb3V0cHV0RXJyb3JzKVxuXG4gIC8vIENhbGN1bGF0ZSBoaWRkZW4gZ3JhZGllbnRcbiAgbGV0IGhpZGRlbkdyYWRpZW50ID0gTWF0cml4Lm9mKGhpZGRlbilcbiAgICAubWFwKHJvdyA9PiByb3cubWFwKHRoaXMuYWN0aXZhdGlvbkZ1bmN0aW9uLmRmdW5jKSlcbiAgICAubXVsdGlwbHkoaGlkZGVuRXJyb3JzKVxuICAgIC5tdWx0aXBseSh0aGlzLmxlYXJuaW5nUmF0ZSlcblxuICAvLyBDYWxjdWF0ZSBpbnB1dC0+aGlkZGVuIGRlbHRhc1xuICBsZXQgaW5wdXRzVCA9IE1hdHJpeC50cmFuc3Bvc2UoaW5wdXRzKVxuXG4gIGxldCB3ZWlnaHRJaERlbHRhcyA9IE1hdHJpeC5kb3QoaGlkZGVuR3JhZGllbnQsIGlucHV0c1QpXG5cbiAgdGhpcy53ZWlnaHRzSWggPSBNYXRyaXgub2YodGhpcy53ZWlnaHRzSWgpLmFkZCh3ZWlnaHRJaERlbHRhcylcbiAgLy8gQWRqdXN0IHRoZSBiaWFzIGJ5IGl0cyBkZWx0YXMgKHdoaWNoIGlzIGp1c3QgdGhlIGdyYWRpZW50cylcbiAgdGhpcy5iaWFzSCA9IE1hdHJpeC5vZih0aGlzLmJpYXNIKS5hZGQoaGlkZGVuR3JhZGllbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ldXJhbE5ldHdvcmtcbiIsIi8qKlxuICogQGNsYXNzIFBlcmNlcHRyb25cbiAqIEBjbGFzc2Rlc2MgUGVyY2VwdHJvbiB0byB0cmFpbiBhbmQgcHJlZGljdFxuICogQHNlZSBvZlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoWzAuMjM2NTY5OCwgMC40NTY3ODk3LCAwLjk1OTg5ODk4LCAtMC40NTc4Nzg3ODddKVxuICpcbiAqL1xubGV0IFBlcmNlcHRyb24gPSBmdW5jdGlvbiAod2VpZ2h0cykge1xuICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzIHx8IFtdXG59XG5cbi8qKlxuICogQG1lbWJlck9mIFBlcmNlcHRyb25cbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBQZXJjZXB0cm9uLm9mXG4gKiBAZGVzYyBDcmVhdGVzIGEgUGVyY2VwdHJvbiBvYmplY3RcbiAqIEBwYXJhbSB3ZWlnaHRzIHthcnJheX0gV2VpZ2h0cyBmb3IgcHJlZGljdGluZ1xuICogQHJldHVybnMge1BlcmNlcHRyb259XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHdlaWdodHMgPSBbMC4xMjM0NTYsIDAuNDU4Nzg5LCAwLjk5ODc0NTRdXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2Yod2VpZ2h0cylcbiAqXG4gKi9cblBlcmNlcHRyb24ub2YgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBQZXJjZXB0cm9uKSByZXR1cm4gdmFsXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUGVyY2VwdHJvbikge1xuICAgIHRoaXMud2VpZ2h0cyA9IHZhbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcmV0dXJuIG5ldyBQZXJjZXB0cm9uKHZhbClcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuUGVyY2VwdHJvbi5wcm90b3R5cGUudHlwZSA9ICdQZXJjZXB0cm9uJ1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQZXJjZXB0cm9uXG4gKiBAZnVuY3Rpb24gUGVyY2VwdHJvbiNwcmVkaWN0XG4gKiBAcGFyYW0gcm93IHtBcnJheX0gQXJyYXkgb2YgdmFsdWVzIHRvIHByZWRpY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoKVxuICogY29uc3QgdHJhaW4gID0gWy4uLl0gLy8gZGF0YXNldDogW1swLDEsMl0sIFsxLDIsM11dXG4gKiBtLnRyYWluKHRyYWluLCAwLjEsIDEwMDAwKVxuICogbS5wcmVkaWN0KFsxLDIsMV0pIC8vIHJldHVybnMgMSBvciAwXG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAocm93KSB7XG4gIHZhciBhY3RpdmF0aW9uID0gdGhpcy53ZWlnaHRzWzBdXG4gIHJvdy5mb3JFYWNoKCh4LCBpKSA9PiB7XG4gICAgYWN0aXZhdGlvbiArPSB0aGlzLndlaWdodHNbaSArIDFdICogeFxuICB9KVxuICByZXR1cm4gYWN0aXZhdGlvbiA+PSAwID8gMSA6IDBcbn1cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGVyY2VwdHJvblxuICogQGZ1bmN0aW9uIFBlcmNlcHRyb24jdHJhaW5cbiAqIEBwYXJhbSB0cmFpbiB7QXJyYXl9IERhdGFzZXQgdG8gdHJhaW4gdGhlIHByZWNlcHRyb25cbiAqIEBwYXJhbSBsUmF0ZSB7TnVtYmVyfSBTZXQgdGhlIGxlYXJuaW5nIHJhdGUgb2YgdGhlIHBlcmNlcHRyb25cbiAqIEBwYXJhbSBuRXBvY2gge051bWJlcn0gU2V0IHRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byB0cmFpbiB0aGUgcGVyY2VwdHJvblxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtID0gIFBlcmNlcHRyb24ub2YoKVxuICogY29uc3QgdHJhaW4gID0gWy4uLl0gLy8gZGF0YXNldDogW1swLDEsMl0sIFsxLDIsM11dXG4gKiBtLnRyYWluKHRyYWluLCAwLjEsIDEwMDAwKVxuICogbS53ZWlnaHRzID0gWzAuMjEzMTMxLCAtMC40NTQ2NCwgMC43ODk3OTddXG4gKlxuICovXG5QZXJjZXB0cm9uLnByb3RvdHlwZS50cmFpbiA9IGZ1bmN0aW9uICh0cmFpbiwgbFJhdGUsIG5FcG9jaCkge1xuICB0aGlzLndlaWdodHMgPSBBcnJheS5hcHBseShudWxsLCBBcnJheSh0cmFpblswXS5sZW5ndGgpKS5tYXAoeCA9PiAwKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5FcG9jaDsgaSsrKSB7XG4gICAgdHJhaW4uZm9yRWFjaCgoeCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBleHBlY3RlZCA9IHguc2xpY2UoLTEpWzBdXG4gICAgICBjb25zdCByb3cgPSB4LnNsaWNlKDAsIC0xKVxuICAgICAgY29uc3QgcHJlZGljdGlvbiA9IHRoaXMucHJlZGljdChyb3cpXG4gICAgICBjb25zdCBlcnJvciA9IGV4cGVjdGVkIC0gcHJlZGljdGlvblxuICAgICAgcm93LmZvckVhY2goKHksIGopID0+IHtcbiAgICAgICAgdGhpcy53ZWlnaHRzW2ogKyAxXSArPSBsUmF0ZSAqIGVycm9yICogeVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmNlcHRyb25cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyY2VwdHJvbiB9IGZyb20gJy4vUGVyY2VwdHJvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV1cmFsTmV0d29yayB9IGZyb20gJy4vTmV1cmFsTmV0d29yaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aXZhdGlvbkZ1bmN0aW9uIH0gZnJvbSAnLi9BY3RpdmF0aW9uRnVuY3Rpb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpZ21vaWQgfSBmcm9tICcuL3V0aWwvc2lnbW9pZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFuaCB9IGZyb20gJy4vdXRpbC90YW5oJ1xuIiwiaW1wb3J0IEFjdGl2YXRpb25GdW5jdGlvbiBmcm9tICcuLi9BY3RpdmF0aW9uRnVuY3Rpb24nXG5cbi8qKlxuICogQGZ1bmN0aW9uIHNpZ21vaWRcbiAqIEB0eXBlIHtBY3RpdmF0aW9uRnVuY3Rpb259XG4gKi9cbmNvbnN0IHNpZ21vaWQgPSBuZXcgQWN0aXZhdGlvbkZ1bmN0aW9uKFxuICB4ID0+IDEgLyAoMSArIE1hdGguZXhwKC14KSksXG4gIHkgPT4geSAqICgxIC0geSlcbilcbmV4cG9ydCBkZWZhdWx0IHNpZ21vaWRcbiIsImltcG9ydCBBY3RpdmF0aW9uRnVuY3Rpb24gZnJvbSAnLi4vQWN0aXZhdGlvbkZ1bmN0aW9uJ1xuXG4vKipcbiAqIEBmdW5jdGlvbiB0YW5oXG4gKiBAdHlwZSB7QWN0aXZhdGlvbkZ1bmN0aW9ufVxuICovXG5jb25zdCB0YW5oID0gbmV3IEFjdGl2YXRpb25GdW5jdGlvbihcbiAgeCA9PiBNYXRoLnRhbmgoeCksXG4gIHkgPT4gMSAtICh5ICogeSlcbilcbmV4cG9ydCBkZWZhdWx0IHRhbmhcbiJdLCJzb3VyY2VSb290IjoiIn0=