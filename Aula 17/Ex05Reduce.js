

let numeros = [1, 2, 3, 4]
console.log (numeros)
let soma = numeros.reduce(
    function (acumaldor, elemento) {
        return acumaldor + elemento;
    }
)

console.log (soma)

