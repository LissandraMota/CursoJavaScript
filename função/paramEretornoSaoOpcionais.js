//Parâmetros e retornos são opicionais nas funções em JS

function area (largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log (`Valor acima do permitio: ${area} m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 22,24)) // vai só pegar os 2 primeiros parâmetros
console.log(area(5, 5)) // undefined valor acima de 20 m2

