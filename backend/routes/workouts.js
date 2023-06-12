const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);
// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a ndew workout" });
});
// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a ndew workout" });
});

module.exports = router;
