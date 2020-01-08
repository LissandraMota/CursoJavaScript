// função sem retorno
//a, b são os parâmetros que quer receber na função
//função tem associado um bloco {}
function imprimirSoma(a, b)  {
    console.log(a + b)
}

imprimirSoma(2, 3)   //chamando a função
imprimirSoma (2)     // NaN pq o segundo valor é undefined
imprimirSoma (2, 10, 4, 5, 6, 7, 8) //nesse caso vai funcionar, mas vai somar os 2 primeiros (a + b) e o resto será iginorado devido a fexibilidad do JS


//função com retorno
function soma ( a, b = 1) //por padrão a variável b é 1
{
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //aqui como foi dado apenas um valor rá chamar o valor padrão dado
                                 
