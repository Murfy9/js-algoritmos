const livros = require("./listaLivros");
const menorValor = require("./menorValor");
const troca = require("./troca");

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  troca(livros, indice, menor);
});

console.log(livros);

// for (let atual = 0; atual < livros.length; atual++) { // For clássico
//   let menor = menorValor(livros, atual);
//   console.log(menor);

//   troca(livros, atual, menor);
// }

// console.log(livros);
