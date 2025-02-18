// String
let nome: string = "Giovani Pires";
console.log(nome);

//Array
let lista: number[] = [1, 2, 3];
console.log(lista);

//Objetos
let carro: {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
}

carro = { marca: 'Nissan', modelo: 'Kicks', ano: 2024, cor: 'Branco' };
console.log(carro);
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);

//Função
function soma(num1: number, num2: number) {
    return num1 + num2
}

console.log(soma(1, 2));