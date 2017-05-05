import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './app/AwesomeComponent.jsx';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
        React,
        ReactDOM,
        rootComponent,
        domElementGetter: () => document.getElementById('mainPanel'),
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];