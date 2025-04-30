const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const loginCorreto = 'admin';
const senhaCorreta = '1234';
let tentativas = 3;

function login() {
    rl.question('Digite seu login: ', (inputLogin) => {
        rl.question('Digite a senha correta: ', (senha) =>{
            if (inputLogin === loginCorreto && senha === senhaCorreta) {
                console.log('\n Acesso permitido, Bem-vindo.')
                rl.close();
            } else {
                tentativas--;
                if (tentativas > 0) {
                    console.log(`\n Dados incorretos, tentativas restantes: ${tentativas}`)
                    login()
                } else {
                    console.log('\n Acesso negado, sem tentativas restantes.')
                    rl.close();
                }
            }
        })
    })
}

console.log('**** Sistema de Autenticação ****');
login();