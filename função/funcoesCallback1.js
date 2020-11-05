// callack -> chamar de volta - pode ser chamada várias vezes
// callback -> passar uma função para outra função 
//e quando determinado evento acontecer essa função será chamada 

//array:
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// colocou +1 para o índice começar a contar pelo número 1 e não 0

//para cada elemento do array vai ser chamada de volta a função imprimir
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})