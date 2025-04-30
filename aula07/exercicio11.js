const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function verificarNumero(numero) {
    if (numero <= 1) {
      console.log("O número deve ser maior que 1.");
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        console.log(`O número ${numero} não é primo. Seu primeiro divisor é ${i}.`);
        return;
      }
    }
  
    console.log(`O número ${numero} é primo.`);
  }
  
  rl.question("Digite um número inteiro maior que 1: ", (input) => {
    let numero = parseInt(input);
  
    if (isNaN(numero)) {
      console.log("Por favor, insira um número válido.");
    } else {
      verificarNumero(numero);
    }
  
    rl.close();
  });
  