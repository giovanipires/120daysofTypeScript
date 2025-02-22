//O void é a ausência de retorno / return
function olaMundo(): void {
    console.log('Olá, desenvolvedores!');
}
olaMundo();

const olaNovoMundo = () => {
    console.log('Olá novamente desenvolvedores!');
};

olaNovoMundo();

function logError(erroMessage: string) {
    console.log(erroMessage);
    // return erroMessage;
}

logError("Required field - Name!")

const logErro2 = (errorMassage: string) => {
    console.log(errorMassage);
}

logErro2("Required field - surname!")

// Exemplo de void: variáveis

let variavelExemploVoid: void;

// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
// variavelExemploVoid = 'Pires';