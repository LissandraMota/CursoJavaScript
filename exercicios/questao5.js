function formatarValorEmReais(valorDecimal){
    valorReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReais)
}

formatarValorEmReais(0.1 + 0.2)