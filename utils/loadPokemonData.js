const mockData = require("../db/mockData.json");

const loadPokemonData = (req, res, next) => {
  req.pokemons = mockData;
  next();
};

module.exports = loadPokemonData;
