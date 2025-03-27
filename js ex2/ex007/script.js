var valor1 = Number(prompt(""))
var valor2 = Number(prompt(""))
var valor3 = Number(prompt(""))

var media = (valor1 + valor2 + valor3) / 3

var BRL = media.toLocaleString("pt-br" , {style: "currency" , currency: "BRL"})

alert(BRL)