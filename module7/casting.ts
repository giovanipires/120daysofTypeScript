export { };

const valor: unknown = "Hello World";
//utilizando os as
console.log((valor as string).toUpperCase());
//utilizando <>
console.log((<string>valor).toUpperCase());
const tamanhoValor = (valor as string).length;
console.log(tamanhoValor);