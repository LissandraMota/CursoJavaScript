// implementando o seu próprio foreach - foreach2 não é reconhecido então emplementando para funcionar:
Array.prototype.forEach2 = function(callback) {
    for (let i=0; i< this.length; i++) {
        callback(this[i], i, this) //terceiro elemento é um array completo
    }
}

//aplicando o foreach2 implementado:
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice +1}- ${nome}`)
})