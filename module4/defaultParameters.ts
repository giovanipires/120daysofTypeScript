export {};

//Exemplo 1
function mensagemBoasVindas(mensagem:string, bemVenuto = "seja bem vindo!") {
    console.log(mensagem + bemVenuto);
}

mensagemBoasVindas("Giovani, ","hoje é um dia muito especial por termos você em nosso time.");
mensagemBoasVindas("Giovani, ");

//Exemplo 2
function descontoCompra(preco:number, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));

//Exemplo 3
function exibirNome(nome: string, sobrenome = 'Pires') {
    return nome + ' ' + sobrenome;
}

const resultado1 = exibirNome('Giovani');
console.log(resultado1)
const resultado2 = exibirNome('Giovani', 'Pellegrini');
console.log(resultado2)
const resultado3 = exibirNome('Giovani', undefined);
console.log(resultado3)