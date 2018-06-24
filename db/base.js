const mongoose = require('mongoose');

// DBConfig
const db = require('../config/keys').mongoURI;

module.exports = {
    // Connect to DB
    connectMongoose: () => {
        mongoose
        .connect(db)
        .then(() => console.log('Ye, db connected'))
        .catch( err => console.log(`Failure: ${ err }`));
    }
}