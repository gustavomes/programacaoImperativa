//condicional - if else

var n1 = 4;
var n2 = 7;
var n3 = 3;
var n4 = 3;

var media = (n1+n2+n3+n4)/4
/* console.log ("A média final do Aluno é..... : " + media) */

if (media >= 7) {
    console.log ("A média do Aluno foi " + media + " e ele foi aprovado")
} 
 else if((media < 7)&& (media >= 4)) {
    console.log ("A média do Aluno foi " + media + " e ele está em recuperação")

} else {
    console.log ("A média do Aluno foi " + media + " e ele foi reprovado")
}