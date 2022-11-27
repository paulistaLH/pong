let audioMenu = document.querySelector("#audio_menu");
let audioJogo = document.querySelector("#audio_jogo");
let audioPosJogo = document.querySelector("#audio_posJogo");

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

musicaEl = document.querySelector("#musica");

