import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenPage } from './screen.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenPage,
    children:[
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
  }
    ]
  },
  {
    path:'',
    redirectTo:'/screen/first'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenPageRoutingModule {}
