import { Validator, EmailValidator, ZipCodeValidator, CepCodeValidator } from './validators';
import { somar, subtrair, multiplicar, dividir, quadrado } from './math';

//Exemplo 01 - Importando Math.ts
console.log(somar(1, 1));
console.log(subtrair(2, 1));
console.log(multiplicar(3, 3));
console.log(dividir(24, 8));
console.log(quadrado(10));

//Exemplo 02 - importando emailValidators

let email = 'giovani.pires@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O email ${email} é válido? ${result}`);

//Exemplo 03 - importando Zip Validator

let zipCode = '24350-090';
let validatorZip = new ZipCodeValidator();
let resultZip = validatorZip.isValid(zipCode);

console.log(`O zipe ${zipCode} é válido? ${resultZip}`);

//exemplo 04 - importando o Cep Validator

let cepCode = '24350090';
let validatorCep = new CepCodeValidator();
let resultCep = validatorCep.isValid(cepCode);

console.log(`O cep ${cepCode} é válido? ${resultCep}`);