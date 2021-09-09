//Leitura e Escrita de Arquivo
//File System

const fs = require('fs');
let frutas = '{"Fruta":"Banana","Preco":8.50, "Tipo":"Nanica", "Origem":"Brasil"}';

// Escrever o arquivo "teste.txt"
fs.writeFileSync('./teste.txt', frutas);

//Ler Arquivo Json
let ArquivoJson = fs.readFileSync ('teste.txt', 'utf-8');
console.log (ArquivoJson)

//converter de Json para Js
let converterJsonParaJs = JSON.parse (ArquivoJson);
console.log (converterJsonParaJs)