//multiplicar sem utilizae o operaador de multiplicação

function multiplicar(numero1, numero2) {
    let resultado = 0
   
    for(let i = 1; i <= numero2; i++){
    resultado += numero1
    }
    return resultado
}

console.log(multiplicar(5,5))
    