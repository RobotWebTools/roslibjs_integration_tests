module.exports = function(grunt) {
  // With npm package:
  //var roslibjs_path = '../node_modules/roslibjs';

  // Local development
  var roslibjs_path = '../../roslibjs';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'test/*.test.js'
      ]
    },
    karma: {
      integration: {
        configFile: 'test/karma.conf.js',
        singleRun: true,
        // We can't use phantomjs right now. It's incompatible with websockets rosbridge uses
        // https://github.com/ariya/phantomjs/issues/11018
        browsers: ['Chrome'],

        // Change allow_draft76 to True in rosbridge_server/src/tornado/websocket.py
        //browsers: ['PhantomJS'],

        options: {
          files:[
            '../node_modules/grunt-karma/node_modules/karma/adapter/lib/mocha.js',
            '../node_modules/grunt-karma/node_modules/karma/adapter/mocha.js',
            roslibjs_path + '/include/EventEmitter2/eventemitter2.js',
            roslibjs_path + '/build/roslib.js',
            '../node_modules/chai/chai.js',

            //'../../utils/node_modules/chai-as-promised/lib/chai-as-promised.js',
            '<%= grunt.option(\'jsFiles\') %>'
          ]
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
};
