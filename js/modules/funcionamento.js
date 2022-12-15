export default class Funcionamento {
  constructor(functionamento, activeClass) {
    this.funcionamento = document.querySelector(functionamento);
    this.activeClass = activeClass;
  }

  dadosFunionamentos() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.dadosFunionamentos();
      this.dadosAgora();
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.ativaAberto();
    }
  }
}
