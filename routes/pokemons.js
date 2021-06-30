const express = require("express");
const router = express.Router();
const {
  pokemon_list,
  pokemon_details,
  pokemon_info,
} = require("../controllers/pokemonController");
const { checkInfoParams } = require("../utils/checkInfoParams");
const { checkPokemonExists } = require("../utils/checkPokemonExists");

/* GET pokemon listing. */
router.get("/", pokemon_list);

// GET pokemon details
router.get("/:id", checkPokemonExists, pokemon_details);

// GET single detail of pokemon
router.get("/:id/:info", checkPokemonExists, checkInfoParams, pokemon_info);
module.exports = router;
