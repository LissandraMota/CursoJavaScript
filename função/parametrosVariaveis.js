function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments [i]
    }
   return soma
}

// arguments é um array interno de uma função, possui todos os argumentos que foram passados
console.log(soma ()) // sem argumento, não entra no for
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3)) //somou todos os argumentos