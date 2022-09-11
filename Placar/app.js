const diminuir = document.querySelectorAll('#diminuir');
const zerar = document.querySelectorAll('#zerar');
const aumentar = document.querySelectorAll('#aumentar');
const botao = document.querySelectorAll('#btn');
const contador = document.querySelectorAll('#counter')

botao.forEach(btn => {
  btn.addEventListener('click', function(e){
    operacao(e.target.dataset.side, e.target.dataset.value)
  })}
)

function operacao (side, operator) {
  let counter
  contador.forEach(cont => {
    if(cont.dataset.side == side){
      counter = cont;
    }
  })

  switch(operator){
    case 'add':
      counter.innerText = parseInt(counter.innerText) + 1;
      break;
    case 'reset':
      counter.innerText = 0;
      break;
    case 'remove':
      counter.innerText = parseInt(counter.innerText) - 1;
      break;
    default:
      console.log('erro operacional');  
  }

}
