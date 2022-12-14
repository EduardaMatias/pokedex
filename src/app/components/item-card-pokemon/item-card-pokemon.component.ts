import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card-pokemon',
  templateUrl: './item-card-pokemon.component.html',
  styleUrls: ['./item-card-pokemon.component.css'],
})
export class ItemCardPokemonComponent implements OnInit {
  @Input()
  pokemon: string = '';

  @Input()
  numero: number = 0;

  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

  constructor() {}

  ngOnInit(): void {}
}
