export { };

// 01 - Uso do if

const numeroMax: number = 100;
let contador: number = 100;

if (contador < numeroMax) {
    contador++;
}

console.log('Exemplo 01: ' + contador);

// 02 - Uso do if

const permissaoIdadeDirigir: number = 18;

if (permissaoIdadeDirigir >= 18){
    console.log('Exemplo 02: ' + permissaoIdadeDirigir + ' Você possui idade para ter habilitação');
}

// 03 - Uso do if e else

const permissaoIdadeDirigir01: number = 18;

if (permissaoIdadeDirigir01 >= 18){
    console.log('Exemplo 03: ' + permissaoIdadeDirigir01);
    console.log('Você possui idade para ter habilitação');
} else {
    console.log('Você não possui idade para ter habilitação')
}

// 04 - Uso do if ... else if

let desconto: number;
let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5 ) {
    desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Você teve um desconte de ... : ${desconto}% desconto!`);

// 05 - Ternário(? :) - if ... else

const idadeVotacao: number = 16;

const elegivelVotacao = (idadeVotacao >= 16) ? `Você é elegível a votação pois sua idade é ${idadeVotacao}.` : 'Você não é elegível para votar.';

console.log(elegivelVotacao);