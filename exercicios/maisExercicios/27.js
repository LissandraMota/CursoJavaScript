function inverterObjeto(objeto){
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
              valor = 1

        objetoInvertido [parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

console.log(inverterObjeto({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"}
