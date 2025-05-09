async function BuscarPokemon(id) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    if (resposta.status === 200) {
        const dados = await resposta.json()
        return dados
    }
}


const campoNome = document.getElementById("pokemon-nome")
const campoId = document.getElementById("pokemon-id")
const campoImg = document.getElementById("pokemon-img")
const campoRegiao = document.getElementById("pokemon-regiao")
const campoCheckbox = document.getElementById("botao-checkbox")


function mostrarPokemon() {
    campoNome.innerHTML = "Loading..."
    campoImg.src = "./src/assets/Loading.gif"
    const campoPesquisa = document.getElementById("pesquisa")
    BuscarPokemon(campoPesquisa.value.toLowerCase())
    .then(pokemon => {
        if (pokemon) {
            campoNome.innerHTML = `${pokemon.name.toUpperCase()} <span id="pokemon-id">- ${pokemon.id}`
            if (campoCheckbox.checked == true) {
                campoImg.src = pokemon.sprites["front_shiny"]
            } else {
                campoImg.src = pokemon.sprites["front_default"]
            }
        } else {
            campoNome.innerHTML = "Not found :("
            campoImg.src = "./src/assets/Error.png"
        }
    })
    campoPesquisa.value = ""
}
