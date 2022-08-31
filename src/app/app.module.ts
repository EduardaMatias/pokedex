import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardPokemonComponent } from './components/item-card-pokemon/item-card-pokemon.component';
import { ListaCardPokemonComponent } from './components/lista-card-pokemon/lista-card-pokemon.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardPokemonComponent,
    ListaCardPokemonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
