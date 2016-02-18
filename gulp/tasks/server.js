//
//=== SERVIDOR:
//

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	browserSync = require('browser-sync');

//=== Arrancamos browserSync:
gulp.task('server', function() {
	browserSync({
		server: {
			baseDir: [paths.build.plantillas, paths.build.estatico],
			// baseDir: paths.build.raiz, 
			directory: true,
			routes: {
				"./static/": "static",
				"./templates/": "templates"
			}
		},
		// port: 3000; Hacer dinámico;
		// logConnections: true,
		// logLevel: logLevel
	});
});

//=== Recargamos los navegadores:
gulp.task('reload', function() {
	browserSync.reload();
});