import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import WorkoutItem from './WorkoutItem'


const Workout = () => {

  return (
    <Container className="primary-container">
      <h1 style={ { fontSize: "75px"} }>Workout</h1>
      <Container className="workout-container">
        <WorkoutItem />
      </Container>
    </Container>

  )
}

export default Workout;