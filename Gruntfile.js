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
                files: ['css/**/*.css', '**/*.html', 'img/**/*.*']
            },
            options: {
                livereload: true
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: ['lib/**/*.js', '*.js']
        }
    });

    grunt.registerTask('dev', ['jshint', 'concurrent:dev']);
    grunt.registerTask('test');
    grunt.registerTask('default', ['dev']);
};
