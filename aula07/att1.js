const readline = require('readline-sync');

async function parouimpar() {
    const num = Number(readline.question('Digite um numero: '));

    if (!isNaN(num)) {
        num % 2 === 0 ? console.log('Par') : console.log('Impar');
    } else {
        console.log('Número inválido!');
    }
    constinuar();
}

parouimpar();

async function constinuar() {
    const continuar = readline.question('Deseja continuar? (S/N) \n'); 

    if (continuar === 'S' || continuar === 's' || continuar === 'Sim' || continuar === 'sim') {
        return parouimpar();
    } else {} 
    if (continuar === 'N' || continuar === 'n' || continuar === 'Nao' || continuar === 'nao' ){
        return console.log('Tchau!');
    }
}


/*Para o exercício do Par Impar, adicionar código para ao final da execução do
programa, perguntando se o usuário deseja continuar, se afirmativo, repetir o
código. */
