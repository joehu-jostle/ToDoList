const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        'scaffold': './scaffold.js',
        'react.app': './react/reactwrapper.js',
        'gwt.app': './gwt/gwtwrapper.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '../[name].js'
    }
};