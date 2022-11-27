let sensibilidadeEl = document.querySelector("#sensibilidade");
let dificuldadeEl = document.querySelector("#dificuldade");

sensibilidadeEl.addEventListener('input', () => {
    if (sensibilidadeEl.value == '8') {
        vPlayer = vPlayer2 = 8;
    }
    else if (sensibilidadeEl.value == '9') {
        vPlayer = vPlayer2 = 9;
    }
    else if (sensibilidadeEl.value == '10') {
        vPlayer = vPlayer2 = 10;
    }
    else if (sensibilidadeEl.value == '11') {
        vPlayer = vPlayer2 = 11;
    }
});


dificuldadeEl.addEventListener('input', () => {
    if (dificuldadeEl.value == '1') {
        vCpu = 8;
    }
    else if (dificuldadeEl.value == '2') {
        vCpu = 12;
    }
    else if (dificuldadeEl.value == '3') {
        vCpu = 15;
    }
    else if (dificuldadeEl.value == '4') {
        vCpu = 20;
    }
});

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
    botaoVoltarConfigEl.classList.remove("sumir");
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
    audioMenu.play();
})



// menu partida rápida

let botaoPartidaEL = document.querySelector("#botao_partida");
let botaoVoltarPartidaEl = document.querySelector("#voltar_partida");
let partidaEl = document.querySelector("#partida");
let painelEl = document.querySelector("#painel");

botaoPartidaEL.addEventListener('click', () => {
    menuEl.classList.add("sumir");
    partidaEl.classList.remove("sumir");
});

botaoVoltarPartidaEl.addEventListener('click', ()=>{
    menuEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
})
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

let configsMenuEl = document.querySelector("#opcao_config");

configsMenuEl.addEventListener('click', ()=>{
    menuEl.classList.add("sumir");
    configsEl.classList.remove("sumir");
    configurarEl.classList.add("sumir");
    botaoVoltarConfigEl.classList.add("sumir");
})
