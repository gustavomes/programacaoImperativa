//length (conta os caracteres)
const texto = "    Olá mundo"
console.log (texto.length) // 9 pois inicia no 0

//indexOf (procura um caractere ou string)
console.log (texto.indexOf ("s")) // -1
console.log (texto.indexOf ("m")) // 4 é a localização do "m"
console.log (texto.indexOf ("mundo"))// palavra inteira inicia no 4

// slice (conta os elementos de uma string de um ponto ao outro)
console.log (texto.slice (0,3)) // retornará a caracteres de  0 até 3 - olá

//- outro exemplo de slice

 palavra = texto.slice (0,3) 
console.log (palavra)
// console.log (texto) //Slice não altera a string

//trim (retira os espaços antes e depois de uma string)

console.log (texto)
console.log (texto.trim())


//split (transforma uma string em array por palavras)

console.log ("sou do planeta terra".split (" ")) 

//replace - substtitui parte de string

console.log ("sou programador php".replace ("php", "javascript"))

