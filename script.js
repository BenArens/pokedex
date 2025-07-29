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

function renderTemplate(){
    let contentRef = document.getElementById('pokemon'); 
    contentRef.innerHTML = ""; 
    for (let index = 0; index < pokemons.length; index++) {
        contentRef.innerHTML += getPokemonTemplate(index); 
        editTypes(index)
    }
}

function editTypes(index){
    let typeRef = document.getElementsByClassName("pokemon-types"); 
    typeRef[index].innerHTML = "hallo welt";
    for (let i = 0; i < pokemons[0].types.length; i++) {
      //for schleife weil unterschiedlich viele Types  
        getPokemonTypes(index); 
    }
   
}