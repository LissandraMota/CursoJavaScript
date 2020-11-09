function calcularMedia(numeros){
    const qtdNumeros = numeros.length
    let soma = 0

    for (numero of numeros){
        soma += numero
    }

    return soma/qtdNumeros
}

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5]) )// retornará 3