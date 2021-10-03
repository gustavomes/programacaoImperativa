// Aula 17  - 20/09/2021
// Métodos Avançados
// Filter() é um método que retorna um novo array,
// com os elementos que atendem uma condição

let idades = [-1,-2, 0, 3, 4, 22, 8, 17, 14, 30];
console.log(idades);

let idadesMaiores = idades.filter(
    elementos => elementos >5
);

console.log(idadesMaiores);