const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
    .then(
        user => {
            if(user) {
                return res.json({ message: 'This email already exist.' })
            } else {
                const createUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
            }
        }
    );
} );

module.exports = router;