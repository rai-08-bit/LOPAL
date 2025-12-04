const numUm = parseInt(prompt("Digite o primeiro número:")); // Criação da variável "numUm" para iniciar a contagem do intervalo de números pares
const numDois= parseInt(prompt("Digite o segundo número:")); // Criação da variável "numDois" para finalizar a contagem do intervalo de números pares

if (isNaN(numUm) || isNaN(numDois)) {
        alert("Você não digitou números válidos, tente novamente"); // Verifica se os valores digitados são válidos
    } else {
        let numPar = ""; // Criação da variável "numPar" para armazenar números pares
        let inicio, fim; // Criação da variáveis "inicio" e "fim" para armazenar a formação do intervalo de números pares

        if (numUm < numDois) {
            inicio = numUm;
            fim = numDois;
        } else {
            inicio = numUm;
            fim = numDois;
        } 

        for (let i = inicio; i <= fim; i++) { // atribuição de valores para a variável "i" para que todos os valores estejam inseridos no intervalo de números
            if (i % 2 === 0) {
                numPar += i + " ";
            }
        }

        if (numPar === "") {
            alert("Não há números pares no intervalo.");
        } else {
            alert(`Números pares no intervalo de ${inicio} até ${fim} : ${numPar}`);
        }
    }