const livros = require("./listaLivros");
const menorValor = require("./menorValor");

// for (let atual = 0; atual < livros.length - 1; atual++) {
//   let menor = menorValor(livros, atual);

//   let livroAtual = livros[atual];
//   console.log("posição atual", atual);
//   console.log("livro atual", livros[atual]);
//   let livroMenorPreco = livros[menor];
//   console.log("livro menor preço", livros[menor]);

//   livros[atual] = livroMenorPreco;
//   livros[menor] = livroAtual;
// }

// console.log(livros);

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice];
  console.log("posição atual", indice);
  console.log("livro atual", livros[indice]);
  let livroMenorPreco = livros[menor];
  console.log("livro menor preço", livros[menor]);

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});

console.log(livros);
