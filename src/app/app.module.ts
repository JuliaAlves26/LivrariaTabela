import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NovosLivrosComponent } from './novos-livros/novos-livros.component';
import { NovosEscritoresComponent } from './novos-escritores/novos-escritores.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    NovosLivrosComponent,
    NovosEscritoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
