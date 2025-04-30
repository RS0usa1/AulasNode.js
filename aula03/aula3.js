const readline = require('readline-sync');

const idade = Number(readline.question('Qual a sua idade? '));

if (!isNaN(idade)) {
    if (idade >= 0 && idade <= 120) {
       if (idade >= 18) {
           console.log('Maior de idade!');
       } else if (idade < 18) {
           console.log('Menor de idade!');
       }
    } else {
        console.log('Idade inválida!');
    }
} else {
    console.log('Idade inexistente!');
}