// diferença entre usar o callback e não usá-lo
// objetivo gerar um novo array com todas as notas menores que 7

//array de notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem usar o callback
const notasBaixas = []
for (let i in notas){
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
        //.push para adicionar um elemento em um array
    }
}

console.log(notasBaixas)

//usando callback
// . filter adiciona o que for verdadeiro na função callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
}) 

console.log(notasBaixas2)
// na função filter é filtrado para entrar no novo array os elementos verdadeiros

//calback com arrow
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)