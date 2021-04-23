const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function TransformCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifyCss({
            "uglyComments": true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
}

exports.default = series(TransformCSS, copiarHTML)