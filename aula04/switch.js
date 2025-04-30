const CLS       = '\x1Bc';

const BLACK     = '\u001b[30m';
const VERMELHO  = '\u001b[31m';
const VERDE     = '\u001b[32m';
const AMARELO   = '\u001b[33m';
const AZUL      = '\u001b[34m';
const MAGENTA   = '\u001b[35m';
const CIANO     = '\u001b[36m';

const FVERMELHO = '\u001b[41m';
const FVERDE    = '\u001b[42m';
const FAMARELO  = '\u001b[43m';
const FAZUL     = '\u001b[44m';
const FMAGENTA  = '\u001b[45m';
const FCIANO    = '\u001b[46m';
const FBRANCO   = '\u001b[47m';

const NORMAL    = '\u001b[m';
const NEGRITO   = '\u001b[1m';
const SUBLINADO = '\u001b[4m';

console.log(CLS);
console.log(VERDE)


console.log('\n' + FCIANO + NEGRITO + SUBLINADO + 'Faça escolha' + NORMAL + '\n');
console.log('[1] Data e hora com texto verde');
console.log('[2] Data e hora com texto azul');
console.log('[3] Data e hora com texto vermelho');
console.log('[4] Data e hora com texto verde');
console.log('[5] Data e hora com texto azul');
console.log('[7] Data e hora com texto vermelho');
console.log('[7] Sair\n');

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();
const hora = date.getHours();
const minuto = date.getMinutes()

const readline = require('readline-sync');
const op = Number(readline.question('\nopção: '))

switch (op) {
    case 1: {
        console.log(`${VERDE} ${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`)
            break;
    }
    case 2: {console.log(`${VERDE} ${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`)
    break;
}
    case 4: {console.log(`${VERDE} ${dia}/${mes}/${ano}\t ${hora}:${minuto} ${NORMAL}`)
    break;
}
}