function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    
    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })

}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 400),
        gerarNumerosEntre(1, 60, 50),
        gerarNumerosEntre(1, 60, 500)
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(numero => console.log(numero))
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })