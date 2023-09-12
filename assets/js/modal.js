const pokemonDetails = document.querySelector('.pokemonDetails')
const buttonClose = document.querySelector('.button-close')
const openDialog = document.getElementById('openDialog')


function convertPokemonToDialog(pokemon) {
  return `
    <div class="${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
      <div>
      <span class="number">Weight: ${pokemon.weight}</span>
      <span class="name"> Height: ${pokemon.height}</span>
        <ol class="types">
          ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
        </ol>
      </div>
    </div>
  
  `
}

pokemonList.onclick = (event) => {
//     console.log(pokeApi.getPokemons(offset, limit).then((pokemons) => {
//     const newHtml = pokemons.map(convertPokemonToDialog).join('')
//     pokemonDetails.innerHTML += newHtml
// }))
const selectedPokemon = event.target.closest('.pokemon');
console.log(selectedPokemon.attributes.id)

if(selectedPokemon) {
  const idPokemon = document.getElementById(`"${event.number}"`)
  console.log(event.target)
  console.log(idPokemon);
    openDialog.showModal();

  }
}

buttonClose.onclick = () => {
  openDialog.close();
}