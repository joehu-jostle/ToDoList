export function bootstrap() {
    return Promise.resolve().then(function() {
        console.log("cool boostrapped");
    });
}

export function mount() {
    /* This is normally where you would have your framework-specific code like
     * ReactDOM.render or angular.bootstrap(). The fact that you can put *anything*
     * into this function is what makes single-spa so powerful -- any framework
     * can implement a "mount" and "unmount" to become a single-spa application.
     */
    return Promise.resolve().then(function() {
        var mainPanel = document.getElementById('mainPanel');
        mainPanel.innerHTML = "";
        document.getElementById('mainPanel').innerHTML = '<span>Hello World</span>';
        console.log("cool mounted");
    });
}

export function unmount() {
    /* Real world use cases would be something like ReactDOM.unmountComponentAtNode()
     * or vue.$destroy()
     */
    return Promise.resolve().then(function() {
        console.log("cool unmounted");
    });
}
