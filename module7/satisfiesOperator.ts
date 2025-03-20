export { };

type Cidade = NomeCidade | CoordenadasCidade;

type NomeCidade = "Rio de Janeiro" | "São Paulo" | "Salvador" | "Belo Horizonte" | "Recife" | "Petrópolis";

type CoordenadasCidade = {
    eixoX: number;
    eixoY: number;
};

type Pessoa = {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
};

const pessoa = {
    localNascimento: "Petrópolis",
    residenciaAtual: { eixoX: -22.8833300, eixoY: -43.1036100}
} satisfies Pessoa;

console.log(pessoa);
console.log(pessoa.localNascimento.toUpperCase());
console.log(pessoa.residenciaAtual);

// Exemplo 02

type Connection = {};

declare function createConnection(
    host:string,
    port: string,
    reconnect: boolean,
    poolsize: number
): Connection;

type Configuration = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolSize?: number;
};

const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
} satisfies Configuration;

function connect() {
    let { host, port, tryReconnect } = config;

    createConnection(host, `${port}`, tryReconnect(), 10);
}
