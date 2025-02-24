// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: 'Giovani',
    sobrenome: 'Pires',
    idade: 44,
    funcao: 'Product Owner & Desenvolvedor'
};

console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)

function onboarding01(funcionario: { nome: string}) {
    return 'Seja bem-vindo ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Giovani Pires'}));

// ==> Exemplo 03 -> object nomeados

interface Pessoa03 {
    nome: string;
    funcao: string;
}

function onboarding03(pessoa: Pessoa03) {
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        'Você iniciará conosco como ' +
        pessoa.funcao + 
        '.'
    );
}

console.log(onboarding03({nome: 'Giovani Pires', funcao: 'Desenvolvedor TS'}));

// ==> Exemplo 04 -> object como type alias

type Pessoa04 = {
    nome: string;
    funcao: string;
    linguagem: string
}

function onboarding04(pessoa: Pessoa04) {
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        'Você iniciará conosco como ' +
        pessoa.funcao + 
        '.' +
        'Você trabalhará com a linguagem ' + 
        pessoa.linguagem
    );
}

console.log(onboarding04({nome: 'Giovani Pires', funcao: 'Desenvolvedor TS', linguagem: 'TypeScript'}));

// ==> Exemplo 05 -> usando optional no object

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string
}

function onboarding05(pessoa: Pessoa05) {
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        'Você iniciará conosco como ' +
        pessoa.funcao + 
        '.' +
        'Você trabalhará com a linguagem ' + 
        pessoa.linguagem
    );
}

console.log(onboarding05({nome: 'Giovani Pires', funcao: 'Desenvolvedor TS', linguagem: 'TypeScript'}));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface Pessoa06 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
}

function onboarding06(pessoa: Pessoa06) {
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '!' +
        'Você iniciará conosco como ' +
        pessoa.funcao + 
        '.' +
        'Você trabalhará com a linguagem ' + 
        pessoa.linguagem +
        '. ' +
        'Seu email será ' + 
        pessoa.email
    );
}

console.log(onboarding06(
        {
        nome: 'Giovani Pires', 
        funcao: 'Desenvolvedor TS', 
        linguagem: 'TypeScript',
        email: 'giovani.pires@yahoo.com.br'
        }
    )
);

// ==> Exemplo 07 -> tipos de extensões (heranças)

interface Mae{
    nome: string;
    sobrenome: string
}

interface Pai{
    nome: string;
    sobrenome: string
}

interface Filho extends Mae, Pai {
    idade: number
}

const filho: Filho = {
    nome: 'Giovani',
    sobrenome: 'Pires',
    idade: 44
}

console.log(filho);

// ==> Exemplo 08 -> Tipos de Interseções

interface Cachorro {
    raça: string;
    porte: string;
}

interface Gato {
    raça: string;
    coloração: string;
}

type Animal = Cachorro & Gato;

// Exemplo 09 - Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Giovani Pires',
    email: 'giovani.pires@yahoo.com.br'
}

const admin: Admin = {
    nome: 'Giovani Pires',
    email: 'giovani.pires@yahoo.com.br',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario: Usuario): Usuario {
//     return usuario;
// }

// console.log(acessarSistema(usuario));