// estratégia 1  para gerar valor padrão
// usando o operador ou ||
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// como não foi passado nenhum valor, foi o usado o 1 (valor padrão criado através do ||)
//resultado = 3
console.log(soma1())

console.log(soma1(), soma1(3), soma1(1, 2, 3))

//nessa estratégia não serve usar o valor 0 --> retornar como falso e com iso o valor padrão 1:
//resultado 3
console.log(soma1(0, 0, 0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se não passar o valor de a irá pegar o valor padrão 1
    b = 1 in arguments ? b : 1   // existe dentro de arguments de índice 1? se sim valor de b, se não valor padrão 1
    c = isNaN(c) ? 1 : c //se for not a number pega o valor padrão 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão com EC2015 
//no próprio parametro já atribui o vaalor padrão
function soma3 (a = 1, b = 1,c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0, 0, 0))
