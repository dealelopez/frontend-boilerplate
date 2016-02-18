//
//=== SCRIPTS:
//
/*
Falta:
	+ Crear rutas para vendor y propios;
	+ Añadir tareas de gulp-uglify;
	+ Añadir tareas de gulp-concat;
	+ Crear tareas de distribución;
	+ Añadir minificación;
	+ Añadir sourcemaps;
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	handleErrors = require(config.utils + 'handleErrors.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	newer = require('gulp-newer'),	
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps');

//=== Movemos los scripts de terceros:
gulp.task('scripts:vendorMove', function() {
	gulp.src(paths.dev.js + 'vendor/*.js')
		.pipe(plumber())
		.pipe(newer(paths.build.js + 'vendor/*.js'))
		.pipe(gulp.dest(paths.build.js + 'vendor'))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Movemos los scripts propios:
gulp.task('scripts:ownMove', function() {
	gulp.src(paths.dev.js + '*.js')
		.pipe(plumber())
		.pipe(newer(paths.build.js + '*.js'))
		.pipe(gulp.dest(paths.build.js))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Analizamos nuestros scripts:
gulp.task('scripts:jshint', function() {
	return gulp.src(paths.dev.js + '*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.on('error', handleErrors);
});

//=== Concatenamos nuestros scripts:
/*
Falta:
	+ Llamar a la tarea de JShint para no repetir;
*/
gulp.task('scripts:concat', function() {
	gulp.src(paths.dev.js + '*.js')
		// JShint
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		// /JShint
		.pipe(concat('modelo.js'))
		.pipe(gulp.dest(paths.build.js))
		.on('error', handleErrors);
});