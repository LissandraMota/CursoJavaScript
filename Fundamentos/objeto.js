const produto1 = {} //barra de chave - {} representa de forma literal um objeo, da mesma forma que [] representa um array
//pode criar um objeto de forma vazia e fazer suas aribuições de forma dinâmica:
// objeto junção de chave e valor
produto1.nome = "celular ultra mega"  //o atrbuto nome e seu valor foi criado dinamicamente
produto1.preco = 4998.90

console.log(produto1)

//outra forma de criar o objeto
// mais exemplo de objeto dentro de outro objeto
const produto2 = {
    nome:"camisa polo",
    preco: 79.90,
    obj:{
        propriedadedoobj:1,
        obj:{
            propriedadedoobj:2
        }
    }
}
console.log(produto2)