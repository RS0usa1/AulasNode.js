const readline = require('readline-sync');

const num = Number(readline.question('Digite um número: '));

if (!isNaN(num)) {
    num % 2 === 0 ? console.log('Par') : console.log('Impar');
} else {
    console.log('Número inválido!');
}