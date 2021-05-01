import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AsociacionesComponent } from './components/asociaciones/asociaciones.component';

const routes: Routes = [
  { path: 'animales', component: AnimalesComponent },
  { path: 'asociaciones', component: AsociacionesComponent },
  { path: 'nuevo', component: AnimalComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'animales' }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
