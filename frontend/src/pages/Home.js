import { useEffect, useState } from 'react'

const Home = () => {

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
