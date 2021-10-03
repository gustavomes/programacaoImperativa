// Aula 13 09/09/21
// Objetos Literal com Função


//Criando objeto literal
let carro = {
    placa: 'BRA2258',
    cor: 'Preto',
    ano: 2021,
    flex: true,
//criando uma função
    mostrarCaracteristicas: function () {
        return 'Características do carros: \nPlaca: ' + carro.placa + '\nCor: ' + carro.cor + '\nAno: ' + carro.ano + '\nFlex: ' + carro.flex; // "\n" para quebrar a linha
    }
}
//acessando o objeto literal
console.log (carro.mostrarCaracteristicas())
