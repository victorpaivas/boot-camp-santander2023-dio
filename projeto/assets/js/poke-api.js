


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types =  types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json()) // Aqui (*)
        .then(convertPokeApiDetailToPokemon)
}
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // requisição feita da lista de pokemon
    return fetch(url)
        .then((response) => response.json())  // devolve um http response e converte para json
        .then((jsonBody) => jsonBody.results) // lista de pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // converte a lista de pokemon em uma nova lista de requisição com  uma lista com mais detalhes
        .then((detailRequest) => Promise.all(detailRequest)) // Obtive a lista de pokemon esperei que elas terminassem e quando eles finalizarem convertei em json Aqui(*)
        .then((pokemonDetails) => pokemonDetails) // lista de detalhes de pokemon em json
}
