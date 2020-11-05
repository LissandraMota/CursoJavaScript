const escola = "Cod3r"

//vai me dar a letra que está no quarto índice, começa por 0
console.log(escola.charAt(4)) 

console.log(escola.charAt(5)) //como não existe esse caractere retorna vazio
//JS é uma linguagem mais relaxada não gera erro direto, como no caso acima

console.log(escola.charCodeAt(3))//dar como resultado o cóigo relacionado a tabela unicode(tabela asper), com relação ao índice dado da string

 console.log(escola.indexOf("3"))//gera o índice associado ao dígito colocado, no exemplo fora colocado o dígito 3

 console.log(escola.substring(1))//pega a partir do índice 1

 console.log(escola.substring(0, 3))//pega a partir do índice 0 ao 2, não inclui o índice 3

 console.log("Escola ".concat(escola).concat("!"))//faz concatenação
 //concatenou Escola+ const escola (Cod3r) + !
 // pode no lugar da função .concat utilizar o símbolo +:
 console.log("Escola " + escola + "!")

 console.log(escola.replace(3, "e")) //o replace faz substituições, no exemplo o índice 3 foi substituído pela letra e

 // /\d/ : substiui todos os dígitos(números) usando esse símbolo - reject
 console.log(escola.replace(/\d/, "e"))

 // /\w\g : substitui todas as letras e dígitos - reject
 console.log(escola.replace(/\w/g, "e"))

//pegar uma string e converter em uma strutura chamada array: (quebra uma string e transforma em array)
//basta chamar a função split ("o que será o separador"):
console.log("Ana, Maria, Pedro".split(","))

