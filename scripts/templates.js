function getPokemonTemplate(index) {
    return `   <div onclick="openPokemon(${index})" class="preview-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="">
            <span class="pokemon-number">${generateNumber(index + 1, 4, '#')}</span>
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


function openPokemonDialog(index) {
    return `           <div class="open-pokemon">

                <span onclick="backward(${index})" class="arrow-left material-symbols-outlined">arrow_circle_left</span>
                <span onclick="forward(${index})" class="arrow-right material-symbols-outlined">arrow_circle_right</span>

                <div class="card">
                    <div class="left-card">
                        <h2>${capitalizeFirstLetter(pokemons[index].name)}</h2>
                        <img class="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="">
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
                <div id="evolutionsChain" class="evolution-chain">
                  
                </div>
            </div>`
}

function getEvolutionChainTemplate() {
    return `  <h2>Evolution Chain</h2>
    <div class="evolution-container">
                    <div class="evolution-pokemon">
                        <img class="evolution-img" src="${entwicklungen[0].img_url}" alt="">
                        <h3 class="evolution-name">${capitalizeFirstLetter(entwicklungen[0].name)}</h3>
                    </div>
                    <div class="evolution-pokemon">
                        <img class="evolution-img" src="${entwicklungen[1].img_url}" alt="">
                        <h3 class="evolution-name">${capitalizeFirstLetter(entwicklungen[1].name)}</h3>
                    </div>
                    <div class="evolution-pokemon">
                        <img class="evolution-img" src="${entwicklungen[2].img_url}" alt="">
                        <h3 class="evolution-name">${capitalizeFirstLetter(entwicklungen[2].name)}</h3>
                    </div>
    </div>
`
}

function getWorkplaceTemplate() {
    return ` <div id="pokemon" class="pokemons">
            <div class="mySpinner"><img src="./img/pokespinner.gif" alt="pokespinner" class="pokespinner"></div><div id="pokemon" class="pokemons"></div>
        </div>
        <button class="myButton" onclick="morePokemon()"><img class="pokeball" src="./img/pokeball.png" alt=""> more
            Pokémons
        </button>


        <div id="dialog" class="openPokemon-dialog">

        </div>`
}