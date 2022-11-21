//menu principal

let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");
let tituloEl = document.querySelector("#titulo");
let configurarEl = document.querySelector("#configurar");

botaoJogarEl.addEventListener('click', () => {
    opcoesEl.classList.remove("sumir");
    menuEl.classList.remove("sumir");
    tituloEl.classList.add("sumir");
});

// menu de configurações


let menuEl = document.querySelector("#menu");
let configsEl = document.querySelector("#configs");
let botaoVoltarMenuEl = document.querySelector("#voltar_menu");



configurarEl.addEventListener('click', () => {
    configsEl.classList.remove("sumir");
    configurarEl.classList.add("sumir");
    jogoEl.classList.add("sumir");
    painelEl.classList.add("sumir");
    botaoComecarEl.classList.add("sumir");
    reiniciarEl.classList.add("sumir");
    voltarPosJogoEl.classList.add("sumir");
    vencedorEl.classList.add("sumir");
    vBola = 0;
});

let botaoVoltarConfigEl = document.querySelector("#voltar_configs");

botaoVoltarConfigEl.addEventListener('click', () => {
    configsEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
    jogoEl.classList.remove("sumir");
    painelEl.classList.remove("sumir");
    botaoComecarEl.classList.remove("sumir");
    vBola = 6;
})

botaoVoltarMenuEl.addEventListener('click', () => {
    jogo = false;
    vBola = 0;
    player2El.classList.remove("sumir");
    cpuEl.classList.remove("sumir");
    jogoEl.classList.add("sumir");
    menuEl.classList.remove("sumir");
    configsEl.classList.add("sumir");
    pontosDireitaEl.value = 0;
    pontosEsquerdaEl.value = 0;
    reiniciarEl.classList.add("sumir");
    voltarPosJogoEl.classList.add("sumir");
    vencedorEl.classList.add("sumir");
    painelEl.classList.add("sumir");
    posBolaX = 475;
    posBolaY = 240;
    posPlayerY = posPlayer2Y = posCpuY = 180;
})

let sensibilidadeEl = document.querySelector("#sensibilidade");

sensibilidadeEl.addEventListener('input', () => {
    if (sensibilidadeEl.value == '8') {
        vCpu = vPlayer = vPlayer2 = 8;
    }
    else if (sensibilidadeEl.value == '9') {
        vCpu = vPlayer = vPlayer2 = 9;
    }
    else if (sensibilidadeEl.value == '10') {
        vCpu = vPlayer = vPlayer2 = 10;
    }
    else if (sensibilidadeEl.value == '11') {
        vCpu = vPlayer = vPlayer2 = 11;
    }
})

// menu partida rápida

let botaoPartidaEL = document.querySelector("#botao_partida");
let partidaEl = document.querySelector("#partida");
let painelEl = document.querySelector("#painel");

botaoPartidaEL.addEventListener('click', () => {
    menuEl.classList.add("sumir");
    partidaEl.classList.remove("sumir");
});

let botaoVsCpuEl = document.querySelector("#computador");

botaoVsCpuEl.addEventListener('click', () => {
    jogoEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
    painelEl.classList.remove("sumir");
    player2El.classList.add("sumir");
    configurarEl.classList.remove("sumir");
    botaoComecarEl.classList.remove("sumir");
})

let botaoMultiplayerEl = document.querySelector("#multiplayer")

botaoMultiplayerEl.addEventListener('click', () => {
    jogoEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
    painelEl.classList.remove("sumir");
    cpuEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
    botaoComecarEl.classList.remove("sumir");
})

//menu torneio

let botaoVoltarTorneioEl = document.querySelector("#voltar_torneio");
let torneioEl = document.querySelector("#torneio");
let botaoTorneioEl = document.querySelector("#botao_torneio");

botaoTorneioEl.addEventListener('click', () => {
    menuEl.classList.add("sumir");
    torneioEl.classList.remove("sumir");
});
botaoVoltarTorneioEl.addEventListener('click', () => {
    menuEl.classList.remove("sumir");
    torneioEl.classList.add("sumir");
});

//seleções

let botaoBrasilEl = document.querySelector("#brasil");
let botaoArgentinaEl = document.querySelector("#argentina");
let botaoEspanhaEl = document.querySelector("#espanha");
let botaoFrancaEl = document.querySelector("#franca");
let botaoChinaEl = document.querySelector("#china");
let botaoJapaoEl = document.querySelector("#japao");
let botaoEuaEl = document.querySelector("#eua");
let botaoAlemanhaEl = document.querySelector("#alemanha");
let selecionadoEl = document.querySelector("#selecionado");
let botaoPais = document.querySelectorAll(".botaoPais");
let uniforme;

for (let i = 0; i < botaoPais.length; i++) {
    botaoPais[i].addEventListener('click', function (e) {
        for (let j = 0; j < botaoPais.length; j++) {
            botaoPais[j].classList.remove('selecionado');
        };
        let botaoPaisEl = e.currentTarget;
        botaoPaisEl.classList.add('selecionado');
    });
};


botaoBrasilEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Brasil';
})
botaoArgentinaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Argentina';
})
botaoEspanhaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Espanha';
})
botaoFrancaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Franca';
})
botaoChinaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: China';
})
botaoJapaoEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Japao';
})
botaoEuaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Estados Unidos';
})
botaoAlemanhaEl.addEventListener('click', () => {
    selecionadoEl.innerHTML = 'Selecao escolhida: Alemanha';
})

let botaoJogarTorneioEl = document.querySelector("#jogar_torneio");

botaoJogarTorneioEl.addEventListener('click', () => {
    torneioEl.classList.add("sumir");
})
