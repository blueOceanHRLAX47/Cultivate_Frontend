import React, { useContext, useState } from "react";
import { Accordion, Container, Button, Row, Col } from "react-bootstrap";
import { AllRecipesAndWorkouts } from '../App';


const WorkoutItem = ({ workout }) => {
  console.log('this is', workout)
  console.log('exercise info', exerciseInfo)
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  const exerciseInfo = workoutData.exercise[(workout.id - 1)]

  //here is where I will take the workout ID and obtain all other exercise info via calls to db
  //right now only getting 'fake' data so not really how it will be obtained at the end
  //may need to create exercise component that will dynamically render exercises within the workout

  if(exerciseInfo.images.length === 0) {
    exerciseInfo.images = 'None';
  }


  return (
    <Container className="exercise-item">
      <p className="item-title">{workout.name}</p>
      <Button className="float-end" variant="outline-info" onClick={() => console.log('adding workout to calendar')}>Add to Calendar</Button>{' '}
      <p className="item-text">Type: {workout.type}</p>
      <p className="item-text">Difficulty: </p>
      <p className="item-text">Duration:</p>
      <p className="item-text">Target Muscle Groups:</p>
      <p className="item-text">Equipment:</p>
      <p className="item-text">Popularity Score: {workout.popularity_score}</p>
      <p className="item-text">Workout Description: </p>
      <Accordion className="accordion" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body style={{maxWidth: "1244px"}}>
            <Row className="row">
              {/* here will need to map over workout exercises and conditionally render a certain amount of them */}
              <Col className="col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Equipment</u>: {exerciseInfo.equipment} <br />
                <u>Target muscle</u>: {exerciseInfo.body_group} <br />
                <u>Description</u>: {exerciseInfo.description} <br />
                <u>Images</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Equipment</u>: {exerciseInfo.equipment} <br />
                <u>Target muscle</u>: {exerciseInfo.body_group} <br />
                <u>Description</u>: {exerciseInfo.description} <br />
                <u>Images</u>: {exerciseInfo.images} <br />
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default WorkoutItem;