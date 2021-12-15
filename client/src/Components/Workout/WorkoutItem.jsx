import axios from "axios";
import React, { useContext, useState } from "react";
import { Accordion, Container, Button, Row, Col, Modal } from "react-bootstrap";
import ExerciseItem from "./ExerciseItem";


const WorkoutItem = ({ workout }) => {
  const [show, setShow] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
    clearCalendarInput()
  }

  const submitCloseModal = () => {
    const workoutToAdd = {
      user_id: 666,//may not need
      workout_id: workout.id,
      time_on_calendar: new Date(year, (month - 1), day, hour, minute),
    }
    console.log('month', month)
    console.log('workout object', workoutToAdd)
    axios.post('http://localhost:3002/savedworkouts', workoutToAdd)
      .then(() => {
        console.log('workout added to calendar')
        alert(`You have successfully added ${workout.name} to your calendar`)
      })
      .catch(err => {
        alert('Whoops unable to add item to calendar')
      })
    setShow(false)
    clearCalendarInput()
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
      <h3 className="workout-title">{workout.name}</h3>
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