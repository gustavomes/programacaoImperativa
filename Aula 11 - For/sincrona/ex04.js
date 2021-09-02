// Aula 11 - 31/08/2021
//Repetições - for
//Início | limite de repetições | modificador do contador (incremento/decremento)

exibirTipo(10)

function exibirTipo (limite){
    for (let index = 0; index < limite; index++) {
        if (index%2==0)
            console.log ("Par = " + index);
        else
            console.log ("Impar = " + index);
        
    }
}