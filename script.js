let pokemon = [];
let pokemons = [];
let species = [];
const BASE_URL = "https://pokeapi.co/api/v2";
const pokemonFolder = "/pokemon/"; 
const speciesFolder ="/pokemon-species/";

async function fetchData() {
    for (let index = 1; index <= 10; index++) {
        let response = await fetch(BASE_URL + pokemonFolder + index);
        pokemon = await response.json();
        let responseSpecies = await fetch(BASE_URL + speciesFolder + index);
        responseSpecies = await responseSpecies.json();
        pokemons.push(pokemon);
        species.push(responseSpecies); 
    }
    renderTemplate();
    renderPokemonsTypes();
    editTypeColor();
}


async function morePokemon(){
    let currentPokemens = pokemons.length
    for (let index = pokemons.length +1 ; index <= currentPokemens + 10; index++) {
        let response = await fetch(BASE_URL + pokemonFolder + index);
        pokemon = await response.json();
        let responseSpecies = await fetch(BASE_URL + speciesFolder + index);
        responseSpecies = await responseSpecies.json();
        pokemons.push(pokemon);
        species.push(responseSpecies); 
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

function openPokemon(index){
    let openDialog = document.getElementById("dialog");
    openDialog.innerHTML = openPokemonDialog(index); 

    noScroll(); 
    editLineStats(index);
    displayNone(index); 
}

function noScroll(){
    let myBody = document.querySelector("body");
    myBody.classList.toggle("noScroll");
}

function displayNone(){
    let myDialog = document.getElementById("dialog");
    if (myDialog.style.display === "none" || myDialog.style.display ===""){
        myDialog.style.display = "flex";
    } else {
        myDialog.style.display = "none"; 
    }
}


function editLineStats(index){
    let hpLine = document.getElementById('hp-line'); 
    let attackLine = document.getElementById('attack-line');
    let defenceLine = document.getElementById('defence-line'); 
   
    hpLine.style.width = pokemons[index].stats[0].base_stat*2 +"px"; 
    attackLine.style.width = pokemons[index].stats[1].base_stat*2 +"px"; 
    defenceLine.style.width = pokemons[index].stats[2].base_stat*2 +"px";
}




