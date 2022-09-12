function checkSpeech(fala) {
  const verifica = fala.toLowerCase().split(' ');

  checkLength(verifica);
  var colorStyle = checkColor(verifica[5]);

  var areaModificada = verifica[3];
  checkArea(areaModificada, colorStyle);
}

function checkLength(fala) {
  if (fala.length == 6) {
    return true;
  } else {
    showError();
    return false;
  }
};

function checkArea(area, color) {
  switch (area) {
    case 'borda':
      box.style.border = `1px solid ${color}`;
      break;
    case 'fundo':
      box.style.backgroundColor = color;
      break;
    case 'fonte':
      box.style.color = color;
      break;
    default:
      return false
  }
}

function checkColor(color){

  switch (color) {
    case 'amarelo':
      return `var(--amarelo)`;
    case 'azul':
      return `var(--azul)`;
    case 'branco':
      return `var(branco)`;
    case 'cinza':
      return `var(--cinza)`;
    case 'laranja':
      return `var(--laranja)`;
    case 'rosa':
      return `var(--rosa)`;
    case 'verde':
      return `var(--verde)`;
    case 'vermelho':
      return `var(--vermelho)`;
    default:
      showError();
      return false
  }
}

function showError(){
  error.style.display = 'block';
  error.innerHTML = `Verifique se a frase está correta e dentro do padrão esperado`;
}