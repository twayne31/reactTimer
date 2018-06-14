//karma config specifies how we want to run the test

var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        //specifies which files to run
        files:[
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/foundation.min.js',
        'app/tests/**/*.test.jsx'
        ],
        //specifies which preprocessors to use and thats webpack and sourcemap
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        //lets up cleanup the output
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
}

