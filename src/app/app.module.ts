import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './services/servicio.service';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    HomeComponent,
    NavbarComponent,
    AgregarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
