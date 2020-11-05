function Carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado - pertence apenas a função carro
    let velocidadeAtual = 0

    //metodo público - usa o this
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima) {
          velocidadeAtual += delta  
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico - usar this
    //pegar a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Carro //instanciando a função e criando o objeto uno
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20) ////instanciando a função e criando o objeto ferrari
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())