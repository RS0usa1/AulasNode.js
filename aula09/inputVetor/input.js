const rd = require('readline-sync');

const dados = rd.question('Nome, Fone, Email: ').split(', ');

// console.log(dados);
// console.log(typeof dados);

console.log('Nome', dados[0]);
console.log('Fone', dados[1]);
console.log('Email', dados[2]);