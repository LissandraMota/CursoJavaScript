// JSON ---> é um formato textual, em que todas as linguagens conseguem ler e gerar de uma forma muito simples
// JSON ---> formato de dados, não recebe função, pois não é algo excutado
//JSON --> são daddos que trafegam de uma aplicação pra outra...(json é formato de dados textual)

const obj = {a: 1, b:2, c:3, soma () { return a + b + c} }
console.log(JSON.stringify(obj)) // transformando um obj em JSON

//console.log(JSON.parse("{a:1, b:2, c:3}")) --formato json inválido

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))  // transformando JSON em obj
// no JSON os atributos tem que ficar em aspas duplas e antes do {} coloca-se aspas simples

console.log(JSON.parse('{"a":1.7, "b":"string", "c": true, "d": {}, "e": []}'))
// as strings tbm devem ser delimitadas por aspas duplas 

// JSON validator ---> site que mostra que o formato do JSON esta válido