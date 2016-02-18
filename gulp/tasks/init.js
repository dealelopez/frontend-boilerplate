//
//=== PROCESOS:
//
/*
Falta:
	+ Separar los procesos en desarrollo(dev) y producción(prod);
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	runSequence = require('run-sequence');

//=== Inicialización del proyecto:
gulp.task('init', function() {
	runSequence([
		// HTML:
		'html:dev',
		// LESS:
		'less:bootstrap',
		'less:fontawesome',
		'less:model',
		// Scripts:
		'scripts:vendorMove',
		'scripts:concat',
		// Imágenes:
		'images:optim',
		// Fuentes:
		'fonts:move',
		// Iniciamos las tareas de desarrollo:
		'dev'
	]);
});