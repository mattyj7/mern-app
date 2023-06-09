const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts}" });
});

// GET a single workout
router.get("/:id", (res, req) => {
  res.json({ mssg: "GET a single workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a ndew workout" });
});
// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a ndew workout" });
});
// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a ndew workout" });
});

module.exports = router;
