export function bootstrap() {
    return Promise.resolve();
}

export function mount() {
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
            newScript.src = 'gwt1app/gwt1app.nocache.js';
            document.head.appendChild(newScript);
        }
        console.log("joe boostrapped");
    });
}

export function unmount() {
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

        var styleSheetList = headElement.getElementsByTagName('link');
        var styleSheet;
        for (var j = 0; j < styleSheetList.length; j++) {
            styleSheet = styleSheetList[j];
            if (styleSheet.href !== null && styleSheet.href.endsWith("clean.css")) {
                headElement.removeChild(styleSheet);
                break;
            }
        }
        var mainPanel = document.getElementById('mainPanel');
        mainPanel.innerHTML = "";
        var iframe = document.getElementById('gwt1app');
        document.body.removeChild(iframe);
        delete window.__gwt_activeModules;
        delete window.__gwt_getMetaProperty;
        delete window.__gwt_isKnownPropertyValue;
        delete window.__gwt_stylesLoaded;

    });
}
