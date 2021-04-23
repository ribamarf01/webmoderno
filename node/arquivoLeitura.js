const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona...
fs.readFile(caminho, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arq) => {
    console.log("conteudo da pasta: ", arq)
})