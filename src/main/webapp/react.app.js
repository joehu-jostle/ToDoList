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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/* exports provided: bootstrap, mount, unmount */
/* all exports used */
/*!*******************************!*\
  !*** ./react/reactwrapper.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"bootstrap\"] = bootstrap;\n/* harmony export (immutable) */ __webpack_exports__[\"mount\"] = mount;\n/* harmony export (immutable) */ __webpack_exports__[\"unmount\"] = unmount;\nfunction bootstrap() {\r\n    return Promise.resolve().then(function() {\r\n        console.log(\"cool boostrapped\");\r\n    });\r\n}\r\n\r\nfunction mount() {\r\n    /* This is normally where you would have your framework-specific code like\r\n     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\r\n     * into this function is what makes single-spa so powerful -- any framework\r\n     * can implement a \"mount\" and \"unmount\" to become a single-spa application.\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        document.getElementById('mainPanel').innerHTML = '<span>Hello World</span>';\r\n        console.log(\"cool mounted\");\r\n    });\r\n}\r\n\r\nfunction unmount() {\r\n    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\r\n     * or vue.$destroy()\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        console.log(\"cool unmounted\");\r\n    });\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlYWN0L3JlYWN0d3JhcHBlci5qcz9kYzk4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvb2wgYm9vc3RyYXBwZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCkge1xyXG4gICAgLyogVGhpcyBpcyBub3JtYWxseSB3aGVyZSB5b3Ugd291bGQgaGF2ZSB5b3VyIGZyYW1ld29yay1zcGVjaWZpYyBjb2RlIGxpa2VcclxuICAgICAqIFJlYWN0RE9NLnJlbmRlciBvciBhbmd1bGFyLmJvb3RzdHJhcCgpLiBUaGUgZmFjdCB0aGF0IHlvdSBjYW4gcHV0ICphbnl0aGluZypcclxuICAgICAqIGludG8gdGhpcyBmdW5jdGlvbiBpcyB3aGF0IG1ha2VzIHNpbmdsZS1zcGEgc28gcG93ZXJmdWwgLS0gYW55IGZyYW1ld29ya1xyXG4gICAgICogY2FuIGltcGxlbWVudCBhIFwibW91bnRcIiBhbmQgXCJ1bm1vdW50XCIgdG8gYmVjb21lIGEgc2luZ2xlLXNwYSBhcHBsaWNhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1haW5QYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluUGFuZWwnKTtcclxuICAgICAgICBtYWluUGFuZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhbmVsJykuaW5uZXJIVE1MID0gJzxzcGFuPkhlbGxvIFdvcmxkPC9zcGFuPic7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb29sIG1vdW50ZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoKSB7XHJcbiAgICAvKiBSZWFsIHdvcmxkIHVzZSBjYXNlcyB3b3VsZCBiZSBzb21ldGhpbmcgbGlrZSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKClcclxuICAgICAqIG9yIHZ1ZS4kZGVzdHJveSgpXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29vbCB1bm1vdW50ZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3JlYWN0L3JlYWN0d3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);