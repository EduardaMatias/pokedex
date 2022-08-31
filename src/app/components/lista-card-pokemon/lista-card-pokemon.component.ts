import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-card-pokemon',
  templateUrl: './lista-card-pokemon.component.html',
  styleUrls: ['./lista-card-pokemon.component.css'],
})
export class ListaCardPokemonComponent implements OnInit {
  constructor(public pokemonService: PokemonService) {}
  ngOnInit(): void {}
}
