//
//=== LIMPIEZA:
//
/*
Falta:
	+ Ver de qué forma podemos generar un caché;
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
	paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
	del = require('del'),
	gutil = require('gulp-util');

//=== Limpiamos los arhivos de test:
gulp.task('clean:deleteFiles', function() {
	del(paths.build.raiz + '*', function(err, deletedFiles) {
		gutil.log(gutil.colors.red('Se ha eliminado:\n', deletedFiles.join(', ')));
	});
});

//=== Limpiamos las fuentes:
gulp.task('clean:deleteFonts', function() {
	del(paths.build.fuentes + '*', function(err, deletedFiles) {
		gutil.log(gutil.colors.red('Se ha eliminado:\n', deletedFiles.join(', ')));
	});
});

//=== Limpiamos el caché:
// gulp.task('clean:clearCache', function() {
// 	cache.clearAll();
// });

//=== Realizamos todas las tareas de limpieza:
// gulp.task('clean', ['clean:clearCache', 'clean:deleteFiles']);
gulp.task('clean', ['clean:deleteFiles']);