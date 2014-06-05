module.exports = function(grunt) {

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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
