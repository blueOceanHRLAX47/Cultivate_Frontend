import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { AllRecipesAndWorkouts } from '../App';


const WorkoutItem = () => {
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  console.log(workoutData)

  return (
    <Container className="exercise-list">
      {workoutData.exercise.map((exercise, index) =>
        <Container key={index} className="exercise-item">
          <p>{exercise.name}</p>
        </Container>
      )}
    </Container>
  )
}

export default WorkoutItem;