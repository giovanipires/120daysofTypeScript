export { };

//Exemplo 1
class Animal {
    mover(distancia = 0) {
        console.log(`Animal moveu ${distancia}m.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('Au! Au!');
    }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();

class Gato extends Animal {
    miar() {
        console.log('Miau! Miau!');
    }
    ronronar() {
        console.log('Purr! Purr!');
    }
}

const gato = new Gato();
gato.miar();
gato.mover(3)
gato.ronronar();

//Exemplo 2
class Pessoa {
    constructor(private nome: string, private sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
     }

    retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    apresentarPessoa(): string {
        return `Olá, eu sou ${this.nome} ${this.sobrenome}`;
    }

}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private cargo: string) {
        super(nome, sobrenome);
        this.cargo = cargo;
    }

    apresentarFuncionario(): string {
        return `${super.apresentarPessoa()} e trabalho como ${this.cargo}`;
    }
}

const funcionario = new Funcionario('Giovani', 'Pires', 'Desenvolvedor');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.apresentarFuncionario());
console.log(funcionario.retornarNomeCompleto());    