// Aula 14 - 09/09/21
// Objetos JSon

// Objeto Json
let frutas = '{"Fruta":"Banana","Preco":8.50, "Tipo":"Nanica", "Origem":"Brasil"}';
console.log("Objeto JSON.....: "+frutas);

// Converter para JS
//Desserialização 
let frutasConvertidasJS = JSON.parse(frutas);
console.log("Convertida de JSON para JS....: "+frutasConvertidasJS);
//converter para Json
//serialização 
let frutasConvertidasJSon = JSON.stringify(frutasConvertidasJS);
console.log("Convertida de JSON para JSon....: "+frutasConvertidasJSon)
