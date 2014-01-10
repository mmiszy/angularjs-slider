module.exports = function (grunt)
{
  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    minBanner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '(c) <%= pkg.author %>, <%= pkg.repository.url %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %> */\n',

    recess: {
      options: {
        compile: true
      },

      rzSlider: {
        src: ['angularjs-slider.less'],
        dest: 'dist/angularjs-slider.css'
      },

      min: {
        options: {
          compress: true,
          banner: '<%= minBanner %>'
        },
        src: ['dist/angularjs-slider.css'],
        dest: 'dist/angularjs-slider.min.css'
      }
    },

    uglify: {
      options: {
        report: 'min',
        banner: '<%= minBanner %>'
      },
      rzSlider: {
        files: {
          'dist/angularjs-slider.min.js': [
            'angularjs-slider.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['css', 'js']);

  grunt.registerTask('css', ['recess']);
  grunt.registerTask('js', ['uglify']);
};
