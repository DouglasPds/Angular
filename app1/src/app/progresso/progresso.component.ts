import { Component, OnInit, Input } from '@angular/core';
import { PainelComponent } from '../painel/painel.component';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})

export class ProgressoComponent implements OnInit {

  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
