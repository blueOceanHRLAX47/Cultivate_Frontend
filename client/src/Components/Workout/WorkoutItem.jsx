import React, { useContext, useEffect, useRef, useState } from "react";
import { Accordion, Container, Button, Row, Col } from "react-bootstrap";
import { AllRecipesAndWorkouts } from '../App';


const WorkoutItem = ({ workout }) => {
  console.log('this is', workout)
  console.log('exercise info', exerciseInfo)
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  const exerciseInfo = workoutData.exercise[(workout.id - 1)]

  //here is where I will take the workout ID and obtain all other exercise info via calls to db
  //right now only getting 'fake' data so not really how it will be obtained at the end

  if(exerciseInfo.images.length === 0) {
    exerciseInfo.images = 'None';
  }


  return (
    <Container className="exercise-item">
      <p className="item-title">{workout.name}</p>
      <Button className="float-end" variant="outline-info" onClick={() => console.log('adding workout to calendar')}>Add to Calendar</Button>{' '}
      {/* <p style={ {textAlign: "right"} } className="item-text">Add to Calendar</p> */}
      <p className="item-text">Type: {workout.type}</p>
      <p className="item-text">Duration:</p>
      <p className="item-text">Popularity Score: {workout.popularity_score}</p>
      <Accordion className="accordion" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body>
            <Row className="row">
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
              <Col className="col">Should describe the exercises included in the workout <br />
              Exercise 1: {exerciseInfo.name} <br />
              Equipment: {exerciseInfo.equipment} <br />
              Target muscle: {exerciseInfo.body_group} <br />
              Description: {exerciseInfo.description} <br />
              Images: {exerciseInfo.images} <br /></Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default WorkoutItem;
// <Container className="exercise-list">
//   {workoutData.workout.map((workout, index) => {
//     const id = workout.id
//     return (
//       <Container key={index} className="exercise-item">
        // <p className="item-title">{workout.name}</p>
        // <p style={ {textAlign: "right"} } className="item-text">Add to Calendar</p>
        // <p className="item-text">type: {workout.type}</p>
        // <p className="item-text">Duration:</p>
        // <p className="item-text">Popularity Score: {workout.popularity_score}</p>
        // <Accordion className="accordion">
        //   <Accordion.Item eventKey="0">
        //     <Accordion.Header>Instructions</Accordion.Header>
        //     <Accordion.Body>
        //       Make api call to db to get addtional data for workout id : {id} <br />
        //       Should describe the excercises included in the workout <br />
        //       {workoutData.exercise[1].name}
        //     </Accordion.Body>
        //   </Accordion.Item>
        // </Accordion>
//       </Container>
//     )
//   })}
// </Container>