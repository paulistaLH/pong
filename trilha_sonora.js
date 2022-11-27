let audioMenu = document.querySelector("#audio_menu");
let audioJogo = document.querySelector("#audio_jogo");
let audioPosJogo = document.querySelector("#audio_posJogo");
let golDaAlemanha = document.querySelector("#gol_alemanha");

botaoJogarEl.addEventListener('click', () => {
    audioMenu.play();
})

botaoMultiplayerEl.addEventListener('click', () => {
    audioMenu.pause();
})

botaoVsCpuEl.addEventListener('click', () => {
    audioMenu.pause();
})

botaoComecarEl.addEventListener('click', () => {
    audioJogo.play();
})

let botaoVolumeEl = document.querySelector("#botaoVolume");
let audiosEl = document.querySelectorAll(".audio");
let imgBotao = document.querySelector("#imagemBotao");

function mutar() {
    audioMenu.muted = true;
    audioJogo.muted = true;
    audioPosJogo.muted = true;
    golDaAlemanha.muted = true;
}

function desmutar() {
    audioMenu.muted = false;
    audioJogo.muted = false;
    audioPosJogo.muted = false;
    golDaAlemanha.muted = false;
}

botaoVolumeEl.addEventListener('click', () => {
    if (audioMenu.muted == false) {
        imgBotao.style.backgroundColor = '#a09f9f';
        mutar();
    }
    else{
        imgBotao.style.backgroundColor = 'white';
        desmutar();
    }

})


