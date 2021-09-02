// Aula 11 - 31/08/2021
//Repetições - for
//Início | limite de repetições | modificador do contador (incremento/decremento)

/* const precosemtaxa = [1200, 340, 560]; // valores do primeiro array
const taxa = 1.21; //valor que vai multiplicar os valores 

let precoComtaxa = [];//array vazio para ser preenchido

function guardarPrecoComTaxa (precosemtaxa){
    for (let index = 0; index < precosemtaxa.length; index++) { // Laço de repetição para percorrer PreçoSemtaxa
        precoComtaxa.push(precosemtaxa[index]*taxa) //acrescenta valores na let PrecoComtaxa, usando a precosemtaxa * taxa
        
    }
}

function motrarPrecocomTaxa (array){
    for (let i = 0; i < array.length; i++){
        console.log (array[i]);// sengunda função para imprimir os valores adquiridos na primeira função (precoComtaxa)
    }
}

guardarPrecoComTaxa(precosemtaxa)// chama a primeira função usando 
motrarPrecocomTaxa(precoComtaxa) */

const precoSemTaxa = [1200, 340, 500, 38400, 500, 7060, 400, 1000];
const taxa = 1.21;
const precoComTaxa = [];

function guardarPrecoComTaxa(precoSemTaxa){
    for(let i = 0; i < precoSemTaxa.length; i++)
        precoComTaxa.push(precoSemTaxa[i] * taxa)
    return precoComTaxa;
};

//guardarPrecoComTaxa(precoSemTaxa);
console.log(`Meu array: ${guardarPrecoComTaxa(precoSemTaxa)}`);


