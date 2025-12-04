let largura=parseFloat(prompt("Digite a largura do retangulo")); // variável Real que atribui o valor em centímetros da largura do retângulo
let altura=parseFloat(prompt("Digite a altura do retangulo")); // variável Real que atribui o valor em centímetros da altura do retângulo

let area=altura*largura; // variável que multiplica o valor das variáveis atribuidas anteriormente 
alert(`A área do retangulo é: ${area.toFixed(1)}`); // comando que indica o resultado da área calculada anteriormente na caixa do navegador e arredondada para uma casa depois da vírgula
console.log(`A área do retangulo é: ${area.toFixed(1)}`); // comando que indica o resultado da área calculada anteriormente na aba de inspeção e arredondada para uma casa depois da vírgula