"use strict";
let pessoa;
pessoa = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa);
let pessoa1;
pessoa1 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa1[1]);
let pessoa2 = ['Giovani Pires', 'Product Owner & Desenvolvedor', 44];
console.log(pessoa2);
console.log(pessoa2[0]);
let frutas = ['Abacaxi', 'Maçã', 'Laranja', 'Melancia', 'Morango'];
console.log(...frutas);
let frutas2 = [5, true, ...frutas];
console.log(frutas2);
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
