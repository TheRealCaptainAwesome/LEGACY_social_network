const mongoose = require("mongoose");

// DBConfig
const db = require("../config/keys").mongoURI;

module.exports = {
  connectMongoose: () => {
    mongoose
      .connect(db)
      .then(() => console.log("db connected."))
      .catch(err => console.log(`Failure: ${err}`));
  },

  disconnectMongoose: () => {
    mongoose.connection.close(() =>
      console.log("db connection has been closed.")
    );
  }
};
