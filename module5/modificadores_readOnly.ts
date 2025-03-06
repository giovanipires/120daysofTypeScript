//Exemplo 01 -

class Funcionario {
    nomeFuncionario: string;
    sobrenomeFuncionario: string;
    readonly dataNascimento: Date;

    constructor(nomeFuncionario: string, sobreNomeFuncionario: string, dataNascimento: Date) {
        this.nomeFuncionario = nomeFuncionario;
        this.sobrenomeFuncionario = sobreNomeFuncionario;
        this.dataNascimento = dataNascimento;        
    }
}

const funcionario = new Funcionario('Giovani', 'Pires', new Date(1980, 10, 6));

// funcionario.dataNascimento = new Date(1980, 11, 6);

console.log(funcionario);

// Exemplo 02 - quando temos apenas um

class Funcionario_02 {
    constructor(readonly dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

//Exemplo 03

interface IFuncionario {
    codigo: number;
    nome: string;
}

const func01: Readonly<IFuncionario> = {
    codigo: 111,
    nome: 'Giovani'
};

// func01.codigo = 222;
// func01.nome = "José";

const func02: IFuncionario = {
    codigo: 222,
    nome: 'José'
}