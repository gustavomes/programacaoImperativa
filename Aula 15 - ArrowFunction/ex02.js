//aula 16
//Arrow Function

const multiplo = (a,b) => {
    let resto = a % b; //obtemos o resto da divisão
    return resto == 0;
}

//chamar função multplo

//multiplo (2,2);

 if (multiplo (21,2)== true) {
     console.log ("É multiplo");
 } else {
    console.log ("Não é multiplo"); 
 }