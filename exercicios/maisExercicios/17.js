function somarArray(numeros){
    let soma = 0

    numeros.forEach(numero => soma = soma + numero)

    return soma
}

console.log(somarArray([15, 15, 15, 15]))
console.log(somarArray([2,2,2]))
