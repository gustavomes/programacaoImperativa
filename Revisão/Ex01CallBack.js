// 28/09/2021 - Revisão dos
//O que é callBack?
//é um tipo de função que só é executada após o 
//o processamento de outra função.

let salarioBruto = 5000; // declarando a variável  salarioBruto; //criando uma variável para ser usada posteriormente; // 

function getSalario(salarioBruto, holerite) { // criando uma função uma função que terá com parâmetro uma variável e uma outra função (callback)

const inss = salarioBruto * 0.11
const vr = salarioBruto * 0.05;
const vt = salarioBruto * 0.06;
const descontos = inss + vr + vt;
let salarioLiquido = salarioBruto - descontos; // cálculo do valor do salário líquido

return holerite(salarioLiquido)
} 

getSalario (salarioBruto, (salarioLiquido)=> {
    //salarioLiquido = resultado; 
    console.log(`o salário liquido é ${salarioLiquido}`)
});
