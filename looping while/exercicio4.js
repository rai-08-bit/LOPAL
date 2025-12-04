let soma = 0;// criação da variável "soma" e atribuição de valor 0
for (let i = 1; i <= 5; i++) {
    const num = parseFloat(prompt(`digite a nota ${i}`)) //

    if (isNaN(num) || num < 0) {
        alert("Por favor, digite uma nota válido.");// 
    } else {
        soma += num;//
    }
}
let media = soma / 5;//
alert(`a média das notas digitadas foram: ${media} na soma das notas digitadas foram: ${soma}`);//