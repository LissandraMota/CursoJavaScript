function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return "equilátero"
    }else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return "isóceles"
    }else{
        return "escaleno"
    }
}

console.log(triangulo(1,2,3))
console.log(triangulo(3,3,3))
console.log(triangulo(4,4,2))