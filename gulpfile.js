/*
 * Dependencias
 */
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var shell = require('gulp-shell');
var babel = require('gulp-babel');
var concat = require('gulp-concat-css');

var config = {
    sourcesDir: 'src', //Carpeta con el codigo fuente
    bowerDir: 'dist'   //Carpeta codigo ejecutable 
}

// Tarea para copiar las imagenes a la carpeta dist/img
gulp.task('imagenes', function() {
    gulp.src([config.sourcesDir + '/img/*.*']).pipe(gulp.dest(config.bowerDir + '/img'));
});


// Tarea para minificar archivos css y transladarlos a la carpeta dist/css
gulp.task('minify-css', function() {
    gulp.src(config.sourcesDir + '/css/*.css')
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(config.bowerDir + '/css'))
});

//Tarea para transpilar el codigo a ecmascript 2015 (ECMAScript 6)
gulp.task('transpile', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(babel({
        	 presets: ['es2015']
        }))
        .pipe(gulp.dest('tmp/js'));
});

// Tarea para minificar archivos JS 
gulp.task('scripts', shell.task([
    'node node_modules\\requirejs\\bin\\r.js -o build.js'
]))



