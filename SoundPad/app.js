const teclas = document.querySelectorAll(".tecla");

teclas.forEach(element => {
  element.addEventListener('click', (e) => {
    console.log((parseInt(element.dataset.key)));
    tocar(parseInt(element.dataset.key));
  });
});

function tocar(e) {
  let audio;
  let tecla;
  if(typeof(e) == 'number') {
    audio = document.querySelector(`audio[data-key="${e}"]`);
    tecla = this.document.querySelector(`.tecla[data-key="${e}"]`);
  } else {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    tecla = this.document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
    console.log(typeof(e.keyCode));
  }
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  tecla.classList.add('selecionada');
  this.setTimeout(function(){
    tecla.classList.remove('selecionada');
  },300);
}

window.addEventListener('keydown', tocar)