const express = require('express')
const app = express()

const saud = require('./saudacaoMid')

// app.use(saud('nopme'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.use('/opa', (req, res) => {
    console.log('sera que serei chamado?')
})

app.get('/', (req, res) => {
    res.json({
        name: 'iPad 32Gb',
        price: 1899.00,
        discount: 0.12
    })
    //res.send('Estou bem!')
})

app.listen(3001, () => {
    console.log('Listening on port 3000')
})