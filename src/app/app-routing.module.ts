import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimalesComponent } from './components/animales/animales.component';

const routes: Routes = [
  { path: 'animales', component: AnimalesComponent },
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
