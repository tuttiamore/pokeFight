const express = require("express");
const router = express.Router();
const {
  pokemon_list,
  pokemon_details,
  pokemon_info,
} = require("../controllers/pokemonController");
const checkInfoParams = require("../utils/checkInfoParams");
const checkPokemonExists = require("../utils/checkPokemonExists");
const getImages = require("../utils/getImages");
const pagination = require("../utils/pagination");
const filterPokemons = require("../utils/filterPokemons");

/* GET pokemon listing. */
router.get("/", pagination, getImages, pokemon_list);

// GET search pokemon
router.get("/search/:name", filterPokemons, getImages, pokemon_list);

// GET pokemon details
router.get("/details/:id", checkPokemonExists, getImages, pokemon_list);

// GET single detail of pokemon
router.get(
  "/details/:id/:info",
  checkPokemonExists,
  checkInfoParams,
  pokemon_info
);

module.exports = router;
