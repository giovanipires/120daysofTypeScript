export { };

function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
}

console.log(somarNumeros(30, 20));
console.log(somarNumeros(1, 2, 3 ,4 ,5 ,6 , 7, 20));