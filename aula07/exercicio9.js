const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos números da série de Fibonacci você quer ver? ', (input) => {
  const qtd = parseInt(input);

  if (isNaN(qtd) || qtd <= 0) {
    console.log('Por favor, digite um número inteiro positivo.');
    rl.close();
    return;
  }

  let a = 0, b = 1;

  console.log('Série de Fibonacci com aproximação de Phi:\n');

  for (let i = 0; i < qtd; i++) {
    console.log(`F${i} = ${a}`);

    if (i >= 2) {
      const phi = b / a;
      console.log(` Aproximação de (phi): ${phi.toFixed(6)}`);
    }

    const temp = a + b;
    a = b;
    b = temp;
  }

  rl.close();
});
