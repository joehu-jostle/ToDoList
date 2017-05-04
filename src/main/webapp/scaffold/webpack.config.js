const path = require('path');
const webpack = require('webpack');
var APP_DIR = path.resolve(__dirname, 'react');
module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        'scaffold': './scaffold.js',
        'react.app': './react/reactwrapper.jsx',
        'gwt1.app': './gwt1/gwt1wrapper.js',
        'gwt2.app': './gwt2/gwt2wrapper.js'
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