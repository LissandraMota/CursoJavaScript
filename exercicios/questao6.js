function jurosSimples(capitalInicial, juros, tempoAplicacao){
    return capitalInicial + (capitalInicial * juros * tempoAplicacao)
}

function jurosComposto(capitalInicial, juros, tempoAplicacao){
    return  capitalInicial * (1 + juros) ** tempoAplicacao
}

console.log(jurosSimples(100, 0.10, 2));
console.log(jurosComposto(100, 0.10, 2));