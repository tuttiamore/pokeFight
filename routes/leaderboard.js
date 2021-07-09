const express = require("express");
const router = express.Router();

const {
  createPokemonResults,
} = require("../controllers/leaderboardController");

router.post("/postresult", createPokemonResults);

module.exports = router;
