vetorInteiro = [1, 2, 3, 4]
vetorString = ["um", "dois", "tres", "quatro"]
vetorDouble = [1.1, 2.2, 2.3, 2.4]

function concatenar(...args){
    resultado = []

    for (i=0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))