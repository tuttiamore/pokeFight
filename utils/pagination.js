const pagination = (req, res, next) => {
  let { offset } = req.query;
  offset = Number(offset);
  const { pokemons } = req;

  if (!offset) {
    req.pokemons = pokemons.slice(0, 20);
    return next();
  }

  console.log(offset + 20);
  req.pokemons = pokemons.slice(offset, offset + 20);
  next();
};

module.exports = pagination;
