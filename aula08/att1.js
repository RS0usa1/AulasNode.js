const readline = require('readline-sync');

const info = [];

console.clear();

async function agenda() {
    const nome = readline.question('Digite seu nome: ');
    const cel = readline.questionInt('Digite seu numero de celular: ');
    const localidade = readline.question('Digite seu endereço: ');  
    
    info.push({nome, cel, localidade});
    continuar(); 
}

agenda();

async function continuar() {
    const cont = readline.question('Deseja continuar? (S/N): ');

    if (cont === 'S' || cont === 'sim' || cont === 'SIM' || cont === 's') {
        console.log('\n');
        return agenda();
    } else {}
    if (cont === 'N' || cont === 'não' || cont === 'nao' || cont === 'n' || cont === 'NÃO' || cont === 'NAO') {
        console.log('\n', info);
    }
}
