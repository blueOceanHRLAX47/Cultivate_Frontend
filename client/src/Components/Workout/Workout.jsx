import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
// import { AllRecipesAndWorkouts } from '../App';
import WorkoutItem from './WorkoutItem'
import axios from 'axios';
import { results } from '../../Contexts/forumContext';
import 'regenerator-runtime/runtime'


const Workout = () => {
  // const { workoutData } = useContext(AllRecipesAndWorkouts)
  const [workoutData, changeWorkoutData] = useState([])

  axios.get('http://localhost:3002/')
    .then(results => {
      console.log('test', results.data)
      changeWorkoutData(results.data)
    })
    .catch(err => console.error(err))

    console.log('at workout', workoutData)

  return (
    <Container className="primary-container">
      <h1 className="mb-20">Workout</h1>
      <Container className="exercise-list">
        {workoutData.map((workout, index) =>
          <WorkoutItem workout={workout} key={index} />
        )}
      </Container>
    </Container>

  )
}

export default Workout;