const btn = document.getElementById("btnDestino");

      btn.addEventListener("click", () => {
        const pretendentes = [
          document.getElementById("pretendente1").value,
          document.getElementById("pretendente2").value,
          document.getElementById("pretendente3").value,
        ];

        const cidades = [
          document.getElementById("cidade1").value,
          document.getElementById("cidade2").value,
          document.getElementById("cidade3").value,
        ];

        const escolhido =
          pretendentes[Math.floor(Math.random() * pretendentes.length)];

        const cidade = cidades[Math.floor(Math.random() * cidades.length)];

        const filhos = Math.floor(Math.random() * 3) + 1;

        const statusLista = ["Pobre", "Rico", "Milionário"];

        const status =
          statusLista[Math.floor(Math.random() * statusLista.length)];

        document.getElementById("resultadoPretendente").innerText =
          "Você ira casar com : " + escolhido;

        document.getElementById("resultadoCidade").innerText =
          "Irá morar em: " + cidade;

        document.getElementById("resultadoFilhos").innerText =
          "Terá: " + filhos + " Filho(s)";

        document.getElementById("resultadoStatus").innerText =
          "E será: " + status;
      });