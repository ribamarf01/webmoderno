const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Parabéns. Usuário Incluido')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('Parabéns. Usuário alterado!')
})

app.listen(3003, () => {
    console.log(`Ouvindo na porta 3003`)
})