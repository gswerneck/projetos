const imagem = document.getElementById('imagem');
const titulo = document.getElementById('titulo');
const modelo = document.getElementById('modelo');
const descricao = document.getElementById('descricao');
const proxBtn = document.getElementById('proxBtn');
const antBtn = document.getElementById('antBtn');
const aleatorioBtn = document.getElementById('randomBtn');

const produtos = [
  {
    "id": 1,
    "titulo": "Air Jordan 1 Low",
    "modelo": "Travis Scott - Fragment",
    "texto": "O Fragment Design x Travis Scott x Air Jordan 1 Retro Low oferece uma colaboração que combina detalhes de assinatura associados com a marca influente de La Flame e Hiroshi Fujiwara. A paleta de cores é uma volta de modelos Fragment anteriores, destacada por uma parte superior de couro branco com sobreposições contrastantes em preto e azul royal. O Swoosh invertido e superdimensionado de Scott decora o painel lateral, enquanto um Swoosh preto padrão é costurado no lado oposto. A marca Cactus Jack fica na aba do do sneaker esquerdo, junto com o logotipo do rosto sorridente do rapper estampado logo abaixo.",
    "imagem":"assets/fragment-low-travis.png"
  },
  {
    "id": 2,
    "titulo": "Air Jordan 1 Low",
    "modelo": "Travis Scott - Mocha",
    "texto": "O Air Jordan 1 Low Retro OG SP Travis Scott é a versão low do AJ1 High Travis Scott. Nesta edição Low, a Air Jordan 1 manteve partes marrons na base, acompanhados por camurça preta. O Swoosh preto caindo na sola dá lugar a um Swoosh branco, também invertido. Por dentro, nada muda. Para a marca, o logotipo 'Cactus Jack' na língua e no calcanhar permanece presente.",
    "imagem":"assets/mocha-low-travis.png"
  },
  {
    "id": 3,
    "titulo": "Air Jordan 1 Low",
    "modelo": "Travis Scott - Reverse Mocha",
    "texto": "Com referência ao Air Jordan 1 High Travis Scott Mocha, o Air Jordan 1 Low Travis Scott Reverse Mocha oferece uma paleta semelhante de Mocha e off-white, mas em um bloqueio de cores de estilo reverso. Sua parte superior é construída com uma base Mocha Durabuck, sobreposições de couro branco e Swooshes reversos exclusivos. Toques de vermelho no bordado do calcanhar com o logotipo Wings e na etiqueta da língua tecida dão um contraste nítido ao visual neutro do design. A partir daí, uma sola Air amarelada adiciona uma sensação vintage.",
    "imagem":"assets/reverse-mocha.png"
  },
  {
    "id": 4,
    "titulo": "Nike Dunk Low",
    "modelo": "Travis Scott",
    "texto": "A Nike, em mais uma parceria de sucesso com um dos maiores rappers do cenário mundial, Travis Scott, lança o primeiro tênis para os amantes do skate com assinatura do músico americano para a linha Nike Dunk Low características do sneaker Nike SB Dunk Low Travis Scott. Composto pela parte superior de camurça, com aplicações de lona estampada e flanela xadrez, o Nike SB Dunk Low Travis Scott revela uma gravura de elefante conforme a gravura estampada em azul-marinho se desgasta.",
    "imagem":"assets/dunk-low-travis.png"
  },
  {
    "id": 5,
    "titulo": "Nike Air Force 1 Low",
    "modelo": "Travis Scott",
    "texto": "O novo Air Force 1 do rapper Travis Scott remetem à sua vida em Houston prestando homenagem à comunidade que ajudou a cultivar sua agitação e a criatividade inspirada em suas viagens à Astroworld. O sneaker é uma colcha de retalhos de elementos, refletindo as coisas de sua educação - como a durabilidade das roupas de trabalho tradicionais, tons naturais associados a estar ao ar livre e às vibrações surreais da Astroworld.",
    "imagem":"assets/travis-force.png"
  }
];

let produtoAtual = 0

window.addEventListener('DOMContentLoaded', function(){
  mostraProduto(produtoAtual);
});

function mostraProduto(prod) {
  const item = produtos[prod];
  imagem.src = item.imagem;
  titulo.textContent = item.titulo;
  modelo.textContent = item.modelo;
  descricao.textContent = item.texto;
}

proxBtn.addEventListener('click', function() {
  if(produtoAtual >= (produtos.length - 1)){
    produtoAtual = 0;
  } else{
    produtoAtual++;
  }
  mostraProduto(produtoAtual);
})

antBtn.addEventListener('click', function(){
  if(produtoAtual <= 0){
    produtoAtual = (produtos.length - 1);
  } else{
    produtoAtual--;
  }
  mostraProduto(produtoAtual);
})

aleatorioBtn.addEventListener('click', function(){
  let numero = Math.floor(Math.random()*5);
  console.log(numero);
  produtoAtual = numero;
  mostraProduto(produtoAtual)
})

