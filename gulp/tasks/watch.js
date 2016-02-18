//
//=== WATCH:
//
/*
Falta:
	+ Separar HTMLs de _*.html;
	+ Separar LESS de Bootstrap de los particulares;
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	watch = require('gulp-watch');

//=== Vemos los archivos modificados:
gulp.task('watch', function() {
	//=== Vemos los HTML:
	watch(paths.dev.plantillas + '**/*.html', {
		// emitOnGlob: false,
		// read: false,
		// name: 'Html watcher',
		// verbose: config.verbose
	}, function() {
		gulp.start('html:dev');
	});
	//=== Vemos los LESS:
	watch(paths.dev.estatico + '**/*.less', {
		// emitOnGlob: false,
		// read: false,
		// name: 'Html watcher',
		// verbose: config.verbose
	}, function() {
		gulp.start([
			// 'less:bootstrap',
			// 'less:fontawesome',
			'less:model'
		]);
	});
	//=== Vemos los scripts propios del modelo:
	watch(paths.dev.js + '*.js', {
		// Si queremos añadir algo;
	}, function() {
		gulp.start([
			'scripts:concat'
		]);
	});
	//=== Vemos las imágenes:
	watch(paths.dev.imagenes + '**/*.{jpg,jpeg,png}', {
		// Si queremos añadir algo;
	}, function() {
		gulp.start([
			'images:optim'
		]);
	});
});