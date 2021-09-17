
let minhaCallBack = () => {

 const fizzBuzz = (a, b) => {
    for (let i = 0; i <= 100; i++) {
        if (typeof i !== 'number')
            console.log('Não é um número')
        else if ((i % a === 0) && (i % b === 0))
            console.log('FizzBuzz')
        else if (i % a === 0)
            console.log('Fizz')
        else if (i % b === 0)
            console.log('Buzz')
        else
        console.log(i)
      }  
    }
    fizzBuzz(3, 5) 
    
}


setTimeout (minhaCallBack, 5000)

   