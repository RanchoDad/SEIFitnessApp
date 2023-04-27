const mongoose = require("mongoose");

const Schema = mongoose.Schema; 
const User = require('./user');

const recapSchema = new Schema({
  intensity: Number,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const exerciseSchema = new Schema ({
  name: { type: String, required: true },
  description: String,
  sets: Number,
  reps: Number,
  weight: Number,
  equipment: String,
  recap: {
    type: [recapSchema],
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})


const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;



// // One:Many (like reviews to a movie in our movie-express during class)abc
// const noteSchema = new mongoose.Schema({
//     note:{
//         type:String,
//         required: true,
//     },
//     intesityRating:{
//         type: Number,
//         min:1,
//         max:10,
//         required: true
//     }
// })
// // each movement (from movementSchema) will have set (options) of exercises)
// const exerciseSchema = new mongoose.Schema({
//     squat: {
//         type:{
//             type:{
//                 type:String,
//                  enum:['Back Squat',
//                 'Front Squat',
//                 '1-Leg Squat',
//                 'Goblet Squat',
//                 'Wall Sit',
//                 'Squat',
//                 'Leg Press',
//                 '1-Leg Leg Press',
//                 'Sumo Squat',
//                 'Split Squat',
//                 'Bulgarian Squat',
//                 'Overhead Squat',
//                 'Suitcase Squat',
//                 'Zercher Squat']
//             },
//             reps: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//             sets: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//             weight: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//             rest: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//             equipment: {
//                 type: String,
//             enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//               }
//             }
//         },
//     hinge: {
//         type:{
//             type:{
//                 type:String,
//                 enum:[
//                     'Deadlift',
//                     'Sumo Deadlift',
//                     'RDL',
//                     '1-Leg RDL',
//                     'Sumo Deadlift',
//                     'Good Morning',
//                     'Pull Throughs',
//                     'KB Swing',
//                     'Straight Leg Deadlift',
//                     'Hip Extension',
//                     'Back Extension',
//                     'Bridge',
//                     'Swing']
//                 },
//                 reps: {
//                     type: Number,
//                     min: 0,
//                     max: 9999,
//                   },
//                   sets: {
//                     type: Number,
//                     min: 0,
//                     max: 9999,
//                   },
//                   weight: {
//                     type: Number,
//                     min: 0,
//                     max: 9999,
//                   },
//                   rest: {
//                     type: Number,
//                     min: 0,
//                     max: 9999,
//                   },
//                   equipment: {
//                     type: String,
//                     enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//                   }
//                 }
//             },
//     lunge: {
//             type:{
//                 type:{
//                     ype:String,
//                     enum:[
//                         'Step Up',
//                         'Side Step Up',
//                         'Step Down',
//                         'Transverse Lunge',
//                         'Forward Lunge',
//                         'Side Lunge',
//                         'Reverse Lunge',
//                         'Walking Lunge',
//                         '3-Way Lunge',
//                         'Clock Lunge',
//                         'Drop Lunge',
//                         'Bulgarain Lunge',
//                         'Stationary Lunge',
//                         'Crossover Lunge']
//                     },
//                     reps: {
//                         type: Number,
//                         min: 0,
//                         max: 9999,
//                       },
//                       sets: {
//                         type: Number,
//                         min: 0,
//                         max: 9999,
//                       },
//                       weight: {
//                         type: Number,
//                         min: 0,
//                         max: 9999,
//                       },
//                       rest: {
//                         type: Number,
//                         min: 0,
//                         max: 9999,
//                       },
//                       equipment: {
//                         type: String,
//                         enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//                       }
//                     }
//                 },
            
//     pull:{
//         type:{
//             type:{
//                 type:String,
//                 enum:[
//                     'Pull Up',
//                     'Chin Up',
//                     'Pulldown',
//                     'Reverse Grip Chin Up',
//                     'Neutral Grip Chin Up',
//                     'Medium Grip Chin Up',
//                     'Wide Grip Pull Up',
//                     'Row',
//                     'Face Pull'
//                 ]
//             },
//             reps: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               sets: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               weight: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               rest: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               equipment: {
//                 type: String,
//                 enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//               }
//             }
//     },
//     press:{
//         type:{
//             type:{
//                 type:String,
//                 enum:[
//                     'Push Up',
//                     'Kneeling Push Up',
//                     'Incline Push Up',
//                     'Decline Push Up',
//                     'Incline Chest Press',
//                     'Flat Chest Press',
//                     'Decline Chest Press',
//                     'Incline Chest Fly',
//                     'Flat Chest Fly',
//                     'Decline Chest Fly',
//                     'Push Up',
//                     'T Push Up',
//                     'Floor Press',
//                     'Standing Shoulder Press',
//                     'Seated Shoulder Press',
//                     '1-Arm Standing Shoulder Press',
//                     '1-Arm Seated Shoulder Press',
//                     'Arnold Press',
//                     'Modified Arnold Press',
//                     'Push Press'
//                 ]
//             },
//             reps: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               sets: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               weight: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               rest: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               equipment: {
//                 type: String,
//                 enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//               }
//             }
//     },
//     core:{
//         type:{
//             type:{
//                 type:String,
//                  enum:[
//             'Kneeling Plank',
//             'Plank',
//             '3-Point Plank',
//             '2-Point Plank',
//             'Plank with 1-Arm Row',
//             'Ab Rollout',
//             'Body Saw',
//             'Stir the Pot',
//             'Crunch',
//             'Reverse Crunch',
//             'Jackknife',
//             'Pike'
//         ]
//             },
//             reps: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               sets: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               weight: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               rest: {
//                 type: Number,
//                 min: 0,
//                 max: 9999,
//               },
//               equipment: {
//                 type: String,
//                 enum: ['BB', 'DB', 'Cable', 'Bodyweight', 'Band', 'TRX', 'KB', 'Machine', 'Mini Band', 'BOSU', 'Balance Beam', 'Foam Balance Pad']
//               }
//             }
//     },
//     performedDate: {
//                 type: Date,
//                 default: new Date().setFullYear(new Date().getFullYear() + 1)
//             },
//     notes: [noteSchema]
// });



