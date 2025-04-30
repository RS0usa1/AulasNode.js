const readline = require('readline-sync');

// Quando sabemos previamente a quantidade de interações [repetição]
// ++ operador de incremento
// -- "  " decremento
// for (let i=-1 ; i<=11 ; i= i + 3) {
//     console.log(i)
// }

let num;
// While => quando não sabemos previamente a quantidade de interações [repiteção]
while (true) {
    num = Number(readline.question('N >= 0:'))
    if (num >= 0) {
        break
    }
}

console.log(num ** 2)