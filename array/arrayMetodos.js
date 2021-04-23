const pilotos = [
    'Vettel',
    'Alonso',
    'Raikonnen',
    'Massa'
]

pilotos.pop() // Remove o ultimo elemento do array
pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
pilotos.shift() // Remove o primeiro elemento do array
pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
// Remover
pilotos.splice(3, 1)

const algunsPilotos = pilotos.slice(2) // Retorna novo array a partir do indice indicado
const outrosPilotos = pilotos.slice(1, 4) // Pega os elementos da posição 1 a 3