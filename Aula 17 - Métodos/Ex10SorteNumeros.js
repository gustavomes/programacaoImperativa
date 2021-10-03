// Aula 17  - 20/09/2021
// Métodos Avançados
// Sort = ordenar
// sort() é um método que ordena os elementos de um array.

let numeros = [50, 100, 2, 5, 25, 10];

// ordem crescente
console.log(numeros.sort(
    function(a,b) {
        return (a-b);
    }
));

//se a comparação for menor que zero, a é posicionado antes de b
//se a comparação for maior que zero, a é posicionado depois de b
//se a comparação for igual a zero, a e b permanecem com as posições inalteradas

//[ 2, 5, 10, 25, 50, 100 ]


/* // ordem decrescente
console.log(numeros.sort(
    function(a,b) {
        return b-a;
    }
)); */