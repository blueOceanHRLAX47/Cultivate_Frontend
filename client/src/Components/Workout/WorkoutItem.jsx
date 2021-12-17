import axios from "axios";
import React, { useContext, useState } from "react";
import { Accordion, Container, Button, Row, Col, Modal, Alert } from "react-bootstrap";
import ExerciseItem from "./ExerciseItem";


const WorkoutItem = ({ workout, isCalendarView }) => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')

  const showModal1 = () => {
    setShow1(true)
  }
  const showModal2 = () => {
    setShow2(true)
  }
  const showModal3 = () => {
    setShow3(true)
  }

  const closeModal = () => {
    setShow1(false)
    clearCalendarInput()
    setShow2(false)
    setShow3(false)
  }
  // const closeModal2 = () => {
  //   setShow2(false)
  // }

  const submitCloseModal = () => {

    //for cloud deployment
    // const workoutToAdd = {
    //   workout_id: workout.id,
    //   time_on_calendar: new Date(year, (month - 1), day, hour, minute),
    // }
    // axios.post('http://cultiveight.net/api/workouts/savedworkouts', workoutToAdd)
    //   .then(() => {
    //     console.log('workout added to calendar')
    //     showModal2(true)
    //     //alert(`You have successfully added ${workout.name} to your calendar`)
    //   })
    //   .catch(err => {
    //     alert('Whoops, unable to add item to calendar')
    //   })

    //for local testing
    const workoutToAdd = {
      user: {
        id: 7
      },
      workout_id: workout.id,
      time_on_calendar: new Date(year, (month - 1), day, hour, minute),
    }
    console.log('workout object', workoutToAdd)
    axios.post('http://localhost:3002/savedworkouts', workoutToAdd)
      .then(() => {
        console.log('workout added to calendar');
        showModal2(true)
      })
      .catch(err => {
        console.error('there was an error', err)
        showModal3(true)
      })

    setShow1(false)
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
      {!isCalendarView &&
        <Button className="float-end" variant="outline-info" onClick={showModal1} aria-label="Add To Calendar Button">Add to Calendar</Button>
      }
      {/* <Button className="float-end" variant="outline-info" onClick={showModal}>Add to Calendar</Button>{' '} */}
      <p className="workout-text"><b>Type:</b> {workout.type}</p>
      <p className="workout-text"><b>Duration:</b> {workout.duration}</p>
      <p className="workout-text"><b>Target Muscle Groups:</b> {workout.body_group}</p>
      <p className="workout-text"><b>Equipment:</b> {workout.equipment}</p>
      <p className="workout-text"><b>Popularity Score:</b> {workout.likes}</p>
      <p className="workout-text"><b>Workout Description:</b> {workout.description}</p>
      <Accordion className="accordion" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Instructions</Accordion.Header>
          <Accordion.Body style={{ maxWidth: "1244px" }}>
            <Row className="exercise-row">
              {workout.workout_exercises.map((exercise, index) =>
                <ExerciseItem exercise={exercise} key={index} index={index} />
              )}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal
        show={show1}
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
          Please enter in military time!
          <br />
          Start Time: <br />
          Year:<input type="text" value={year} onChange={changeInput} name="setYear" maxLength={4} size={4} required={true} />&nbsp;
          Month:<input type="text" value={month} onChange={changeInput} name="setMonth" maxLength={2} size={2} required={true} />&nbsp;
          Day:<input type="text" value={day} onChange={changeInput} name="setDay" maxLength={2} size={2} required={true} />&nbsp;
          Hour:<input type="text" value={hour} onChange={changeInput} name="setHour" maxLength={2} size={2} required={true} />&nbsp;
          Min:<input type="text" value={minute} onChange={changeInput} name="setMinute" maxLength={2} size={2} required={true} />&nbsp;
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal} aria-label="Close Button">
            Close
          </Button>
          <Button variant="primary" onClick={submitCloseModal} aria-label="Save Changes Button">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show2}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Great Job!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully added <b>{workout.name}</b> to your calendar
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show3}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Whoops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There was an error adding <b>{workout.name}</b> to your calendar. <br />
          Please try again!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default WorkoutItem;