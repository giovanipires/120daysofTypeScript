export { };

interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMenorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade < idade);
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
    {nome: 'Giovani', idade: 44},
    {nome: 'Marianna', idade: 43},
    {nome: 'Catarina', idade: 4},
    {nome: 'Gabriel', idade: 38},
    {nome: 'Samara', idade: 37},
    {nome: 'Maria Flor', idade: 4},
];

const pessoasComIdadeMenorQue6 = obterPessoaIdadeMenorQue(pessoas, 6);

console.log(pessoasComIdadeMenorQue6);

const pessoasComIdadeMaiorQue21 = obterPessoaIdadeMaiorQue(pessoas, 21);

console.log(pessoasComIdadeMaiorQue21);

//Exemplo 02

function juntarObjetos<A, T>(objeto1: A, objeto2: T) {
    return {
        ... objeto1,
        ... objeto2
    }
}

const animal0 = juntarObjetos(
    {especie: 'Aves'},
    'Canta', //a falta do uso do extends na função primaria gera o erro, o typescript simplesmente ignorou o animal0 e não deu erro
)


const animal1 = juntarObjetos(
    {especie: 'Aves'},
    {caracteristica: 'Voo'},
)

const animal2 = juntarObjetos(
    {especie: 'Aves'},
    {caracteristica: 'Cisca'}
)

const animal3 = juntarObjetos(
    {especie: 'Aves'},
    {caracteristica: 'Nada'}
)

console.log(animal1);
console.log(animal2);
console.log(animal3);


function juntarObjetos2<A extends object, T extends object>(objeto1: A, objeto2: T) {
    return {
        ... objeto1,
        ... objeto2
    }
}

const animal04 = juntarObjetos2(
    {especie: 'Aves'},
    //'Canta', Já ao realizar a restrição o typescript identificou e informa o problema
    {caracteristica: 'Canta'}
)
