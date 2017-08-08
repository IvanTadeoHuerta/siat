/*
 * Dependencias
 */
var gulp = require('gulp');
var shell = require('gulp-shell');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var pump = require('pump');
var replace = require('gulp-replace');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat-css');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');

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
    gulp.src([config.sourcesDir + '/img/*.*']).pipe(gulp.dest(config.bowerDir + '/img'));
});


// Tarea para minificar archivos css y transladarlos a la carpeta dist/css
gulp.task('minifyCss', function() {
    gulp.src(cssUtilizados)
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
    gulp.src(['tmp/js/main.js',]).pipe(replace('src', 'tmp')).pipe(gulp.dest('tmp/js'));
    gulp.src(['tmp/js/config/loadCSS.js',])
        .pipe(replace('/*<des>*/', '/*'))
        .pipe(replace('/*</des>*/', '*/'))
        .pipe(replace('/*pro', ''))
        .pipe(replace('pro*/', ''))
        .pipe(gulp.dest('tmp/js/config'));
    gulp.src(['tmp/js/config/routing.js',]).pipe(replace('src', 'dist')).pipe(gulp.dest('tmp/js/config'));
});

// 3.- Tarea para generar un solo archivo JS 
gulp.task('scriptsGlobal', shell.task([
    'node node_modules\\requirejs\\bin\\r.js -o build.js'
]));

// 4.- Tarea para limpiar carpeta tmp/js
gulp.task('cleanTmp', function () {
    return gulp.src('tmp/js', {read: false})
        .pipe(clean());
});

// 5 .- Tarea para minificar el archivo JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/js/app.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

/*
 * Tarea para publicar el proyecto que será servido al cliente 
 */

gulp.task('public', gulpSequence(['imagenes', 'minifyCss'],'transpile','redirect','scriptsGlobal','cleanTmp','compress'));









 






