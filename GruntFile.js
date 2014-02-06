module.exports = function(grunt) {

    //grunt plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-requirejs');
    
    //config
    grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      dev: {
        options: {
          port: 3000,
          base: 'src'
        }
      },
      webRelease: {
        options: {
          port: 3001,
          base: 'build',
          keepalive: true
        }
      }
    },

    requirejs: {
        compile: {
          options: {
          mainConfigFile: 'src/scripts/main.js',
        baseUrl: "src",
            // name: "main", // a module name
        dir: 'build',
        //out: 'build/app.min.js',
        // include: ['main'],
        optimize: 'uglify',
        normalizeDirDefines: 'all'
          }
        }
    }
  

  });

}