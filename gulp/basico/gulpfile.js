const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = callback => {
    console.log('Tarefa Antes 1')
    return callback()
}

function copiar(callback) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return callback()
}

module.exports.default = series(antes1, copiar)