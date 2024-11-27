const inicio_programa = Number(prompt (`
    ========== Bem-Vindo ==========
         O que deseja comprar?
    ===============================
         Selecione uma opcão
    _______________________________
[1] - Banana
[2] - Maça
[3] - Manga
[4] - Laranja
[5] - Limão 
`))

function comprar_banana (){
    var resultado = 0
        alert ("Preço da banana é R$ 1,30 a unidade, apartir de 12 unidades o preço é R$ 1,00")
        var qt_banana = Number (prompt("Quantas bananas você deseja comprar?"))

        if (qt_banana >= 12) {
            resultado = qt_banana * 1
            alert (`${qt_banana} unidades de banana sai a ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
        }

        else {
        resultado = qt_banana * 1.30
            alert (`${qt_banana} unidades de banana sai a ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
        }
}
function comprar_maca (){
    var resultado = 0
    alert ("O KG da maça é R$8,55, apartir de 2KG sai por R$6,99")
    var qt_maca = Number (prompt("Quantas maça você deseja comprar?"))

    if (qt_maca <= 1) {
        resultado = qt_maca * 8.55 
        alert (`${qt_maca} KG de maça sai por ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
    })} Reais`)
    }

    else {
        resultado = qt_maca * 6.99
        alert (`${qt_maca} KG de maça sai por ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
    })} Reais`)
    }
}

function comprar_manga (){
    
}

switch (inicio_programa) {
    case 1:
        comprar_banana()
        break
    case 2:
        comprar_maca()
        break
    case 3:
        alert ("Manga")
        break
    case 4:
        alert ("Laranja")
        break
    case 5:
        alert ("Limão")
        break
}