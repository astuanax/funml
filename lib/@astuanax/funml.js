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
 * @classdesc Perceptron to train and execute
 * @see of
 * @example
 *
 * const m =  Perceptron.of()
 *
 */
var Perceptron = function Perceptron(weights) {
  this.weights = weights || [];
};
/**
 * @memberOf Matrix
 * @static
 * @function of
 * @desc Creates a Matrix object and flattens the Matrix
 * @param val {array|function} An array of arrays
 * @returns {Matrix}
 * @example
 *
 * const m =  Perceptron.of()
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

Perceptron.prototype.type = 'Perceptron';
/**
 * @function predict
 * @param row
 * @param weights
 * @returns {number}
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
 * @param train
 * @param lRate
 * @param nEpoch
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

var _Perceptron = _interopRequireDefault(__webpack_require__(/*! ./Perceptron */ "./src/Perceptron.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bhc3R1YW5heC9mdW5tbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9zcmMvUGVyY2VwdHJvbi5qcyIsIndlYnBhY2s6Ly9AYXN0dWFuYXgvZnVubWwvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiUGVyY2VwdHJvbiIsIndlaWdodHMiLCJvZiIsInZhbCIsInByb3RvdHlwZSIsInR5cGUiLCJwcmVkaWN0Iiwicm93IiwiYWN0aXZhdGlvbiIsImZvckVhY2giLCJ4IiwiaSIsInRyYWluIiwibFJhdGUiLCJuRXBvY2giLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwibWFwIiwiaWR4IiwiZXhwZWN0ZWQiLCJzbGljZSIsInByZWRpY3Rpb24iLCJlcnJvciIsInkiLCJqIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7OztBQVNBLElBQUlBLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLE9BQVYsRUFBbUI7QUFDbEMsT0FBS0EsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBWUFELFVBQVUsQ0FBQ0UsRUFBWCxHQUFnQixVQUFVQyxHQUFWLEVBQWU7QUFDN0IsTUFBSUEsR0FBRyxZQUFZSCxVQUFuQixFQUErQixPQUFPRyxHQUFQOztBQUMvQixNQUFJLGdCQUFnQkgsVUFBcEIsRUFBZ0M7QUFDOUIsU0FBS0MsT0FBTCxHQUFlRSxHQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFJSCxVQUFKLENBQWVHLEdBQWYsQ0FBUDtBQUNELENBUEQ7O0FBU0FILFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQkMsSUFBckIsR0FBNEIsWUFBNUI7QUFFQTs7Ozs7OztBQU1BTCxVQUFVLENBQUNJLFNBQVgsQ0FBcUJFLE9BQXJCLEdBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUFBOztBQUM1QyxNQUFJQyxVQUFVLEdBQUcsS0FBS1AsT0FBTCxDQUFhLENBQWIsQ0FBakI7QUFDQU0sS0FBRyxDQUFDRSxPQUFKLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDcEJILGNBQVUsSUFBSSxLQUFJLENBQUNQLE9BQUwsQ0FBYVUsQ0FBQyxHQUFHLENBQWpCLElBQXNCRCxDQUFwQztBQUNELEdBRkQ7QUFHQSxTQUFPRixVQUFVLElBQUksQ0FBZCxHQUFrQixDQUFsQixHQUFzQixDQUE3QjtBQUNELENBTkQ7QUFRQTs7Ozs7Ozs7QUFNQVIsVUFBVSxDQUFDSSxTQUFYLENBQXFCUSxLQUFyQixHQUE2QixVQUFVQSxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFBQTs7QUFDM0QsT0FBS2IsT0FBTCxHQUFlYyxLQUFLLENBQUNDLEtBQU4sQ0FBWSxJQUFaLEVBQWtCRCxLQUFLLENBQUNILEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssTUFBVixDQUF2QixFQUEwQ0MsR0FBMUMsQ0FBOEMsVUFBQVIsQ0FBQztBQUFBLFdBQUksQ0FBSjtBQUFBLEdBQS9DLENBQWY7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRyxNQUFwQixFQUE0QkgsQ0FBQyxFQUE3QixFQUFpQztBQUMvQkMsU0FBSyxDQUFDSCxPQUFOLENBQWMsVUFBQ0MsQ0FBRCxFQUFJUyxHQUFKLEVBQVk7QUFDeEIsVUFBTUMsUUFBUSxHQUFHVixDQUFDLENBQUNXLEtBQUYsQ0FBUSxDQUFDLENBQVQsRUFBWSxDQUFaLENBQWpCO0FBQ0EsVUFBTWQsR0FBRyxHQUFHRyxDQUFDLENBQUNXLEtBQUYsQ0FBUSxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQVo7O0FBQ0EsVUFBTUMsVUFBVSxHQUFHLE1BQUksQ0FBQ2hCLE9BQUwsQ0FBYUMsR0FBYixDQUFuQjs7QUFDQSxVQUFNZ0IsS0FBSyxHQUFHSCxRQUFRLEdBQUdFLFVBQXpCO0FBQ0FmLFNBQUcsQ0FBQ0UsT0FBSixDQUFZLFVBQUNlLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BCLGNBQUksQ0FBQ3hCLE9BQUwsQ0FBYXdCLENBQUMsR0FBRyxDQUFqQixLQUF1QlosS0FBSyxHQUFHVSxLQUFSLEdBQWdCQyxDQUF2QztBQUNELE9BRkQ7QUFHRCxLQVJEO0FBU0Q7QUFDRixDQWJEOztlQWVleEIsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWYiLCJmaWxlIjoiQGFzdHVhbmF4L2Z1bm1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAYXN0dWFuYXgvZnVubWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGFzdHVhbmF4L2Z1bm1sXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBhc3R1YW5heC9mdW5tbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIEBjbGFzcyBQZXJjZXB0cm9uXG4gKiBAY2xhc3NkZXNjIFBlcmNlcHRyb24gdG8gdHJhaW4gYW5kIGV4ZWN1dGVcbiAqIEBzZWUgb2ZcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgbSA9ICBQZXJjZXB0cm9uLm9mKClcbiAqXG4gKi9cbmxldCBQZXJjZXB0cm9uID0gZnVuY3Rpb24gKHdlaWdodHMpIHtcbiAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cyB8fCBbXVxufVxuXG4vKipcbiAqIEBtZW1iZXJPZiBNYXRyaXhcbiAqIEBzdGF0aWNcbiAqIEBmdW5jdGlvbiBvZlxuICogQGRlc2MgQ3JlYXRlcyBhIE1hdHJpeCBvYmplY3QgYW5kIGZsYXR0ZW5zIHRoZSBNYXRyaXhcbiAqIEBwYXJhbSB2YWwge2FycmF5fGZ1bmN0aW9ufSBBbiBhcnJheSBvZiBhcnJheXNcbiAqIEByZXR1cm5zIHtNYXRyaXh9XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG0gPSAgUGVyY2VwdHJvbi5vZigpXG4gKlxuICovXG5QZXJjZXB0cm9uLm9mID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgUGVyY2VwdHJvbikgcmV0dXJuIHZhbFxuICBpZiAodGhpcyBpbnN0YW5jZW9mIFBlcmNlcHRyb24pIHtcbiAgICB0aGlzLndlaWdodHMgPSB2YWxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHJldHVybiBuZXcgUGVyY2VwdHJvbih2YWwpXG59XG5cblBlcmNlcHRyb24ucHJvdG90eXBlLnR5cGUgPSAnUGVyY2VwdHJvbidcblxuLyoqXG4gKiBAZnVuY3Rpb24gcHJlZGljdFxuICogQHBhcmFtIHJvd1xuICogQHBhcmFtIHdlaWdodHNcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnByZWRpY3QgPSBmdW5jdGlvbiAocm93KSB7XG4gIHZhciBhY3RpdmF0aW9uID0gdGhpcy53ZWlnaHRzWzBdXG4gIHJvdy5mb3JFYWNoKCh4LCBpKSA9PiB7XG4gICAgYWN0aXZhdGlvbiArPSB0aGlzLndlaWdodHNbaSArIDFdICogeFxuICB9KVxuICByZXR1cm4gYWN0aXZhdGlvbiA+PSAwID8gMSA6IDBcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gdHJhaW5cbiAqIEBwYXJhbSB0cmFpblxuICogQHBhcmFtIGxSYXRlXG4gKiBAcGFyYW0gbkVwb2NoXG4gKi9cblBlcmNlcHRyb24ucHJvdG90eXBlLnRyYWluID0gZnVuY3Rpb24gKHRyYWluLCBsUmF0ZSwgbkVwb2NoKSB7XG4gIHRoaXMud2VpZ2h0cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRyYWluWzBdLmxlbmd0aCkpLm1hcCh4ID0+IDApXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbkVwb2NoOyBpKyspIHtcbiAgICB0cmFpbi5mb3JFYWNoKCh4LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0geC5zbGljZSgtMSlbMF1cbiAgICAgIGNvbnN0IHJvdyA9IHguc2xpY2UoMCwgLTEpXG4gICAgICBjb25zdCBwcmVkaWN0aW9uID0gdGhpcy5wcmVkaWN0KHJvdylcbiAgICAgIGNvbnN0IGVycm9yID0gZXhwZWN0ZWQgLSBwcmVkaWN0aW9uXG4gICAgICByb3cuZm9yRWFjaCgoeSwgaikgPT4ge1xuICAgICAgICB0aGlzLndlaWdodHNbaiArIDFdICs9IGxSYXRlICogZXJyb3IgKiB5XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VwdHJvblxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQZXJjZXB0cm9uIH0gZnJvbSAnLi9QZXJjZXB0cm9uJ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==