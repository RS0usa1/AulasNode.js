const readline = require('readline-sync');

console.clear();

const CLS = '\x1Bc';
const nome = [];
const fone = [];
const cidade = [];

function agenda() {
    const n = readline.question('Nome: ');
    const f = readline.question('Fone: ')
    const c = readline.question('Cidade: ')
    nome.push(n);
    fone.push(f);
    cidade.push(c);
}

while (true) {
    console.log(CLS);
    addArray();

    const op = readline.question('Continuar? [s/n]: ');
    if (op != 's') {
        break;
    }
}

for (let i=0 ; i<nome.length ; i++) {
    console.log(`Nome: ${nome[i]}\tFone: ${fone[i]}\tCidade: ${cidade[i]}`)
}