
import {declareChildApplication, start} from 'single-spa';

// Register your first application with single-spa. More apps will be registered as you create them
declareChildApplication("react-app", loadReactApp, isReactAppActive);
declareChildApplication("gwt-app", loadJoeApp, isJoeAppActive);

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
function loadJoeApp() {
    return System.import("./gwt/gwtwrapper.js");
}

// This is an "activity function"
function isJoeAppActive() {
    return window.location.hash.startsWith("#/gwt");

}