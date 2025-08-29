document.getElementById("formPromocao").addEventListener("submit", function(event) {
    event.preventDefault();

    let descricao = document.getElementById("descricao").value;
    let preco = parseFloat(document.getElementById("preco").value);

    let desconto = (preco * 0.5).toFixed(2);
    let precoTotal3 = (preco * 3 - desconto).toFixed(2);

    document.getElementById("mensagemPromocao").innerHTML =
        `Produto: <b>${descricao}</b><br>
         Preço unitário: R$ ${preco.toFixed(2)}<br>
         Compre 3 unidades e ganhe 50% de desconto em 1 unidade!<br>
         Valor total com desconto: <b>R$ ${precoTotal3}</b>`;
});
