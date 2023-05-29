const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
  if (precosLivros[atual] < precosLivros[maisBarato]) {
    maisBarato = atual;
  }
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato]}`);

// algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.
