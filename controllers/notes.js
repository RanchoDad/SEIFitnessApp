const Exercise = require("../models/exercise");

module.exports = {
  create,
  deleteNotes,
};

async function create(req, res) {
  const exercise = await Exercise.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  exercise.notes.push(req.body);
  try {
    await exercise.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/exercises/${exercise._id}`);
}
function deleteNotes(req, res, next) {
  Exercise.findOne({
    "notes._id": req.params.id,
    "notes.user": req.user._id,
  }).then(function (exercise) {
    if (!exercise) return res.redirect("/exercises");
    exercise.notes.remove(req.params.id);
    exercise
      .save()
      .then(function () {
        res.redirect(`/exercises/${exercise._id}`);
      })
      .catch(function (err) {
        return next(err);
        // res.redirect(`/exercises/${exercise._id}`);
      });
  });
}
