"use strict";
// Exemplo 1 - Numeric Enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugu\u00EAs"] = 0] = "Portugu\u00EAs";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingl\u00EAs"] = 2] = "Ingl\u00EAs";
    Idioma[Idioma["Franc\u00EAs"] = 3] = "Franc\u00EAs";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// Exemplo 2 - String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Ter\u00E7a"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
function comida(c) {
    return 'Comidas muito gostosas!';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
// console.log(comida(5));
// Exemplo 4 - Quando usar Enum?
// Intimamente relacionados
