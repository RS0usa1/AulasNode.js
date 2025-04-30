const notas = [10, 7, 4];

// notas.sort((a, b) => a-b);
// console.log(notas);

// notas.push(-5);
// notas.push(true);
// notas.push("abc");
// console.log(notas);

/* splice(posição, ação, valor)
0 -> manter o valor da posição especificada
1 -> remove o valor da posição especificada
*/
// notas.splice(1, 1,);

// console.log(notas);

/* pop remove sempre o ultimo elemento do array*/
// notas.pop();

// console.log(notas);

for (i in notas) {
    console.log(notas[i] ** 2);
}