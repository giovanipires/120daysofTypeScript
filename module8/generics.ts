//Exemplo 01

function retornarElementosRandomicos<T>(itens: T[]): T {
    let itemRandomico = Math.floor(Math.random() * itens.length);
    return itens[itemRandomico];    
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
let paises = ["Brasil", "EUA", "Italia", "Suécia", "Espanha", "Canadá", "Alemanha"];

let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);
let paiseseRandomicos = retornarElementosRandomicos<string>(paises);
console.log(paiseseRandomicos);

//Exemplo 02

function exebirElementos<T>(array: T[]):void {
    array.forEach((elemento) => {
        console.log(elemento);
    });
};

let number: number[] = [1,2,3,4,5];
let states: string[] = ['RJ', 'SP', 'MG', 'AC', 'DF', 'MT', 'RS', 'SC'];

exebirElementos<number>(number);
exebirElementos<string>(states);