// operador ... rest(juntar)/spread(espalahar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grpA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grpA, 'Rafaela']
console.log(grupoFinal)
