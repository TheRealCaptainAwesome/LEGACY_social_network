const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../../db/base");
const Post = require("../../models/Post");
const validatePost = require("../../validation_rules/post");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const err = {};
    const createPost = new Post({
      user: req.user.id,
      text: req.body.text,
      author: req.body.author
    });
    const { validationError, isValid } = validatePost(req.body);

    if (!isValid) {
      return res.json(validationError);
    }

    db.connectMongoose();
    createPost.save().then(post => {
      db.disconnectMongoose();
      res.json(post);
    });
  }
);

module.exports = router;
