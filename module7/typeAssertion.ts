export { };

//Exemplo 01 - Type Assertion (as / <>)
function exebirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto.toFixed(2)}` : precoComDesconto;
}

const descontoFinal = exebirPrecoFinal(100, 0.05, true) as string;
console.log(descontoFinal);

const descontoFinal1 = <number>exebirPrecoFinal(100, 0.05, false);
console.log(descontoFinal1);

//Exemplo 02 - Type Assertion
/*
type Humano = {
    nome: string;
    idade: number; 
    idioma: string;
};

const humano = {
    idade:36,
    idioma: 'Portugês',
};

const humano1 = humano as Humano;
//Neste formato só iremos ver o erro no momento da compilação
console.log(humano1.nome.toLowerCase());
*/

type Humano = {
    idade: number; 
    idioma: string;
};

const humano = {
    idade:36,
    idioma: 'Portugês',
};

const humano1: Humano = humano;
//type annotation
//console.log(humano1.nome.toLowerCase());
