//
//=== COMPILACIÓN LESS:
//
/*
Falta:
	+ Revisar la compilación para el resto de LESS;
	+ Añadir una compilación conjunta;
	+ Usar gulp-newer para optimizar la compilación;
	+ Utilizar el nuevo módulo de errores;
	+ Añadir sourcemaps para los minificados;
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	handleErrors = require(config.utils + 'handleErrors.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer')
	cssOptim = require('gulp-csso'),
	less = require('gulp-less'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	uncss = require('gulp-uncss');

//=== Compilamos Bootstrap:
gulp.task('less:bootstrap', function() {
	gulp.src(paths.dev.bootstrap_less + 'bootstrap.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(paths.build.css))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Compilamos Bootstrap:
gulp.task('less:fontawesome', function() {
	gulp.src(paths.dev.fontawesome_less + 'font-awesome.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(paths.build.css))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Compilamos Banderas:
gulp.task('less:banderas', function() {
	gulp.src(paths.dev.banderas.less + 'flags16_32.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(paths.build.css))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Compilamos LESS:
gulp.task('less:model', function() {
	gulp.src(paths.dev.less + 'model.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer({
				browsers: ['last 3 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
				cascade: true
			}))
		.pipe(gulp.dest(paths.build.css))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});

//=== Minificamos y optimiza los estilos propios del modelo:
gulp.task('less:optim', function() {
	gulp.src(paths.dev.less + 'model.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer({
				browsers: ['last 3 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
				cascade: true
			}))
		.pipe(uncss({
			html: [
				paths.build.plantillas + '*.html'
			]
		}))
		.pipe(cssOptim())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.build.css))
		// .on('error', gutil.log);
		.on('error', handleErrors);
});