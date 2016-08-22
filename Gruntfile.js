'use strict';

// grunt
module.exports = function (grunt) {
  var qxpath = 'qooxdoo';
  if ('QOOXDOO_PATH' in process.env) {
    qxpath = process.env.QOOXDOO_PATH;
  }

  var config = {
    qxcompiler: {
      options: {
        appClass: 'tweets.Application',
        appName: 'tweets',
        appTitle: 'Tweets Demo',
        theme: 'tweets.theme.Theme',
        locales: ['en'],
        addScript: [],
        addCss: [],
        libraryDirs: [
          qxpath + '/framework',
          '.'
        ]
      },

      source: {
        options: {
          target: 'source',
          outDir: 'build/source/'
        }
      },

      build: {
        options: {
          target: 'build',
          outDir: 'build/build/',
          // Only available within the 'build' target.
          minify: true
        }
      },

      hybrid: {
        options: {
          target: 'hybrid',
          outDir: 'build/hybrid/'
        }
      }
    },

    watch: {
      tweets: {
        files: [
          'source/class/**/*.js'
        ],
        tasks: ['qxcompiler:source']
      }
    }
  };

  grunt.initConfig(config);

  // 3. Where we tell Grunt we plan to use this plug-in.
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-qxcompiler');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'qxcompiler:source'
  ]);
};
