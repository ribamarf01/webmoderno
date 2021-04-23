const a = 1
const b = 2
const c = 3

const obj1 = {
    a: a,
    b: b,
    c: c
}

const obj2 = {
    a,
    b,
    c
}

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr

const obj4 = {[nomeAttr]: valorAttr}

const obj5 = {
    function1: function() {
        
    },
    function2() {
        
    }
}