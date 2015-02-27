module.exports = function(grunt) {

  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'dist',
          livereload: true,
          open: false
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      handlebars: {
        files: ['app/templates/**/*.hbs', 'app/templates/**/*.json'],
        tasks: 'staticHandlebars'
      },
      sass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['app/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify']
      }
    },
    handlebarsLayouts: {
      dev: {
        files: {
          'dist/*.html': 'app/templates/*.hbs'
        },
        options: {
          partials: ['app/templates/partials/*.hbs'],
          basePath: 'app/templates/',
          modules: ['app/templates/helpers/helpers-*.js', 'handlebars-helper-moment'],
          context: {
            title: 'Layout Test',
            projectName: 'Grunt handlebars layout',
            items: [
              'apple',
              'orange',
              'banana'
            ]
          }
        }
      }
    },
    staticHandlebars: {
      options: {
        partials: '',
        helpers: ''
      },
      test: {
        // Target-specific file lists and/or options go here. 
        options: {
          json: {
            "extends": ["base.json"],
            "title": "A new page title.",
            "page": {
              "title": "Welcome",
              "content": "At our new test site."
            },
            "footer": "Some contact information about how to get in touch with us."
          }
        },
        files: {
          'dist/*.html': 'app/templates/*.hbs'
        }
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed', // Output style: nested, compact, compressed, expanded
          noCache: true
        },
        files: {
          'dist/assets/css/main.min.css': 'app/sass/main.scss'
        }
      }
    },
    jshint: {
      files: ['app/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    concat: {
      options: {
        separator: ';\n\n',
      },
      dist: {
        src: ['app/js/libs/jquery.js', 'app/js/libs/velocity.js', 'app/js/libs/modernizr.js', 'app/js/main.js'],
        dest: 'app/tmp/main.js',
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/assets/js/main.min.js': ['app/tmp/main.js']
        }
      }
    },
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks("grunt-handlebars-layouts");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-static-handlebars');

  // commands
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('build', ['sass', 'jshint', 'concat', 'uglify']);

  // log
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

};
