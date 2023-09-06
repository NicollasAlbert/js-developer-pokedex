const pokemonDetails = document.querySelector('.pokemonDetails')
const buttonClose = document.querySelector('.button-close')
const openDialog = document.getElementById('openDialog')

function showPokemonDetails(pokemon) {
  return `
    <div class="${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
      <div>
        <ol class="types">
          ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
        </ol>
      </div>
    </div>
  
  `
}

pokemonList.onclick = open => {

  pokemonDetails.showModal();
}

buttonClose.onclick = () => {
  pokemonDetails.close();
}