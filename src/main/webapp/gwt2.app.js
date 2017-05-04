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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/* exports provided: bootstrap, mount, unmount */
/* all exports used */
/*!*****************************!*\
  !*** ./gwt2/gwt2wrapper.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"bootstrap\"] = bootstrap;\n/* harmony export (immutable) */ __webpack_exports__[\"mount\"] = mount;\n/* harmony export (immutable) */ __webpack_exports__[\"unmount\"] = unmount;\nfunction bootstrap() {\r\n    return Promise.resolve();\r\n}\r\n\r\nfunction mount() {\r\n    /* This is normally where you would have your framework-specific code like\r\n     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\r\n     * into this function is what makes single-spa so powerful -- any framework\r\n     * can implement a \"mount\" and \"unmount\" to become a single-spa application.\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        if (noCacheJSScriptElement === null) {\r\n            var newScript = document.createElement('script');\r\n            newScript.id = \"nocachejs-script\";\r\n            newScript.src = 'gwt2app/gwt2app.nocache.js';\r\n            document.head.appendChild(newScript);\r\n        }\r\n        console.log(\"gwt2 mounted\");\r\n    });\r\n}\r\n\r\nfunction unmount() {\r\n    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\r\n     * or vue.$destroy()\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var headElement = document.head;\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        if (noCacheJSScriptElement !== null) {\r\n            headElement.removeChild(noCacheJSScriptElement);\r\n        }\r\n\r\n        var scriptList = headElement.getElementsByTagName('script');\r\n        var script;\r\n        for (var i = 0; i < scriptList.length; i++) {\r\n            script = scriptList[i];\r\n            if (script.src !== null && script.src.endsWith(\".cache.js\")) {\r\n                headElement.removeChild(script);\r\n                break;\r\n            }\r\n        }\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        var iframe = document.getElementById('gwt2app');\r\n        document.body.removeChild(iframe);\r\n        delete window.__gwt_activeModules;\r\n        delete window.__gwt_getMetaProperty;\r\n        delete window.__gwt_isKnownPropertyValue;\r\n        delete window.__gwt_stylesLoaded;\r\n\r\n    });\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nd3QyL2d3dDJ3cmFwcGVyLmpzPzVmMTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCkge1xyXG4gICAgLyogVGhpcyBpcyBub3JtYWxseSB3aGVyZSB5b3Ugd291bGQgaGF2ZSB5b3VyIGZyYW1ld29yay1zcGVjaWZpYyBjb2RlIGxpa2VcclxuICAgICAqIFJlYWN0RE9NLnJlbmRlciBvciBhbmd1bGFyLmJvb3RzdHJhcCgpLiBUaGUgZmFjdCB0aGF0IHlvdSBjYW4gcHV0ICphbnl0aGluZypcclxuICAgICAqIGludG8gdGhpcyBmdW5jdGlvbiBpcyB3aGF0IG1ha2VzIHNpbmdsZS1zcGEgc28gcG93ZXJmdWwgLS0gYW55IGZyYW1ld29ya1xyXG4gICAgICogY2FuIGltcGxlbWVudCBhIFwibW91bnRcIiBhbmQgXCJ1bm1vdW50XCIgdG8gYmVjb21lIGEgc2luZ2xlLXNwYSBhcHBsaWNhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9jYWNoZWpzLXNjcmlwdCcpO1xyXG4gICAgICAgIHZhciBtYWluUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhbmVsJyk7XHJcbiAgICAgICAgbWFpblBhbmVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBuZXdTY3JpcHQuaWQgPSBcIm5vY2FjaGVqcy1zY3JpcHRcIjtcclxuICAgICAgICAgICAgbmV3U2NyaXB0LnNyYyA9ICdnd3QyYXBwL2d3dDJhcHAubm9jYWNoZS5qcyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobmV3U2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnd3QyIG1vdW50ZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQoKSB7XHJcbiAgICAvKiBSZWFsIHdvcmxkIHVzZSBjYXNlcyB3b3VsZCBiZSBzb21ldGhpbmcgbGlrZSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKClcclxuICAgICAqIG9yIHZ1ZS4kZGVzdHJveSgpXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50LmhlYWQ7XHJcbiAgICAgICAgdmFyIG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9jYWNoZWpzLXNjcmlwdCcpO1xyXG4gICAgICAgIGlmIChub0NhY2hlSlNTY3JpcHRFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlYWRFbGVtZW50LnJlbW92ZUNoaWxkKG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNjcmlwdExpc3QgPSBoZWFkRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIHNjcmlwdDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NyaXB0ID0gc2NyaXB0TGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5zcmMgIT09IG51bGwgJiYgc2NyaXB0LnNyYy5lbmRzV2l0aChcIi5jYWNoZS5qc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYWluUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhbmVsJyk7XHJcbiAgICAgICAgbWFpblBhbmVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnd3QyYXBwJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19nd3RfYWN0aXZlTW9kdWxlcztcclxuICAgICAgICBkZWxldGUgd2luZG93Ll9fZ3d0X2dldE1ldGFQcm9wZXJ0eTtcclxuICAgICAgICBkZWxldGUgd2luZG93Ll9fZ3d0X2lzS25vd25Qcm9wZXJ0eVZhbHVlO1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19nd3Rfc3R5bGVzTG9hZGVkO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZ3d0Mi9nd3Qyd3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });