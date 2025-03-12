export { };

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raca: string;
}

let cachorro: Cachorro = {
    nome: "Arghus",
    idade: 12,
    porte: "Pequeno",
    raca: "Buldogue Francês"
}

console.log(cachorro); // { nome: 'Arghus', idade: 12, porte: 'Pequeno', raca: 'Buldogue Francês' }

// Exemplo 2

interface Gato extends Animal, Cachorro{
    cor: string;
}

let gato: Gato = {
    nome: "Zé Droguinha",
    idade: 5,
    porte: "Pequeno",
    raca: "Indefinida",
    cor: "Branco"
}

console.log(gato); // { nome: 'Zé Droguinha', idade: 5, porte: 'Pequeno', raca: 'Indefinida', cor: 'Branco' }

// Exemplo 3 - Omitindo propriedades

interface Felinos extends Omit<Animal, 'nome'>, Cachorro, Gato {
    nome: string;
    natureza: string
}

let felino: Felinos = {
    nome: "Mufasa",
    idade: 6,
    porte: "Grande",
    raca: "Leão",
    cor: "Dourado",
    natureza: "Selvagem"
}

console.log(felino);