import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<router-outlet>
  <h1>Aula de Services</h1>
  <app-card></app-card>
</router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
}