var pokemonList = [
    {name: "Bulbasaur", height: 2, types : ['grass', 'poison']},
    {name: "Charmander", height: 2, types: 'fire'},
    {name: "Pikachu", height: 1, types: 'electric'}
];


for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height >=2){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") -  Waw, that's big! " + "<br>")
    }
    else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "<br>")
}
}