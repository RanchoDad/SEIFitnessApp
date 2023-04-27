const Exercise = require("./models/exercise");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const url = process.env.DATABASE_URL;

const exerciseRegimens = [
  {
    name: "Squat, Shoulder Press, Forward Lunge",
    repset: [
      {
        description:
          "Perform each exercise once per set, rest for 60 seconds and continue.",
        sets: 3,
        reps: 15,
        weight: 30,
        equipment: "Kettlebell",
      },
    ],
  },
  {
    name: "Backward Lunge, Chest Press, Bicep Curls",
    repset: [
      {
        description:
          "Perform each exercise once per set, rest for 45 seconds and continue.",
        sets: 4,
        reps: 12,
        weight: 25,
        equipment: "Dumbbells",
      },
    ],
  },
  {
    name: "Calf Raises, Chest Flies, Tricep Press",
    repset: [
      {
        description:
          "Perform each exercise once per set, rest for 30 seconds and continue.",
        sets: 5,
        reps: 7,
        weight: 20,
        equipment: "Kettlebells",
      },
    ],
  },
];

(async () => {
  try {
    console.log("seeding the database");
    const client = await MongoClient.connect(url);
    const db = client.db("SEIFitnessDB");
    const result = await db
      .collection("exercises")
      .insertMany(exerciseRegimens);
    console.log(`Inserted ${result.insertedCount} documents into the database`);
    client.close();
  } catch (err) {
    console.log(err);
  }
})();
