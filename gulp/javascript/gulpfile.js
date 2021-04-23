const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', e => console.log(e))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

module.exports.default = series(padrao, fim)