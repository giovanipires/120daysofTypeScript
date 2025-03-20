export { };


// ==> Exemplo 01: Mapped Types

type Usuario = {
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
};

type UsuarioOpcional = {
  nome?: string;
  endereco?: string;
  telefone?: string;
  idade?: number;
};

type UsusarioSomenteLeitura = {
  readonly nome: string;
  readonly endereco: string;
  readonly telefone: string;
  readonly idade: number;
};

// { [P in K]: T }

type UsuarioMappedType = {
  [P in keyof Usuario]?: Usuario[P]; // for in
};

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usuarioMapped: UsuarioMappedType = {
  nome: 'Giovani Pires',
  endereco: 'Rua Masestro, 636',
}

console.log(usuarioMapped);

// ==> Exemplo 02: Outros Tipos Avançados, mappedtype também funciona com interface

interface Livro {
  titulo: string;
  autor: string | null;
  preco: number;
  numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
  autor: 'Boris Cherny',
  numeroPaginas: 324,
  preco: 19.99,
  titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
}

console.log(livro.titulo);

type LivroMappedType = {
  [L in keyof Livro]?: Livro[L]; // for in
};

const LivroNovo: LivroMappedType = {
  titulo: 'O Codificador Limpo',
  preco: 21.97
};

console.log(LivroNovo);