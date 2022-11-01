let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");

botaoJogarEl.addEventListener('click', () =>{
    opcoesEl.classList.remove("sumir");
});

let configurarEl = document.querySelector("#configurar");
let menuEl = document.querySelector("#menu");
let configsEl = document.querySelector("#configs");

configurarEl.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
    configsEl.classList.remove("sumir");
});

let partidaEL = document.querySelector("#partida");
partidaEL.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
});
