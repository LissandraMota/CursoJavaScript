function qtdDigitos(numeros, qtdDigitosDesejada){
 let resultado = []

 for (numero of numeros){
    qtdDigitosNum = String(numero).length

    if(qtdDigitosNum === qtdDigitosDesejada){
        resultado.push(numero)
    }
 }

 return resultado
}

console.log(qtdDigitos([38, 2, 365, 10, 125, 11], 2))