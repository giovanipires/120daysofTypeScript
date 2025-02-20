// Exemplo 1 - Numeric Enums

enum Idioma {
    Português,
    Espanhol,
    Inglês,
    Francês
}

console.log(Idioma);

// Exemplo 2 - String Enums
enum Dia {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

console.log(Dia);


// Exemplo 3 - Como podemos acessar um valor de um Enum com uma chave

const enum Comida {
    Hambuerger,
    Massa,
    Pizza,
    Torta,
    Churrasco,
}

function comida(c: Comida){
    return 'Comidas muito gostosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));

// Exemplo 4 - Quando usar Enum?

// Intimamente relacionados