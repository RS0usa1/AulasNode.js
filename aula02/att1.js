const readline = require('readline-sync');

    let num = Number(readline.question('Digite sua idade: ')); 
     if (num >= 18 && num <= 120) {
        console.log('Maior de idade!');
    } else if (num < 18 && num >= 0) {
        console.log('Menor de idade!');
    } else {
        console.log('Idade inválida');
    }
