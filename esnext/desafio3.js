const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, content) {
            resolve(content.toString())
        })
    })
}

lerArquivo(caminho)
    .then(content => content.split('\n'))
    .then(content => content.join(', '))
    .then(content => `O valor final é: ${content}`)
    .then(console.log)