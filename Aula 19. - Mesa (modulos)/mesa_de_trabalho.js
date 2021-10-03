/* 

Grupo - 02

Isnard Cavalcanti
Tulio Marinho
Lays Maiara
Gustavo Souza
Wirley Almeida
Weverton Gois */


/* const pessoasmod = [{sexo: 'M', altura: 1.55}, {sexo: 'F', altura: 1.60}, {sexo: 'M', altura: 1.62}, {sexo: 'F', altura: 1.64}, {sexo: 'M', altura: 1.68}, {sexo: 'F', altura: 1.70}, {sexo: 'M', altura: 1.72}, {sexo: 'F', altura: 1.74}, {sexo: 'M', altura: 1.76}, {sexo: 'F', altura: 1.78}, {sexo: 'M', altura: 1.80}, {sexo: 'F', altura: 1.82}, {sexo: 'M', altura: 1.84}, {sexo: 'F', altura: 1.86}, {sexo: 'M', altura: 1.88}]; */



const fs = require('fs');
const pessoas = require(`./modulos/mesa_de_trabalhoA`) // importação do módulo;

// 1. Média de Altura da Mulheres

let somaMulheres = 0;
let qtdMulheres = 0;

for(let i = 0; i < pessoas.length; i++){

    if(pessoas[i].sexo === 'F'){
        somaMulheres += pessoas[i].altura;
        qtdMulheres++;
    }
}

console.log(`Média de altura das mulheres: ${somaMulheres/qtdMulheres}\n\n`);

//2. Quantidade de homens 

    const Homens = pessoas.filter(i => i.sexo === 'M'); 
    console.log(`Quantidade de homens: ${Homens.length}\n\n`);

//3. Maior e menor altura do grupo

const maior = Math.max(...pessoas.map(i => i.altura));
const menor = Math.min(...pessoas.map(i => i.altura));
console.log(maior, menor);






