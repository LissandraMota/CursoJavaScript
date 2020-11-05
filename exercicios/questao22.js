function calcularAnuidade(mes, valor = 0){
 if(mes > 0 && mes < 13){
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return "mês inválido"
    }
}

console.log(calcularAnuidade(1, 100))
console.log(calcularAnuidade(4, 100))