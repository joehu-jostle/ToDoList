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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 52:
/* exports provided: bootstrap, mount, unmount */
/* all exports used */
/*!***************************!*\
  !*** ./gwt/gwtwrapper.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"bootstrap\"] = bootstrap;\n/* harmony export (immutable) */ __webpack_exports__[\"mount\"] = mount;\n/* harmony export (immutable) */ __webpack_exports__[\"unmount\"] = unmount;\nfunction bootstrap() {\r\n    return Promise.resolve();\r\n}\r\n\r\nfunction mount() {\r\n    /* This is normally where you would have your framework-specific code like\r\n     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\r\n     * into this function is what makes single-spa so powerful -- any framework\r\n     * can implement a \"mount\" and \"unmount\" to become a single-spa application.\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        if (noCacheJSScriptElement === null) {\r\n            var newScript = document.createElement('script');\r\n            newScript.id = \"nocachejs-script\";\r\n            newScript.src = 'todolist/todolist.nocache.js';\r\n            document.head.appendChild(newScript);\r\n        }\r\n        console.log(\"joe boostrapped\");\r\n    });\r\n}\r\n\r\nfunction unmount() {\r\n    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\r\n     * or vue.$destroy()\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var headElement = document.head;\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        if (noCacheJSScriptElement !== null) {\r\n            headElement.removeChild(noCacheJSScriptElement);\r\n        }\r\n\r\n        var scriptList = headElement.getElementsByTagName('script');\r\n        var script;\r\n        for (var i = 0; i < scriptList.length; i++) {\r\n            script = scriptList[i];\r\n            if (script.src !== null && script.src.endsWith(\".cache.js\")) {\r\n                headElement.removeChild(script);\r\n                break;\r\n            }\r\n        }\r\n    });\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nd3QvZ3d0d3JhcHBlci5qcz9lZjkxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCgpIHtcclxuICAgIC8qIFRoaXMgaXMgbm9ybWFsbHkgd2hlcmUgeW91IHdvdWxkIGhhdmUgeW91ciBmcmFtZXdvcmstc3BlY2lmaWMgY29kZSBsaWtlXHJcbiAgICAgKiBSZWFjdERPTS5yZW5kZXIgb3IgYW5ndWxhci5ib290c3RyYXAoKS4gVGhlIGZhY3QgdGhhdCB5b3UgY2FuIHB1dCAqYW55dGhpbmcqXHJcbiAgICAgKiBpbnRvIHRoaXMgZnVuY3Rpb24gaXMgd2hhdCBtYWtlcyBzaW5nbGUtc3BhIHNvIHBvd2VyZnVsIC0tIGFueSBmcmFtZXdvcmtcclxuICAgICAqIGNhbiBpbXBsZW1lbnQgYSBcIm1vdW50XCIgYW5kIFwidW5tb3VudFwiIHRvIGJlY29tZSBhIHNpbmdsZS1zcGEgYXBwbGljYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub0NhY2hlSlNTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vY2FjaGVqcy1zY3JpcHQnKTtcclxuICAgICAgICB2YXIgbWFpblBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QYW5lbCcpO1xyXG4gICAgICAgIG1haW5QYW5lbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGlmIChub0NhY2hlSlNTY3JpcHRFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgbmV3U2NyaXB0LmlkID0gXCJub2NhY2hlanMtc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIG5ld1NjcmlwdC5zcmMgPSAndG9kb2xpc3QvdG9kb2xpc3Qubm9jYWNoZS5qcyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobmV3U2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqb2UgYm9vc3RyYXBwZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoKSB7XHJcbiAgICAvKiBSZWFsIHdvcmxkIHVzZSBjYXNlcyB3b3VsZCBiZSBzb21ldGhpbmcgbGlrZSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKClcclxuICAgICAqIG9yIHZ1ZS4kZGVzdHJveSgpXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50LmhlYWQ7XHJcbiAgICAgICAgdmFyIG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9jYWNoZWpzLXNjcmlwdCcpO1xyXG4gICAgICAgIGlmIChub0NhY2hlSlNTY3JpcHRFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlYWRFbGVtZW50LnJlbW92ZUNoaWxkKG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNjcmlwdExpc3QgPSBoZWFkRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIHNjcmlwdDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NyaXB0ID0gc2NyaXB0TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5zcmMgIT09IG51bGwgJiYgc2NyaXB0LnNyYy5lbmRzV2l0aChcIi5jYWNoZS5qc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9nd3QvZ3d0d3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });