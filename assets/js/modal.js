const pokemonDetails = document.querySelector('.pokemonDetails')
const buttonClose = document.querySelector('.buttonClose')
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
const selectedPokemon = event.target.closest('.pokemon');
const idPokemon = Number(selectedPokemon.attributes.id.value)
console.log(pokeApi.getPokemonDialog(idPokemon))

if(idPokemon) {
      
      pokeApi.getPokemonDialog(idPokemon).then(pokemon => {
      const dialogHtml = convertPokemonToDialog(pokemon);
      pokemonDetails.innerHTML = dialogHtml;
      openDialog.showModal();
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
  }
}

buttonClose.onclick = () => {
  openDialog.close();
}