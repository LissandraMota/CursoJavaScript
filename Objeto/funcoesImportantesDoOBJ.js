const pessoa = { //criando objeto usando notação literal
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa)) // pega as chaves do objetos
console.log(Object.values(pessoa)) // valores 
console.log(Object.entries(pessoa)) //chave com valor dentro do array

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
}) //pecorrendo os elementos de um array

// ou usando o destrucring:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", { //definir uma propriedade de um objeto
    enumerable: true, //listado
    writable: false, //não permite ser alterada
    value: "29/07/19" //valor
})

pessoa.dataNascimento = "29/08/2020" //não passa para esse data pq não foi permitido alteração
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.asign (ECMAscript 15)
const dest = {a: 1}  // objeto de destino
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // pode pôr qtos obj. quiser no objeto de destino
//concatena os objetos no destino - valor 423 na const obj 

console.log(dest)

//Object.freeze
Object.freeze(obj) //congela os atributos do objeto
obj.c = 1234

console.log(obj)