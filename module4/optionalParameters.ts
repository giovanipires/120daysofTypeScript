export { };

//Exemplo 01 - optional parameter

function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log(
        'Id Funcionário: ', idPessoa,
        'Nome: ', nome
    );

    if (email != undefined)
        console.log('E-mail: ', email)
}

informarDadosPessoa(123456, 'Giovani Pires');
informarDadosPessoa(123457, 'Marianna Fiorentino', 'mari@email.com.br')


//Exemplo 02 -

function mensagemLog(mensagem: string, idUsuario?: number) {
    const horaLog = new Date(). toLocaleDateString();

    console.log(horaLog, mensagem, idUsuario || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar página');
mensagemLog('Usuário(a) logado com sucesso.', 123456);

//Exemplo 03 -

type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
}

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 1123,
    nome: 'Giovani Pires'
};

console.log(pessoa);
