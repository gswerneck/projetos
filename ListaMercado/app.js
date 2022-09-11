const product = document.getElementById('product');
const amount = document.getElementById('amount');
const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const itens = JSON.parse(localStorage.getItem("itens")) || [];
// const deleteBtn = document.getElementById('deleteBtn');
// const checkBtn = document.getElementById('checkBtn');

itens.forEach( (element) => {
  criaElemento(element)
})

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  product.value = product.value.trim().toLowerCase();

  const existe = itens.find(element => element.produto === product.value);

  const itemAtual = {
    "produto": product.value,
    "quantidade": amount.value
  };

  if(existe) {
    itemAtual.id = existe.id;
    atualizaElemento(itemAtual);
    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
  } else {
    itemAtual.id = itens[itens.length-1] ? (itens[itens.length-1]).id + 1 : 0;
    criaElemento(itemAtual);
    itens.push(itemAtual);
  };

  localStorage.setItem("itens", JSON.stringify(itens));

  product.value = "";
  amount.value = "";
});

function criaElemento(item) {
  const novoItem = document.createElement('li');
  const qtdItem = document.createElement('strong');
  qtdItem.innerHTML = item.quantidade;
  qtdItem.dataset.id = item.id
  novoItem.appendChild(qtdItem);
  novoItem.innerHTML += item.produto;
  novoItem.appendChild(deletaItem(item.id));
  list.appendChild(novoItem);
}

function atualizaElemento(item) {
  document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function deletaItem(id) {
  const deleteItem = document.createElement("button");
  deleteItem.addEventListener('click', function() {
    deletaElemento(this.parentElement, id)
  });
  const deleteIcon = document.createElement('i');
  deleteItem.classList.add("btn-acoes");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteItem.appendChild(deleteIcon);
  return deleteItem;
}

function deletaElemento(tag, id) {
  tag.remove();
  itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
  console.log(itens);
  localStorage.setItem("itens", JSON.stringify(itens));
}