let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;

    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModal");
    button.classList.add("btn");
    button.classList.add("btn-primary");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    addEventListener(button, pokemon);
  }

  function addEventListener(button, pokemon) {
    button.addEventListener("click", (event) => {
      showDetails(pokemon);
    });
  }
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.weight = details.weight;
        item.height = details.height;
        item.types = details.types.map((type) => type.type.name).join(",");
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }
  /* 
  function showModal(pokemon) {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.innerHTML = "";

    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "image-container");

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let title = document.createElement("h1");
    title.innerText = pokemon.name;

    let pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.imageUrl;

    let pokemonHeight = document.createElement("p");
    pokemonHeight.innerText = "Height: " + pokemon.height;

    let pokemonTypes = document.createElement("p");
    pokemon.types.forEach(
      (p) => (pokemonTypes.innerText = "Type: " + p.type.name)
    );

    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    modal.appendChild(title);
    modal.appendChild(imgContainer);
    imgContainer.appendChild(pokemonImage);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonTypes);
    modal.appendChild(closeButtonElement);

    modalContainer.appendChild(modal);
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  }); */

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let pokemonName = $("<h1>" + pokemon.name + "</h1>");

    /*     let pokemonImageFront = $('<img class="modal-img" style=width:50%">');
    pokemonImageFront.attr("src", pokemon.imageUrlFront);

    let pokemonImageBack = $('<img class="modal-img" style=width:50%">');
    pokemonImageBack.attr("src", pokemon.imageUrlBack); */

    let pokemonImage = $('<img class="modal-img" style=width:75%">');
    pokemonImage.attr("src", pokemon.imageUrl);

    let pokemonHeight = $("<p>" + "height : " + pokemon.height + "</p>");

    let pokemonWeight = $("<p>" + "weight : " + pokemon.weight + "</p>");

    let pokemonTypes = $("<p>" + "types : " + pokemon.types + "</p>");

    /*   let pokemonAbilities = $(
      "<p>" + "abilities : " + pokemon.abilities + "</p>"
    );
 */
    modalTitle.append(pokemonName);
    /* modalBody.append(pokemonImageFront);
    modalBody.append(pokemonImageBack); */
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonTypes);
    /*    modalBody.append(pokemonAbilities); */
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  pokemonList.forEach(function (pokemon) {
    if (pokemon.innerText.toUpperCase().indexOf(inputValue) > -1) {
      pokemon.style.display = "";
    } else {
      pokemon.style.display = "none";
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    addEventListener: addEventListener,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
