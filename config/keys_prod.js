//mongoURI - Used for the connection between db and application
// Key - Application key for passport auth
module.exports = {
  mongoURI: process.env.MONGO_URI,
  key: process.env.SECRET_OR_KEY
};
