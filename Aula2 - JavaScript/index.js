let precoProduto=100.564; // variável que armazena o preço do produto
let valorDesconto=10; // variável que armazena o desconto do produto
let valorImposto=5; // variável que armazena o imposto sobre o produto

let valorTotal = precoProduto - valorDesconto; // variável que armazena o desconto do produto
valorTotal = parseFloat(valorTotal + valorImposto); // variável que armazena o valor total do preço do produto após a imposição do imposto

console.log("O valor total da compra é: "+valorTotal);
console.log(`O valor total da compra é: ${valorTotal.toFixed(2)}`);