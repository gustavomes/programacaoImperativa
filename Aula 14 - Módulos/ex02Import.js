//Importando Módulo
// Ex02Import

let pets = require("./modulos/ex02Export");

console.log (`==================================`);
console.log (`Ficha do Pet: ` + pets.cachorro.nome);
console.log (`Nome ....: ` + pets.cachorro.nome);
console.log (`Idade ....: ` + pets.cachorro.idade);
console.log (`Cor ....: ` + pets.cachorro.cor);
console.log (`sexo ....: ` + pets.cachorro.sexo);
console.log (`Raça ....: ` + pets.cachorro.raca);
console.log (`==================================`);
