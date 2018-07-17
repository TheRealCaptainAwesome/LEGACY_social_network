const express = require("express");
const router = express.Router();
const db = require("../../db/base");
const passport = require("passport");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const validateProfile = require("../../validation_rules/profile");

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

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { validationError, isValid } = validateProfile(req.body);

    if (!isValid) {
      return res.json(validationError);
    }

    const err = {};
    const profileData = {};
    profileData.social_media = {};

    profileData.user = req.user.id;
    if (req.body.handle) profileData.handle = req.body.handle;
    if (req.body.title) profileData.title = req.body.title;
    if (req.body.location) profileData.location = req.body.location;
    if (req.body.skills) profileData.skills = req.body.skills.split(",");
    if (req.body.bio) profileData.bio = req.body.bio;
    if (req.body.twitter) {
      profileData.social_media.twitter = req.body.twitter;
    }
    if (req.body.facebook) {
      profileData.social_media.facebook = req.body.facebook;
    }
    if (req.body.instagram) {
      profileData.social_media.instagram = req.body.instagram;
    }

    db.connectMongoose();
    User.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.body.id },
          { $set: profileData },
          { new: true }
        ).then(profile => {
          db.disconnectMongoose();
          res.json(profile);
        });
      } else {
        Profile.findOne({ handle: profileData.handle }).then(profile => {
          if (profile) {
            err.handle = "This handle already exists.";
            res.json({ err });
          } else {
            new Profile(profileData).save().then(profile => {
              db.disconnectMongoose();
              res.json(profile);
            });
          }
        });
      }
    });
  }
);

module.exports = router;
