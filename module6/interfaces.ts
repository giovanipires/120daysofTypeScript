export { };

//Exemplo I e II, onde já inclui propriedade opcionais

interface Pessoa {
    nome: string;
    sobreNome: string;
    idade?: number;
}

function exibirNomeCompleto(pessoa: Pessoa) {
    return `
    Nome ... : ${pessoa.nome}
    SobreNome ... : ${pessoa.sobreNome}
    Idade .... : ${pessoa.idade ? pessoa.idade : 'Não informada'}
    `;
}

const Giovani = {
    nome: 'Giovani',
    sobreNome: 'Pires',
    idade: 44
}

console.log(exibirNomeCompleto(Giovani)); // { nome: 'Giovani', sobreNome: 'Pires', idade: 44 }

//Exemplo III, onde a propriedade  pode ser opcional ou apenas leitura

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}

console.log(carro); // { modelo: 'Fusca', ano: 1969 }

// carro.modelo = 'Brasília'; // Cannot assign to 'modelo' because it is a read-only property.

//Exemplo IV, interface com classes
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}   

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = true;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}

const gato = new Gato('Tutu', 12, true);
console.log(gato); // Gato { nome: 'Tutu', idade: 12, estaVivo: true }
gato.comer('Petiscos'); // O gato Tutu está comendo ...

//Exemplo V, interface vs Alias Type

interface moto {
    marca: string;
    modelo: string;
    cilindrada: number;
}

type moto1 = {
    marca: string;
    modelo: string;
    cilindrada: number;
}