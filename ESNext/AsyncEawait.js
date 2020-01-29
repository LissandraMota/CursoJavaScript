const http = require("http")

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = " "

            res.on("data", dados => {
                resultado += dados
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso ES8
// Objetivo de simplificar o uso de promises....
// só pode usar o await usando o async
let obterAlunos = async () =>{
    const TurA = await getTurma("A")
    const TurB = await getTurma("B")
    const TurC = await getTurma("C")
    return [].concat(TurA, TurB, TurC)
} //retorna um objeto async function

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))