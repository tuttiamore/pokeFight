require("dotenv").config();
require("./db/client.js");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const pokemonsRouter = require("./routes/pokemons");
const loadPokemonData = require("./utils/loadPokemonData");
const leaderboardRouter = require("./routes/leaderboard");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(loadPokemonData);

app.use("/pokemon", pokemonsRouter);
app.use("/leaderboard", leaderboardRouter);

module.exports = app;
