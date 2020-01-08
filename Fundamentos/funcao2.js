//armazenando uma função m uma variável
//aqui a função é anomina
const imprimirSoma = function (a, b) {
    console.log (a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável
// => substitui o nome function
const soma  = (a, b) => {
    return a + b
}

console.log (soma(2, 3))

//retorno implícito
// => usando o símbolo para retornar, aqui o símbolo substituiu o function, {} e o return : arrow function
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log (a)
imprimir2 ("Legalll")