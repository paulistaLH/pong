// jogo
let jogoEl = document.querySelector("#jogo");
let botaoComecarEl = document.querySelector("#começar");
let bolaEl = document.querySelector("#bola");
let cpuEl = document.querySelector("#cpu");
let playerEl = document.querySelector("#player");
let player2El = document.querySelector("#player2");
let pontosEsquerdaEl = document.querySelector("#pontosEsquerda");
let pontosDireitaEl = document.querySelector("#pontosDireita");
let vencedorEl = document.querySelector("#vencedor");
let reiniciarEl = document.querySelector("#reiniciar");
let voltarPosJogoEl = document.querySelector("#voltar_menu_jogo");
let posJogoEl = document.querySelector("#pos_jogo");

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
vCpu = vPlayer = vPlayer2 = 9;
vBola = 6;
let aux = 0;

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
        configurarEl.classList.remove("sumir");
        jogo = 1;
        dirY = 0;
        dirY2 = 0;
        posBolaX = 475;
        posBolaY = 240;
        posPlayerY = posPlayer2Y = posCpuY = 180;
        bolaY = 0;
        if (aux == 0) {
            vCpu = vPlayer = vPlayer2 = 8;
        }
        vBola = 6;

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
        aux++;
        botaoComecarEl.classList.add("sumir");
        posicionamentoPlayer();
        posicionamentoBola();
        controlaCPU();
    }
    frame = requestAnimationFrame(partida);
}

function posicionamentoPlayer() {
    if (jogo) {
        posPlayerY += vPlayer * dirY;
        if ((posPlayerY + barraAltura) >= campoAltura || posPlayerY <= 10) {
            posPlayerY += (vPlayer * dirY) * (-1);
        }
        playerEl.style.top = posPlayerY + "px";
        posPlayer2Y += vPlayer2 * dirY2;
        if ((posPlayer2Y + barraAltura) >= campoAltura || posPlayer2Y <= 10) {
            posPlayer2Y += (vPlayer2 * dirY2) * (-1);
        }
        player2El.style.top = posPlayer2Y + "px";
    }
}

function posicionamentoBola() {
    posBolaX += vBola * bolaX;
    posBolaY += vBola * bolaY;

    // player1
    if ((posBolaX <= 10 + barraLargura) && ((posBolaY + bolaAltura >= posPlayerY) && (posBolaY <= posPlayerY + barraAltura))) {
        bolaY = (((posBolaY + (bolaAltura / 2)) - (posPlayerY + (barraAltura / 2))) / 16);
        bolaX *= -1;
    }
    // player2
    if (cpuEl.classList.contains("sumir")) {
        if ((posBolaX >= 930 - barraLargura) && ((posBolaY + bolaAltura >= posPlayer2Y) && (posBolaY <= posPlayer2Y + barraAltura))) {
            bolaY = ((posBolaY + (bolaAltura / 2)) - (posPlayer2Y + (barraAltura / 2))) / 16;
            bolaX *= -1;
        }
    }
    //cpu
    if (player2El.classList.contains("sumir")) {
        if ((posBolaX >= 930 - barraLargura) && ((posBolaY + bolaAltura >= posCpuY) && (posBolaY <= posCpuY + barraAltura))) {
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
        botaoComecarEl.classList.remove("sumir");
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
        botaoComecarEl.classList.remove("sumir");
    }
    if (pontosEsquerdaEl.value == 7) {
        audioJogo.pause();
        if (pontosDireitaEl.value == 1) {
            golDaAlemanha.play();
        }
        else {
            audioPosJogo.play();
        }
        vBola = 0;
        botaoComecarEl.classList.add("sumir");
        reiniciarEl.classList.remove("sumir");
        vencedorEl.classList.remove("sumir");
        voltarPosJogoEl.classList.remove("sumir");
        vencedorEl.innerHTML = "Jogador 1 venceu!"
        configurarEl.classList.add("sumir");
    }
    else if (pontosDireitaEl.value == 7) {
        audioJogo.pause();
        if (pontosEsquerdaEl.value == 1) {
            golDaAlemanha.play();
        }
        else {
            audioPosJogo.play();
        }
        vBola = 0;
        botaoComecarEl.classList.add("sumir");
        reiniciarEl.classList.remove("sumir");
        vencedorEl.classList.remove("sumir");
        voltarPosJogoEl.classList.remove("sumir");
        vencedorEl.innerHTML = "Jogador 2 venceu!"
        configurarEl.classList.add("sumir");
    }
    bolaEl.style.top = posBolaY + "px";
    bolaEl.style.left = posBolaX + "px";
}

reiniciarEl.addEventListener('click', () => {
    audioPosJogo.pause();
    pontosDireitaEl.value = 0;
    pontosEsquerdaEl.value = 0;
    reiniciarEl.classList.add("sumir");
    botaoComecarEl.classList.remove("sumir");
    vencedorEl.classList.add("sumir");
    reiniciarEl.classList.add("sumir");
    voltarPosJogoEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
});

voltarPosJogoEl.addEventListener('click', () => {
    audioPosJogo.pause();
    voltarPosJogoEl.classList.add("sumir");
    botaoComecarEl.classList.remove("sumir");
    player2El.classList.remove("sumir");
    cpuEl.classList.remove("sumir");
    jogoEl.classList.add("sumir");
    menuEl.classList.remove("sumir");
    configsEl.classList.add("sumir");
    reiniciarEl.classList.add("sumir");
    voltarPosJogoEl.classList.add("sumir");
    vencedorEl.classList.add("sumir");
    painelEl.classList.add("sumir");
    botaoComecarEl.classList.add("sumir");
    pontosDireitaEl.value = 0;
    pontosEsquerdaEl.value = 0;
    audioMenu.play();
})
function controlaCPU() {
    if (jogo) {
        if (posBolaX > (campoLargura / 3) && bolaX > 0) {
            if (posBolaY + (bolaAltura / 2) > ((posCpuY + (barraAltura / 2)) + vCpu)) {
                if ((posCpuY + barraAltura) <= campoAltura) {
                    posCpuY += vCpu;
                }
            }
            else if (posBolaY + (bolaAltura / 2) < (posCpuY + (barraAltura / 2)) - vCpu) {
                if (posCpuY >= 0) {
                    posCpuY -= vCpu;
                }
            }
        }
        else {

            if (posCpuY + (barraAltura / 2) < (campoAltura / 2)) {
                posCpuY += vCpu;
            }
            else if (posCpuY + (barraAltura / 2) > (campoAltura / 2)) {
                posCpuY -= vCpu;
            }
        }
    }
    cpuEl.style.top = posCpuY + "px";
}
if (pontosDireitaEl.value == 7 && pontosEsquerdaEl.value == 1) {
    audioJogo.pause();
    audioPosJogo.pause();
    golDaAlemanha.play();
}
else if (pontosDireitaEl.value == 1 && pontosEsquerdaEl.value == 7) {
    audioJogo.pause();
    audioPosJogo.pause();
    golDaAlemanha.play();
}