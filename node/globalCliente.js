require ("./global") // basta fazer isso uma única vez que o global já tem o obj add

console.log(nomeAtrib.saudacao())

nomeAtrib.nome = "Pode ser mudado! É global!" //pode ser um problema
console.log(nomeAtrib.nome)
// pra resolver esse problema é só usar o Object.freeze:
/*
global.nomeAtrib = Object.freeze ({
    saudacao() {
        return "Estou em todos os lugares"
    },
    nome: "Sitema Lis"
})
*/