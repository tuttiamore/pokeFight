const express = require("express");
const router = express.Router();

const {
  postFightResults,
  getLeaderboard,
} = require("../controllers/leaderboardController");

router.post("/postresult", postFightResults);
router.get("/getresults", getLeaderboard);

module.exports = router;
