console.log("a =", a) 
var a = 2
console.log("a =", a)

//o caso acima aconteceu um hoisting, por isso deu a = undefined e a= 2
//é como se tivesse assim:
/*
var a
console.log("a =", a) 
a = 2
console.log("a =", a)
*/

function teste () {
    console.log ("a =", a)
    var a = 2
    console.log ("a =",a)
}

teste()

//dentro da função o var sofre içamento, se estiver tudo dentro do escopo
//o efeito do hoisting não ocorre com o let, somente com o var que funciona

