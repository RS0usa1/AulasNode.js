const readline = require('readline-sync');

const x = Number(readline.question('De o valor de X: '));

const e = (1 + 1/x) ** x;

if (!isNaN(x) && x >= 0) {
    console.log(e.toFixed(3));
} else {
    console.log('X inválido!');
}