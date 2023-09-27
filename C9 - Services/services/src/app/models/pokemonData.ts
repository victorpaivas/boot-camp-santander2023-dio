export type PokemonData = {
  name: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: {};
      };
    };
  };
};
