function Aula(nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Bem vindo', 1)
const aula2 = new Aula('Ate breve', 2)
console.log(aula1, aula2)

// Simular o operador new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype

    f.apply(obj, params)

    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)