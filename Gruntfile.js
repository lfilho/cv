'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        express: {
            all: {
                options: {
                    bases: ['/Users/marelo/Dropbox/Documents/CV/luiz-filho-cv'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },
        watch: {
            all: {
                files: ['css/**/*.css', 'index.html', 'img/**/*.*'],
                options: {
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:8080/index.html'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: ['*.js']
        }
    });

    grunt.registerTask('dev', ['jshint', 'express', 'open', 'watch']);
    grunt.registerTask('default', ['dev']);
};
