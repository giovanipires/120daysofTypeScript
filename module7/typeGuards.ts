export { };

//typeOf

function detalhesPesssoa(pessoa: string | number): string {
    if (typeof pessoa === 'string') {
        return `O nome da pessoa é ${pessoa}`;
    } else if (typeof pessoa === 'number') {
        return `O id da pessoa é ${pessoa}`;
    }
}

const pessoa = detalhesPesssoa('Giovani');
console.log(pessoa);

const id = detalhesPesssoa(1);
console.log(id);

//instanceOf

const formatoData = (valor: Date | string) => {
    if (valor instanceof Date) {
        return valor.toDateString();
    } else {
        return new Date(valor).toDateString();
    }
};

console.log(formatoData(new Date("2025-03-13")));
console.log(formatoData('2025-03-14'));

//in

interface Animal {
    nome: string;
}

interface Ave extends Animal {
    voa: boolean;
}

interface Peixe extends Animal {
    nadar: boolean;
}

const animal = (animal: Ave | Peixe) => {
    if ('voa' in animal) {
        console.log(`${animal.nome} voa`);
    } else {
        console.log(`${animal.nome} nada`);
    }
};

const passaro: Ave = { nome: 'Passaro', voa: true };
const peixe: Peixe = { nome: 'Peixe', nadar: true };

console.log(animal(passaro));
console.log(animal(peixe));