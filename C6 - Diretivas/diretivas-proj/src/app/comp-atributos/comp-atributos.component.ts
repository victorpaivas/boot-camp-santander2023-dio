import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "enable"
  corFundo:string = "red"
  corFonte: string = 'white'
  item: string = ""
  lista:string [] = []
  isEnableBlock: boolean = true

  constructor() { }

  adicionarLista() {
    this.lista.push(this.item)
  }
  removerLista() {
    this.lista.pop()
  }

  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo == "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

}
