function menorNumero(numeros){
    let menor = numeros[0]

    for( let i in numeros){
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }

    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([-15, 50, 3]))

//pode usar também Math.min ou reduce