const box = document.getElementById('box');
const speech = document.getElementById('speech');
const error = document.getElementById('error');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

box.addEventListener('click', (e) => {
  error.style.display = 'none';
  speech.style.display = 'none';
  recognition.start();
  recognition.addEventListener('result', onSpeak)
});

function onSpeak(e) {
  var fala = e.results[0][0].transcript;
  showSpeech(fala);
  checkSpeech(fala)
}

function showSpeech(fala) {
  speech.style.display = 'flex';
  speech.innerHTML = `
  <p>Você disse:</p>
  <span class="frase">${fala}</span>
  `;
}