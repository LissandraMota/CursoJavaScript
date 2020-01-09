function imprimirNomeGritado (obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!!")
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log ("final")
    }
}

function tratarErrorELancar(erro) {
   // throw new Error("...")
  // throw 10
  //throw true
  //throw "mensagem"
  // throw tbm pode ser objeto
}

const obj = { nome: "Roberto"}
imprimirNomeGritado(obj)