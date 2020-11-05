console.log (soma(3, 4))

// function declaration ---> a função fica disponível para ser executada inclusive em linha de código anterior
function soma (x, y) {
    return x + y
}

// function expression -> com function anonima 
//armazena a função dentro de uma constante
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression ->com função nomeada
//armazena em uma const uma função anonima
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))

