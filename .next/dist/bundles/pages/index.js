module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/efosa/Projects/image_stitcher/pages/index.jsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-3609286792",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", { href: "https://fonts.googleapis.com/css?family=Tajawal", rel: "stylesheet", className: "jsx-3609286792",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "h1",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-3609286792",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      "Welcome to next.js!"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "3609286792",
      css: "body{font-family:\"Tajawal\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFHMkMsaUNBQ3BDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWZvc2EvUHJvamVjdHMvaW1hZ2Vfc3RpdGNoZXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UYWphd2FsXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPGgxPldlbGNvbWUgdG8gbmV4dC5qcyE8L2gxPlxuICAgIDxwPldlbGNvbWUgdG8gbmV4dC5qcyE8L3A+XG4gICAgPHA+V2VsY29tZSB0byBuZXh0LmpzITwvcD5cbiAgICA8cD5XZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICAgIDxwPldlbGNvbWUgdG8gbmV4dC5qcyE8L3A+XG4gICAgPHA+V2VsY29tZSB0byBuZXh0LmpzITwvcD5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlRhamF3YWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG4iXX0= */\n/*@ sourceURL=pages/index.jsx */"
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map