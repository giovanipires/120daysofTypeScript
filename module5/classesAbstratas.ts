export { };

abstract class Funcionario {
  constructor(private nome: string, private sobrenome: string) { }

  abstract retornarSalario(): number;
  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(nome: string, sobrenome: string, private salario: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const Giovani = new FuncionarioCLT('Giovani', 'Pires', 15000);
const joao = new FuncionarioPJ('João', 'Silva', 150, 80);

console.log(Giovani.emitirContraCheque());
console.log(joao.emitirContraCheque());