const readline = require('readline-sync');

const num = Number(readline.question('Digite um numero: '));
const potencia = Number(readline.question('Digite a potência: ' ));

if (!isNaN(num) && !isNaN(potencia)) {
    console.log(num ** potencia);
} else {
    console.log('Não é um numero!');
}

if(num == 0) {
    console.log(0);
}

if (potencia == 0) {
    console.log(1);
} 

