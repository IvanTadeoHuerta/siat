/*
 * Dependencias
 */
var gulp = require('gulp');


var config = {
    sourcesDir: 'src/img/*.*',
    bowerDir: 'dist/img'
}

gulp.task('imagenes', function() {
    gulp.src([config.sourcesDir]).pipe(gulp.dest(config.bowerDir));
});