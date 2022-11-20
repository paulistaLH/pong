// jogo
let jogoEl = document.querySelector("#jogo");
let botaoComecarEl = document.querySelector("#começar");
let bolaEl = document.querySelector("#bola");
let cpuEl = document.querySelector("#cpu");
let playerEl = document.querySelector("#player");
let player2El = document.querySelector("#player2");
let pontosEsquerdaEl = document.querySelector("#pontosEsquerda");
let pontosDireitaEl = document.querySelector("#pontosEsquerda");
let game, frame;

let posBolaX, posBolaY, posPlayerY, posPlayer2Y, posCpuY;

let dirY, dirY2;

let bolaX, bolaY;
let cpuY = 0;

let vBola, vCpu, vPlayer, vPlayer2;

let pontosEsquerda = 0, pontosDireita = 0;
let tecla;
let jogo = 0;
let barraAltura = 140, barraLargura = 20;
let campoAltura = 500, campoLargura = 960;
let bolaAltura = bolaLargura = 20;
vCpu = vPlayer = vPlayer2 = 8;
vBola = 5;


botaoComecarEl.addEventListener('click', puxaPartida);
document.addEventListener('keydown', (e) => {
    tecla = e.key;
    if (tecla == 'w' || tecla == 'W') {
        dirY -= 1;
    }
    else if (tecla == 's' || tecla == 'S') {
        dirY += 1;
    }
});
document.addEventListener('keyup', (e) => {
    tecla = e.key;
    if (tecla == 'w' || tecla == 'W') {
        dirY = 0;
    }
    else if (tecla == 's' || tecla == 'S') {
        dirY = 0;
    }
});
document.addEventListener('keydown', (e) => {
    tecla = e.key;
    if (tecla == 'ArrowUp') {
        dirY2 -= 1;
    }
    else if (tecla == 'ArrowDown') {
        dirY2 += 1;
    }
});
document.addEventListener('keyup', (e) => {
    tecla = e.key;
    if (tecla == 'ArrowUp') {
        dirY2 = 0;
    }
    else if (tecla == 'ArrowDown') {
        dirY2 = 0;
    }
}
);

function puxaPartida() {
    if (jogo == 0) {
        cancelAnimationFrame(frame);
        jogo = 1;
        dirY = 0;
        dirY2 = 0;
        posBolaX = 475;
        posBolaY = 240;
        posPlayerY = posPlayer2Y = posCpuY = 180;
        bolaY = 0;
        vCpu = vPlayer = vPlayer2 = 8;
        vBola = 5;

        if ((Math.random() * 10) < 5) {
            bolaX = -1;
        }
        else {
            bolaX = 1;
        }
        partida();
    }
}

function partida() {
    if (jogo) {
        posicionamentoPlayer();
        posicionamentoBola();
    }
    frame = requestAnimationFrame(partida);
}

function posicionamentoPlayer() {
    if (jogo) {
        posPlayerY += vPlayer * dirY;
        if ((posPlayerY + barraAltura) >= campoAltura || posPlayerY <= 60) {
            posPlayerY += (vPlayer * dirY) * (-1);
        }
        playerEl.style.top = posPlayerY + "px";
        posPlayer2Y += vPlayer2 * dirY2;
        if ((posPlayer2Y + barraAltura) >= campoAltura || posPlayer2Y <= 60) {
            posPlayer2Y += (vPlayer2 * dirY2) * (-1);
        }
        player2El.style.top = posPlayer2Y + "px";
    }
}

function posicionamentoBola() {
    posBolaX += vBola * bolaX;
    posBolaY += vBola * bolaY;

    // player1
    if ((posBolaX <= posPlayerY + barraLargura) && ((posBolaY + bolaAltura >= posPlayerY) && (posBolaY <= posPlayerY + barraAltura))) {
        bolaY = (((posBolaY + (bolaAltura / 2)) - (posPlayerY + (barraAltura / 2))) / 16);
        bolaX *= -1;
    }
    // player2
    if (cpuEl.classList.contains("sumir")) {
        if ((posBolaX >= posPlayer2Y - barraLargura) && ((posBolaY + bolaAltura >= posPlayer2Y) && (posBolaY <= posPlayer2Y + barraAltura))) {
            bolaY = ((posBolaY + (bolaAltura / 2)) - (posPlayer2Y + (barraAltura / 2))) / 16;
            bolaX *= -1;
        }
    }
    //cpu
    if (player2El.classList.contains("sumir")) {
        if ((posBolaX >= posCpuY - barraLargura) && ((posBolaY + bolaAltura >= posCpuY) && (posBolaY <= posCpuY + barraAltura))) {
            bolaY = ((posBolaY + (bolaAltura / 2)) - (posCpuY + (barraAltura / 2))) / 16;
            bolaX *= -1;

        }
    }
    // bordas
    if ((posBolaY >= campoAltura - bolaAltura) || (posBolaY <= 0)) {
        bolaY *= -1;
    }

    //ponto
    if (posBolaX >= (campoLargura - bolaLargura)) {
        vBola = 0;
        posBolaX = 475;
        posBolaY = 240;
        posPlayerY = posPlayer2Y = posCpuY = 180;
        pontosEsquerdaEl.value++;
        jogo = false;
        playerEl.style.top = posPlayerY + "px";
        player2El.style.top = posPlayer2Y + "px";
        cpuEl.style.top = posCpuY + "px";
    }
    else if (posBolaX <= 0) {
        vBola = 0;
        posBolaX = 475;
        posBolaY = 240;
        posPlayerY = posPlayer2Y = posCpuY = 180;
        pontosDireitaEl.value++;
        jogo = false;
        playerEl.style.top = posPlayerY + "px";
        player2El.style.top = posPlayer2Y + "px";
        cpuEl.style.top = posCpuY + "px";
    }

    bolaEl.style.top = posBolaY + "px";
    bolaEl.style.left = posBolaX + "px";
}

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
    player2El.classList.add("sumir");
})

let botaoMultiplayerEl = document.querySelector("#multiplayer")

botaoMultiplayerEl.addEventListener('click', () => {
    jogoEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
    painelEl.classList.remove("sumir");
    cpuEl.classList.add("sumir");
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