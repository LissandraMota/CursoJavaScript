// herança na classe
class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//pai tem como protótipo avo
class pai extends avo {
    constructor(sobrenome, profissao = "professor"){ //se a profissão não for passada vai assumir a profissão padrão
        super(sobrenome) //chama a função construtora de avo (super classe)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super("Silva") //chama a função construtora de avo (super classe)
    }
}

const Filho = new filho
console.log(Filho)
