const a: any = 44;
let b: any = 'Giovani';

console.log(a);
console.log(a);

let c = a + b;

console.log(c);

let frase;
frase = 'Oi, pessoal!';

console.log(frase);

// Quando usar any?!

const formulario: {[campoFormulario: string]: any} = {
    nome: 'Giovani',
    sobrenome: 'Pires',
    idade: 44
};

console.log(formulario);