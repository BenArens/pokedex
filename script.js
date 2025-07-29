let pokemon = [];
let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function fetchData() {
    for (let index = 1; index <= 50; index++) {
        let response = await fetch(BASE_URL + index);
        pokemon = await response.json();
        pokemons.push(pokemon);
    }
    console.log(pokemons);
    renderTemplate();
}

function renderTemplate() {
    let contentRef = document.getElementById('pokemon');
    contentRef.innerHTML = "";
    for (let index = 0; index < pokemons.length; index++) {
        contentRef.innerHTML += getPokemonTemplate(index);
        editTypes(index)
    }
}

function editTypes(index) {
    let typeRef = document.getElementsByClassName("pokemon-types");
    let thisPokemon = typeRef[index];


    for (let i = 0; i < pokemons[index].types.length; i++) {
        //for schleife weil unterschiedlich viele Types  
        typeRef[index].innerHTML += getPokemonTypes(index, i);

        editTypeColor(index);
    }

}


function editTypeColor(index) {
    let pokemonTypeRef = document.getElementsByClassName("type");
    let thisType = pokemonTypeRef[index];
    console.log(thisType.innerText);

    switch (thisType.innerText){
        case "poison": 
        thisType.classList.add("poison");
        break;
        case "grass": 
        thisType.classList.add("grass");
        break; 
        case "fire": 
        thisType.classList.add("fire");
        break; 
        case "flying": 
        thisType.classList.add("flying"); 
        case "water": 
        thisType.classList.add("water"); 
        break;
        case "bug": 
        thisType.classList.add("bug"); 
        break;
        case "normal":
        thisType.classList.add("normal");
        break; 
        case "electric": 
        thisType.classList.add("electric"); 
        break; 
        case "ground": 
        thisType.classList.add("ground");
        default: 
        console.log("hallo Welt");
        break; 
    }
        



    // if (thisType.innerText == "poison") {
    //     thisType.classList.add("poison");
    // } else if (thisType.innerText == "grass"){
    //     thisType.classList.add("grass"); 
    // }

}