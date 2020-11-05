function classificaDia(num){
    switch(num){
        case 1:
            return "Fim de semana"
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil."
        case 7:
            return "Fim de semana"
            break
        default:
            return "Dia inválido"
    }
}

console.log(classificaDia(2))
console.log(classificaDia(5))
console.log(classificaDia(7))