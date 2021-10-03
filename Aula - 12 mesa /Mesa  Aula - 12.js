//Mesa Aula 12

// Grupo 03

//Dayana Miranda
//Luana Borges
//Marcelo Cabral
//Gustavo Souza

// 1.
function consumoPorKm (distancia, combustivel) {
    console.log (consumo = distancia/combustivel);
}

consumoPorKm (123, 10)

// 2.


function totalarrecadado (homens, mulheres) {


return ((homens * 20) + (mulheres * 17))

}

console.log (totalarrecadado (10,10))


// 3. 

function media (nota1, nota2){
    return ((nota1 + nota2)/2)
}

let mediafinal = media (10,8)
console.log ("a média firnal é: " + mediafinal)

// 4.


var nomes = ["maçã", "pera", "banana"]

console.log (nomes)

// Parte 2
//  1. 

var numero = 11;

if (numero > 10){
    console.log ('Esse número é maior que 10')

} 

// 2. 

var numero1 = 11;
var numero2 = 12;

if (numero1 > numero2){
    console.log (numero1 + " é maior")

} else {

    console.log (numero2+ " é maior")    
}


// 3.
var nume1 = 11;
var nume2 = 12;

if (nume1 == nume2){
    console.log ("Os números são iguais")

} else {

    console.log ("Os números são diferentes")   
}


// 4. 


var parimpar = 11;

if (parimpar %2 == 0){
    console.log ("Par")

} else {

    console.log ("Ímpar")   
}

// 5.

var multip = 10;

if (multip / 10 == 0){
    console.log ("Múltiplo de 10")

} else {

    console.log ("Não é Múltiplo de 10")   
}

// Parte 3
// 1.

var intervalo = 11;


if ((intervalo > 15 && intervalo < 25) ||  (intervalo > 45 && intervalo < 50)) {
    console.log ("Erro")

/*     const num = 14;
if ( 15 < num < 25 || 45 < num < 50){
    console.log("Erro"); */
}

// 2.

var num = 79;

if ((num > 80 || num < 25) ||  (num == 40)) {
    console.log ("oi")

}

// 3.

var m1 = 80;
var m2 = 10;
var m3 = 10;

if ((m1 < m2 + m3) && (m2 < m1 + m3) && (m3 < m1 + m2)) {
    console.log ("É possível formar um triângulo")
} else {
    console.log ("Não é possível formar um triângulo")
}

//4.

var nome = "Willian";

if ((nome == "Willian") || (nome == "Rafael") || (nome == "Javascript" )) {
    console.log ("Você é especial")

}

// Parte 4
//7.

 
const palavra = "banana";

if (palavra.length == 6) {
    console.log ("ok")

    } else {
    console.log ("Digite novamente")
    }

    
// Parte 5 

//1.

var martriz = [];


for (let index = 0; index < 10; index++) {
    martriz.push ("js");
    
}


console.log (martriz)