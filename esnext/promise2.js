function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promise...")
            resolve({a: 20})
        }, tempo)
    })
}

esperarPor(0)
    .then(obj => console.log(obj.a))