//menu principal

let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");

botaoJogarEl.addEventListener('click', () =>{
    opcoesEl.classList.remove("sumir");
    botaoJogarEl.innerHTML = "Selecione o modo de jogo:"
});

// menu de configurações

let configurarEl = document.querySelector("#configurar");
let menuEl = document.querySelector("#menu");
let configsEl = document.querySelector("#configs");

configurarEl.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
    configsEl.classList.remove("sumir");
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

botaoVoltarConfigEl.addEventListener('click', ()=>{
    menuEl.classList.remove("sumir");
    configsEl.classList.add("sumir");
})


// menu partida rápida

let botaoPartidaEL = document.querySelector("#botao_partida");
let partidaEl = document.querySelector("#partida");

botaoPartidaEL.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
    partidaEl.classList.remove("sumir");

});

let botaoVoltarPartidaEl = document.querySelector("#voltar_partida");

botaoVoltarPartidaEl.addEventListener('click', ()=>{
    menuEl.classList.remove("sumir");
    partidaEl.classList.add("sumir");
})

//menu torneio

let botaoVoltarTorneioEl = document.querySelector("#voltar_torneio")
let torneioEl = document.querySelector("#torneio");
let botaoTorneioEl = document.querySelector("#botao_torneio")

botaoTorneioEl.addEventListener('click', ()=>{
    menuEl.classList.add("sumir");
    torneioEl.classList.remove("sumir");
})
botaoVoltarTorneioEl.addEventListener('click', ()=>{
    menuEl.classList.remove("sumir");
    torneioEl.classList.add("sumir");
})