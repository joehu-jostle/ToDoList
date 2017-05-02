webpackJsonp([1,4],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;
/* harmony export (immutable) */ __webpack_exports__["mount"] = mount;
/* harmony export (immutable) */ __webpack_exports__["unmount"] = unmount;
function bootstrap() {
    return Promise.resolve().then(function() {
        console.log("cool boostrapped");
    });
}

function mount() {
    /* This is normally where you would have your framework-specific code like
     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
     * into this function is what makes single-spa so powerful -- any framework
     * can implement a "mount" and "unmount" to become a single-spa application.
     */
    return Promise.resolve().then(function() {
        var mainPanel = document.getElementById('mainPanel');
        mainPanel.innerHTML = "";
        // document.getElementById('mainPanel').innerHTML = '<span>Hello World</span>';
        var button = document.createElement('button');
        button.innerHTML = "Say goodbye";
        button.addEventListener("click", function(){
            $.post("todolist/sayGoodbye").done(function(data) {
                alert(data);
            });
        });
        mainPanel.appendChild(button);
        console.log("cool mounted");
    });
}

function unmount() {
    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()
     * or vue.$destroy()
     */
    return Promise.resolve().then(function() {
        console.log("cool unmounted");
    });
}


/***/ })
]);