function array(elementos){
    const primeiroElemento = elementos.shift()
    const segundoElemento = elementos.pop()

    return [primeiroElemento, segundoElemento]
}

console.log(array([7,14,"olá"]))
console.log(array([7,16,"aplicativo"]))