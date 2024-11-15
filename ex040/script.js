var n1 = Number(document.querySelector ("#n1").value)

var n2 = document.querySelector ("#n2")

var btn_somar = document.querySelector ("#soma")

var btn_dividir = document.querySelector ("#divisao")

var btn_multiplicacao = document.querySelector ("#multiplicacao")

var btn_subtrair = document.querySelector ("#subtracao")

var resultado = document.querySelector ("#res")


btn_somar.addEventListener ("click", soma)
function soma (){
    var n1_convertido = Number(n1.value)
    var n2_convertido = Number(n2.value)
    var soma = n1_convertido + n2_convertido
    res.innerText = soma
    
   
}

btn_dividir.addEventListener ("click", divisao)
function divisao (){
    alert("")
}

btn_multiplicacao.addEventListener ("click", multiplicacao)
function multiplicacao (){
    alert("")
}

btn_subtrair.addEventListener ("click", subtracao)
function subtracao (){
    alert("")
}


