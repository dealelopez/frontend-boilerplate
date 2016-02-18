//
//=== DEVELOPMENT:
//
/*
Falta:
	+ 
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	watch = require('gulp-watch');

//=== Arrancamos las tareas de desarrollo:
gulp.task('dev', ['server', 'watch'], function () {
	gulp.watch(paths.build.raiz + '**/*').on('change', browserSync.reload);
});