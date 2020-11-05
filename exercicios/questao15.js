function escolhaCarro (modelo){
    switch(modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso.'
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

//console.log para aparecer no terminal
console.log(escolhaCarro('hatch'))
console.log(escolhaCarro('motocicleta'))
console.log(escolhaCarro('sedan'))
console.log(escolhaCarro('caminhonete'))
console.log(escolhaCarro('jetski'))



  