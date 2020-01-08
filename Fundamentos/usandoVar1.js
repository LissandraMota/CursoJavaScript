{
    {
        {
            {
                var sera = "Será?"
                console.log(sera)
            }
        }
    }
}
console.log(sera)

/*
a variável var dentro de um bloco de código, que não seja uma function, ficará visível 
para todo mundo que estiver mesmo fora do bloco, difrente de outras linguagens, por isso mesmo
o console.log estando fora do escopo funcionou
*/

function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(logal) aqui não dar certo pq a variável dntro do escopo não está visível, o console.log tem que ficar dentro do escopo

