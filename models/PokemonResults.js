const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonResults = new Schema({
  id: { type: Number },
  name: { type: String },
  opponents: [{ type: String, required: true }],
  opponentsId: [{ type: Number }],
  win: { type: Number, required: true },
  lose: {
    type: Number,
    default: function () {
      return this.total - this.win;
    },
  },
  total: { type: Number },
});

module.exports = mongoose.model("PokemonResults", PokemonResults);
