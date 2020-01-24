const modulaA = require('../../moduloA')
console.log(modulaA.ola)

//modulo interno do node sendo importado:
/*
const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia")
    res.end()
}).listen(8080)
*/

const c = require("./pastaC/index")
console.log(c.ola2)