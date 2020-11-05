// pode fazer for/in tanto com objeto quanto com array
// for in pecorre os atributos de uma determinada estrutura 
// for in pecorre pelos indices e não pelos valores

const notas =  [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas [i])
}

// for in --> pecorre os atributos de um objeto
const pessoa = {
    nome: "Ana",
    sobrenoe: "Mota",
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
console.log(`${atributo} = ${pessoa[atributo]}`)
}
