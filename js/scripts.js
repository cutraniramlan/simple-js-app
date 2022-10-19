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

    //   console.log("test 1");
    //   console.log(pokemonRepository.getAll());
    //   pokemonRepository.add({ name: 'Bulbasaur' });
    //   console.log("test 2");
    //   console.log(pokemonRepository.getAll());

    pokemonList.forEach(function (pokemon) {
        pokemonRepository.add(pokemon)
      });
       
      console.log(pokemonRepository.getAll());

    pokemonList.forEach(function(pokemon){
     document.write('Pokemon Name: ' + pokemon.name + ',' + ' height: ' + pokemon.height + ',' + ' types: ' + pokemon.types + '<br>' )
        });