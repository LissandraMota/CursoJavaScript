// o índice sempre será o segundo parâmetro, portanto se quiser por o índice como parâmetro, tem que ser colocado um primeiro parametro
// pode ser recebido tbm como parâmetro o Array
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function (nome, indice) { //passando uma callback que será chamada para cada elemento que o foreach pecorrer
    console.log(`${indice +1}- ${nome}`)
}) // foi colocado +1 para o índice começar pelo 1 e não pelo zero
//dentro do foreach tem um laço for

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) //passando uma função para o foreach

//o índice sempre é passado como segundo parâmetro, nunca como primeiro
//terceiro parametro - array completo
aprovados.forEach(function (nome, indice, Array) {
    console.log(`${indice +1}- ${nome}`)
    console.log(Array)
}) 