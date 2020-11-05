function calcularPlanoDeSaúde(idade){
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPlanoDeSaúde(8));
console.log(calcularPlanoDeSaúde(15));
console.log(calcularPlanoDeSaúde(35));
console.log(calcularPlanoDeSaúde(52));
console.log(calcularPlanoDeSaúde(80));