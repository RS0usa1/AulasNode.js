const readline = require('readline-sync');
const n = Number(readline.question('Digite o valor de n: '));
let ehprimo = true;
const primos = [];

if (isNaN(n)) {
  console.log('Número inválido!!')
} else if (n<2) {
   console.log('Número menor que 2.')
} else {
  for( i = 2 ; i < n/2+1 ; i++) {
    if (n % i == 0) {
      ehprimo = false;
      primos.push(i);
    } 
  } 
  if (ehprimo) {
    console.log(n, 'é primo.');
  } else {
    console.log(primos)
  }
}