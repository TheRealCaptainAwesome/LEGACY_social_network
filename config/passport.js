const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const key = require('../config/keys').key;
const User = require('../models/User');
const db = require('../db/base');

let opts = {};

opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key;

module.exports = passport => {
    passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
        db.connectMongoose();
        User.findById(jwt_payload.id)
            .then( user => {
                if(!user) {
                    db.disconnectMongoose();
                    return done(null, false);
                } else {
                    db.disconnectMongoose();
                    return done(null, user);
                }
            });
    })); // END of passport use-function
}