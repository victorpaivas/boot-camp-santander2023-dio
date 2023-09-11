import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = "MEU CARRINHO";
  buttonText: string = 'ACESSAR';
  buttonTextArr: string[] = ['Comprar', 'Vender'];
  buttonObject = {
    label: 'Adicionar ao Carrinho',
  };

  getAlert(num: number) {
    alert(num);
  }
}
