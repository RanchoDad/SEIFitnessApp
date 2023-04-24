const Exercise = require('../models/exercise')

 const exerciseController = {
    
    index: async (req, res) => {
        console.log('index works')
        // const exercises = await Exercise.find({});
        res.render('exercises/index', {
            // exercises
        })
    },

    new: (req, res)=> {
        res.render('exercises/new')
    },
   
    create: async (req, res) => {
        try {
            const exercise = await Exercise.create(req.body);
        }catch(err){
            console.log(err);
            res.render('exercises/new', { errorMsg: err.message});
        }
    },
    //show
    //create
    //delete
    //edit
    //update
    
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