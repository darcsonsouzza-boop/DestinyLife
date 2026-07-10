 //validações de imputs
 function validarIdade(idade) {

  if (idade >= 18 && idade <= 80){
    return alert;
  }

  return;

};
//validar nomes de pretendentes
function validarPretendentes(pretendentes) {

  for (const nome of pretendentes) {

    if (nome.trim() === "") {
      return false;
    }
    

  }

 return true;
 
}

//validar strings cidades
function validarCidades(cidades) {

  for (const nome of cidades) {

    if(nome.trim() === "") {
      return false;
    }
 
}
   return true;
};
console.log(validarCidades(["manaus", "Lao", "Lao"]));

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

//Interface com usuários,dados de input//
const botao = document.getElementById("btnDestino");

botao.addEventListener("click", () => {



//validação da idade 18 á 80 anos
const idade =
  Number(document.getElementById("idade").value);
  if (!validarIdade(idade)) {

  alert("Informe uma idade entre 18 e 80 anos")

  return;

}


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
//condição, pretendete e cidades validar antes da engine acontecer
if (!validarPretendentes(pretendentes) ) {


    alert("Todos os campos de pretendentes devem ser preenchidos.");

    return ;

}

if(!validarCidades(cidades)){

    alert("Preencher todos os campos Cidades!" )

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

});