//Exemplo 01 - for .. of

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Exemplo 02 - for ... of, retornando uma coleção de matriz

const arrayNumeros = [10, 20, 30, 40, 50];

for (const i of arrayNumeros) {
        console.log(i); 
}

const arrayNumerosInversos = [5, 4, 3, 2, 1, 0]

for (const i in arrayNumerosInversos){
    console.log(i)
}

console.log(arrayNumerosInversos);
const arryArrumandoNumeros: number[] = arrayNumerosInversos.sort();
console.log(arryArrumandoNumeros);