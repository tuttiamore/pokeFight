const Leaderboard = require("../models/leaderboardModel");

// POST fight results
const postFightResults = async (req, res) => {
  const { id, opponentId, win } = req.body;
  const { pokemons } = req;
  let pokemon;

  const pokemonName = pokemons.find((pokemon) => pokemon.id === id).name
    .english;
  const opponentName = pokemons.find((pokemon) => pokemon.id === opponentId)
    .name.english;

  try {
    pokemon = await Leaderboard.findOne({ id: id });
    console.log(pokemon);
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

    pokemon = new Leaderboard({
      id,
      name: pokemonName,
      opponents: [opponentName],
      opponentsId: [opponentId],
      win: 1,
      total: 1,
    });
    const pokemonCreated = await pokemon.save();
    console.log(pokemonCreated);
    res.send(pokemonCreated);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// Get fight results
const getLeaderboard = async (req, res) => {
  try {
    const results = await Leaderboard.find({}, null, { sort: "win", limit: 2 });
    if (!results) {
      return res.send("No data yet");
    }
    res.send(results);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

module.exports = { postFightResults, getLeaderboard };
