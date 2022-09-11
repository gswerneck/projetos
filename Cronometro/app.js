const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');
const iniciarBtn = document.getElementById('iniciarBtn');
const pararBtn = document.getElementById('pararBtn');
const resetarBtn = document.getElementById('resetarBtn');
var intervalo;
var sec = 0;
var mil = 0;
var min = 0;

iniciarBtn.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = setInterval(iniciaCronometro, 10);
});

pararBtn.addEventListener("click", () => {
  clearInterval(intervalo);
})

resetarBtn.addEventListener('click', () => {
  clearInterval(intervalo);
  mil = "00";
  sec = "00";
  milesimos.innerHTML = mil;
  segundos.innerHTML = sec;
});

function iniciaCronometro() {
  mil++;
  if (mil <= 9){
    milesimos.innerHTML = `0${mil}`;
  };
  if (mil > 9) {
    milesimos.innerHTML = mil;
  };
  if (mil > 99) {
    sec++;
    if (sec <= 9) {
      segundos.innerHTML = `0${sec}`;
    };
    if (sec > 9) {
      segundos.innerHTML = sec;
    };
    if (sec >= 59) {
      min++;
      if (min <= 9) {
        minutos.innerHTML = `0${min}`;
      };
      if (min > 9) {
        minutos.innerHTML = min;
      };
      sec = 0;
    }
    mil = 0;
  }
}
