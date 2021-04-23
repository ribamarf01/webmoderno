function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando...')
            resolve()
        }, tempo)
    })
}


async function executar() {
    await esperarPor()
    console.log('Async/Await')
    await esperarPor()
    console.log('Async/Await')
    await esperarPor()
    console.log('Async/Await')
}

executar()