let real=parseFloat(prompt("Insira sua quantia em reais(R$)")); // variável Real que atribui o valor do dinheiro em reais(R$)

let dolar=real/6; // variável que calcula o valor atribuido em reais(R$) e transforma em dólar(US$)
alert(`O valor em dólar é: ${dolar.toFixed(2)}`); // comando da caixa do navegador que indica o resultado da conversão de reais(R$) em dólar(US$) e arredondada para duas casas depois da vírgula
console.log(`O valor em dólar é: ${dolar.toFixed(2)}`); // comando da aba de inspeção que indica o resultado da conversão de reais(R$) em dólar(US$) e arredondada para duas casas depois da vírgula