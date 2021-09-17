/* let frutasAmarelas=[`melão`, `mamão`, `limão siciliano`]; //atribução de um array a variável "frutasAmarelas"
let frutasVermelhas=[`morando`, `cereja`,`maça red`];//atribução de um array a variável "frutasVermelhas"
let frutasverdes=[`Limão`, `Kiwi`, `maça verde`];//atribução de um array a variável "frutasverdes"

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());//atribuição na variável "frutasVermelhas1" dos valores da váriavel frutasVermelhas com Uppercase (método ou função que não foi ensinada)
let todasFrutas=[...frutasAmarelas, ...frutasVermelhas1,...frutasverdes];//atribuição na variável "todasFrutas" do array formados pelos arrays atribuídos as variáveis "frutasAmarelas" 

console.log (todasFrutas); //exibe no console de saída o valor da variável "todasFrutas"
 */

/* function soma(a=1, b=3) {
    return a+b;
}
console.log (soma())
console.log (soma(3))
console.log (soma(1,2)) */

function soletrar(texto) {
    console.log(texto.replace ('-','').toLocaleUpperCase().split("").join("-"))
}
soletrar ("digital-house");
soletrar ("ctd")