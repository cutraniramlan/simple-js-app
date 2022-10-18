var pokemonList = [
    {name: "Bulbasaur", height: 2, types : ['grass', 'poison']},
    {name: "Charmander", height: 2, types: 'fire'},
    {name: "Pikachu", height: 1, types: 'electric'}
];

  pokemonList.forEach(function(pokemon){
    document.write('Pokemon Name: ' + pokemon.name + ',' + ' height: ' + pokemon.height + ',' + ' types: ' + pokemon.types + '<br>' )
    });

