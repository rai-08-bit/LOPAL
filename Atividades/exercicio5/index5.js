let celsius=parseFloat(prompt("Insira sua temperatura em Celsius")); //variável Real que atribui o valor da temperatura em Celsius(ºC)

let fahrenheit=((celsius*9)/5)+32; // variável que converte os graus Celsius(ºC) para Fahrenheit(ºF) de acordo com a fórmula inserida
alert(`A temperatura em graus Fahrenheit (ºF) é: ${fahrenheit.toFixed(1)}`); // comando da caixa do navegador que indica o resultado da conversão de Celsius(ºC) em Fahrenheit(ºF) e arredondada para uma casa depois da vírgula
console.log(`A temperatura em graus Fahrenheit (ºF) é: ${fahrenheit.toFixed(1)}`); // comando da aba de inspeções que indica o resultado da conversão de Celsius(ºC) em Fahrenheit(ºF) e arredondada para uma casa depois da vírgula