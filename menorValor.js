const livros = require("./listaLivros.js");

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

module.exports = menorValor;

// algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.
