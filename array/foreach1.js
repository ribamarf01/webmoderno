const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(item, index) {
    console.log(`${index}: ${item}`)
})

const exibirAprovados = nome => {
    console.log(nome)
}

aprovados.forEach(exibirAprovados)