const anoNovo = new Date('January 01, 2023 00:00:00').getTime();
const diasText = document.getElementById('dias');
const horasText = document.getElementById('horas');
const minutosText = document.getElementById('minutos');
const segundosText = document.getElementById('segundos');

// Convertendo
const segundos = 1000;
const minutos = 60 * segundos;
const horas = 60 * minutos ;
const dias = 24 * horas;

intervalo = setInterval(contador, 1000)

function contador(){
  var agora = new Date().getTime();
  var tempoRestante = anoNovo - agora;

  let diasRestantes = Math.floor(tempoRestante / dias);
  diasRestantes = diasRestantes < 10 ? "0" + diasRestantes : diasRestantes
  let horasRestantes = Math.floor((tempoRestante % dias) / horas);
  horasRestantes = horasRestantes < 10 ? "0" + horasRestantes : horasRestantes
  let minutosRestantes = Math.floor((tempoRestante % horas)  / minutos);
  minutosRestantes = minutosRestantes < 10 ? "0" + minutosRestantes : minutosRestantes
  let segundosRestantes = Math.floor((tempoRestante % minutos) / segundos);
  segundosRestantes = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes

  diasText.innerText = diasRestantes;
  horasText.innerText = horasRestantes;
  minutosText.innerText = minutosRestantes;
  segundosText.innerText = segundosRestantes;
}