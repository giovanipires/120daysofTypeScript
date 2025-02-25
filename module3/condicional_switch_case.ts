export { };

//Exemplo 01 - Uso do Switch ... case

let flor = 'tulipa';

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas.');      
        break;
    case 'violeta':
        console.log('Violetas são azuis.');      
        break;
    case 'tulipa':
        console.log('Tulipas são brancas.')
        break;

    default:
        console.log('Por favor, selecione uma outra flor!');
        break;
}

//Exemplo 02 - Uso do Switch ... case

let diaUtilSemana = 7;

switch (diaUtilSemana) {
    case 0:
        console.log('Domingo');      
        break;
    case 1:
        console.log('Segunda-feira');      
        break;
    case 3:
        console.log('Terça-feira')
        break;
    case 4:
        console.log('Quarta-feira')
        break;
    case 5:
        console.log('Quinta-feira')
        break;
    case 6:
        console.log('Sexta-feira')
        break;
    case 7:
        console.log('Sabado')
        break;

    default:
        console.log('Não é um dia útil.');
        break;
}