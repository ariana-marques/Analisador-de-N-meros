let numero = document.getElementById('txtnum')
let lista = document.getElementById('sellista')
let res = document.getElementById('res')
let num = []

function adicionar() {
    let n = numero.value // criada a variável n para conversão de string para número
    var existe = false

    if (n == 0 || n > 100 || n < 1) {
        window.alert('Valor inválido ou já encontrado na lista.')
        return
    }

    for (var posicao = 0; posicao < num.length; posicao++) {
        if (num[posicao] == n) {
            existe = true
            window.alert('Valor inválido ou já encontrado na lista.')
            break
        }
    }

    if (existe == false) {
        num.push(n)
        var item = document.createElement('option') // cria um elemento option no campo select de forma dinâmica
        item.text = `Valor ${n} adicionado.` // adiciona um texto ao campo item
        sellista.appendChild(item) // adiciona um elemento filho (item) ao select
    }

    res.innerHTML = ''
    numero.value = ''
    numero.focus()
} // fim function adicionar()

function finalizar() {
    if (num.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tamanho = num.length

        function compararNumeros(a, b) {
            return a - b;
        }

        let numOrdenados = num.sort(compararNumeros)
        let maior = num[num.length - 1]
        let menor = num[0]
        let soma = 0

        for (let c = 0; c < num.length; c++) {
            soma += parseInt(num[c])
        }

        let media = soma / (num.length)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tamanho} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
} // fim function finalizar