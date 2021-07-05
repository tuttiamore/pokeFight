const checkInfoParams = (req, res, next) => {
  const { info } = req.params;
  const pokemon = req.pokemon[0];

  const validInfoParams = ["name", "type", "base"];

  if (!validInfoParams.includes(info)) {
    return res.status(400).send("Please provide a valid query");
  }
  req.pokemonInfo = pokemon[info];
  next();
};

module.exports = checkInfoParams;
