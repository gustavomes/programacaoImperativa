// Mesa de Trabalho - Aula 10 

// Integrantes: Isnard Cavalcanti, Dayana Miranda, Lays Maiara, Mario Braga, Poliana Gomes 


/* let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])  */


/* let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
 */

/* let str = 'una string qualquer'
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) */

// 1 -  O primeiro retorna o comprimento da variável numbers

// 2 - Vai retornar Spiderman

// 3 - O console.log vai retornar o terceiro elemento da string, que por sua vez tem 6 elementos - 1 que vai retornar o índice 5 da posição 2 do grupoDeAmigos.


let arrayTeste = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 1.
function inverterArray(array) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    console.log(array[index])
  }
}

// 2.
function inverterArrayERetorna(array) {
  return array.reverse()
}

// 3.
function somaArray(array) {
  let soma = 0
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index]
    console.log(index, soma)
  }
  return soma
}

let array = [230, 54, 89, 43, 32, 1]
let somaFinal = testArray(array);

// 1. Resposta
inverterArray(arrayTeste);

// 2. Resposta
let arrayInvertido = inverterArrayERetorna(arrayTeste);
console.log(arrayInvertido);

// 3. Resposta
let somaFinal = somaArray(arrayTeste);
console.log(somaFinal);

