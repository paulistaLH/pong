//menu principal

let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");
let tituloEl = document.querySelector("#titulo");
let configurarEl = document.querySelector("#configurar");

botaoJogarEl.addEventListener('click', () => {
    opcoesEl.classList.remove("sumir");
    menuEl.classList.remove("sumir");
    tituloEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
});

// menu de configurações


let menuEl = document.querySelector("#menu");
let configsEl = document.querySelector("#configs");

configurarEl.addEventListener('click', () => {
    menuEl.classList.add("sumir");
    configsEl.classList.remove("sumir");
    configurarEl.classList.add("sumir");
    torneioEl.classList.add("sumir");
    partidaEl.classList.add("sumir");
});

/*
obs: não funcionou...

let fundoEl = document.querySelector("#fundo");
let quadraEl = document.querySelector("#quadra");

quadraEl.addEventListener('input', ()=>
{
    if(quadraEl.value == 'padrao'){
        fundoEl.setAttribute('src', 'imgs/preto.jpg');
}
    else if(quadraEl.value == 'cimento'){
    fundoEl.setAttribute('src', 'imgs/quadra.jpg');}
}) */

let botaoVoltarConfigEl = document.querySelector("#voltar_configs");

botaoVoltarConfigEl.addEventListener('click', () => {
    menuEl.classList.remove("sumir");
    configsEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
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
    inicializar();
})

let botaoVoltarPartidaEl = document.querySelector("#voltar_partida");

botaoVoltarPartidaEl.addEventListener('click', () => {
    menuEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
});

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

// jogo
let jogoEl = document.querySelector("#jogo");
let botaoComecarEl = document.querySelector("#começar");
let bolaEl = document.querySelector("#bola");
let cpuEl = document.querySelector("#cpu");
let playerEl = document.querySelector("#player");
let player2El = document.querySelector("#player");
let pontosEsquerdaEl = document.querySelector("#pontosEsquerda");
let pontosDireitaEl = document.querySelector("#pontosEsquerda");

let jogo = false, frames;

let posBolaX, posBolaY, posPlayerYposPlayer2Y, posCpuY;

let direçaoJY;

let posInicialPlayerY = 180, posInicialPlayer2Y = 180, posInicialCpuY = 180, posIncialBolaX = 475, posInicialBolaY = 240;

let quadraX = 0, quadraY = 0, quadraW = 960, quadraH = 500;
let barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

let bolaX, bolaY;
let cpuY = 0;

let vBola, vCpu, vPlayer, vPlayer2;

let pontosEsquerda = 0, pontosDireita = 0;
let tecla;

function pressionar(){
    tecla = e.keyCode
    if(tecla == 87 || tecla == 119){

    }
    else if( tecla == 83 || tecla == 115 ){

    }
};
function soltar(){
    
};


function partida(){
    if(jogo){

    }
    frames = requestAnimationFrame(partida);
}

function puxaPartida() {
    if (!jogo) {
        cancelAnimationFrame(frame);
        jogo = true;
        direçaoJY = 0;
        posBolaX = posIncialBolaX;
        posBolaY = posInicialBolaY;
        posPlayerY = posInicialPlayerY;
        posPlayer2Y = posCpuY = posInicialCpuY = 180;
        partida();
    }
}
function inicializar() {
    botaoComecarEl.addEventListener('click', puxaPartida);
    document.addEventListener('keyup', pressionar(e));
    document.addEventListener('keydown', soltar);
}  //linha 70