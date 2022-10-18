var pokemonList = [
    {name: "Bulbasaur", height: 2, types : ['grass', 'poison']},
    {name: "Charmander", height: 2, types: 'fire'},
    {name: "Pikachu", height: 1, types: 'electric'}
];

      let pokemonRepository = (function () {
        let pokemonList = [];
      
        function add(pokemon) {
          pokemonList.push(pokemon);
        }
      
        function getAll() {
          return pokemonList;
        }
      
        return {
          add: add,
          getAll: getAll
        };
      })();

      console.log(pokemonRepository.getAll()); [pokemonList]
      pokemonList [pokemonRepository.add({ name: 'Bulbasaur' })];
      console.log(pokemonRepository.getAll()); [ { name: 'Bulbasaur' } ]

pokemonList.forEach(function(pokemon){
     document.write('Pokemon Name: ' + pokemon.name + ',' + ' height: ' + pokemon.height + ',' + ' types: ' + pokemon.types + '<br>' )
        });