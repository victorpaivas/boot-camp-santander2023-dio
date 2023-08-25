const offset = 0
const limit = 5

const url = `https://pokeapi.co/api/v2/pokemon?${offset}&${limit}`

fetch(url).then(response => {
    console.log(response)
})