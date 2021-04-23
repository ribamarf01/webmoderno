const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 9.2, bolsista: true },
    { nome: 'Maria', nota: 9.7, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)