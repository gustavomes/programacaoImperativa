function adicionar (a,b) 
{
return a+b;
}
function subtracao (a,b) 
{
return a-b;
}
function multiplicacao(a,b) 
{
return a*b;
}
function divisao (a,b) 
{
return a/b;   
}
// function quadradoDoNumero (multiplicacao,b)
// {
//     return a**b
// }
function quadradoDoNumero (a){
    return a*a;
}
function mediaDeTresNumeros (a,b,c) {
    return (a+b+c)/3
}
function calculaPorcentagem (a,b) {
    return a*b/100
}
function geradorDePorcentagem (a,b) {
    return (a*100)/b
}

/*
var resultadoAd = adicionar (10,5)
console.log ("O resultado da soma é"+ " "+ resultadoAd)

var resultadoSub = subtracao (10,5)
console.log ("O resultado da subtração é"+ " "+ resultadoSub)

var resultadoMult = multiplicacao (10,5)
console.log ("O resultado da Multiplicação é"+ " "+ resultadoMult)

var resultadoDiv = divisao (10,5)
console.log ("O resultado da divisão é"+ " " + resultadoDiv)

var resultadoDiv = divisao (0,5)
console.log ("O resultado da divisão é"+ " " + resultadoDiv)
*/
console.log(`O resultado da soma foi ${adicionar (10,5)}`);
console.log(`O resultado da subtração foi ${subtracao (10,5)}`);
console.log(`O resultado da multiplicação foi ${multiplicacao (10,5)}`);
console.log(`O resultado da divisão foi ${divisao (10,5)}`);
console.log(`O resultado da divisão foi ${divisao (10,0)}`);
console.log(`O resultado do número ao quadrado foi ${quadradoDoNumero (10)}`);
console.log(`O resultado da Média de Três Números foi ${mediaDeTresNumeros (10,10,10)}`);
console.log(`O resultado da Porcentagem (15%) foi ${calculaPorcentagem (300,15)}`);
console.log(`O número 2 representa que porcentagem de 200? ${geradorDePorcentagem (2,200)}`);










