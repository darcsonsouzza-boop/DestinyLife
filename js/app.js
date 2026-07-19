
const mensagemErro = document.getElementById("mensagemErro");
const narrativa = document.getElementById("narrativa");
 //validações de imputs
 function validarIdade(idade) {

  if (idade >= 18 && idade <= 80){
    
    return alert;
  }

  return;

};
//Ponte para delegar a função validarListas com a condição if
function validarPretendentes(pretendentes) {
    return validarLista(pretendentes);
}

function validarCidades(cidades) {
    return validarLista(cidades);
}

//função que poderá ser reutilizada caso haja uma mudança
function mostrarResultado(resultado) {
  //esse bloco pegará: Pretendete, Cidade, filhos e status 
    resultado.forEach(item => {

        if (item.tipo === "pretendente") {

           
        document.getElementById("resultadoPretendente").textContent =
    "Você casará com: " + item.valor;
        }
           //cidade

        if (item.tipo === "cidade") {

    document.getElementById("resultadoCidade").textContent =
        " Vão morar em: " + item.valor;

}   
        if (item.tipo === "filhos") {

    document.getElementById("resultadoFilhos").textContent =
        "  Vão ter : " + item.valor + " filho(s)";

        }

        if (item.tipo === "status") {

    document.getElementById("resultadoStatus").textContent =
        " E serão " + item.valor;

}
          
    });
    
}
//recepcionista de erro
 function mostrarErro(mensagem) {
  mensagemErro.textContent = mensagem;

}

//Botão destino//
const botao = document.getElementById("btnDestino");

botao.addEventListener("click", () => {
//campos completos depois do erro recerberão string vazia 
mostrarErro("");

//narativa de texto espectativa 
function mostrarNarrativa(texto) {
   narrativa.textContent = texto;
}

//Tempo controlado da narrativa
function contarHistoria(resultado) {
  let amor;
  let cidade; 
  let filhos;
  let status;
  for (const item of resultado) {
   if (item.tipo === "pretendente"){
    amor = item.valor;
     
   }
   if (item.tipo === "cidade") {
        cidade = item.valor;
    }

    if (item.tipo === "filhos") {
        filhos = item.valor;
    }

    if (item.tipo === "status") {
        status = item.valor;
    }
        
  }
  setTimeout(() =>{
    mostrarNarrativa("TESTE");
  }, 2000);

 
};


//validação da idade 18 á 80 anos
const idade =
  Number(document.getElementById("idade").value);
  if (!validarIdade(idade)) {

   mostrarErro(" digite uma idade entre 18 á 80 anos.");


  return;

}


const pretendente1 = document.getElementById("pretendente1").value;

const pretendente2 = document.getElementById("pretendente2").value;

const pretendente3 = document.getElementById("pretendente3").value;

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

//ponte 2 validação por lista de objetos.
function validarLista(lista){

  for (const item of lista) {
    if (item.trim() === "") {

      return false
    }

  } 
    return true;
};

if (!validarLista(pretendentes) ) {

  mostrarErro("Preencha todos os pretendentes.");

    return ;

}

if(!validarLista(cidades)){

    mostrarErro("Preencha todas as cidades.");

    return
}


//envia para game.js trabalhar os dados e retornar resultado!
 const roda = criarRoda(
  pretendentes,
  cidades
);

eliminarAteSobrarQuatro(
  roda,
  Number(idade)
);
const resultado = obterResultadoFinal(roda);

console.log(resultado);

contarHistoria(resultado);

});
