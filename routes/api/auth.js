const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const db = require('../../db/base');
const config = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/register', (req, res) => {
    db.connectMongoose()
    User.findOne({ email: req.body.email })
    .then(
        user => {
            if(user) {
                db.disconnectMongoose();
                return res.json({ message: 'This email already exist.' })
            } else {
                const createUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(createUser.password, salt, (err, hash) => {
                        if(err) {
                            throw err;
                        } else {
                            createUser.password = hash;
                            createUser.save()
                                .then( user => {
                                    db.disconnectMongoose();
                                    res.json(user);
                                });
                        }
                    });
                });

            }
        }
    );
} ); // END of /register

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.connectMongoose();
    User.findOne({ email })
        .then(
            user => {
                if(!user) {
                    return res.json({ email:'User not found.' });
                } else {
                    bcrypt.compare(password, user.password)
                        .then(passwordMatch => {
                            if(!passwordMatch) {
                                db.disconnectMongoose();
                                return res.json({password: 'Password did not match.'});
                            } else {
                                db.disconnectMongoose();

                                const jwt_payload = {
                                    id: user.id,
                                    name: user.name
                                };

                                jwt.sign(
                                    jwt_payload,
                                    config.key,
                                    { expiresIn: 86400 },
                                    (err, token) => {
                                        if(err) {
                                            res.json({ error: err });
                                        } else {
                                            res.json({ success: true, token: 'Bearer ' + token });
                                        }
                                    }
                                );

                            }
                        });
                }
            });
}); // END of /login

router.get('/secure', passport.authenticate('jwt', { session: false } ), (req, res) => {
    res.json({ id: req.user.id, name: req.user.name, email: req.user.email});
});

module.exports = router;