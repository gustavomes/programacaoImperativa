// 1) Imprimir os números impares menores que 100
const impar = () => {
    for (let i = 0; i <= 100; i++) {
      i % 2 !== 0 && console.log(i);
    }
  };
  /* impar(); */
  
  // 2) Imprimir a tabuada do número 8
  const tabuada8 = () => {
    for (let i = 0; i <= 10; i++) {
      console.log(`8 x ${i} = ${8 * i} `);
    }
  };
  /* tabuada8(); */
  
  // 3)Imprimir todas as tabuadas do número 1 ao 10
  const tabuada = (limite1, limite2) => {
    for (let fator1 = 0; fator1 <= limite1; fator1++) {
      console.log(`Tabuada do ${fator1} `);
      for (let fator2 = 0; fator2 <= limite2; fator2++) {
        console.log(`${fator1} x ${fator2} = ${fator1 * fator2} `);
      }
    }
  };
  /* tabuada(10, 5); */
  
  // 4)Soma dos números de 1 a 10
  const somaNumeros = () => {
    let soma = 0;
    for (let i = 0; i <= 10; i++) {
      soma += i;
    }
    return console.log(soma);
  };
  // somaNumeros();
  
  // 5)Calcular a soma dos números impares maiores que 10 e menores que 30
  const somaImpares = () => {
    let somaImpares = 0;
    let somaPares = 0;
    for (let i = 10; i <= 30; i++) {
      i % 2 !== 0 ? (somaImpares += i) : (somaPares += i);
    }
  
    return console.log(somaImpares, somaPares);
  };
  // somaImpares()
  
  // 6)Calcular a soma dos números de um array
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const somaArray = (numeros) => {
      const soma = numeros.reduce((acc, item) => {
      return acc + item;
  }, 0);
    return console.log(soma);
  };
  somaArray(array); 
  
  // 7)Criar uma função que retorno um valor booleano informando se o número enviado como parâmetro é um número primo.
  const primo = (buleano) => {
     let divisores = 0;
    for (let i = 1; i<= buleano; i++){
        buleano%i===0 && divisores++ 
    }
    return divisores === 2 ? true : false;
  }
  console.log(primo(4));
  
  // 9)Criar uma função que junte dois arrays e retorno o resultado como um novo array
  const resultado = (array1,array2) => {
      const var1 = array1.concat(array2);
      return var1;
  }
  console.log(resultado([1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7]));
  
  // 10)Calcular a média de todos os números de um array
  const media = (arrayzinho) => {
     var soma=0;
      
     for (i= 0; i < arrayzinho.length; i++){
         soma = soma + arrayzinho[i]  // = arrayzinho[0]. arrayzinho[1],arrayzinho[2],arrayzinho[3]
      }
      return soma/arrayzinho.length;
  }
  console.log(media([1,2,3,4,5,6,7]));
  
  // 11)Localizar o maior valor dentro de um array de números
  const numbers = [1, 2, 3, 4, 5, 6, 7,765]
  const maiornumero = numbers.reduce((numeroanterior, numeroatual) => {
          return numeroanterior > numeroatual ? numeroanterior : numeroatual;
      })
  console.log(maiornumero)
  
  // 12)Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando
  // 13)recursividade
  // 14)Crie uma função que calcule a raiz quadrada de um número e retorne um número inteiro como resultado
  // 15)Retornar a maior string de um array
  // 16)Contar a quantidade de palavras em um texto
  // 17)Criar uma função para inverter um array