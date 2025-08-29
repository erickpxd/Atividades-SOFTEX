document.getElementById("formLanHouse").addEventListener("submit", function(event) {
    event.preventDefault();

    let valor15 = parseFloat(document.getElementById("valor15").value);
    let tempo = parseInt(document.getElementById("tempo").value);

    let fracoes = Math.ceil(tempo / 15);
    let total = (fracoes * valor15).toFixed(2);

    document.getElementById("resultadoLanHouse").innerHTML =
        `Tempo de uso: <b>${tempo} minutos</b><br>
         Frações de 15 minutos: <b>${fracoes}</b><br>
         Valor a pagar: <b>R$ ${total}</b>`;
});
