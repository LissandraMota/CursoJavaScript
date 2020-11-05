function calculadora(num1, op, num2){
    switch(op){
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        case "/":
            return num1 / num2
            break
        case "*":
            return num1 * num2
            break
        default:
            return "Operção inválida"
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 'a', 3))