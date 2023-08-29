
const pokemonList = document.querySelector('#pokemonList');
const loadMoreButton = document.querySelector('#loadMoreButton')

// Variáveis de Controle
const maxLimit = 151;
const limit = 8;
let offset = 0;

// Função para carregar os pokemons iniciais
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

                        <div class="skill">
                        <p>Card Skill: <br>${pokemon.stats.join('<br> ')} </p>  
                        </div>                
                    </ol>
                    <div class="zoom">
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}" class="img-responsive">
                    </div>
                        
                </div> 
                </li> `  ).join('')
        pokemonList.innerHTML += newHtml
    })
}

// Chamada da função para carregar os pokemons iniciais
loadPokemonItens(offset, limit)

// Botão para carregar mais pokemons chamando de 8 em 8
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




