// //Média das notas
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite a primeira nota: ', (n1) => {
    readline.question('Digite a segunda nota: ', (n2) => {
                let media = (Number(n1) + Number(n2))/2;
                console.log(`A media das notas e: ${media}`);
                readline.close();
    });
});

// console.log(`A media das notas e: ${(Number(n1) + Number(n2))/2}`);