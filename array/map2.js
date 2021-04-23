const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const carrinho2 = carrinho.map(item => {
    return JSON.parse(item)
})

const compras = carrinho2.map(item => {
    return item.preco.toFixed(2)
})

console.log(compras)