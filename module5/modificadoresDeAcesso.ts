//Exemplo 01 - Modificador Public

export { };

class Estudande {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudande();
estudante.codigoEstudante = 202;
estudante.nomeEstudante = 'Giovani Pellegrini';

console.log('O código do estudante ... : ' + estudante.codigoEstudante);
console.log('O nome do estudante ... : ' + estudante.nomeEstudante);

//Exemplo 02 - Modificador Private

class Estudande_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idadeEstudante: number;

    constructor(codigoEstudante: number, nomeEstudante: string, idadeEstudante: number){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idadeEstudante = idadeEstudante;
    }

    retornarDadosEstudante() {
        return `
        Código do estudante ... : ${this.codigoEstudante}.
        Nome do estudante ... : ${this.nomeEstudante}.
        Idade do estudante ... : ${this.idadeEstudante}
        `;
    }
}

const estudante_02 = new Estudande_02(203, 'Marianna Fiorentino', 41);
//Caso eu tente buscar apenas a idadeEstudante a mesma não é apresentada, pois ela é privada.
console.log(estudante_02.retornarDadosEstudante());

//Exemplo 03 - Modificador

class Estudande_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudande_03 {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosEstudante() {
        return `
        Código do estudante ... : ${this.codigoEstudante}.
        Nome do estudante ... : ${this.nomeEstudante}.
        Curso do estudante ... : ${this.curso}.
        `;
    };
}

const estudande_03 = new Pessoa(204, 'Giovani Pires', 'Inteligência artificial');
console.log(estudande_03.retornarDadosEstudante());