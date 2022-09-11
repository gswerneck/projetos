// SELETORES +-+-+-+-+-+

const elementoCelulas = document.querySelectorAll('.celula');
const tabuleiro = document.getElementById('tabuleiro');
const mensagemFinal = document.getElementById('mensagem-final');
const resultado = document.getElementById('resultado');
const novoJogo = document.getElementById('novo-jogo');

// VARIÁVEIS +-+-+-+-+-+

const classeXis = 'xis';
const classeBola = 'bola';
const combinacoesDeVitoria = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // LINHAS
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // COLUNAS
  [0, 4, 8], [2, 4, 6]  //DIAGONAL
]
let rodadaBola;

// FUNÇÕES +-+-+-+-+-+

function partida() {
  rodadaBola = false;
  elementoCelulas.forEach(celula => {
    celula.classList.remove(classeXis);
    celula.classList.remove(classeBola);
    celula.removeEventListener('click', marcaCelula);
    celula.addEventListener('click', marcaCelula, {once:true})
  })
  hoverEffectTabuleiro();
  resultado.classList.remove('mostrar');
}

function marcaCelula(e) {
  const celula = e.target;
  const classeAtual = rodadaBola ? classeBola : classeXis;
  celula.classList.add(classeAtual);
  if (vitoria(classeAtual)) {
    fimDoJogo(false);
  } else if (empate()) {
    fimDoJogo(true);
  } else {
    trocaRodada();
    hoverEffectTabuleiro();
  }
}

function hoverEffectTabuleiro() {
  tabuleiro.classList.remove(classeBola);
  tabuleiro.classList.remove(classeXis);

  if (rodadaBola) {
    tabuleiro.classList.add(classeBola);
  } else {
    tabuleiro.classList.add(classeXis);
  }
}

function trocaRodada() {
  rodadaBola = !rodadaBola;
}

function vitoria(classeAtual) {
  return combinacoesDeVitoria.some(combinacao => {
    return combinacao.every(index => {
      return elementoCelulas[index].classList.contains(classeAtual);
    })
  })
}

function empate() {
  return [...elementoCelulas].every(celula => {
    return celula.classList.contains(classeXis) || celula.classList.contains(classeBola);
  })
}

function fimDoJogo(empate) {
  if (empate) {
    mensagemFinal.innerText = 'EMPATE';
  } else {
    mensagemFinal.innerText = `${rodadaBola ? "O" : "X"} Venceu!`;
  }
  resultado.classList.add('mostrar');
}

partida();
novoJogo.addEventListener('click', partida);