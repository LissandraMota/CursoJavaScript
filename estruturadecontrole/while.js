// while = enquanto -> é uma estrutura de controle de repetição
//é mais apropriada para quando se tem uma quantidade indeterminada de repetições
// isso não significa que não se possa usar o while para repetições com quantidade determinadas de vezes, porém nesses casos é mais adequado usar o for
//while precisa de uma expressão V ou F (enquanto a expressão for verdaeira fica gerando o laço até for falsa)

// função que gera um inteiro aleatório 
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)       //se der -1 sai do laço
    console.log(`Opção escolhida foi ${opcao}.`)   // símbolo da crase
}

console.log("Até a próxima")



