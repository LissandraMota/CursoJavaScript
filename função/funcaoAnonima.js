// quando se trabalha com funções normais, pode nomear a função ou criar uma função anônima
//função anônima é uma função sem nome, a partir dela pode:
// passar a função anônima para ser executado por outra função ou
// pode armazenar uma função anônima dentro de uma variável

//armaznando a função anônima(sem nome) dentro de uma variável ou const
const soma = function (x, y) {
    return x + y
}

//por padrão se não passar nenhuma operação vai receber a ooperação soma
const imprimirResultadoSoma = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultadoSoma(3, 4) //por padrão o parâmetro 3, se não for passado nenhuma operação, será usado a soma

//passando uma função anônima diretamente dentro de outra função
imprimirResultadoSoma(3, 4, function (x,y) {
    return x - y
}) //3-4 = -1

// arrow function sempre é uma função anônima
// 3 * 4 = 12
imprimirResultadoSoma(3, 4, (x, y) => x * y) // 3 parametro arrow function

// função anônima dento de um obj
const pessoa = {
    falar: function (){
        console.log("Opa")
    }
}

pessoa.falar() //chamando a função de um obj