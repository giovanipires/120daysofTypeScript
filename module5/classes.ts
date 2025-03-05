//Exemplo 01 - Classes
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Giovani', 'Pires');
console.log(pessoa.nomeCompleto());

//Exemplo 02 - Classs (sem constructor)

class Estudande {
    codigoEstudante: number;
    nomeEstudante: string;
}

//Criar um objeto ou instncia:
const estudante = new Estudande();

//Inicializando o objeto
estudante.codigoEstudante = 1234;
estudante.nomeEstudante = 'Catarina Pellegrini'

console.log('Código do estudante ...: ' + estudante.codigoEstudante);
console.log('Nome do estudante ... :' + estudante.nomeEstudante);

//Exemplo 03 - Classes (com contructor)

class Carro {
    marca: string;
    modelo: string;
    designacao: string;
    ano: number;

    constructor(marca: string, modelo: string, designacao: string, ano?: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.designacao = designacao;
        this.ano = ano;
    }

    carroCompleto(): any {
        return `${this.marca} ${this.modelo} ${this.designacao} ${this.ano}`;
    }
}

const veiculo = new Carro('Nissan', 'EXS', 'Kicks', 2023);
console.log('Lendo os dados do veículo... :')
console.log('Marca do veículo ...: ' + veiculo.marca);
console.log('Modelo do veículo ...: ' + veiculo.modelo);
console.log('Nome do veículo ...: ' + veiculo.designacao);
console.log('Ano do veículo ...: ' + veiculo.ano);
console.log(veiculo.carroCompleto());