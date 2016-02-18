//
//=== IMÁGENES:
//
/*
Falta:
    + Separar los procesos en desarrollo(dev) y producción(prod);
    + ver la diferencia entre 'gulp.src' y 'return gulp.src';
*/

//=== Cargamos módulos de configuración:
var config = require('../config.js'),
    handleErrors = require(config.utils + 'handleErrors.js'),
    paths = require(config.utils + 'paths.js');

//=== Cargamos los módulos específicos para esta tarea:
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    imageMin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    plumber = require('gulp-plumber'),
    pngQuant = require('imagemin-pngquant');

//=== Movemos todas las imágenes:
gulp.task('images:move', function() {
    gulp.src(paths.dev.imagenes + '**/*.{jpg,jpeg,png}')
        .pipe(newer(paths.build.imagenes))
        .pipe(gulp.dest(paths.build.imagenes))
        // .on('error', gutil.log);
        .on('error', handleErrors);
});

//=== Optimizamos y movemos todas las imágenes:
gulp.task('images:optim', function() {
    return gulp.src(paths.dev.imagenes + '**/*.{jpg,jpeg,png}')
        .pipe(imageMin({
            progressive: true,
            // svgoPlugins: [{removeViewBox: false}],
            use: [pngQuant()]
        }))
        .pipe(gulp.dest(paths.build.imagenes))
        .on('error', handleErrors);
});
