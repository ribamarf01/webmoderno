const array = [7, 8, 5, 4, 10]

const array2 = array.filter(function(item) {
    if(item >= 7) return item
})

console.log(array2)