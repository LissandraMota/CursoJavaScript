function numerosEindicesPares(numeros){
    return numeros.filter((numero, indice)=>{
        const numeroPar = numero % 2 == 0
        const indicePar = indice % 2 == 0

        return numeroPar && indicePar
    })
}

console.log(numerosEindicesPares([1, 2, 3, 4]))
console.log(numerosEindicesPares([10, 2, 3, 4]))