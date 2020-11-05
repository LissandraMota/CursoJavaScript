//função vs objeto
console.log (typeof Object)
console.log(typeof new Object) // aqui é um objeto pq a função foi instaciada, portanto foi criado um objeto a partir de uma função

const cliente = function () {}
console.log(typeof cliente)
console.log (typeof new cliente)

class Produto {} //ES 2015 (ES6) 
console.log(typeof Produto)
console.log(typeof new Produto())
// a class internamente cria uma função