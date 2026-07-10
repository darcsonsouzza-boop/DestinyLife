// Regra do Jogo
function criarRoda(
  pretendentes,
  cidades
) {

  const filhos = gerarCaixasFilhos();

  const roda = [];

  pretendentes.forEach(nome => {
    roda.push({
      tipo: "pretendente",
      valor: nome,
      eliminado: false
    });
  });

  cidades.forEach(nome => {
    roda.push({
      tipo: "cidade",
      valor: nome,
      eliminado: false
    });
  });

  filhos.forEach(numero => {
    roda.push({
      tipo: "filhos",
      valor: numero,
      eliminado: false
    });
  });

  STATUS.forEach(status => {
    roda.push({
      tipo: "status",
      valor: status,
      eliminado: false
    });
  });

  return roda;
}
// função roda de elinação
function eliminarUmItem(roda, idade) {

  const ativos = roda.filter(item => !item.eliminado);

  const indice = idade % ativos.length;

  ativos[indice].eliminado = true;

  console.log("Item eliminado:");

  console.log(ativos[indice]);

}
//encontrar itens ativos na roda do jogo 
function obterItensAtivos(roda) {

  return roda.filter(item => !item.eliminado);

}
//classificar ativos
function contarAtivosPorTipo(
  roda,
  tipo
) {

  return roda.filter(
    item =>
      item.tipo === tipo &&
      !item.eliminado
  ).length;

}
//condição pra elinar e deixar apenas 1 iten!
function podeEliminar(item, roda) {

  const quantidade =
    contarAtivosPorTipo(
      roda,
      item.tipo
    );

  return quantidade > 1;

}
//validar fim de jogo
function jogoFinalizado(roda) {

  return (
    contarAtivosPorTipo(roda, "pretendente") === 1 &&
    contarAtivosPorTipo(roda, "cidade") === 1 &&
    contarAtivosPorTipo(roda, "filhos") === 1 &&
    contarAtivosPorTipo(roda, "status") === 1
  );

}
//encontrar itens para elinar e dcidir elininação
function encontrarProximoEliminavel(
  ativos,
  indiceInicial,
  roda
) {

  let indice = indiceInicial;

  while (
    !podeEliminar(
      ativos[indice],
      roda
    )
  ) {

    indice++;

    if (
      indice >= ativos.length
    ) {
      indice = 0;
    }

  }

  return ativos[indice];
}
//logica de eliminação 
function eliminarAteSobrarQuatro(roda, idade) {

  let indiceAtual = idade;

  while (!jogoFinalizado(roda)) {

    const ativos = obterItensAtivos(roda);

    const indice = indiceAtual % ativos.length;

    const item = encontrarProximoEliminavel(
      ativos,
      indice,
      roda
    );

    item.eliminado = true;

    indiceAtual = indice + 1;

  
}

}
//função obiter resulato final do jogo
function obterResultadoFinal(roda) {

  const ativos = obterItensAtivos(roda);

  return ativos

 
}
