const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function listarPrimos(qtd) {
  let primos = [];
  let numero = 2;
  while (primos.length < qtd) {
    if (verificarPrimo(numero)) {
      primos.push(numero);
    }
    numero++;
  }
  console.log(`Os primeiros ${qtd} números primos são: ${primos.join(", ")}`);
  rl.close();
}

rl.question(
  "Digite a quantidade de números primos que você deseja listar: ",
  (input) => {
    let qtd = parseInt(input);
    if (isNaN(qtd) || qtd <= 0) {
      console.log("Por favor, insira um número inteiro válido maior que 0.");
      rl.close();
    } else {
      listarPrimos(qtd);
    }
  }
);
