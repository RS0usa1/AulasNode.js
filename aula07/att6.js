const readline = require('readline-sync');
const readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const ch = '█';
function coisa(frase) {
    for (let i = 0; i < frase.length + 2; i++) {
        process.stdout.write(ch);
    }
}
readline.question('Digite uma frase: ', (frase) => {
    coisa(frase);
    console.log(`${ch} ${frase} ${ch}`);
    coisa(frase);
});