const mockData = require("../db/mockData.json");

exports.loadPokemonData = (req, res, next) => {
  req.pokemons = mockData;
  next();
};
