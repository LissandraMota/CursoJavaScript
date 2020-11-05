//IIFE --> Imediately Invoked Function Expression (imediatamente invocada)
// função autoinvocada
// no caso do browser serve para fugir do escopo global
// usa a função anônima dentro de um parenteses () e depois invoca com outro parenteses ()

//usado para fugir do escopo global
(function() {
    console.log("Será eecutado na Hora!")
    console.log("Foge do escopo global")
})()