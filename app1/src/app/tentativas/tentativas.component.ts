import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoVazio: string = "../../assets/coracao_vazio.png";
  public coracaoCheio: string = "../../assets/coracao_cheio.png";

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ] 

  constructor() {    
  }

  ngOnChanges() {

    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice -1].cheio = false
    }

    // if(this.tentativas === 3){
    //   this.coracoes = [new Coracao(true), new Coracao(true),new Coracao(true)]
    // } else if(this.tentativas == 2){
    //   this.coracoes = [new Coracao(false), new Coracao(true),new Coracao(true)]
    // } else if(this.tentativas == 1){
    //   this.coracoes = [new Coracao(false), new Coracao(false),new Coracao(true)]
    // } else if(this.tentativas == 0){
    //   this.coracoes = [new Coracao(false), new Coracao(false),new Coracao(false)]
    // }

  }

  ngOnInit() {    
  }

}
