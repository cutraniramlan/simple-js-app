let pokemonRepository = (function () {
    let repository = [
        {
        name: "Bulbasaur",
         height: 2, 
         types : ['grass', 'poison']
        },
        {
        name: "Charmander", 
        height: 2, 
        types: 'fire'
        },
        {
        name: "Pikachu", 
        height: 1, 
        types: 'electric'
        },
        ];
      
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
            ) {
            repository.push(pokemon);
            } else {
            console.log("pokemon is not correct");
            }
            }
    function getAll() {
        return repository;
        }    
    function addListItem(pokemon){
        let pokemonList = document.querySelector (".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.addEventListener(button, pokemon);
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }
    let addEventListener = function (element, pokemon) {
         element.addEventListener("click", () => showDetails(pokemon));
         console.log(addEventListener);
    };
    
    function showDetails(pokemon){
        console.log(repository);
   }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails:showDetails,
        addEventListener: addEventListener
        };
    })();
  
    console.log(pokemonRepository.getAll()); 
    pokemonRepository.add({ name: "Bulbasaur", height: 2, types : ['grass', 'poison']});
        
    console.log(pokemonRepository.getAll());
    
  
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });