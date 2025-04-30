const readline = require('readline-sync');

let idade = Number(readline.question('Digite sua idade: '));
    if(idade >0 && idade < 121) {
        console.log('Idade válida');
    } else {
        console.log('Idade inválida');
    } if (idade >= 18 && idade <= 121) {
        console.log('Maior de idade!');
    } else {
        console.log('Menor de idade!');
    } 