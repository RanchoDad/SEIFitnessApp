const Exercise = require('./models/exercise');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const exerciseRegimens = [];

const squatExercises = Exercise.schema.path('squat').enumValues;
const hingeExercises = Exercise.schema.path('hinge').enumValues;
const lungeExercises = Exercise.schema.path('lunge').enumValues;
const pullExercises = Exercise.schema.path('pull').enumValues;
const pressExercises = Exercise.schema.path('press').enumValues;
const coreExercises = Exercise.schema.path('core').enumValues;

function getRandomElement(array) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled[0];
}

for (let i = 0; i < 3; i++) { 
    const regimen = {};
    regimen.squat = getRandomElement(squatExercises);
    regimen.hinge = getRandomElement(hingeExercises);
    regimen.lunge = getRandomElement(lungeExercises);
    regimen.pull = getRandomElement(pullExercises);
    regimen.press = getRandomElement(pressExercises);
    regimen.core = getRandomElement(coreExercises);
    exerciseRegimens.push(regimen);
}

console.log(exerciseRegimens);

const url = process.env.DATABASE_URL;

(async () => {
    try {
        console.log('seeding the database');
        const client = await MongoClient.connect(url);
        const db = client.db('SEIFitnessDB');
        const result = await db.collection('exercises').insertMany(exerciseRegimens);
        console.log(`Inserted ${result.insertedCount} documents into the database`);
        client.close();
    } catch (err) {
        console.log(err);
    }
})();

