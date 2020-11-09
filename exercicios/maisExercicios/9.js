function repetir(item, quantidadeRepeticao) {
    let resultado = []
    for (let i = 1; i <= quantidadeRepeticao; i++){
    resultado.push(item)
    }
    return resultado
}
    
console.log(repetir("azul", 5))
console.log(repetir(2, 5))