//Exemplo 01 - Never - Throw Exception

import { CLIENT_RENEG_LIMIT } from "tls";

function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro de mensagem - 01'));

//Exemplo 02 - Never inferido automaticamente

function rejectMessage() {
    return error('Erro de mensagem - 02')

}

console.log(rejectMessage());

//Exemplo 03 - Função que contem loop infinito retorna tipo 'never'

// const loopInfinito = function loop() {
//     while(true){
//         console.log('Oi desenvolvedor"');
//     }
// };

// console.log(loopInfinito());

//Exemplo 04 - diferença entre never e void

// const algoVoid: void = null;
// const algoNever: never = null;

