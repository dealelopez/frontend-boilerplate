// 
//===GESTIÓN DE ERRORES:
//
/*
 Falta:
	+ Añadirlo a las tareas que sean necesarias. Ahora saltan los errores con plumber;
*/

var notify = require('gulp-notify'),
	gutil = require('gulp-util');

module.exports = function() {
	gutil.beep();
	// Finaliza la tarea:
	this.emit('end');
	// Notificamos cuando hay un error:
	notify.onError({
		title: 'Error de compilación',
		message: '<%= error.message %>'
	}).apply(this, Array.prototype.slice.call(arguments));
};