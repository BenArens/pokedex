let pokemons = [];
let oriPokemons= pokemons;
let species = [];
let evolutions = [];
const BASE_URL = "https://pokeapi.co/api/v2/";
const pokemonFolder = "pokemon/";
const speciesFolder = "pokemon-species/";
const evolutionChain = "evolution-chain/";

async function fetchData() {
    for (let index = 1; index <= 10; index++) {
        await fetchPokemon(index);
    }
    fetchSpecies();
    getWorkplace();
    setTimeout(renderFunction,1000);
}

async function fetchPokemon(index) {
    let responsePokemon = await fetch(BASE_URL + pokemonFolder + index);
    responsePokemon = await responsePokemon.json();
    pokemons.push(responsePokemon);
}

async function fetchSpecies() {
    for (let index = 0; index < pokemons.length; index++) {
        let responseSpecies = await fetch (pokemons[index].species.url);
        responseSpecies = await responseSpecies.json();
        species.push(responseSpecies);
    }
}

function renderFunction(){
    renderTemplate();
    renderPokemonsTypes();
    editTypeColor();
}

async function morePokemon() {
    // getWorkplace();
    getSpinner(); 
    let currentPokemens = pokemons.length
    for (let index = pokemons.length + 1; index <= currentPokemens + 10; index++) {
        let response = await fetch(BASE_URL + pokemonFolder + index);
        pokemon = await response.json();
        let responseSpecies = await fetch(BASE_URL + speciesFolder + index);
        responseSpecies = await responseSpecies.json();
        pokemons.push(pokemon);
        species.push(responseSpecies);
    }
    oriPokemons = pokemons;
    setTimeout(renderFunction,500);
    getButton(); 
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
function generateNumber(index, length = 4, prefix = '') {
    return prefix + index.toString().padStart(length, '0');
}

//Macht den ersten Buchstaben groß
function capitalizeFirstLetter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

function openPokemon(index) {
    changePokemon(index);
    noScroll();
    editLineStats(index);
    fetchEvolution(index)
    displayNone(index);
    arrowDisplayNone();
    toggleSearchBox()
}

function noScroll() {
    let myBody = document.querySelector("body");
    myBody.classList.toggle("noScroll");
}

function displayNone() {
    let myDialog = document.getElementById("dialog");
    if (myDialog.style.display === "none" || myDialog.style.display === "") {
        myDialog.style.display = "flex";
    } else {
        myDialog.style.display = "none";
    }
}

function closePreview() {
    noScroll();
    displayNone();
    toggleSearchBox();
}

function editLineStats(index) {
    let hpLine = document.getElementById('hp-line');
    let attackLine = document.getElementById('attack-line');
    let defenceLine = document.getElementById('defence-line');

    hpLine.style.width = pokemons[index].stats[0].base_stat * 2 + "px";
    attackLine.style.width = pokemons[index].stats[1].base_stat * 2 + "px";
    defenceLine.style.width = pokemons[index].stats[2].base_stat * 2 + "px";
}

function changePokemon(index) {
    let openDialog = document.getElementById("dialog");
    openDialog.innerHTML = openPokemonDialog(index);
    editLineStats(index)
}

async function fetchEvolution(index) {
    evolutions = [];
    let evolutionUrl = species[index].evolution_chain.url;

    let responseEvolution = await fetch(evolutionUrl);
    responseEvolution = await responseEvolution.json();
    evolutions.push(responseEvolution);
    updateEvolution();
}

function forward(index) {
    index++;
    if (index === pokemons.length) {
        index = 0;
    }
    changePokemon(index);
    fetchEvolution(index);
}

function backward(index) {
    index--;
    if (index < 0) {
        index = pokemons.length;
        index--;
    }
    changePokemon(index);
    fetchEvolution(index);
}

function renderEvolutions() {
    let evolutionChainRef = document.getElementById("evolutionsChain");
    evolutionChainRef.innerHTML = "";
    evolutionChainRef.innerHTML = getEvolutionChainTemplate();
}

function updateEvolution() {
    entwicklungen = [];
    entwicklungen.push({ name: evolutions[0].chain.species.name }, { name: evolutions[0].chain.evolves_to[0].species.name });
    if (evolutions[0].chain.evolves_to[0].evolves_to.length > 0) {
        entwicklungen.push({ name: evolutions[0].chain.evolves_to[0].evolves_to[0].species.name })
    } else{
        entwicklungen.push({name: "", image_url: ""})
    }
    updateEvo();
}

async function updateEvo() {
    for (let index = 0; index < entwicklungen.length; index++) {
        if (entwicklungen[index].name.length != 0) {
            let evoPokemon = await fetch(BASE_URL + "pokemon/" + entwicklungen[index].name)
            evoPokemon = await evoPokemon.json()
            entwicklungen[index] = evoPokemon;
            entwicklungen[index].img_url = entwicklungen[index].sprites.front_default;
        }
    }
    renderEvolutions();
}

function showSpinner(){
    let contentRef = document.getElementById('mainContent'); 
    contentRef.innerHTML = '<img src="./img/pokespinner.gif" alt="pokespinner" class="pokespinner"><div id="pokemon" class="pokemons"></div>'; 
}

function getWorkplace(){
    let contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ""; 
    contentRef.innerHTML = getWorkplaceTemplate();
}

function filterInput(){
     hideButton()
    let searchBoxInput = document.getElementById('searchBox');
    searchBoxInput = searchBoxInput.value
   

    let filterObj = oriPokemons;

    filterObj = filterObj.filter((element) => element['name'].includes(searchBoxInput));
    renderFilterPokemon(filterObj)
}

function renderFilterPokemon(filterObj){
    let contentRef = document.getElementById('pokemon');
    contentRef.innerHTML = "";
    pokemons = filterObj; 
    
    for (let index = 0; index < pokemons.length; index++) {
        contentRef.innerHTML += getPokemonTemplate(index);
    }
    species = []; 
    fetchSpecies(); 
    renderPokemonsTypes();
    editTypeColor();
}

function closeProtection(event){
    event.stopPropagation();
}

function hideButton(){
    if (searchBox.value.length != 0) {
       let myButton = document.getElementById('my_button');
       myButton.classList.add('displayNone');
    } else {
    let myButton = document.getElementById('my_button');
       myButton.classList.remove('displayNone'); 
    }
}

function arrowDisplayNone(){
    if (pokemons.length === 1) {
         document.getElementsByClassName("arrow-right")[0].style.display = "none";
         document.getElementsByClassName("arrow-left")[0].style.display ="none";
    }
}

function toggleSearchBox(){
    document.getElementById("searchBox").classList.toggle('displayNone'); 
}

function getSpinner(){
    document.getElementById('button-box').innerHTML = getButtonSpinner(); 
}

function getButton() {
    document.getElementById('button-box').innerHTML = getButtonTemplate(); 
}
