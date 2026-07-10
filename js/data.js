//Resp; Dados Fixos

const STATUS = [
  "Pobres",
  "Ricos",
  "Milionários"
];

const FILHOS_POSSIVEIS = [
  1,
  2,
  3,
  4
];

function gerarCaixasFilhos() {
const numeros = [...FILHOS_POSSIVEIS];

  numeros.sort(() => Math.random() - 0.5);

  return numeros.slice(0, 3);
}
