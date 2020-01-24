const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")
// o axios é um client http --> o axios faz requisições para obter informções de algo que está remoto

// muher chinesa d menor salário

const chineses = f => f.pais === "China" //isso vai retornar true
const mulheres = f => f.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})



