//
//=== FUENTES:
//
/*
Falta:
	+ Añadir un pipe con plumber;
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	handleErrors = require(config.utils + 'handleErrors.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	newer = require('gulp-newer'),
	plumber = require('gulp-plumber');

//=== Movemos todas las fuentes:
gulp.task('fonts:move', function() {
	gulp.src(paths.dev.fuentes + '**/*')
		.pipe(newer(paths.build.fuentes))
		.pipe(gulp.dest(paths.build.fuentes))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});