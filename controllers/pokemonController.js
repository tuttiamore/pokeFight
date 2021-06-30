// GET all pokemons
exports.pokemon_list = (req, res) => {
  res.json(req.pokemons);
};

// GET pokemon by id
exports.pokemon_details = (req, res) => {
  res.json(req.pokemon);
};

// GET pokemon single info: name, base,type
exports.pokemon_info = (req, res) => {
  res.json(req.pokemonInfo);
};
