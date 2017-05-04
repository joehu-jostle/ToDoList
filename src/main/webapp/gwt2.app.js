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
/*!*****************************!*\
  !*** ./gwt2/gwt2wrapper.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"bootstrap\"] = bootstrap;\n/* harmony export (immutable) */ __webpack_exports__[\"mount\"] = mount;\n/* harmony export (immutable) */ __webpack_exports__[\"unmount\"] = unmount;\nfunction bootstrap() {\r\n    return Promise.resolve();\r\n}\r\n\r\nfunction mount() {\r\n    /* This is normally where you would have your framework-specific code like\r\n     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*\r\n     * into this function is what makes single-spa so powerful -- any framework\r\n     * can implement a \"mount\" and \"unmount\" to become a single-spa application.\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        if (noCacheJSScriptElement === null) {\r\n            var newScript = document.createElement('script');\r\n            newScript.id = \"nocachejs-script\";\r\n            newScript.src = 'dosomething/dosomething.nocache.js';\r\n            document.head.appendChild(newScript);\r\n        }\r\n        console.log(\"gwt2 mounted\");\r\n    });\r\n}\r\n\r\nfunction unmount() {\r\n    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()\r\n     * or vue.$destroy()\r\n     */\r\n    return Promise.resolve().then(function() {\r\n        var headElement = document.head;\r\n        var noCacheJSScriptElement = document.getElementById('nocachejs-script');\r\n        if (noCacheJSScriptElement !== null) {\r\n            headElement.removeChild(noCacheJSScriptElement);\r\n        }\r\n\r\n        var scriptList = headElement.getElementsByTagName('script');\r\n        var script;\r\n        for (var i = 0; i < scriptList.length; i++) {\r\n            script = scriptList[i];\r\n            if (script.src !== null && script.src.endsWith(\".cache.js\")) {\r\n                headElement.removeChild(script);\r\n                break;\r\n            }\r\n        }\r\n        var mainPanel = document.getElementById('mainPanel');\r\n        mainPanel.innerHTML = \"\";\r\n        var iframe = document.getElementById('dosomething');\r\n        document.body.removeChild(iframe);\r\n        delete window.__gwt_activeModules;\r\n        delete window.__gwt_getMetaProperty;\r\n        delete window.__gwt_isKnownPropertyValue;\r\n        delete window.__gwt_stylesLoaded;\r\n\r\n    });\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nd3QyL2d3dDJ3cmFwcGVyLmpzPzVmMTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KCkge1xyXG4gICAgLyogVGhpcyBpcyBub3JtYWxseSB3aGVyZSB5b3Ugd291bGQgaGF2ZSB5b3VyIGZyYW1ld29yay1zcGVjaWZpYyBjb2RlIGxpa2VcclxuICAgICAqIFJlYWN0RE9NLnJlbmRlciBvciBhbmd1bGFyLmJvb3RzdHJhcCgpLiBUaGUgZmFjdCB0aGF0IHlvdSBjYW4gcHV0ICphbnl0aGluZypcclxuICAgICAqIGludG8gdGhpcyBmdW5jdGlvbiBpcyB3aGF0IG1ha2VzIHNpbmdsZS1zcGEgc28gcG93ZXJmdWwgLS0gYW55IGZyYW1ld29ya1xyXG4gICAgICogY2FuIGltcGxlbWVudCBhIFwibW91bnRcIiBhbmQgXCJ1bm1vdW50XCIgdG8gYmVjb21lIGEgc2luZ2xlLXNwYSBhcHBsaWNhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9jYWNoZWpzLXNjcmlwdCcpO1xyXG4gICAgICAgIHZhciBtYWluUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhbmVsJyk7XHJcbiAgICAgICAgbWFpblBhbmVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICBuZXdTY3JpcHQuaWQgPSBcIm5vY2FjaGVqcy1zY3JpcHRcIjtcclxuICAgICAgICAgICAgbmV3U2NyaXB0LnNyYyA9ICdkb3NvbWV0aGluZy9kb3NvbWV0aGluZy5ub2NhY2hlLmpzJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdTY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImd3dDIgbW91bnRlZFwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCgpIHtcclxuICAgIC8qIFJlYWwgd29ybGQgdXNlIGNhc2VzIHdvdWxkIGJlIHNvbWV0aGluZyBsaWtlIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoKVxyXG4gICAgICogb3IgdnVlLiRkZXN0cm95KClcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQuaGVhZDtcclxuICAgICAgICB2YXIgbm9DYWNoZUpTU2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2NhY2hlanMtc2NyaXB0Jyk7XHJcbiAgICAgICAgaWYgKG5vQ2FjaGVKU1NjcmlwdEVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaGVhZEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9DYWNoZUpTU2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2NyaXB0TGlzdCA9IGhlYWRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgICAgICB2YXIgc2NyaXB0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzY3JpcHQgPSBzY3JpcHRMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoc2NyaXB0LnNyYyAhPT0gbnVsbCAmJiBzY3JpcHQuc3JjLmVuZHNXaXRoKFwiLmNhY2hlLmpzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1haW5QYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluUGFuZWwnKTtcclxuICAgICAgICBtYWluUGFuZWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvc29tZXRoaW5nJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19nd3RfYWN0aXZlTW9kdWxlcztcclxuICAgICAgICBkZWxldGUgd2luZG93Ll9fZ3d0X2dldE1ldGFQcm9wZXJ0eTtcclxuICAgICAgICBkZWxldGUgd2luZG93Ll9fZ3d0X2lzS25vd25Qcm9wZXJ0eVZhbHVlO1xyXG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19nd3Rfc3R5bGVzTG9hZGVkO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZ3d0Mi9nd3Qyd3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });