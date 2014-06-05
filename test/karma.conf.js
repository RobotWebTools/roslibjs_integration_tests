// Karma configuration

// With npm package:
//var roslibjs_path = '../node_modules/roslibjs';

// Local development
var roslibjs_path = '../../roslibjs';
if(typeof process.env.ROSLIBJS_PATH != 'undefined'){
  roslibjs_path = process.env.ROSLIBJS_PATH;
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      '../node_modules/grunt-karma/node_modules/karma/adapter/lib/mocha.js',
      '../node_modules/grunt-karma/node_modules/karma/adapter/mocha.js',
      roslibjs_path + '/include/EventEmitter2/eventemitter2.js',
      roslibjs_path + '/build/roslib.js',
      '../node_modules/chai/chai.js',
      process.env.JS_TEST_FILE
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // We can't use phantomjs right now. It's incompatible with websockets rosbridge uses
    // https://github.com/ariya/phantomjs/issues/11018
    // Change allow_draft76 to True in rosbridge_server/src/tornado/websocket.py
    //browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
