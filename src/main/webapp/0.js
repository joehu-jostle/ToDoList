webpackJsonp([0,3],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;
/* harmony export (immutable) */ __webpack_exports__["unmount"] = unmount;
function bootstrap() {
    return Promise.resolve().then(function() {
        console.log("joe bootstrapped");
    });
}

function mount() {
    /* This is normally where you would have your framework-specific code like
     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
     * into this function is what makes single-spa so powerful -- any framework
     * can implement a "mount" and "unmount" to become a single-spa application.
     */
    return Promise.resolve().then(function() {
        var noCacheJSScriptElement = document.getElementById('nocachejs-script');
        var mainPanel = document.getElementById('mainPanel');
        mainPanel.innerHTML = "";
        if (noCacheJSScriptElement === null) {
            var newScript = document.createElement('script');
            newScript.id = "nocachejs-script";
            newScript.src = 'todolist/todolist.nocache.js';
            document.head.appendChild(newScript);
        }
        console.log("joe mounted");
    });
}

function unmount() {
    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()
     * or vue.$destroy()
     */
    return Promise.resolve().then(function() {
        var headElement = document.head;
        var noCacheJSScriptElement = document.getElementById('nocachejs-script');
        if (noCacheJSScriptElement !== null) {
            headElement.removeChild(noCacheJSScriptElement);
        }

        var scriptList = headElement.getElementsByTagName('script');
        var script;
        for (var i = 0; i < scriptList.length; i++) {
            script = scriptList[i];
            if (script.src !== null && script.src.endsWith(".cache.js")) {
                headElement.removeChild(script);
                break;
            }
        }
        console.log("joe unmounted");
    });
}


/***/ })
]);