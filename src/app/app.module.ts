import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimalComponent } from './components/animal/animal.component'

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AsociacionesComponent } from './components/asociaciones/asociaciones.component';
import { AsociacionComponent } from './components/asociacion/asociacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalesComponent,
    AnimalComponent,
    AsociacionesComponent,
    AsociacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
