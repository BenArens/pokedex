function getPokemonTemplate(index) {
    return `   <div class="preview-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png" alt="">
            <span class="pokemon-number">${generateNumber(index+1,4,'#')}</span>
            <span class="pokemon-name">${capitalizeFirstLetter(pokemons[index].name)}</span>
            <div class="pokemon-types">
               
            </div>
        </div>`
}

function getPokemonTypes(index, i) {
    return `
      <span class="type">${pokemons[index].types[i].type.name}</span>
    `
}