
# README – Exercícios de JavaScript e HTML

Este repositório contém três exercícios de programação em **JavaScript** com **HTML** aplicados a situações do cotidiano, utilizando manipulação de formulários e DOM.

---

## Questão 1 – Remédios

### Descrição:

Programa que calcula o valor total a pagar por remédios selecionados pelo usuário, considerando quantidade e preço unitário definido no `value` do `<option>` do `<select>`.

### Funcionalidade:

* Seleção de remédio (`<select>`).
* Entrada de quantidade (`<input type="number">`).
* O preço unitário vem do atributo `value` do remédio selecionado.
* Calcula o total (`preco * quantidade`).
* Aplica **desconto de 10%** se a quantidade for maior ou igual a 2.
* Exibe o resultado formatado com nome do remédio, quantidade, preço unitário e valor total.

### Tecnologias:

* HTML (`form`, `<select>`, `<input>`)
* JavaScript (`getElementById`, `selectedIndex`, `value`, `toFixed`)

---

## Questão 2 – Lan House

### Descrição:

Programa que calcula o valor a ser pago por um cliente de uma lan house, considerando o valor de cada **15 minutos** de uso de um computador. Frações de 15 minutos são cobradas de forma integral.

### Funcionalidade:

* Entrada do valor por 15 minutos (`valor15`).
* Entrada do tempo de uso em minutos (`tempo`).
* Calcula o número de frações de 15 minutos (`Math.ceil(tempo / 15)`).
* Calcula o valor total a pagar (`valor * frações`).
* Exibe resultado no formato: tempo, frações e valor total.

### Tecnologias:

* HTML (`form` para entrada de dados)
* JavaScript (`addEventListener`, `getElementById`, `Math.ceil`)

---

## Questão 3 – Promoção Supermercado

### Descrição:

Programa que gera mensagens promocionais para produtos de higiene, anunciando **50% de desconto em 1 unidade** na compra de 3 unidades de um produto.

### Funcionalidade:

* Entrada do nome/descrição do produto (`descricao`).
* Entrada do preço unitário (`preco`).
* Calcula o desconto de 50% em uma unidade e o valor total para 3 unidades.
* Exibe mensagem promocional incluindo: nome do produto, preço unitário e valor total com desconto.

### Tecnologias:

* HTML (`form`)
* JavaScript (`parseFloat`, manipulação do DOM, `toFixed(2)` para formatação)

---


## Observações Gerais

* Todo o JavaScript foi colocado em **arquivos externos** (`.js`) para melhor organização.
* Os valores monetários foram formatados para **2 casas decimais**.
* Os exercícios demonstram manipulação básica do **DOM**, tratamento de eventos e cálculos simples no front-end.

