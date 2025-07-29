function getPokemonTemplate(index) {
    return `   <div class="preview-pokemon">
            <img src="${pokemons[index].sprites.front_default}" alt="">
            <span class="pokemon-number">#0001</span>
            <span class="pokemon-name">${pokemons[index].name}</span>
            <div class="pokemon-types">
               
            </div>
        </div>`
}

function getPokemonTypes(index) {
    return `
      <span class="type grass">${pokemons[index].types[0].type.name}</span>
      <span class="type poison">${pokemons[index].types[0].type.name}</span>
    `
}