//try -> bloco de código com algo que pode gerar erro
//finally-> mesmo correndo erro ou não chama o finally
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

//const obj = { nome: "Roberto"} //erro
const obj = { name: "Roberto"} //certo, sem erro
imprimirNomeGritado(obj)