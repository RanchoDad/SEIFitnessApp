const Exercise = require('../models/exercise');

module.exports = {
  create,
  deleteReset
};

async function create(req, res) {
  const exercise = await Exercise.findById(req.params.id);
  // Add the user-centric info to req.body (the new repset)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  exercise.repsets.push(req.body);
  try {
    // Save any changes made to the exercise doc
    await exercise.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/exercises/${exercise._id}`);
}
// Include the next parameter - used for error handling in the catch
function deleteReset(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Exercise.findOne({'repset._id': req.params.id, 'repset.user': req.user._id}).then(function(exercise) {
    // Rogue user!
    if (!exercise) return res.redirect('/exercises');
    // Remove the repset using the remove method available on Mongoose arrays
    exercise.repsets.remove(req.params.id);
    // Save the updated exercise
    exercise.save().then(function() {
      // Redirect back to the exercise's show view
      res.redirect(`/exercises/${exercise._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/exercises/${exercise._id}`);
    });
  });
}