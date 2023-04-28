const Exercise = require('../models/exercise');
  
const exerciseController = {
    
    index: async (req, res) => {
        console.log('index works')
        const exercises = await Exercise.find({});
        res.render('exercises/index', { exercise: 'Home Page', exercises })
    },

    new: (req, res)=> {
        res.render('exercises/new', { exercise: 'Create Session', errorMsg: '' })
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
            user: req.user._id
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
           const exercise = await Exercise.findByIdAndUpdate(req.params.id);
           if (req.user._id.toString() === exercise.user.toString()) {
                return res.render('exercises/edit', {
                    exercise
                  });
                }else{
             res.redirect('/exercises');
                }            
        }catch(err){
          res.send(err)
        }
    },
      update: async (req, res) => {
        try{
          const exercise = await Exercise.findById(req.params.id);
          if (req.user._id.toString() === exercise.user.toString()) {
            exercise.name = req.body.name;
            exercise.reps = req.body.reps;
            exercise.sets = req.body.sets;
            exercise.weight = req.body.weight;
            exercise.equipment = req.body.equipment;
            exercise.description = req.body.description;
                await exercise.save();
                res.redirect(`/exercises/${exercise._id}`); 
            }else{
              res.redirect('/exercises');
            }
          }catch(err){
            res.send(err)
          }
        },
        delete: async (req, res) => {
            try {
              const exercise = await Exercise.findById(req.params.id);
              if (req.user._id.toString() === exercise.user.toString()) {
                await Exercise.findByIdAndDelete(exercise);
               res.redirect('/exercises');
              }else{
                res.status(500).send('You did not create, you cannot delete');
                res.redirect('/exercises');
              }
            } catch (error) {
              res.send(error)
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