import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }

  async getAll() {
    const getAll = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=152')
      .toPromise();

    this.pokemons = getAll.results;
  }
}
