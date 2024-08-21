function verificaValorChuteValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido</div>
        `
        return;
    }

    if (numeroMaiorouMenorQuePermitido) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>VocÊ acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="novo-jogo class="btn-novo-jogo>Novo Jogo</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> -->
        `
    } else {
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> -->
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroMaiorouMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}