"use strict";

// grunt
module.exports = function(grunt) {
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
      tweets: {
        files: [
          "source/class/**/*.js"
        ],
        tasks: ["qx:source"]
      }
    },

    connect: {
      server: {
        options: {
          livereload: false,
          base: "build/source/",
          port: 8000
        }
      }
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks("grunt-qx");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Compile source, run server and watch it
  grunt.registerTask("serve", [
    "qx:source",
    "connect:server",
    "watch"
  ]);

  // Aliases
  grunt.registerTask("build", ["qx:build"]);
  grunt.registerTask("source", ["qx:source"]);

  // Default build source.
  grunt.registerTask("default", [
    "qx:source"
  ]);
};
