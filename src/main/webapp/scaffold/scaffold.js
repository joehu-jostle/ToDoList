
import {declareChildApplication, start} from 'single-spa';

// Register your first application with single-spa. More apps will be registered as you create them
declareChildApplication("react-app", loadReactApp, isReactAppActive);
declareChildApplication("gwt-app", loadGwtApp, isGwtAppActive);
declareChildApplication("gwt2-app", loadGwt2App, isGwt2AppActive);

// Tell single-spa that you're ready for it to mount your application to the DOM
start();

// This is a "loading function"
function loadReactApp() {
    return System.import("./react/reactwrapper.jsx");
}

// This is an "activity function"
function isReactAppActive() {
    return window.location.hash.startsWith("#/react");

}

// This is a "loading function"
function loadGwtApp() {
    return System.import("./gwt1/gwt1wrapper.js");
}

// This is an "activity function"
function isGwtAppActive() {
    return window.location.hash.endsWith("#/gwt1");

}

// This is a "loading function"
function loadGwt2App() {
    return System.import("./gwt2/gwt2wrapper.js");
}

// This is an "activity function"
function isGwt2AppActive() {
    return window.location.hash.endsWith("#/gwt2");

}