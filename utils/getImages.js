const axios = require("axios");
const { pokemon_list } = require("../controllers/pokemonController");

const getImages = (req, res, next) => {
  const { pokemons } = req;

  pokemons.forEach((pokemon) => {
    pokemon.picUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    console.log(pokemon.picUrl);
  });

  next();

  //   single api call to pokeAPI for image infos: DEPRECEATED, takes ages :)
  //   pokemons.forEach((pokemon) => {
  //     const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
  //     pokemonPics.push(data);
  //   });

  //   Promise.all(pokemonPics)
  //     .then((pokemonPics) => {
  //       pokemonPics.forEach((pokemonPic) => {
  //         const pokemonPicId = pokemonPic.data.id;
  //         const pokemonPicUrl = pokemonPic.data.sprites.front_default;
  //         console.log(`pokemonPicId is ${pokemonPicId} ${typeof pokemonPicId}`);
  //         const pokemonIndex = pokemons.findIndex(
  //           (pokemon) => pokemon.id === pokemonPicId
  //         );
  //         console.log(pokemons[pokemonIndex].name);
  //         console.log(pokemonPicUrl);
  //       });
  //       next();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res
  //         .status(500)
  //         .send("Something went wrong while getting pics from pokeAPI");
  //     });

  // First case: all pokemons requested
};

module.exports = getImages;
