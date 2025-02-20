"use strict";
// Exemplo 1 - Uso simples de tuplas
let pessoa;
pessoa = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa);
// Exemplo 2 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa1[1]);
// Exemplo 3 - Outra forma de utilizar tuplas
let pessoa2 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa2);
console.log(pessoa2[0]);
//Exemplo 4 - Usando Tuplas com Spread Operator
let frutas = ['Abacaxi', 'Maçã', 'Laranja', 'Melancia', 'Morango'];
console.log(...frutas);
// Exemplo 5 - Listas heterogena de tuplas
let frutas2 = [5, true, ...frutas];
console.log(frutas2);
// Exemplo 6 - Uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Giovani', 'Marianna'], [44, 43]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Giovani', 'Pires'));
console.log(criarPessoa('Marianna', 'Barbara', 'Fiorentino'));
