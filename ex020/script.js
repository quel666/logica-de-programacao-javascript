var valor = Number(prompt("Digite um valor:"))
alert (`O valor formatado = ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)