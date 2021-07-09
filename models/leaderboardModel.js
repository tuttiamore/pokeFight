const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Leaderboard = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
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

module.exports = mongoose.model("Leaderboard", Leaderboard);
