import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AsociacionComponent } from './components/asociacion/asociacion.component';
import { AsociacionesComponent } from './components/asociaciones/asociaciones.component';
import { VeterinarioComponent } from './components/veterinario/veterinario.component';

const routes: Routes = [
  { path: 'animales', component: AnimalesComponent },
  { path: 'asociaciones', component: AsociacionesComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'animal/:id', component: AnimalComponent },
  { path: 'asociacion', component: AsociacionComponent },
  { path: 'asociacion/:id', component: AsociacionComponent },
  { path: 'veterinarios', component: VeterinarioComponent },
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
