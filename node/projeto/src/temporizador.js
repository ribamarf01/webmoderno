const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * 10 * * 3', () => {
    console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function() {
    tarefa.cancel()
    console.log('Cancelando tarefa')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2', new Date().getSeconds())
})