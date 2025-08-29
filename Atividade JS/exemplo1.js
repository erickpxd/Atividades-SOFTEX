document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let remedioSelect = document.getElementById("remedio");
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let preco = parseFloat(remedioSelect.value); 

    let nomeRemedio = remedioSelect.options[remedioSelect.selectedIndex].text;

    let total = preco * quantidade;

    if (quantidade >= 2) {
        total -= total * 0.10;
    }

    preco = preco.toFixed(2);
    total = total.toFixed(2);

    if((preco > 0)) {
        document.getElementById("resultado").innerHTML =
            `Remédio: <b>${nomeRemedio}</b><br>
            Quantidade: <b>${quantidade}</b><br>
            Preço unitário: R$ ${preco}<br>
            Valor total: <b>R$ ${total}</b>`;   
    }
    else {
        alert("selecione um valor valido")
    }
});
