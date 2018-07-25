const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../../db/base");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const validatePost = require("../../validation_rules/post");
const validateComment = require("../../validation_rules/comment");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.connectMongoose();
    Post.find()
      .sort({ date: "desc" })
      .then(posts => {
        db.disconnectMongoose();
        res.json(posts);
      })
      .catch(err => res.json({ err: "No posts found." }));
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.connectMongoose();
    Post.findById(req.params.id)
      .then(post => {
        db.disconnectMongoose();
        res.json(post);
      })
      .catch(err => res.json({ err: "No post found with that id." }));
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.connectMongoose();
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (post.user.toString() !== req.user.id) {
            db.disconnectMongoose();
            return res.json({
              err: "User not authorized to remove this post."
            });
          }

          post
            .remove()
            .then(() => {
              db.disconnectMongoose();
              return res.json({ success: true });
            })
            .catch(err => {
              res.json({ err: "Post not found." });
            });
        })
        .catch(err => res.json({ err: "The post could not be found." }));
    });
  }
);

router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.connectMongoose();
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            const removeLike = post.likes
              .map(like => like.user.toString())
              .indexOf(req.user.id);

            post.likes.splice(removeLike, 1);

            post.save().then(unliked => {
              db.disconnectMongoose();
              return res.json({ liked: "You successfully unliked this post." });
            });
          } else {
            post.likes.push({ user: req.user.id });

            post.save().then(liked => {
              db.disconnectMongoose();
              return res.json({ liked: "You successfully liked this post!" });
            });
          }
        })
        .catch(err => res.json({ err: "Post not found." }));
    });
  }
);

router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { validationError, isValid } = validateComment(req.body);

    if (!isValid) {
      return res.json(validationError);
    }

    db.connectMongoose();
    Post.findById(req.params.id).then(post => {
      const comment = {
        text: req.body.text,
        name: req.body.name,
        user: req.user.id
      };

      post.comments.unshift(comment);
      post
        .save()
        .then(post => {
          db.disconnectMongoose();
          return res.json(post);
        })
        .catch(err => {
          db.disconnectMongoose();
          return res.json({ err: "Post not found." });
        });
    });
  }
);

router.post(
  "/comment/:postid/:commentid",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.connectMongoose();
    Post.findById(req.params.postid)
      .then(post => {
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.commentid
          ).length > 0
        ) {
          const remove = post.comments
            .map(comment => {
              comment._id.toString();
            })
            .indexOf(req.params.commentid);

          post.comments.splice(remove, 1);
          post.save().then(post => {
            db.disconnectMongoose();
            return res.json(post);
          });
        } else {
          db.disconnectMongoose();
          return res.json({ err: "Comment could not be found." });
        }
      })
      .catch(err => {
        db.disconnectMongoose();
        return res.json({
          err: "Post not found."
        });
      });
  }
);

module.exports = router;
