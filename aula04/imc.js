const readline = require('readline-sync');

const peso = Number(readline.question('Digite seu peso: '));
const altura = Number(readline.question('Digite sua altura:'));

const imc = (!isNaN(peso) && !isNaN(altura)) ? peso/altura**2 : 'Peso e/ou altura inválido';

console.log(`IMC: ${(isNaN(imc)) ? imc : imc.toFixed(1)}`)

const estado = (!isNaN(imc < 17)) ? 'Muito abaixo do peso' : 
(!isNaN(imc >= 17) && !isNaN(imc <= 18.5)) ? 'Abaixo do peso' : 
(!isNaN(imc >= 18.5) && !isNaN(imc <= 24.99)) ? 'Peso normal' : 
(!isNaN(imc >= 25) && !isNaN(imc <= 29.99)) ? 'Acima do peso' : 
(!isNaN(imc >= 30) && !isNaN(imc <= 34.99)) ? 'Obesidade I' : 
(!isNaN(imc >= 35) && !isNaN(imc <= 39.99)) ? 'Obesidade II (severa)' : 
(!isNaN(imc >40)) ? 'Obesidade III (mórbida)' : 'Indefinido' ;

if (estado != 'Indefinido')
    console.log("Estado: ", estado);