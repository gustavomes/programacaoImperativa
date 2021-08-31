// Aula 10 - 30/08/2021
// Tema da Aula: Array
// Método que elimina o primeiro elemento de uma matriz.
// ex04ArrayShift.js

let cores = [`Azul`, `branco`,  `vermelho`,  `verde`];

//Imprimir na tela

console.log (cores);
console.log ("Array antes do SHIFT ()......:"+cores.length);
console.log (`===============================`);
let primeiroelemento = cores.shift();
console.log (primeiroelemento);
console.log (cores);
console.log ("Array depois do SHIFT ()......:"+cores.length);
console.log (`===============================`);