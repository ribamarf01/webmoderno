const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (f, atual) => f.salario < atual.salario ? f : atual

axios.get(url).then(res => {
    const funcionarios = res.data
    const f = funcionarios.filter(chineses).filter(mulher).reduce(menorSalario)
    console.log(f)
})