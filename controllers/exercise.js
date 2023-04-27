const Exercise = require('../models/exercise');
  
const exerciseController = {
    
    index: async (req, res) => {
        console.log('index works')
        const exercises = await Exercise.find({});
        res.render('exercises/index', {
            exercises
        })
    },

    new: (req, res)=> {
        res.render('exercises/new')
    },
   
    create: async (req, res) => {
        try {
          const exercise = new Exercise({
            name: req.body.name,
            sets:req.body.sets,
            reps:req.body.reps,
            weight:req.body.weight,
            equipment:req.body.equipment,
            description:req.body.description,
          });
          await exercise.save();
          res.redirect(`/exercises/${exercise._id}`);
        } catch (err) {
          console.log(err);
          res.render('exercises/new', { exercise: req.body, errors: err.errors });
        }
      },
    
    show: async (req, res) => {
        console.log('this is the show route')
        const exercise = await Exercise.findById(req.params.id);
        console.log(exercise)
        res.render('exercises/show', {
            exercise
        })
    },
    edit: async (req, res) => {
        try{
          const exerciseToEdit = await Exercise.findById(req.params.id);
          console.log(exerciseToEdit);
          res.render('exercises/edit', {
              exerciseToEdit
          })
        }catch(err){
          res.send(err)
        }
      },
      update: async (req, res) => {
        try{
           await Exercise.findByIdAndUpdate(req.params.id, req.body);
            res.redirect(`/exercises/${req.params.id}`);    
          }catch(err){
            res.send(err)
          }
        },
        delete: async (req, res) => {
            try {
              const exerciseId = req.params.id;
              await Exercise.findByIdAndDelete(exerciseId);
              res.redirect('/exercises');
            } catch (error) {
              console.error(error);
              res.status(500).send('An error occurred while deleting the exercise.');
            }
          },
    
    //createApi
    // in order for this to work, I have to write codes in movieAddValidator.js
    // in /public/js
    createApi: async (req, res)=> {
        try{
            const exercise = await Exercise.findById(req.params.exercise_id)
            const exerciseToCreate = req.body
            exercise.push(exerciseToCreate)
            //save the exercise to the database
            await exercise.save()
            // return the user to the exercise show page
            // instead of res.redirect(`/exercises/${req.params.exercise_id}`)
            res.json({
                success: true,
                status:200,
                data:{
                    exercise: exerciseToCreate
                }
            })
        }catch(err){
            res.send(err)
            }
        }
    }

    module.exports = exerciseController