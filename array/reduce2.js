const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 9.2, bolsista: true },
    { nome: 'Maria', nota: 9.7, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))