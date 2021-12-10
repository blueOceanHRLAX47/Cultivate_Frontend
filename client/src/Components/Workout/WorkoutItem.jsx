import React, { useContext } from "react";
import { Accordion, Container } from "react-bootstrap";
import { AllRecipesAndWorkouts } from '../App';


const WorkoutItem = () => {
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  console.log(workoutData)

  return (
    <Container className="exercise-list">
      {workoutData.workout.map((workout, index) =>
        <Container key={index} className="exercise-item">
          <p className="item-title">{workout.name}</p>
          <p style={ {textAlign: "right"} } className="item-text">Add to Calendar</p>
          <p className="item-text">type: {workout.type}</p>
          <p className="item-text">Duration:</p>
          <p className="item-text">Popularity Score: {workout.popularity_score}</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Instructions</Accordion.Header>
              <Accordion.Body>
                Make api call to db to get addtional data for workout id : {workout.id} <br />
                Should describe the excercises included in the workout
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      )}
    </Container>
  )
}

export default WorkoutItem;