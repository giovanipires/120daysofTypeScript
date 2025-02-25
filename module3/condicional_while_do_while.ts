//Exemplo 01
let linha:  number = 5;
let contador:   number = 0;

while (contador < linha) {
    console.log(contador);
    contador ++
}

//Exemplo 02

let numerico: number = 1;

while(numerico <= 20) {
    if(numerico % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 e 20 é: ', numerico);
        break;
    }
    numerico ++
}

//Exemplo 03

 let contador_usuario:   number = 0;
 const usuario: string[] = ['Giovani', 'Lena', 'Arghus'];

 while(usuario[contador_usuario]) {
    console.log('Usuario: ', usuario[contador_usuario]);
    contador_usuario++;
 }

 //Exemplo 04

 let contador01 = 0;

 do {
    console.log(contador01);
    contador01++
 } while(contador01 < 5);