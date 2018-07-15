const express = require("express");
const router = express.Router();
const db = require("../../db/base");
const passport = require("passport");
const User = require("../../models/User");
const Profile = require("../../models/Profile");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const err = {};
    db.connectMongoose();

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (!profile) {
        err.noprofile = "This user has no profile. Yet.";
        db.disconnectMongoose();
        res.json(err);
      }
      db.disconnectMongoose();
      res.json(profile);
    });
  }
);

module.exports = router;
