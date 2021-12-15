import React, { useContext, useState } from "react";
import { Accordion, Container, Button, Row, Col, Modal } from "react-bootstrap";
import { render } from "react-dom";
import { AllRecipesAndWorkouts } from '../App';
import ExerciseItem from "./ExerciseItem";


const WorkoutItem = ({ workout }) => {
  const [show, setShow] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  // const { workoutData } = useContext(AllRecipesAndWorkouts)
  // const exerciseInfo = workoutData.exercise[(workout.id - 1)]

  //here will be mapping over the exercises within each workout, should have all of that from one call to db
  //right now only getting 'fake' data so not really how it will be obtained at the end
  //may need to create exercise component that will dynamically render exercises within the workout


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
      date_on_calendar: [year, month, day, hour, minute], //conflicts with time_on_calendar, which is correct?
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
      <p className="workout-text"><b>Type:</b> {workout.type}</p>
      <p className="workout-text"><b>Duration:</b> {workout.duration}</p>
      <p className="workout-text"><b>Target Muscle Groups:</b> {workout.body_group}</p>
      <p className="workout-text"><b>Equipment:</b> {workout.equipment}</p>
      <p className="workout-text"><b>Popularity Score:</b> {workout.likes}</p>
      <p className="workout-text"><b>Workout Description:</b> {workout.description}</p>
      <Accordion className="accordion" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body style={{maxWidth: "1244px"}}>
            <Row className="exercise-row">
              {workout.workout_exercises.map((exercise, index) =>
                <ExerciseItem exercise={exercise} key={index} index={index}/>
              )}
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
          When you would like to schedule this {workout.duration} workout: <br />
          <br />
          Start Time: <br />
          Year:<input type="text" value={year} onChange={changeInput} name="setYear" maxLength={4} size={4} />&nbsp;
          Month:<input type="text" value={month} onChange={changeInput} name="setMonth" maxLength={2} size={2}/>&nbsp;
          Day:<input type="text" value={day} onChange={changeInput} name="setDay" maxLength={2} size={2}/>&nbsp;
          Hour:<input type="text" value={hour} onChange={changeInput} name="setHour" maxLength={2} size={2}/>&nbsp;
          Min:<input type="text" value={minute} onChange={changeInput} name="setMinute" maxLength={2} size={2}/>&nbsp;
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