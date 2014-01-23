module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
    dev: {
      options: {
        port: 3000,
        base: 'src',
        keepalive: true
      }
    }
  }


});

}