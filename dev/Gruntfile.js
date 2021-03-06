module.exports = function(grunt) {
	'use strict';
    
	require('time-grunt')(grunt);

	grunt.initConfig({

		// Package Info
		pkg: grunt.file.readJSON('package.json'),

		// Grunt Clean
		// Clear files and folders that are auto generated
		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			dist: {
				files: [{
					src: [
						'<%= pkg.directory.dest %>/assets/*'
					]
				}],
				options:{
					force: true // enables deletion fo folders outside of working directory
				}
			}
		},

		// Grunt Copy
		// Copies files and folders
		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directory.app %>',
					dest: '<%= pkg.directory.dest %>',
					src: [
						'assets/**/*'
					]
				}]
			}
		},

		// Compass
		// Generates the CSS from SCSS files
		// https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			dist: {
				options: {
					sassDir: '<%= pkg.directory.app %>/scss',
					cssDir: '<%= pkg.directory.dest %>/assets/css',
					imagesDir: '<%= pkg.directory.dest %>/assets/images',
					javascriptDir: '<%= pkg.directory.dest %>/assets/js',
					fontsDir: '<%= pkg.directory.dest %>/assets/fonts',
					relativeAssets: false,
					outputStyle: 'expanded'
				}
			}
		},

		// Assemble
		// Static site generator for Node.js, Grunt.js, and Yeoman (and soon, Gulp).
		// https://github.com/assemble/assemble
		assemble: {
			dist: {
				options: {
					assets: '<%= pkg.directory.dest %>',
					partials: ['<%= pkg.paths.partials %>'],
					layout: ['<%= pkg.paths.layout %>'],
					data: ['<%= pkg.paths.data %>'],
					production: true,
					pages: ['<%= pkg.paths.pages %>']
				},
				files: [{
					expand: true,
					src: ['**/*.hbs'],
					cwd: '<%= pkg.directory.app %>/views/pages/',
					dest: '<%= pkg.directory.dest %>'
				}]
			}
		},

        // Browserify
        // https://github.com/jmreidy/grunt-browserify
        browserify: {
            app: {
                files: {
                    '<%= pkg.directory.dest %>/assets/js/main.min.js': ['<%= pkg.paths.js %>/main.js']
                },
                options: {
                    alias: require('./browserify.config.js'),
                    debug: true
                }
            }
        },

		// Watch
		// Watches for changes to specific files
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			js: {
				files: ['<%= pkg.paths.js %>'],
				tasks: ['copy:dist'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= pkg.paths.partials %>','<%= pkg.paths.pages %>'],
				tasks: ['assemble:dist'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['<%= pkg.paths.scss %>/**/*.scss'],
				tasks: ['compass'],
				options: {
					livereload: true
				}
			},
			json: {
				files: ['<%= pkg.paths.data %>','<%= pkg.paths.ajax %>'],
				tasks: ['copy:dist','assemble:dist'],
				options: {
					livereload: true
				}
			}
		},

		// Concurrent
		// Allow multiple tasks to occur at once.  Using this technique because it gives us flexibility in the future to add other tasks such as CONNECT.
		// https://github.com/sindresorhus/grunt-concurrent
		concurrent: {
			dist: ['watch'],
			options: {
				logConcurrentOutput: true
			}
		}

	});

	require('load-grunt-tasks')(grunt,{
		pattern: ['grunt-*', 'assemble']
	});

	// Development grunt task
	grunt.registerTask('build', [
		// Cleanup Previously Generated Files
		'clean:dist',

		// Sass compilation
		'compass:dist',

		// Copy HTML and assets
		'copy:dist'
	]);

	// Development grunt task
	grunt.registerTask('default', [
		// reuse the above build task.  gives us core flexibilty if we want to add more types of tasks in the future
		'build',

		// Assemble the HTML files
		'assemble:dist',

		// Runs WATCH 
		'concurrent:dist'
	]);

};