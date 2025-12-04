const numUm = parseInt(prompt("insira um número"));
if (isNaN(numUm)){
    //Verifica se a conversão resultou em um número válido
    alert('Erro, você não digitou um número válido');
}
if(!isNaN(numUm)){
    //Somente solicita o segundo número se o primeiro for válido
    const numDois = parseInt(prompt("insira outro número"));

    if (isNaN(numDois)){
        //Verifica se a conversão resultou em um número válido
        alert('Erro, você não digitou um número válido');
    }

    if(!isNaN(numUm) &&!isNaN(numDois)){
        if(numUm === numDois){
            alert("Os números são iguais")
        }
        if(numUm !== numDois){
            alert("Os números são diferentes");
        }
    }
}