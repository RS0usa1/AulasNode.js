const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarNumero(numero) {
  if (numero <= 1) {
    console.log("O número deve ser maior que 1.");
    rl.close();
    return;
  }

  let divisores = [];
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      divisores.push(i);
      if (i !== numero / i) {
        divisores.push(numero / i);
      }
    }
  }

  if (divisores.length > 0) {
    console.log(
      `O número ${numero} não é primo. Ele é divisível por: ${divisores
        .sort((a, b) => a - b)
        .join(", ")}.`
    );
  } else {
    console.log(`O número ${numero} é primo.`);
  }

  rl.close();
}

rl.question("Digite um número inteiro maior que 1: ", (input) => {
  let numero = parseInt(input);
  verificarNumero(numero);
});
