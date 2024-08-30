function verificaValorChuteValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="novo-jogo" class="btn-novo-jogo">Novo Jogo</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `
            <div>Valor inválido</div>
            `
        }
       
        return;
    }

    if (numeroMaiorouMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="novo-jogo" class="btn-novo-jogo">Novo Jogo</button>
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

document.body.addEventListener('click', e => {
    if(e.target.id == 'novo-jogo') {
        window.location.reload();
    }
})