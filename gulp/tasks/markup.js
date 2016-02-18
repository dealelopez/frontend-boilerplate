//
//=== MARKUP:
//
/*
Falta:
	+ Definir bien el proceso;
	+ Definir el nuevo source como:
		gulp.src(paths.dev.plantillas + '*.html')
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	handleErrors = require(config.utils + 'handleErrors.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	newer = require('gulp-newer'),
	plumber = require('gulp-plumber'),
	preprocess = require('gulp-preprocess');

//=== Procesamos el markup:
gulp.task('html:dev', function() {
	gulp.src([paths.dev.plantillas + '**/*.html', '!' + paths.dev.plantillas + '**/_*.html'])
		.pipe(plumber())
		.pipe(newer(paths.build.plantillas + '*.html'))
		.pipe(preprocess({
			context: {
				ENV: 'dev',
				RUTA_STATIC: './',
				DEBUG: true
			}
		}))
		.pipe(gulp.dest(paths.build.plantillas))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Procesamos el markup:
gulp.task('html:dist', function() {
	gulp.src([paths.dev.plantillas + '**/*.html', '!' + paths.dev.plantillas + '**/_*.html'])
		.pipe(plumber())
		.pipe(newer(paths.build.plantillas + '*.html'))
		.pipe(preprocess({
			context: {
				ENV: 'dist',
				RUTA_STATIC: '../static/',
				DEBUG: true
			}
		}))
		.pipe(gulp.dest(paths.dist.plantillas))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});