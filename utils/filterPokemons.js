const filterPokemons = (req, res, next) => {
  const { pokemons } = req;
  const { name } = req.params;

  const pokemonsFiltered = pokemons.filter(
    (pokemon) => pokemon.name.english.toLowerCase() === name.toLowerCase()
  );

  if (!pokemonsFiltered.length) {
    return res.status(404).send("Pokemon not found");
  }

  req.pokemons = pokemonsFiltered;
  next();
};

module.exports = filterPokemons;
