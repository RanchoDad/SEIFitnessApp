const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// One:Many (like reviews to a movie in our movie-express during class)abc
const noteSchema = new mongoose.Schema({
    reps:{
        type:Number,
        min:0,
        max:9999,
    },
    sets:{
        type:Number,
        min:0,
        max:9999,
    },
    weight:{
        type:Number,
        min:0,
        max:9999,
    },
    rest:{
        type:Number,
        min:0,
        max:9999,
    },
    note:{
        type:String,
        required: true,
    },
    intesityRating:{
        type: Number,
        min:1,
        max:10,
        required: true
    }
})
// each movement (from movementSchema) will have set (options) of exercises)
const exerciseSchema = new Schema({
    squat: {
        type:String,
        enum:['Back Squat',
            'Front Squat',
            '1-Leg Squat',
            'Goblet Squat',
            'Wall Sit',
            'Squat',
            'Leg Press',
            '1-Leg Leg Press',
            'Sumo Squat',
            'Split Squat',
            'Bulgarian Squat',
            'Overhead Squat',
            'Suitcase Squat',
            'Zercher Squat]']
    },
    hinge:{
        type:String,
        enum:[
            'Deadlift',
            'Sumo Deadlift',
            'RDL',
            '1-Leg RDL',
            'Sumo Deadlift',
            'Good Morning',
            'Pull Throughs',
            'KB Swing',
            'Straight Leg Deadlift',
            'Hip Extension',
            'Back Extension',
            'Bridge',
            'Swing']
    },
    lunge:{
        type:String,
        enum:[
            'Step Up',
            'Side Step Up',
            'Step Down',
            'Transverse Lunge',
            'Forward Lunge',
            'Side Lunge',
            'Reverse Lunge',
            'Walking Lunge',
            '3-Way Lunge',
            'Clock Lunge',
            'Drop Lunge',
            'Bulgarain Lunge',
            'Stationary Lunge',
            'Crossover Lunge']
    },
    pull:{
        type:String,
        enum:[
            'Pull Up',
            'Chin Up',
            'Pulldown',
            'Reverse Grip Chin Up',
            'Neutral Grip Chin Up',
            'Medium Grip Chin Up',
            'Wide Grip Pull Up',
            'Row',
            'Face Pull'
        ]
    },
    press:{
        type:String,
        enum:[
            'Push Up',
            'Kneeling Push Up',
            'Incline Push Up',
            'Decline Push Up',
            'Incline Chest Press',
            'Flat Chest Press',
            'Decline Chest Press',
            'Incline Chest Fly',
            'Flat Chest Fly',
            'Decline Chest Fly',
            'Push Up',
            'T Push Up',
            'Floor Press',
            'Standing Shoulder Press',
            'Seated Shoulder Press',
            '1-Arm Standing Shoulder Press',
            '1-Arm Seated Shoulder Press',
            'Arnold Press',
            'Modified Arnold Press',
            'Push Press'
        ]
    },
    rotation:{
        type:String,
        enum:[
            'Kneeling Rotation',
            'Standing Rotation',
            'Kneeling Chop',
            'Standing Chop',
            'Kneeling Pallof Press',
            'Standing Pallof Press',
            'Standing Reverse Chop',
            'Russian Twist',
            'Windsheild Wiper']
    },
    combination:{
        type:String,
        enum:[
            'Squat/Row',
            'Squat/Curl/Press',
            'Squat/Press',
            'Step/Curl/Press',
            'Deadlift/Curl',
            'RDL/Bent-Over Row',
            'Squat/Upright Row',
            'Burpee'
            ]
    },
    plyometric:{
        type:String,
        enum:[
            'Jump Squat',
            '1-Leg Jump',
            'Jump Lunge',
            'Chest Pass',
            'Overhead Pass',
            'Throwdown',
            'Depth Jump',
            'Broad Jump',
            'Wall Ball',
            'Lateral Bound',
            'Jump Rope'
        ]
    },
    gymnastics:{
        type:String,
        enum:[
            'Dip',
            'Pull Up',
            'Muscle Up',
            'Handstand',
            'Handstand Push Up'
        ]
    },
    kettlebell:{
        type:String,
        enum:[
            '2-Arm Swing',
            '1-Arm Swing',
            '1-Arm Snatch',
            'Goblet Squat',
            'Press',
            'Floor Press',
            'Bent Press',
            'Bent Over Row',
            '1-Leg RDL',
            'Sumo Squat',
            'Turkish Getup'
        ]
    },
    olmypic:{
        type:String,
        enum:[
            'Power Clean',
            'Hang Clean',
            'Snatch',
            '1-Arm Clean',
            '1-Arm Snatch',
            'Clean & Jerk',
            ]
    },
    chest:{
        type:String,
        enum:[
            'Press',
            'Push Up',
            'Kneeling Push Up',
            'Incline Push Up',
            'Decline Push Up',
            'Incline Chest Press',
            'Flat Chest Press',
            'Decline Chest Press',
            'Incline Chest Fly',
            'Flat Chest Fly',
            'Decline Chest Fly',
            'Push Up',
            'T Push Up',
            'Floor Press'
        ]
    },
    biceps:{
        type:String,
        enum:[
            'Biceps Curl',
            'Hammer Curl',
            'Reverse Curl',
            'Zottmann Curl',
            'Preacher Curl',
            'Preacher Hammer Curl',
            'Preacher Reverse Curl',
            'Incline Curl',
            'Incline Hammer Curl',
            'Narrow Grip Curl',
            'Wide Grip Curl',
            'Alternating Curl',
            'Concentration Curl',
            'High Curl'
        ]
    },
    triceps:{
        type:String,
        enum:[
            'Dips',
            'Bench Dip',
            'Incline Bench Triceps Extension',
            'Flat Bench Triceps Extension',
            'Decline Bench Triceps Extension',
            'Overhead Triceps Extension',
            'Triceps Pushdown',
            'Incline Bench Close Grip Press',
            'Flat Bench Close Grip Press',
            'Decline Bench Close Grip Press',
            'French Press',
            'Incline Frensh Press',
            'Reverse Grip Pushdown',
            'Kick back'
        ]
    },
    foreamrs:{
        type:String,
        enum:[
            'Wrist Curl',
            'Reverse Wrist Curl',
            'Farmers Walk',
            'Pull Up Bar Hang',
            'Wrist Roller'
        ]
    },
    hamstrings:{
        type:String,
        enum:[
            'Seated Leg Curl',
            '1-Leg Seated Leg Curl',
            'Prone Leg Curl',
            '1-Leg Prone Leg Curl',
            'Supine Leg Curl',
            '1-Leg Supine Curl',
            'Decline Bench Supine Leg Curl',
            '45-Degree Hip Extension',
            'Glute Ham Raise',
            '1-Leg 45-Degree Leg Curl',
            'Pull Throughs',
            'RDL',
            'Good Morning',
            '1-Leg RDL',
            'KB Swing'
        ]
    },
    quads:{
        type:String,
        enum:[
            'Leg Extension',
            '1-Leg Extension',
            '45-Degree Leg Press',
            'Horizontal Leg Press',
            'Back Squat',
            'Front Squat',
            '1-Leg Squat',
            'Goblet Squat',
            'Wall Squat',
            'Body Weight Squat',
            'Step Up',
            'Side Step Up',
            'Transverse Lunge',
            'Step Down',
            'Forward Lunge',
            'Side Lunge',
            'Reverse Lunge',
            'Walking Lunge',
            '3- Way Lunge',
            'Clock Lunge',
            'Drop Lunge',
            'Bulgarian Lunge',
            'Stationary Lunge'
        ]
    },
    calves:{
        type:String,
        enum:[
            'Calf Raise',
            'Seated Calf Raise',
            'Standing Calf Raise'
        ]
    },
    glutes:{
        type:String,
        enum:[
            'Side Lying Clam',
            'Side Lying Leg Raise',
            'Lateral Walk',
            'Hip Bridge',
            '1-Leg Hip Bridge',
            'Hip Bridge March',
            'Hip Thrust',
            '1-Leg Hip Thrust',
            'Donkey Kick',
            'Crossover Lunge'
        ]
    },
    anteriorCore:{
        type:String,
        enum:[
            'Kneeling Plank',
            'Plank',
            '3-Point Plank',
            '2-Point Plank',
            'Plank with 1-Arm Row',
            'Ab Rollout',
            'Body Saw',
            'Stir the Pot',
            'Crunch',
            'Reverse Crunch',
            'Jackknife',
            'Pike'
        ]
    },
    lateralCore:{
        type:String,
        enum:[
            'Kneeling Side Plank',
            'Side Plank',
            'Side Plank (Bottom Leg Up)',
            'Side Plank (Top Leg Up)',
            'Side Plank with 1-Arm Row',
            'Side Bend',
            '2-Arm Farmers Wlak',
            '1-Arm Farmers Walk',
            '1-Arm Waiter Walk'
        ]
    },
    posteriorCore:{
        type:String,
        enum:[
            'Hip Bridge',
            '1-Leg Bridge',
            'Marching Bridge',
            'Hip Thruster',
            '1-Leg Hip Thruster',
            'Marching Hip Thruster',
            'Back Extension'
        ]
    }
})
    
// const movementSchema = new Schema ({
//     movement:{
//         type: String,
//         enum:['Squat','Hinge','Lunge','Pull','Press','Rotation','Combination','Plyometric','Gymnastics','Kettlebell','Olmypic','Chest','Biceps', 'Triceps', 'Forearms','Hamstrings','Quads','Calves','Glutes','Anterior Core', 'Lateral Core','Posterior Core'],
//         required: true
//     },
//     equipment:{
//         type: String,
//         enum:['BB','DB','Cable','Bodyweight','Band','TRX','KB','Machine','Mini Band','BOSU','Balance Beam','Foam Balance Pad']
//     },
//     performedDate: {
//         type: Date,
//         default: new Date().setFullYear(new Date().getFullYear() + 1)
//     },
//     exercises: [exerciseSchema],
//     notes: [noteSchema]
// })

module.exports = mongoose.model('Exercise', exerciseSchema)
