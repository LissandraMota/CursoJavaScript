//função 
// acessar valor atual da variável a partir da variável this
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

// if e else if chamando a função 
// só entra em uma dessas condições
const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de honra")
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado")
    } else { // caso contrário
        console.log("Nota inválida")
    }

    console.log("fim")
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)