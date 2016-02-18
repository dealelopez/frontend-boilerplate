//
//=== DEFAULT:
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
	fs = require('fs'),
	gutil = require('gulp-util');

//=== Default:
gulp.task('default', function() {
	// Creamos las variables con las rutas de las carpetas estática y templates:
	var	carpetaStatic = paths.build.estatico,
		carpetaTemplates = paths.build.plantillas;

	// Comprobamos que existen y realizamos tareas en función de la respuesta:
	fs.exists(carpetaStatic || carpetaTemplates, function (exists) {
		if (!exists) {
			gutil.log(gutil.colors.green('No existe...\nInicializamos en proyecto:'));
			gulp.start('init');
		} else {
			gutil.log(gutil.colors.green('Existe...\nArranzamos la tarea de desarrollo:'));
			gulp.start('dev');
		};
	});
});