module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Configure a uglify task
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'lib/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    //Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
    	  reporter: 'spec',
          captureFile: './test/results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    },

    //Configure the Istanbul Codecoverage task
    mocha_istanbul: {
        coverage: {
            options: {
        	  reporter: 'spec',
              captureFile: './test/results.txt', // Optionally capture the reporter output to a file
              quiet: false, // Optionally suppress output to standard out (defaults to false)
              clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
            },
            src: ['test/**/*.js']
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  // Add the grund-mocha-instanbul converage task
  grunt.loadNpmTasks('grunt-mocha-istanbul')

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
