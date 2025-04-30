const readline = require('readline-sync');

let num = Number(readline.question('Digite um numero: '))

if (num >= 0) {
    let fatorial = 1;
    for (let i = num; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`Fatorial de ${num} é: ${fatorial}`);
} else {
    console.log('Não existe fatorial de número negativo!');
}
