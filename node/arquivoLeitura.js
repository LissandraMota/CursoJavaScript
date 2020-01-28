const fs = require("fs")
const caminho = __dirname + "/arquivo.json"

// de forma sícrona....
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// leitura assícrona
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

//uma forma específica de ler arquivo quando em json:
// não precisa nesse caso importar o fs

const config = require("./arquivo.json")
console.log(config.db)

//leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})

