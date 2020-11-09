function numeros(numero1, numero2){
    const tipo1 = typeof numero1
    const tipo2 = typeof numero2
 if(tipo1 == tipo2){
   if(numero1 > numero2){
        return "O primeiro número é maior que o segundo"
    } else if (numero1 == numero2){
        return "O primerio número é igual ao segundo"
    } 
} else {
    return "Um dos números é do tipo string"
    }
}

console.log(numeros(5, 2))
console.log(numeros(5, "2"))
