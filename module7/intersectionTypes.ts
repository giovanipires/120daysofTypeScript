export { };

interface IEndereco {
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}

interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    profissao: string;
}

type IPessoaEndereco = IPessoa & IEndereco;

const enderecoPessoa: IPessoaEndereco = {
    nome: 'Giovani',
    sobrenome: 'Pires',
    idade: 44,
    profissao: 'Desenvolvedor',
    rua: 'Rua Maestro',
    numero: 636,
    bairro: 'Cafubá',
    cidade: 'Nniterói',
    estado: 'RJ',
    cep: '12345-678'        
};

console.log(enderecoPessoa);

interface IBancario {
    banco: string;
    agencia: string;
    conta: string;
}

interface IPessoaJuridica {
    cnpj: string;
    razaoSocial: string;
}

type IPessoaJuridicaBancario = IPessoaJuridica & IBancario & IEndereco;

const pessoaJuridicaBancario: IPessoaJuridicaBancario = {
    cnpj: '123456789012',
    razaoSocial: 'Invenzione',
    banco: 'Banco do Brasil',
    agencia: '1234-5',
    conta: '12345-6',
    rua: 'Rua Maestro',
    numero: 636,
    bairro: 'Cafubá',
    cidade: 'Nniterói',
    estado: 'RJ',
    cep: '12345-678'
};

console.log(pessoaJuridicaBancario);