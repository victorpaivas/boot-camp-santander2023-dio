import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        other: {
          dream_world: {
            front_default: '',
          },
        },
      },
      types: [],
    };
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          types: res.types,
          sprites: {
            other: {
              dream_world: {
                front_default: res.sprites.other.dream_world.front_default,
              },
            },
          },
        };
      },
      error: (err) => console.log('not found'),
    });
  }
}
