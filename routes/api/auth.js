const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const db = require("../../db/base");
const config = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegister = require("../../validation_rules/register");
const validateLogin = require("../../validation_rules/login");

// Validate received data
// Check if user email already exists
// Create user and encrypt password
router.post("/register", (req, res) => {
  const { validationError, isValid } = validateRegister(req.body);

  if (!isValid) {
    return res.status(400).json({ validationError });
  }

  db.connectMongoose();
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      db.disconnectMongoose();
      validationError.email = "This Email already exists.";
      return res.json({ validationError });
    } else {
      const createUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(createUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          } else {
            createUser.password = hash;
            createUser.save().then(user => {
              db.disconnectMongoose();
              res.json(user);
            });
          }
        });
      });
    }
  });
}); // END of /register

// Validate received data
// Find user using email
// If user is found -> compare password
// Using jwt -> create token for authentication
router.post("/login", (req, res) => {
  const { validationError, isValid } = validateLogin(req.body);

  // Validation
  if (!isValid) {
    return res.json({ validationError });
  }

  const email = req.body.email;
  const password = req.body.password;

  db.connectMongoose();
  User.findOne({ email }).then(user => {
    if (!user) {
      validationError.email = "User not found.";
      return res.json({ validationError });
    } else {
      bcrypt.compare(password, user.password).then(passwordMatch => {
        if (!passwordMatch) {
          validationError.password = "Password did not match.";
          db.disconnectMongoose();
          return res.json({ validationError });
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
              if (err) {
                res.json({ error: err });
              } else {
                res.json({ success: true, token: "Bearer " + token });
              }
            }
          );
        }
      });
    }
  });
}); // END of /login

module.exports = router;
