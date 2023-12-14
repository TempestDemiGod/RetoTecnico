import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './home/paises/paises.component';
import { Vista01Component } from './home/vista01/vista01.component';
import { Vista02Component } from './home/vista02/vista02.component';

const routes: Routes = [{ path: '', component: PaisesComponent },
{ path: 'vista01', component: Vista01Component }
,{ path: 'vista02', component: Vista02Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
