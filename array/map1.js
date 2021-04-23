const array = [1, 2, 3, 4, 5]

let array2 = array.map(item => {
    return item * 2
})

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(array2)

array2 = array.map(soma10).map(triplo).map(paraDinheiro)

console.log(array2)