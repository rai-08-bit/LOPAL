const peso = parseFloat(prompt("Insira seu peso"));
if (isNaN(peso)) {
    alert("Você não digitou um número válido");

} else {
    const altura = parseFloat(prompt("Insira sua altura"));
    if (isNaN(altura) || altura > 3) {
        alert("Você não digitou um número válido");
    } else {

        let imc = peso / (altura * altura);

        if (imc < 18.5) {
            alert("Você está abaixo do peso!");
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert("Peso normal");
        } else if (imc >= 25 && imc <= 29.9) {
            alert("Sobrepeso!");
        } else if (imc >= 30) {
            alert("Obesidade!");
        }
    }
}