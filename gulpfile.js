/*
 * Dependencias
 */
var gulp = require('gulp');
var minifycss =require('gulp-minify-css');

var config = {
    sourcesDir: 'src',
    bowerDir: 'dist'
}

// Tarea para copiar las imagenes a la carpeta dist/img
gulp.task('imagenes', function() {
    gulp.src([config.sourcesDir+'/img/*.*']).pipe(gulp.dest(config.bowerDir+'/img'));
});


// Tarea para minificar archivos css y transladarlos a la carpeta dist/css
gulp.task('minify-css', function () {
  gulp.src(config.sourcesDir+'/css/*.css')
  //.pipe(concat('app.css'))
  .pipe(minifycss())
  .pipe(gulp.dest(config.bowerDir+'/css'))
});