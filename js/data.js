//Resp; Dados Fixos

const STATUS = [
  "Pobre",
  "Rico",
  "Milionário"
];

const FILHOS_POSSIVEIS = [
  0,
  1,
  2,
  3,
  4,
  5
];

function gerarCaixasFilhos() {
const numeros = [...FILHOS_POSSIVEIS];

  numeros.sort(() => Math.random() - 0.5);

  return numeros.slice(0, 3);
}

console.log("data.js carregado");