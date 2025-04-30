// //Tela do preço final
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Digite o preço: ', (preco) => {
    readLine.question('Digite a desconto: ', (desconto) => {
        let precoFinal = preco - (preco * desconto);
        console.log(`O preco final e: ${precoFinal}`);
        readLine.close();
    });
});