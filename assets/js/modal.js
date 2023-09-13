const pokemonDetails = document.querySelector('.pokemonDetails')
const buttonClose = document.querySelector('.buttonClose')
const openDialog = document.getElementById('openDialog')


function convertPokemonToDialog(pokemon) {
  return `
    <div class="dialogDetail ${pokemon.type}">
      <div class="header">
        <span>#${pokemon.number}</span>
        <span>${pokemon.name}</span>
      </div>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
      <div class="info">
      <span>Weight: ${pokemon.weight}</span>
      <span>Height: ${pokemon.height}</span>
      </div>
      <div class="abilitiesDetails">
      <span>ABILITIES</span>
        <ol class="abilities">
          ${pokemon.abilities.map((ability) => `<li class="abilitie">${ability}</li>`).join('')}
        </ol>
      </div>
    </div>
  
   `
}

pokemonList.onclick = (event) => {
const selectedPokemon = event.target.closest('.pokemon');
const idPokemon = Number(selectedPokemon.attributes.id.value)

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