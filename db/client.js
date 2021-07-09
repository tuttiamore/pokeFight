const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e);
    console.log("An error occured while connecting to the database");
  });

const client = mongoose.connection;

client.on("error", (error) => {
  console.log(error.message);
});

module.exports = client;
