export { };

// Exemplo 01 - Funções (named functions)

function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const resultadoDaSomaDosNumero = somarNumeros(13, 12);
console.log(resultadoDaSomaDosNumero);

//Exemplo 02 -  Função anônima (function expression)

const saudar = function (mensagem: string) {
    return mensagem;
};

console.log(saudar('Olá desenvolvedores!'));

//Exemplo 03 - Arrow functions

const saudar03 = (mensagem: string) => {
    return mensagem;
}

console.log(saudar03('Olá pessoal!'));

//Exemplo 04 - Fucntion contructor

const saudar04 = new Function('mensagem', 'return "Fala" + mensagem');

console.log(saudar04(' meus queridos desenvolvedores.'));