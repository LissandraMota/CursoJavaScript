// par nome/ valor
const saudacao = "Opa" //contexto léxico 1

function exec () {
    const saudacao = "Falaaa" //contexto léxico 2
    return saudacao
}

//Objetos são grupos ainhados de pares nomes/valor (chave e valor)
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 91,
    endereco: {
        logadouro: "Rua muito legal", //objeto dentro de um objeto
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log (cliente)