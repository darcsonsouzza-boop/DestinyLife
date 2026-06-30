//Interface com usuários,dados de input//
const botao = document.getElementById("btnDestino");

botao.addEventListener("click", () => {




const idade = document.getElementById("idade").value;


const pretendente1 = document.getElementById("pretendente1").value;

const pretendente2 = document.getElementById("pretendente2").value;

const pretendente3 = document.getElementById("pretendente3").value;

//cidades destinos//
const cidade1 = document.getElementById("cidade1").value;

const cidade2 = document.getElementById("cidade2").value;

const cidade3 = document.getElementById("cidade3").value;


const pretendentes = [
  pretendente1,
  pretendente2,
  pretendente3
];

const cidades = [
  cidade1,
  cidade2,
  cidade3
];
//envia para game.js trabalhar os dados e retornar resultado!
 const roda = criarRoda(
  pretendentes,
  cidades
);

eliminarAteSobrarQuatro(
  roda,
  Number(idade)
);
//vericação dos 4 elementos
const resultado = obterResultadoFinal(roda);

console.log("Resultado Final:");
console.log(resultado);
console.log("Ativos:");
console.log(obterItensAtivos(roda));

console.log(
  "Jogo finalizado:",
  jogoFinalizado(roda)
);
});