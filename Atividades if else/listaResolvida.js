const prompt = require('prompt-sync')({sigint: true});

// Limpa o terminal
console.clear();
console.log("=== Exercícios de Condicionais em JavaScript ===\n");

// 1. Maioridade
console.log("1 - Maioridade");
let idade = parseInt(prompt("Digite sua idade: "));
if (idade >= 18) {
    console.log("Resultado: Você é maior de idade");
} else {
    console.log("Resultado: Você é menor de idade");
}
console.log("-------------------------------");

// 2. Número positivo ou negativo
console.log("2 - Número positivo ou negativo");
let numero = parseFloat(prompt("Digite um número: "));
if (numero >= 0) {
    console.log("Resultado: Número positivo");
} else {
    console.log("Resultado: Número negativo");
}
console.log("-------------------------------");

// 3. Par ou ímpar
console.log("3 - Par ou ímpar");
let inteiro = parseInt(prompt("Digite um número inteiro: "));
if (inteiro % 2 === 0) {
    console.log("Resultado: Número par");
} else {
    console.log("Resultado: Número ímpar");
}
console.log("-------------------------------");

// 4. Nota do aluno
console.log("4 - Nota do aluno");
let nota = parseFloat(prompt("Digite a nota (0 a 10): "));
if (nota >= 7) {
    console.log("Resultado: Aprovado");
} else {
    console.log("Resultado: Reprovado");
}
console.log("-------------------------------");

// 5. Senha secreta
console.log("5 - Senha secreta");
let senha = prompt("Digite a senha: ");
if (senha === "1234") {
    console.log("Resultado: Acesso permitido");
} else {
    console.log("Resultado: Acesso negado");
}
console.log("-------------------------------");

// 6. Desconto na compra
console.log("6 - Desconto na compra");
let valor = parseFloat(prompt("Digite o valor da compra: "));
if (valor >= 100) {
    console.log("Resultado: Você ganhou desconto!");
} else {
    console.log("Resultado: Sem desconto");
}
console.log("-------------------------------");

// 7. Maior de dois números
console.log("7 - Maior de dois números");
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
if (num1 > num2) {
    console.log("Resultado: O maior número é " + num1);
} else if (num2 > num1) {
    console.log("Resultado: O maior número é " + num2);
} else {
    console.log("Resultado: Os números são iguais");
}
console.log("-------------------------------");

// 8. Temperatura
console.log("8 - Temperatura");
let temp = parseFloat(prompt("Digite a temperatura atual: "));
if (temp < 15) {
    console.log("Resultado: Está frio");
} else {
    console.log("Resultado: Está quente");
}
console.log("-------------------------------");

// 9. Login simples
console.log("9 - Login simples");
let usuario = prompt("Digite o usuário: ");
let senhaLogin = prompt("Digite a senha: ");
if (usuario === "admin" && senhaLogin === "1234") {
    console.log("Resultado: Login realizado com sucesso");
} else {
    console.log("Resultado: Usuário ou senha incorretos");
}
console.log("-------------------------------");

// 10. Lâmpada
console.log("10 - Lâmpada");
let comando = prompt("Digite 'on' ou 'off': ").toLowerCase();
if (comando === "on") {
    console.log("Resultado: A lâmpada está acesa");
} else if (comando === "off") {
    console.log("Resultado: A lâmpada está apagada");
} else {
    console.log("Resultado: Comando inválido");
}
console.log("-------------------------------");

console.log("=== Fim dos exercícios ===");
