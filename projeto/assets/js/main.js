
const pokemonList = document.querySelector('#pokemonList');
const loadMoreButton = document.querySelector('#loadMoreButton')

const maxLimit = 151;
const limit = 5;
let offset = 0;


function loadPokemonItens(offset, limit) {
    // Consumo de API
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        // junta todos os elementos de string com concatenação com o método join()
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
               
                <span class="xp-detail">XP ${pokemon.xp}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}                      
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                        
                </div> 
                </li> `  ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdLimitAddToNextPage = offset + limit
    if (qtdLimitAddToNextPage >= maxLimit) {
        const newLimit = maxLimit - offset;
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})





