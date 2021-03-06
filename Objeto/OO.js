// CÓDIGO NÃO EXECUTÁBEL !!!

// paradigma procedural ---> uma função que manipula dados
processamento(valor1, valor2, valor3)

// OO  ----> tem dados e dentro desses dados tem funções
//objeto agrupa comportamentos e atributos
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        // ...
    }
}

objeto.processamento() // foco passou a ser o objeto - a função pertence ao objeto, a função é um método, um comportamento

// Princípios importantes:

// 1. abstração ---> trazer , por exemplo uma objeto do mundo real para o sistema, de forma simplificada
// colocar as informações pertinentes para sistema, ou seja, pegar o objeto do mundo real e abstrair dele apenas o que realmente for pertinente para o sistema

//2. encapsulamento -->esconder detalhes de aplicação

// 3. herança (prototype -> js)  ---> forma de reuso de código
// ocorre o recbimento de atributos e comprotamentos de um objeto "pai"
// o JS só permite um único obj "pai", diferente de algumas outras linguagens

// 4. polimorfismo ---> múltiplas formas
// a partir de uma variavel do tipo mais genérico, é capaz de se atribuir subtipos mais específicos, mais concretos

