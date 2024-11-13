var btn_mais = document.querySelector ("#mais")
var btn_menos = document.querySelector ("#menos")
var btn_res = document.querySelector ("#res") 
var contador = 0

function incremento () {
    contador ++ 
    res.innerText = contador
    limiter ()
}

function decremento () {
    contador --
    res.innerText = contador
    limiter ()
}

function limiter () {
    if (contador == 0) {
        btn_menos.setAttribute ("disabled" , "")
    }

    else {
        btn_menos.removeAttribute ("disabled" , "")
    }

}

limiter ()


btn_mais.addEventListener ("click" , incremento)
btn_menos.addEventListener ("click" , decremento)
