const Workout = require("../models/Workout");

// get all workouts
const getWorkout = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getWorkouts = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  // add
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //  res.json({ mssg: "POST a ndew workout" });
};

// delete a workout

// update a workout

module.exports = {
  createWorkout,
};
