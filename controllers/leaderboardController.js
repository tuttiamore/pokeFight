const PokemonResults = require("../models/PokemonResults");

const createPokemonResults = async (req, res) => {
  const { id, opponentId, win } = req.body;
  const { pokemons } = req;
  let pokemon;

  const pokemonName = pokemons.find((pokemon) => pokemon.id === id).name
    .english;
  const opponentName = pokemons.find((pokemon) => pokemon.id === opponentId)
    .name.english;

  try {
    pokemon = await PokemonResults.findOne({ id: id });

    // update if pokemon exists
    if (pokemon) {
      pokemon.win++;
      pokemon.total++;
      pokemon.opponents.push(opponentName);
      pokemon.opponentsId.push(opponentId);
      const pokemonUpdated = await pokemon.save({ validateBeforeSave: true });
      console.log(pokemonUpdated);
      return res.send(pokemonUpdated);
    }

    pokemon = new PokemonResults({
      id,
      name: pokemonName,
      opponents: [opponentName],
      opponentsId: [opponentId],
      win,
      total: 1,
    });
    const pokemonCreated = await pokemon.save();
    console.log(pokemonCreated);
    res.send(pokemonCreated);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { createPokemonResults };
