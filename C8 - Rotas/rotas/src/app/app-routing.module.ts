import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
    {
      path: '',
      component: TitleComponent,
      pathMatch: 'full'
    },
    //ROTAS pai portifolio rota FILHOS OU CHILDREN id
    //    /portifolio  e /portifolio/1
    {
      path: 'portifolio',
      component: CardComponent,
      children: [
        {
          path: ':id',
          component: CardComponent,
          pathMatch: 'prefix'
        },
        {
          path: ':id/:token',
          component: CardComponent,
          pathMatch: 'prefix'
        },
      ]
    },

    { // rota coringa
      path: '**',
      redirectTo: '' // Posso deixar em branco e ele cai na página home ou poderia colocar em uma página 404 ou Not found.
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
