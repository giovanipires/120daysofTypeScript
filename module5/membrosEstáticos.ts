export { };

class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private cargo: string
    ) {
        //nome da classe + nome da propriedade
        Funcionario.contratacoes++;
    }   
}

const funcionario01 = new Funcionario(
    'Giovani',
    'Pires',
    'Desenvolvedor'
);

const funcionario02 = new Funcionario(
    'João',
    'Silva',
    'Analista de Sistemas'
);

console.log(Funcionario.contratacoes); // 2

//Exemplo 2 - Métodos estáticos

class Funcionario_01 {
    private static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private cargo: string
    ) {
        Funcionario_01.contratacoes++;
    }  
    
    public static getContratacoes(): number {
        return Funcionario_01.contratacoes;
    }
}

const funcionario03 = new Funcionario_01(
    'Giovani',
    'Pires',
    'Desenvolvedor'
);

const funcionario04 = new Funcionario_01(
    'João',
    'Silva',
    'Analista de Sistemas'
);

console.log(Funcionario_01.getContratacoes()); // 2 

//Exemplo 3 - Métodos estáticos

type Raca = 'Spitz Alemão' | 'Dachshund' | 'Pastor Alemão' | 'Buldogue Francês';

class Cachorro {
    constructor(
        private nome: string,
        public idade: number,
        private raca: Raca
    ) {}

    static latir(): void {
        console.log('Au! Au!');
    }
}
