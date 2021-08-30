

function menuMicroondas(opcao, tempoUsuario) {
    let tempoPadrao
  
    switch (opcao) {
      case 'Pipoca':
        tempoPadrao = 10
        var escolha1= "Pipoca"
        break
      case 'Macarrao':
        tempoPadrao = 8
        break
      case 'Carne':
        tempoPadrao = 15
        break
      case 'Feijao':
        tempoPadrao = 12
        break
      case 'Brigadeiro':
        tempoPadrao = 8
        break
      default:
        console.log('Prato inexistente')
        return
    }
  
    if ((tempoUsuario > 2 * tempoPadrao) && (tempoUsuario < 3 * tempoPadrao)) {
      console.log('A comida queimou')
    } else if (tempoUsuario < tempoPadrao) {
      console.log('Tempo insuficiente')
    } else if (tempoUsuario > 3 * tempoPadrao) {
      console.log('kabumm!')
    } else {
      console.log('Prato pronto, bom apetite!!!')
    }
  }
console.log ("-------------- Microondas --------------")
console.log ("1 - Pipoca - 10 Segundos (Padrão)")
console.log ("2 - macarrão - 8 Segundos (Padrão)")
console.log ("3 - Carne - 15 Segundos (Padrão)")
console.log ("4 - Feijão - 12 Segundos (Padrão)")
console.log ("5 - Brigadeiro - 8 Segundos (Padrão)")
 
console.log ()
menuMicroondas('Carne', 15)
menuMicroondas('Macarrao', 25)
menuMicroondas('Pipoca', 10)
menuMicroondas('Feijao', 27)
menuMicroondas('Brigadeiro', )
menuMicroondas('Lasanha', 23)