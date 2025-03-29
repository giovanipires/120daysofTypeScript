//Curso de TypeScript para Completos Iniciantes
//https://www.youtube.com/@dicasparadevs
//https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=611s

//Criando o primeiro código

//Tipos básicos
let age: number = 5;
const fisrtName: string = 'Giovani';
const isValid: boolean = true;
let idk: any = 120.200;

idk = true;
idk = 'Teste';

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Giovani", "Marianna", "Catarina"];

//Tupla => garantia de valores
const person: [number, string] = [1, "Giovani"];
const veicules: [number, string, boolean] = [1, "shoes", false];

//Lista de Tuplas
const motorcycles: [number, string, string, string, number][] = [
    [1, "Honda", "Biz", "100cc", 1998],
    [2, "Honda", "CBX - Strada", "200cc", 1998],
    [3, "Yamaha", "XV - Virago", "250cc", 1997],
    [4, "Honda", "CB", "500cc", 1998],
    [5, "Yahama", "BWS", "50cc", 1997],
    [6, "Kasinski", "GF", "125cc", 1999],
    [7, "Suzuki", "Intruder", "250cc", 1997],
    [8, "Honda", "Falcon", "400cc", 2001],
    [9, "Harley-Davidson", "Sportster", "883cc", 2005],
    [10, "Honda", "Lead", "110cc", 2010],
    [11, "Honda", "XRE", "300cc", 2010],
    [12, "Harley-Davidson", "FXSTDi", "1450cc", 2005],
    [13, "Suzuki", "Intruder", "125cc", 2001],
    [14, "Yamaha", "Fazer", "250cc", 2010],
];

console.log(motorcycles);

