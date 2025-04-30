// IMC de uma pessoa
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o peso:', (peso) => {
    readline.question('Digite a altura:', (altura) => {
        let imc = peso / (altura * altura);
        console.log(`O IMC dessa pessoa e: ${imc.toFixed(2)}`);
        readline.close();
    });
});