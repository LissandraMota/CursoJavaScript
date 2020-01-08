console.log (typeof Object)
console.log(typeof new Object) // aqui é um objeto pq a função foi instaciada, portanto foi criado um objeto a partir de uma função

const cliente = function () {}
console.log(typeof cliente)
console.log (typeof new cliente)

class produto {} //ES 2015 (ES6) 
console.log(typeof produto)
console.log(typeof new produto)
// a class internamente cria uma função