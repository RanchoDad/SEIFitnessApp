// // google OAuth logging in/out code from mongoose-movies-master example

const express = require("express");
const router = express.Router();
const passport = require("passport");
const exerciseController = require("../controllers/exercise");

// // This app has no "home" page, but your projects should 😀
router.get("/", function (req, res, next) {
  console.log("you are at the homepage");
  res.render("homepage");
});

router.get(
  "/auth/google",
  passport.authenticate(
    "google",
    { scope: ["profile", "email"] }
    // // this makes the little thing pop up that asks if you want to use google here
  )
);

// // Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/exercises",
    failureRedirect: "/exercises",
  })
);
// // OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/movies");
  });
});

module.exports = router;
