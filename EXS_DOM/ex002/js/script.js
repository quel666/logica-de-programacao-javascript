const inicio_programa = Number(prompt(`
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

function comprar_banana() {
    var resultado = 0
    alert("Preço da banana é R$ 1,30 a unidade, apartir de 12 unidades o preço é R$ 1,00")
    var qt_banana = Number(prompt("Quantas bananas você deseja comprar?"))

    if (qt_banana >= 12) {
        resultado = qt_banana * 1
        alert(`${qt_banana} unidades de banana sai a ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
    }

    else {
        resultado = qt_banana * 1.30
        alert(`${qt_banana} unidades de banana sai a ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
    }
}
function comprar_maca() {
    var resultado = 0
    alert("O KG da maça é R$8,55, apartir de 2KG sai por R$6,99")
    var qt_maca = Number(prompt("Quantas maças você deseja comprar?"))

    if (qt_maca <= 1) {
        resultado = qt_maca * 8.55
        alert(`${qt_maca} KG de maça sai por ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
    }

    else {
        resultado = qt_maca * 6.99
        alert(`${qt_maca} KG de maça sai por ${resultado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        })} Reais`)
    }
}

function calcular_preco_manga(preco, marca) {
    var qt_manga = Number(prompt("Quantos KG de manga você deseja?"))
    resultado = qt_manga * preco
    alert(`Você comprou ${qt_manga}Kg de manga ${marca} e saiu no valor de ${resultado}`)

}

function comprar_manga() {
    const tipo_manga = Number(prompt(`
        Qual opção de manga você vai comprar?
        =====================================
        O KG da Manga:
        [1] Palmer R$5,49
        [2] Rosa R$10,00
        [3] Tommy R$2,99`))



    switch (tipo_manga) {
        case 1:
            calcular_preco_manga (5.49, "Palmer")
            break;
        case 2:
            calcular_preco_manga (10.00, "Rosa")
            break;
        case 3:
            calcular_preco_manga (2.99, "Tommy")
            break;

        default:
            alert ("Não existe essa opção")

            break;
    }
}

function comprar_laranja() {
    var resultado = 0
    var tipo_laranja = Number(prompt(`
        O KG da laranja 
        [1]Laranja-pera R$ 5.99 e a cima de 2KG é R$5,00
        [2]Laranja-lima R$ 3.00 e a cima de 3KG é R$2,00
        [3]Laranja-bahia R$ 4,00 e a cima de 4KG é R$3,50`))

    var qt_laranja = Number(prompt("Quantos KG de laranja você deseja?"))
    switch (tipo_laranja) {
        case 1:
            if (qt_laranja <= 2) {
                resultado = qt_laranja * 5.99
                alert(`O KG da laranja pera fica ${resultado}`)
            }
            else {
                resultado = qt_laranja * 5.00
                alert(`O KG da Laranja fica ${resultado}`)
            }

            break;
        case 2:

            break;
        case 3:

            break;

        default:
            break;
    }
}

switch (inicio_programa) {
    case 1:
        comprar_banana()
        break
    case 2:
        comprar_maca()
        break
    case 3:
        comprar_manga()
        break
    case 4:
        comprar_laranja()
        break
    case 5:
        alert("Limão")
        break
}