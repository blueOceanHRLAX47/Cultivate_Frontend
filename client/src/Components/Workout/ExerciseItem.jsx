import React from 'react';
import { Col } from 'react-bootstrap'

const ExerciseItem = ( { exercise, index }) => {
  const name = exercise.exercise.name
  let video

  if(exercise.exercise.video === 'null') {
    video = 'None';
  } else {
    video = exercise.exercise.video
  }

  return (
    <Col className="exercise-col">
      <span className="exercise-title"><b>Exercise {index + 1}:</b> &nbsp; {name}</span> <br />
      <u>Sets</u>: {exercise.sets} <br />
      <u>Reps</u>: {exercise.reps} <br />
      <u>Video</u>: {video} <br />
    </Col>
  )
}

export default ExerciseItem;