import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AllRecipesAndWorkouts } from '../App';
import WorkoutItem from './WorkoutItem'


const Workout = () => {
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  console.log('at workout', workoutData.workout)

  return (
    <Container className="primary-container">
      <h1 style={ { fontSize: "75px"} } className="mb-20">Workout</h1>
      <Container className="exercise-list">
        {workoutData.workout.map((workout, index) =>
          <WorkoutItem workout={workout} key={index} />
        )}
      </Container>
    </Container>

  )
}

export default Workout;