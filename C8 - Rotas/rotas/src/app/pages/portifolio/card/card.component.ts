import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(
    private activeRoute: ActivatedRoute,
    //REDIRECIONAMENTO POR COMPONENTE ELE IMPORTA LÁ EM CIMA DO ROUTER
    private navegador: Router) {

    // essa função é para recuperar esse link http://localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    // Caso tenha adiciona rotas filhas e não estou conseguindo pegar os parâmetros preciso usar o firstChield?
  this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )


    //queryParams  http://localhost:4200/portifolio/1{?name=victor&token=123}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  //  REDIRECIONAMENTO POR COMPONENTE
  ngOnInit(): void {
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
