let notaUm = parseFloat(prompt("Digite a nota da prova")); // variável que atribui os valores Reais de um número digitado
let notaDois = parseFloat(prompt("Digite a nota do trabalho")); // variável que atribui os valores Reais de outro número digitado
let notaTres = parseFloat(prompt("Digite a nota da segunda prova")); // variável que atribui os valores Reais de um terceiro número digitado

let notaFinal = (notaUm+notaDois+notaTres)/3; // variável que calcula a média das variáveis atribuídas anteriormente e depois dividido por 3
alert(`O resultado da média é: ${notaFinal.toFixed(1)}`); // comando que indica o resultado da média calculada anteriormente na caixa do navegador e arredondada para uma casa depois da vírgula
console.log(`O resultado da média é: ${notaFinal.toFixed(1)}`); // comando que indica o resultado da média calculada anteriormente na aba de inspeção e arredondada para uma casa depois da vírgula