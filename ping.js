let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");

botaoJogarEl.addEventListener('click', () =>{
    opcoesEl.classList.remove("sumir");
});

let configurarEl = document.querySelector("#configurar");
let menuEl = document.querySelector("#menu");

configurarEl.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
});

let partidaEL = document.querySelector("#partida");
partidaEL.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
});
