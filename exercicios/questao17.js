function calcularRejusteSalarial(plano, salarioAtual){
    switch(plano){
        case "A":
            return salarioAtual * 1.1
            break
        case "B":
            return salarioAtual * 1.15
            break
        case "C":
            return salarioAtual * 1.2
            break
        default:
            return "plano inválido"
    }
}

console.log(calcularRejusteSalarial("A", 4000))
console.log(calcularRejusteSalarial("B", 1000))
console.log(calcularRejusteSalarial("C", 1000))
console.log(calcularRejusteSalarial("D", 1000))