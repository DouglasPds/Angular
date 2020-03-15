import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from '../painel/frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy{

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {    
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {
    if(this.resposta == this.rodadaFrase.frasePtBr){

      //Soma mais um e troca a frase da rodada 
      this.rodada += 1;  

      if(this.rodada === 4){
        this.encerrarJogo.emit("Vitória")
      }

      this.atualizaRodada();

      //Soma 25% a barra de prograsso
      this.progresso += 25
      
    }
    else {      
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
      }      
    }  
  }
  
  atualizaRodada(): void {
    //Atualiza a frase com base na posição rodada
    this.rodadaFrase = this.frases[this.rodada];

    //Limpar a variavel resposta
    this.resposta = ''
  }
}
