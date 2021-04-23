function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            // Gerar um erro
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionaOuNao('Testando...', 0.9)
.then(v => console.log(v))
.catch(err => console.log(`Erro: ${err}`))