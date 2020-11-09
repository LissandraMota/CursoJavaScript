function inverso(valor){
    const tipo = typeof valor

    if (tipo == "boolean"){
        return !valor
    } else if (tipo == "number"){
        return -valor
    } else {
        return `Boleano ou número esperado, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso(1))
console.log(inverso(false))
