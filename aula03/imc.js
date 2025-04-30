const readline = require('readline-sync');

const altura = Number(readline.question('Qual a sua altura? '));
const peso = Number(readline.question('Qual o seu peso? '));

if (!isNaN(peso) && !isNaN(altura)) {
    const imc = peso / altura**2;
    console.log(`Seu IMC é ${imc.toFixed(2)}`);
    imc < 17 ? console.log('Muito abaixo do peso') :
    imc < 18.5 ? console.log('abaixo do peso') : 
    imc < 25 ? console.log('Peso normal') : 
    imc < 30 ? console.log('Acima do peso') : 
    imc < 35 ? console.log('Obesidade grau I') :
    imc < 40 ? console.log('Obesidade grau II') :
    console.log('Obesidade grau III'); 
} else {
    console.log('Valores inválidos!');
}
