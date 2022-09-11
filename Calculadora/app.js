class Calculadora {
  constructor(textoValorAtual, textoValorAnterior) {
    this.textoValorAtual = textoValorAtual;
    this.textoValorAnterior = textoValorAnterior;
    this.limpar()
  };

  limpar(){
    this.valorAtual = '';
    this.valorAnterior = '';
    this.operacao = undefined;
    this.atualiza();
  };

  numeroAppend(numero){
    if(numero === ',' && this.valorAtual.includes(numero)) {
      return
    }
    this.valorAtual = this.valorAtual.toString() + numero.toString();
    this.atualiza();
  }

  deletar(){
    this.valorAtual = this.valorAtual.toString().slice(0, -1);
    this.atualiza();
  };

  operadores(operador){
    if (this.valorAtual === '') return;
    if (this.valorAnterior !== '') {
      this.calcula();
    }
      this.operador = operador;
    this.valorAnterior = `${this.valorAtual} ${this.operador}`;
    this.valorAtual = '';
    this.atualiza();
  };
  calcula(){
    let resultado;
    const anterior = parseFloat(this.valorAnterior.replace(',', '.'));
    const atual = parseFloat(this.valorAtual.replace(',', '.'));
    if (isNaN(anterior) || isNaN(atual)) return;
    switch(this.operador) {
      case '+':
        resultado = anterior + atual;
        break;
      case '/':
        resultado = anterior / atual;
        break;
      case '*':
        resultado = anterior * atual;
        break;
      case '-':
        resultado = anterior - atual;
        break;
      default: return;
    }
    this.valorAtual = resultado;
    this.valorAnterior = '';
    this.operador = undefined;
    this.atualiza();
  };

  atualiza(){
    this.textoValorAtual.innerHTML = this.valorAtual;
    this.textoValorAnterior.innerHTML = this.valorAnterior;
  }
}

// ------- SELETORES

const todosNumeros = document.querySelectorAll('[data-number]');
const todosOperadores = document.querySelectorAll('[data-operator]');
const igual = document.querySelector('[data-equal]');
const limpar = document.querySelector('[data-clear]');
const deletar = document.querySelector('[data-delete]');
const textoValorAtual = document.querySelector('[data-current-operand]');
const textoValorAnterior = document.querySelector('[data-previous-operand]');

const calculadora = new Calculadora(textoValorAtual, textoValorAnterior)
// ------- EVENTOS

todosNumeros.forEach(numero => {
  numero.addEventListener('click', () => {
    calculadora.numeroAppend(numero.innerHTML);
    calculadora.atualiza();
  });
});

todosOperadores.forEach(operador => {
  operador.addEventListener('click', () => {
    calculadora.operadores(operador.innerHTML);
  });
});

limpar.addEventListener('click', () => {
  calculadora.limpar();
})

igual.addEventListener('click', () => {
  calculadora.calcula();
})

deletar.addEventListener('click', () => {
  calculadora.deletar();
});