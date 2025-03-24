class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>('Giovani Pires')
console.log(boxString.getItem());

const boxNumber = new Box<number>(44);
console.log(boxNumber.getItem());

//Exemplo 2
class Estudante<T, U> {
    private id: T;
    private nome: U;

    setValor(id:T, nome:U): void {
        this.id = id;
        this.nome = nome;
    }

    retornarValor(): void{
        console.log(`Identificação do estudante ... : ${this.id}, Nome do estudante ... : ${this.nome}`);
    }
}

const estudante1 = new Estudante<number, string>();
const estudante2 = new Estudante<string, string>();

estudante1.setValor(99, "Giovani Pires");
estudante1.retornarValor();
estudante2.setValor("0099", "Giovani Pires");
estudante2.retornarValor();