const a = [[-5, 8, 0], [3, 7, 10], [1, -8, 2]];
const b = [[5, 7, 4], [-1, -1, -1], [0, 10, 9]];
const c = [[], [], []]

// for (let lin = 0 ; lin < 3 ; lin++) {
//     for (col = 0 ; col < 3 ; col++) {
//         const c = (a[lin][col] + b[lin][col]);
//         console.log(c);
//     }
// }

for (let lin = 0 ; lin < 3 ; lin++) {
    for (col = 0 ; col < 3 ; col++) {
        c[lin][col] = (a[lin][col] + b[lin][col])
    }
}

console.table(a);
console.table(b);
console.table(c);