// Exemplo 1 - Uso simples de tuplas
let pessoa0: [string, string, number];
pessoa0 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa0);

// Exemplo 2 - Acessando o valor da Tupla
let pessoa1: [string, string, number];
pessoa1 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa1[1]);

// Exemplo 3 - Outra forma de utilizar tuplas
let pessoa2: [nome: string, posicao: string, idade: number] = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa2);
console.log(pessoa2[0]);

//Exemplo 4 - Usando Tuplas com Spread Operator
let frutas: [string, ...string[]] = ['Abacaxi', 'Maçã', 'Laranja', 'Melancia', 'Morango'];
console.log(...frutas)

// Exemplo 5 - Listas heterogena de tuplas
let frutas2: [number, boolean, ...string[]] = [5, true, ...frutas]
console.log(frutas2)

// Exemplo 6 - Uso de função com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Giovani', 'Marianna'], [44, 43]);
console.log(resultado)

// Exemplo 7 - Labeled Tuples com Spread Operator em uma função
type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}

console.log(criarPessoa('Giovani', 'Pires'));
console.log(criarPessoa('Marianna', 'Barbara', 'Fiorentino'));