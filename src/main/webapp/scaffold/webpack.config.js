const path = require('path');
const webpack = require('webpack');
var APP_DIR = path.resolve(__dirname, 'react');
module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        'scaffold': './scaffold.js',
        'react.app': './react/reactwrapper.jsx',
        'gwt.app': './gwt/gwtwrapper.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '../[name].js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};