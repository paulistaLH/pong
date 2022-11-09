//menu principal

let opcoesEl = document.querySelector("#opcoes");
let botaoJogarEl = document.querySelector("#jogar");
let tituloEl = document.querySelector("#titulo");
let configurarEl = document.querySelector("#configurar");

botaoJogarEl.addEventListener('click', () =>{
    opcoesEl.classList.remove("sumir");
    menuEl.classList.remove("sumir");
    tituloEl.classList.add("sumir");
    configurarEl.classList.remove("sumir");
;});

// menu de configurações


let menuEl = document.querySelector("#menu");
let configsEl = document.querySelector("#configs");

configurarEl.addEventListener('click', () =>{
    menuEl.classList.add("sumir");
    configsEl.classList.remove("sumir");
    configurarEl.classList.add("sumir");
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
    configurarEl.classList.remove("sumir");
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
});

//menu torneio

let botaoVoltarTorneioEl = document.querySelector("#voltar_torneio");
let torneioEl = document.querySelector("#torneio");
let botaoTorneioEl = document.querySelector("#botao_torneio");

botaoTorneioEl.addEventListener('click', ()=>{
    menuEl.classList.add("sumir");
    torneioEl.classList.remove("sumir");
});
botaoVoltarTorneioEl.addEventListener('click', ()=>{
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

botaoBrasilEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Brasil';
})
botaoArgentinaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Argentina';
})
botaoEspanhaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Espanha';
})
botaoFrancaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Franca';
})
botaoChinaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: China';
})
botaoJapaoEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Japao';
})
botaoEuaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Estados Unidos';
})
botaoAlemanhaEl.addEventListener('click', ()=>{
    selecionadoEl.innerHTML = 'Selecao escolhida: Alemanha';
})
