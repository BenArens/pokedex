function getPokemonTemplate(index) {
    return `   <div onclick="openPokemon(${index})" class="preview-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png" alt="">
            <span class="pokemon-number">${generateNumber(index+1,4,'#')}</span>
            <span class="pokemon-name">${capitalizeFirstLetter(pokemons[index].name)}</span>
            <div class="pokemon-types">
               
            </div>
        </div>`
}

function getPokemonTypes(index, i) {
    return `
      <span class="type">${capitalizeFirstLetter(pokemons[index].types[i].type.name)}</span>
    `
}


function openPokemonDialog(index){
  return`           <div class="open-pokemon">

                <span class="arrow-left material-symbols-outlined">arrow_circle_left</span>
                <span class="arrow-right material-symbols-outlined">arrow_circle_right</span>

                <div class="card">
                    <div class="left-card">
                        <h2>${capitalizeFirstLetter(pokemons[index].name)}</h2>
                        <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png" alt="">
                        <div class="stats">
                            <div class="attribute-container">
                                <div class="attribute"><span>HP</span><span class="number">${pokemons[index].stats[0].base_stat}</span></div>
                                <div id="hp-line" class="line"></div>
                            </div>
                            <div class="attribute-container">
                                <div class="attribute"><span>Attack</span><span class="number">${pokemons[index].stats[1].base_stat}</span></div>
                                <div id="attack-line" class="line"></div>
                            </div>
                            <div class="attribute-container">
                                <div class="attribute"><span>Defence</span><span class="number">${pokemons[index].stats[2].base_stat}</span></div>
                                <div id="defence-line" class="line"></div>
                            </div>
                        </div>
                    </div>

                    <div class="right-card">
                        <p>
                            ${species[index].flavor_text_entries[11].flavor_text}
                        </p>

                        <div class="box">
                            <div class="left-box">
                                <div class="value-attribute">
                                    <h4>Height</h4>
                                    <span class="value">0,7 m</span>
                                </div>
                                <div class="value-attribute">
                                    <h4>Weight</h4>
                                    <span class="value">6,9 kg</span>
                                </div>
                                <div class="vlaue-attribute">
                                    <h4>Sex</h4>
                                    <div class="value">male/female</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="value-attribute">
                                    <h4>Height</h4>
                                    <span class="value">0,7 m</span>
                                </div>
                                <div class="value-attribute">
                                    <h4>Weight</h4>
                                    <span class="value">6,9 kg</span>
                                </div>
                                <div class="vlaue-attribute">
                                    <h4>Sex</h4>
                                    <div class="value">male/female</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>`
}