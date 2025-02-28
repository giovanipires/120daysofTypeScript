export { };

//Exemplo 1

function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(1, 2, 3 ,4 ,5 ,6 , 7, 20));

//Exemplo 2

function listarFrutas(frase: string, ...frutas: string[]){
    return frase + ' ' + frutas.join(', ');
}

console.log(
    listarFrutas(
        'Giovani, não esquece de comprar na feira: ',
        'Ameixa', 
        'banana',
        'carambola',
        'framboesa'
    ),
);

//Exemplo 3

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for(const produto of produtos) {
            console.log(produto)
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log('Todos os produtos do departamento de Informática disponíveis no estoque ... :')

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebok',
    'USB',
    'Monitor',
    'Teclado',
    'WebCan'
);

