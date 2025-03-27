var valor = Number(prompt("Digite um valor"))

var real = valor.toLocaleString("pt-br" , {style: "currency" , currency: "BRL"})

alert(real)