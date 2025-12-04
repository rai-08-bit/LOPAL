let notas = [];
let quantidade;

do {
    quantidade = parseInt(prompt("Insira a quantidade de notas que deseja armazenar:"));

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Valor inválido, digite um número maior que zero");
    }
} while (isNaN(quantidade) || quantidade <= 0);
// shift + alt + f

let nota;

for (let i = 0; i < quantidade; i++) {

    do {
        nota = parseFloat(prompt(`Digite a nota ${i + 1}`));

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida, digite um número entre 0 e 10");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);

    notas[i] = nota;
}

let soma = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

for (let i = 0; i < quantidade; i++) {
    soma += notas[i];

    //Verificando notas 
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    } else if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
}

let media = soma / quantidade;

alert(`A média das notas é: ${media.toFixed(2)}`);
alert(`A maior nota é: ${maiorNota.toFixed(2)}`);
alert(`A menor nota é: ${menorNota.toFixed(2)}`);