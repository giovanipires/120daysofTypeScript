export { };

//Exemplo 1: Get
class Quadrado {
    private _largura: number = 6;
    private _altura: number = 12;

    get calcularQuadrado(): number {
        return this._largura * this._altura;
    }
}

console.log(new Quadrado().calcularQuadrado); // 72

//Exemplo 2: Set
class Pessoa {
    nome: string;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Giovani Pires');
console.log(pessoa.nome); // Giovani Pires

//Exemplo 3: Get [denso]
class Estudante {
    private _nome: string = 'Giovani Pires';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante(): string {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado); // Giovani Pires

//Exemplo 4: Set [denso]
class Estudante_01 {
    nome: string;
    semestre: number;
    curso: string;
  
    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
      this.nome = nomeEstudante;
      this.semestre = semestreEstudante;
      this.curso = cursoEstudante;
    }
  
    public get cursos() {
      return this.curso;
    }
  
    public set cursos(setCurso: string) {
      this.curso = setCurso;
    }
  }
  
  const estudante_01 = new Estudante_01('Giovani Pires', 5, 'Hotelaria');
  console.log(estudante_01);
  
  // Setter call
  estudante_01.cursos = 'Análise e Desenvolvimento de Sistemas';
  
  // Getter call
  console.log('Segunda graduação...:', estudante_01.cursos)