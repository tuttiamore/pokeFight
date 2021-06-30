exports.checkInfoParams = (req, res, next) => {
  const { info } = req.params;
  const { pokemon } = req;

  const validInfoParams = ["name", "type", "base"];

  if (!validInfoParams.includes(info)) {
    return res.status(400).send("Please provide a valid query");
  }
  req.pokemonInfo = pokemon[info];
  next();
};
