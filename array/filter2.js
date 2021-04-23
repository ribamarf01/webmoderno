Array.prototype.filter2 = function(callback) {
    const newArray = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) newArray.push(this[i])
    }

    return newArray

}

const array = [7, 8, 5, 4, 10]

const maiorQue7 = item => item >= 7

const array2 = array.filter2(maiorQue7)

console.log(array2)