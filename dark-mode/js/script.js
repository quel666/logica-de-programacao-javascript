var body = document.querySelector ("body")
var btn_darkmode = document.querySelector ("#darkmode")

function darkmode (){
    body.classList.toggle("dark-mode")

}

addEventListener ("click", darkmode)