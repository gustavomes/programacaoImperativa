/* 1)	Crie uma função podeSubir() que receba dois parâmetros: 
-	altura da pessoa;
-	se está acompanhada.
 */
/* var altura = 1.90;
var acompanhada = true;
 */
/* function podesubir(altura,situacao){
    if (altura>1.4 && altura < 2.0) {
        console.log(`A pessoa pode subir`)
    } else if ((altura > 1.2 && altura < 1.4)&&(situacao==true)) {
        console.log (`a pessoa deve ir acompanhada`)
    } else {
        console.log(`Nao pode subir`)
    }
}
podesubir(1.3,true) */

function podesubir(altura,situacao){
    switch(altura,situacao){
    case (altura>1.4 && altura < 2.0): 
        console.log(`A pessoa pode subir`)
        break;
    case ((altura > 1.2 && altura < 1.4)&&(situacao==true)):
        console.log (`a pessoa deve ir acompanhada`)
        break
    case (altura<1.2):
        console.log(`Nao pode subir`)

    }
}
podesubir(1.3,true)


