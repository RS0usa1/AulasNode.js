//Temp em Celsius
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite a temperatura em Celsius: ', (Celsius) => {
    let Farenheit = (Celsius * 1.8) + 32;
    console.log(`A temperatura em Farenheit é: ${Farenheit}`);
    readline.close();
});