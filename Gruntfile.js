"use strict";

// grunt
module.exports = function(grunt) {
  // time-grunt
  require('time-grunt')(grunt);

  var config = {
    qx: {
      options: {
        appClass: "qxc.tweets.Application",
        appName: "qxc.tweets",
        appTitle: "QxC.Tweets Demo",
        theme: "qxc.tweets.theme.Theme",
        locales: ["en", "de"]
      },

      source: {
        options: {
          target: "source",
          outDir: "build/source/",
          // Only available within the 'source' target.
          copyResources: true
        }
      },

      build: {
        options: {
          target: "build",
          outDir: "build/build/",
          // Only available within the 'build' target.
          minify: true
        }
      },

      hybrid: {
        options: {
          target: "hybrid",
          outDir: "build/hybrid/"
        }
      }
    },

    watch: {
      source: {
        files: [
          "source/class/**/*.js"
        ],
        tasks: ["qx:source"]
      },

      hybrid: {
        files: [
          "source/class/**/*.js"
        ],
        tasks: ["qx:hybrid"]
      },

      build: {
        files: [
          "source/class/**/*.js"
        ],
        tasks: ["qx:build"]
      }
    },

    connect: {
      source: {
        options: {
          livereload: false,
          base: "build/source/",
          port: 8000
        }
      },

      hybrid: {
        options: {
          livereload: false,
          base: "build/hybrid/",
          port: 8000
        }
      },

      build: {
        options: {
          livereload: false,
          base: "build/build/",
          port: 8000
        }
      }
    },

    run: {
      eslint: {
        cmd: 'npm',
        args: [
          'run',
          'eslint',
          '--',
          '.'
        ]
      },

      "eslint-fix": {
        cmd: 'npm',
        args: [
          'run',
          'eslint',
          '--',
          '--fix',
          '.'
        ]
      }
    },

    clean: {
      build: ["build/build"],
      source: ["build/source"],
      hybrid: ["build/hybrid"]
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks("grunt-qx");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Compile source, run server and watch it
  grunt.registerTask("source-server", [
    "qx:source",
    "connect:source",
    "watch:source"
  ]);

  grunt.registerTask("source-hybrid-server", [
    "qx:hybrid",
    "connect:hybrid",
    "watch:hybrid"
  ]);

  grunt.registerTask("build-server", [
    "qx:build",
    "connect:build",
    "watch:build"
  ]);

  // Aliases
  grunt.registerTask("build", ["qx:build"]);
  grunt.registerTask("source-hybrid", ["qx:build"]);
  grunt.registerTask("source", ["qx:source"]);

  grunt.registerTask("lint", ["run:eslint"]);
  grunt.registerTask("lint-fix", ["run:eslint-fix"]);

  // Default build source.
  grunt.registerTask("default", [
    "qx:source"
  ]);
};
