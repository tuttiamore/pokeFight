const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const pokemonsRouter = require("./routes/pokemons");
const { loadPokemonData } = require("./utils/loadPokemonData");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(loadPokemonData);

app.use("/", indexRouter);
app.use("/pokemon", pokemonsRouter);

module.exports = app;
