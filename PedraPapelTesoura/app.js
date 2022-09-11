const escolhas = document.querySelectorAll('[data-selection]');
const colunaFinal = document.querySelector('[data-final-column');
const placarComputador = document.querySelector('[data-computer-score');
const placarJogador = document.querySelector('[data-player-score');

let ESCOLHAS = [
  {
    "nome": "pedra",
    "vence": "tesoura",
    "simbolo": "✊"
  },
  {
    "nome": "papel",
    "vence": "pedra",
    "simbolo": "✋"
  },
  {
    "nome": "tesoura",
    "vence": "papel",
    "simbolo": "✌️"
  }
];

// EM SERVIDOR: 
// fetch('escolhas.json', { method: 'GET' })
// .then(response => response.json())
// .then(texto => ESCOLHAS = texto )
// .catch(err => console.log(err.message))


escolhas.forEach((escolha) =>{
  escolha.addEventListener('click', (e) => {
    const escolhaNome = escolha.dataset.selection;
    const selecao = suaSelecao(escolhaNome);
    const escolhaComputador = escolhaAleatoria();
    resultado(escolhaComputador, selecao);
  });
})

function suaSelecao (selection) {
  let selecao = [];
  ESCOLHAS.forEach((escolha) => {   
    if (escolha.nome === selection){
      selecao = escolha;
    }
  })
  return selecao;
}

function escolhaAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * ESCOLHAS.length);
  return ESCOLHAS[indiceAleatorio];
}

function resultado(escolhaComputador, selecao){
  if(escolhaComputador.vence == selecao.nome) {
    adicionaDiv(escolhaComputador, true);
    adicionaDiv(selecao, false);
    marcaPlacar(placarComputador);
  } else if (selecao.vence == escolhaComputador.nome){
    adicionaDiv(escolhaComputador, false);
    adicionaDiv(selecao, true);
    marcaPlacar(placarJogador);
  }
  else {
    adicionaDiv(escolhaComputador, false);
    adicionaDiv(selecao, false);
  }
}

function adicionaDiv(elemento, vencedor) {
  const div = document.createElement('div');
  div.innerText = elemento.simbolo;
  div.classList.add('resultado-final');
  if (vencedor){
    div.classList.add('vencedor');
  }
  colunaFinal.after(div);
}


function marcaPlacar (player){
  player.innerText = parseInt(player.innerText) + 1;
}