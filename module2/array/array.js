"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo com colchetes
let frutas = ['abacaxi', 'abacate', 'banana', 'caja', 'goiaba'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
// Exemplo com array object
let animais = ['cachorro', 'cavalo', 'cabra', 'camelo', 'cobra', 'cisne'];
console.log(animais);
console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);
console.log(animais[3]);
console.log(animais[4]);
// adicionando mais itens na array com push
let idiomas = ['Portugês', 'Italiano', 'Inglês', 'Espanhol', 'Russo', 'Japonês'];
console.log(idiomas);
idiomas.push('Francês');
console.log(idiomas);
// analisando o tamanho da array
console.log(idiomas.length);
// spread operator
idiomas = [...idiomas, 'Alemão', 'Chines', 'Árabe', 'Mandarim'];
console.log(idiomas);
//laços de iteração
let linguagensArray = ['Js', 'PHP', 'Python', 'C#', 'Delphi'];
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
