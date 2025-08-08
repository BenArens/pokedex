let pokemon = [];
let pokemons = [];
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

async function fetchData() {
    for (let index = 1; index <= 10; index++) {
        let response = await fetch(BASE_URL + index);
        pokemon = await response.json();
        pokemons.push(pokemon);
    }
    renderTemplate();
    renderPokemonsTypes();
    editTypeColor();
}


async function morePokemon(){
    let currentPokemens = pokemons.length
    for (let index = pokemons.length +1 ; index <= currentPokemens + 10; index++) {
        let response = await fetch(BASE_URL + index);
        pokemon = await response.json();
        pokemons.push(pokemon);
    }
    renderTemplate();
    renderPokemonsTypes();
    editTypeColor();
}




function renderTemplate() {
    let contentRef = document.getElementById('pokemon');
    contentRef.innerHTML = "";
    for (let index = 0; index < pokemons.length; index++) {
        contentRef.innerHTML += getPokemonTemplate(index);
    }
}


function renderPokemonsTypes() {
    for (let index = 0; index < pokemons.length; index++) {
        editTypes(index);
    }
}



function editTypes(index) {
    let typeRef = document.getElementsByClassName("pokemon-types");
    let thisPokemon = pokemons[index];

    for (let i = 0; i < thisPokemon.types.length; i++) {
        typeRef[index].innerHTML += getPokemonTypes(index, i);
    }
}


function editTypeColor() {
    let pokemonTypeRef = document.getElementsByClassName("type");

    for (let i = 0; i < pokemonTypeRef.length; i++) {
        let thisType = pokemonTypeRef[i];
        console.log(thisType.innerText);


        switch (thisType.innerText) {
            case "Poison":
                thisType.classList.add("poison");
                break;
            case "Grass":
                thisType.classList.add("grass");
                break;
            case "Fire":
                thisType.classList.add("fire");
                break;
            case "Flying":
                thisType.classList.add("flying");
                break;
            case "Water":
                thisType.classList.add("water");
                break;
            case "Bug":
                thisType.classList.add("bug");
                break;
            case "Normal":
                thisType.classList.add("normal");
                break;
            case "Electric":
                thisType.classList.add("electric");
                break;
            case "Ground":
                thisType.classList.add("ground");
                break;
            default:
                console.log("hallo Welt");
                break;
        }
    }
}

//setzt "4 nullen" vor die Nummer
function generateNumber(index, length = 4, prefix = ''){
    return prefix + index.toString().padStart(length, '0');
}

//Macht den ersten Buchstaben groß
function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function openPokemon(){
    noScroll(); 
    displayNone(); 
}

function noScroll(){
    let myBody = document.querySelector("body");
    myBody.classList.toggle("noScroll");
}

function displayNone(){
    let myDialog = document.getElementById("dialog");
    myDialog.classList.toggle("displayNone"); 
}





