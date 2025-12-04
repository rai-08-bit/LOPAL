let num=parseInt(prompt("Insira um número"));
if (isNaN(num)){
    alert("Você não digitou um número válido");
}

if (!isNaN(num)) {
    if (num %5 == 0 )
        alert("Seu número é múltiplo de 5");
    
    if (num %5 == 1 )
        alert("Seu número não é múltiplo de 5");
}