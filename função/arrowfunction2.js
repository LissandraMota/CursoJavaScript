// o this na função arrow é baseado no contexto no qual a função foi escrita
// na função arrow o this não modifica - this constante

//arrow function
function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) 
}

new Pessoa
