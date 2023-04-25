const Exercise = require('./models/exercise');

const exerciseRegimens = [];

const squatExercises = Exercise.schema.path('squat').enumValues;
const hingeExercises = Exercise.schema.path('hinge').enumValues;
const lungeExercises = Exercise.schema.path('lunge').enumValues;
const pullExercises = Exercise.schema.path('pull').enumValues;
const pressExercises = Exercise.schema.path('press').enumValues;

for (let squat of squatExercises) {
    for (let hinge of hingeExercises) {
      for (let lunge of lungeExercises) {
        for (let pull of pullExercises) {
          for (let press of pressExercises) {
            exerciseRegimens.push({
              squat,
              hinge,
              lunge,
              pull,
              press,
            });
          }
        }
      }
    }
  }
  console.log(exerciseRegimens)