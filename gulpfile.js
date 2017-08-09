/*
 * Dependencias
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var replace = require('gulp-replace');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat-css');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var merge = require('merge-stream');

/**
 * 
 *
 */
var config = {
    sourcesDir: 'src', //Carpeta con el codigo fuente
    bowerDir: 'dist'   //Carpeta codigo ejecutable 
}

var cssUtilizados = [
            config.sourcesDir + '/css/normalize.css', // estilos creados 
            config.sourcesDir + '/css/set1.css', // estilos creados 
            'vendors/bootstrap/css/bootstrap.min.css',
            'vendors/metisMenu/metisMenu.min.css',
            'vendors/font-awesome/css/font-awesome.min.css',
            config.sourcesDir + '/css/mycss.css', // estilos creados 
            config.sourcesDir + '/css/colorError.css', // estilos creados 
            'vendors/sb-admin-2/sb-admin-2.css'
          ];

// Tarea para copiar las imagenes a la carpeta dist/img
gulp.task('imagenes', function() {
    return gulp.src([config.sourcesDir + '/img/*.*']).pipe(gulp.dest(config.bowerDir + '/img'));
});


// Tarea para minificar archivos css y transladarlos a la carpeta dist/css
gulp.task('minifyCss', function() {
    return gulp.src(cssUtilizados)
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(config.bowerDir + '/css'))
});

/*
 * Secuencia para poner en produccion los archivos JS de los modulos
 *
 *
 */

//1.- Tarea para transpilar el codigo a ecmascript 2015 (ECMAScript 6)
gulp.task('transpile', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('tmp/js'));
});

//2.- Tarea para cambiar las direcciones del fuente al directorio tmp
gulp.task('redirect', function() {

    var stream1 = gulp.src('tmp/js/main.js').pipe(replace('src', 'dist')).pipe(gulp.dest('tmp/js'));
    var stream2 = gulp.src(['tmp/js/config/loadCSS.js',])
        .pipe(replace('/*<des>*/', '/*'))
        .pipe(replace('/*</des>*/', '*/'))
        .pipe(replace('/*pro', ''))
        .pipe(replace('pro*/', ''))
        .pipe(gulp.dest('tmp/js/config'));
    var stream3 = gulp.src(['tmp/js/config/routing.js']).pipe(replace('src', 'dist')).pipe(gulp.dest('tmp/js/config'));

    return merge(stream1, stream2, stream3);
});



//3.- Tara para obfuscate codigo y minificar
gulp.task('obfuscate', function () {
    return gulp.src('tmp/js/**/*.js')
    .pipe(javascriptObfuscator())
    .pipe(gulp.dest('dist/js'));
});



// 4.- Tarea para limpiar carpeta tmp/js
gulp.task('cleanTmp', function () {
    return gulp.src('tmp/js', {read: false})
        .pipe(clean());
});


/*
 * Tarea para publicar el proyecto que será servido al cliente 
 */
gulp.task('public', gulpSequence(['imagenes', 'minifyCss','transpile'],'redirect','obfuscate','cleanTmp'));









 






