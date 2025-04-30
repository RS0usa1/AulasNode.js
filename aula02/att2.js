const readline = require('readline-sync');

let peso = Number(readline.question('Digite seu peso atual: '));
let altura = Number(readline.question('Digite sua altura: '));
const IMC = peso / (altura ** 2) 
console.log ("Este é o seu IMC: ", IMC)

    if (altura >=0 && altura <=2.20) {
        console.log('Altura válida!!')
    } else {
        console.log('Altura inválida!!')
    } if (altura <= 1.40) {
        console.log('Voce é um anão🤣🤣🤣');
    } else if (altura >= 2.10) {
        console.log('Que isso Ambayama👌👌')
    } else if (altura >= 1.41 && altura <= 2.09) {
        console.log('Sua altura é normal!!')
    }

    if(!isNaN(peso)) {
        if (peso >=0 && peso <=200) {
            if (peso >=0 && peso <=40) {
                console.log('Peso válido!!');
            } else {
                console.log('Peso inválido!!');
            } if (peso >=0 && peso <= 17) {
                console.log('Muito abixo do peso!!');
            } else if (peso >= 17 && peso <= 18.49) {
                console.log('Abaixo do peso!!');
            } else if (peso >= 18.50 && peso <= 24.99) {
                console.log('Peso normal!!');
            } else if (peso >= 25 && peso <= 29.99) {
                console.log('Acima do peso!!');
            } else if (peso>= 30 && peso <= 34.99) {
                console.log('Obesidade I');
            } else if (peso>= 35 && peso <= 39.99) {
                console.log('Obesidade II (severa)');
            } else if (peso>= 40) {
                console.log('Obesidade III (Mórbida)');
            } else {
                console.log('Peso inexistente!!');
            }
    } else {
        console.log('Não é um peso!!');
    }
}
    
    
    