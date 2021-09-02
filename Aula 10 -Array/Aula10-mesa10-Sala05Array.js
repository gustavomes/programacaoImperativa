/*
Grupo 05

Alexandre Bastos
Gustavo Souza  
Israel Almeida
Mauricio Gregory
Ricardo Ramalho
*/

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length -1])

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][2])

let str = "una string qualquer"

let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) 

//Array Invertido
//1)
console.log ("Valores Normais: ")


const num = [1, 2, 3];
console.log (num [0])
console.log (num [1])
console.log (num [2])


console.log ("===========")

function imprimirInverso (matriz){

    for (let index = matriz.length -1; index >= 0; index--){
        console.log(matriz[index]);
    }
};

console.log ("Valores Invertidos:")
imprimirInverso(num); 

//Inversão do Array (novo)
//2)

function inverso (matriz){
        return matriz.reverse ()

}

console.log ("Valores Invertidos Novo:")
console.log (inverso (num))


//Soma do Array


function somarArrayRed(matriz){
    const soma = matriz.reduce ((acc, valor) => { 
        return acc + valor; 
    }, 0);
        return soma
};

console.log(somarArrayRed([1, 2, 3, 4]));


//ARRAY JOIN
var matriz1 = ["O","i"];
var matriz2 = ["A","d","e","u","s"];

function arrayJoin(matriz){  
    var letrasjuntas = "";
    for (let index = 0; index < matriz.length; index++) {
        letrasjuntas = letrasjuntas + matriz[index];        
    };
    return letrasjuntas;
}

console.log(arrayJoin(matriz1));
console.log(arrayJoin(matriz2));


//Filmes 

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

console.log (filmes)

function maiuscula(matriz){
    for(let index = 0; index < matriz.length; index++){
        matriz[index] = matriz[index].toUpperCase();
    }
    return matriz;
}
var maiuscFilmes = maiuscula(filmes);
console.log(maiuscFilmes);

//Filmes 2

let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log(filmes2);

function juntarfilmes (matriz1, matriz2) {
    for (let index = 0; index < matriz2.length; index++) {
        matriz1.push(matriz2[index]);
    };
    return matriz1;
  };
  console.log(juntarfilmes(filmes, filmes2));

  //filmes 3/4 e fime errado

  var filmes3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
  var filmes4 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];


  function juncaopop (matriz1, matriz2) {
    var errado = matriz2[matriz2.length-1];
    console.log("errado: " + errado);
    matriz2.pop();
    for (let index = 0; index < matriz2.length; index++) {
        matriz1.push(matriz2[index]);
    };
    return matriz1;
  };
  console.log("lista de filmes corrigida: " + juncaopop(filmes3, filmes4));
