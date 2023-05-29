const livros = require("./listaLivros.js");

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(
  `O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`
);

// algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.
