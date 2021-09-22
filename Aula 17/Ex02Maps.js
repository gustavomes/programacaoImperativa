// Aula 17  - 20/09/2021
// Métodos Avançados
// O map() é um método que cria uma nova matriz com os resultados
// da chamada de uma função para cada elemento da matriz.

let numeros = [2, 4, 6];

let dobro = numeros.map(
    function(num){
   
    return num * 2;
});
console.log(dobro); // [4,8,12]
console.log(numeros); // []