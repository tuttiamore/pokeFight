const mockData = require("../db/mockData.json");

exports.checkPokemonExists = (req, res, next) => {
  const { id } = req.params;
  const { pokemons } = req;
  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    return res.status(404).send("Pokemon not found");
  }

  req.pokemon = pokemon;
  next();
};
