function salarioLiquido(qtdHoras, valorHora){
    const imposto = 30/100
    const salarioBruto =  qtdHoras * valorHora
    const salarioLiquido = salarioBruto - salarioBruto * imposto //saláqrio líquido é salaário bruto menos o valor descontado de imposto

    return "Salário líquido é igual a R$" + salarioLiquido
}

console.log(salarioLiquido(180, 60))