Array.prototype.forEach2 = function(callback) {
    for(var i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(item, index) {
    console.log(`${index}: ${item}`)
})