import React, { useContext, useState } from "react";
import { Accordion, Container, Button, Row, Col, Modal } from "react-bootstrap";
import { render } from "react-dom";
import { AllRecipesAndWorkouts } from '../App';


const WorkoutItem = ({ workout }) => {
  // console.log('this is', workout)
  // console.log('exercise info', exerciseInfo)
  const [show, setShow] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const { workoutData } = useContext(AllRecipesAndWorkouts)
  const exerciseInfo = workoutData.exercise[(workout.id - 1)]

  //here will be mapping over the exercises within each workout, should have all of that from one call to db
  //right now only getting 'fake' data so not really how it will be obtained at the end
  //may need to create exercise component that will dynamically render exercises within the workout

  if(exerciseInfo.images.length === 0) {
    exerciseInfo.images = 'None';
  }

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
    clearCalendarInput()
  }

  const submitCloseModal = () => {
    const workoutToAdd = {
      user_id: 'something',
      workout_id: workout.id,
      date_on_calendar: [year, month, day, hour, minute],
    }
    //send axios post request to saved_workouts with object above
    setShow(false)
    clearCalendarInput()
    alert(`You have successfully added ${workout.name} to your calendar`)
  }

  const changeInput = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value
    if (targetName === 'setYear') {
      setYear(targetValue)
    } else if (targetName === 'setMonth') {
      setMonth(targetValue)
    } else if (targetName === 'setDay') {
      setDay(targetValue)
    } else if (targetName === 'setHour') {
      setHour(targetValue)
    } else if (targetName === 'setMinute') {
      setMinute(targetValue)
    } else {
      console.error('there was an error')
    }
    console.log(year)
  }

  const clearCalendarInput = () => {
    setYear('')
    setMonth('')
    setDay('')
    setHour('')
    setDay('')
    setMinute('')
  }


  return (
    <Container className="workout-card">
      <h2 className="workout-title">{workout.name}</h2>
      <Button className="float-end" variant="outline-info" onClick={showModal}>Add to Calendar</Button>{' '}
      <p className="workout-text">Type: {workout.type}</p>
      <p className="workout-text">Difficulty: </p>
      <p className="workout-text">Duration:</p>
      <p className="workout-text">Target Muscle Groups:</p>
      <p className="workout-text">Equipment:</p>
      <p className="workout-text">Popularity Score: {workout.popularity_score}</p>
      <p className="workout-text">Workout Description: </p>
      <Accordion className="accordion" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body style={{maxWidth: "1244px"}}>
            <Row className="exercise-row">
              {/* here will need to map over workout exercises and conditionally render a certain amount of them */}
              <Col className="exercise-col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="exercise-col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="exercise-col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Sets</u>: {exerciseInfo.equipment} <br />
                <u>Reps</u>: {exerciseInfo.body_group} <br />
                <u>Video</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="exercise-col">
              <span className="exercise-title"><b>Exercise 1(number to update):</b> &nbsp; {exerciseInfo.name}</span> <br />
                <u>Equipment</u>: {exerciseInfo.equipment} <br />
                <u>Target muscle</u>: {exerciseInfo.body_group} <br />
                <u>Description</u>: {exerciseInfo.description} <br />
                <u>Images</u>: {exerciseInfo.images} <br />
              </Col>
              <Col className="exercise-col">
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
      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add <b>{workout.name}</b> To Calendar?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please indicate when you would like to add this XX min workout: <br />
          <br />
          Start Time: <br />
          Year:<input type="text" value={year} onChange={changeInput} name="setYear" maxLength={4} size={4} />&nbsp;
          Month:<input type="text" value={month} onChange={changeInput} name="setMonth" maxLength={2} size={2}/>&nbsp;
          Day:<input type="text" value={day} onChange={changeInput} name="setDay" maxLength={2} size={2}/>&nbsp;
          Hour:<input type="text" value={hour} onChange={changeInput} name="setHour" maxLength={2} size={2}/>&nbsp;
          Minute:<input type="text" value={minute} onChange={changeInput} name="setMinute" maxLength={2} size={2}/>&nbsp;
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={submitCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default WorkoutItem;