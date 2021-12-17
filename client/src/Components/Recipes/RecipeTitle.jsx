import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

const RecipeTitle = ({
  name, readyInMinutes, image,
  summary, calories, fat, carbs, protein,
  vegan, keto, popularity, id
}) => {
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
      user_id: 'something',//may not need
      workout_id: id,
      date_on_calendar: [year, month, day, hour, minute], //conflicts with time_on_calendar, which is correct?
    }
    //send axios post request to saved_workouts with object above
    setShow(false)
    clearCalendarInput()
    alert(`You have successfully added ${name} to your calendar`)
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
    // console.log(year)
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
    <div id="recipe-title-container">
      <div id="recipe-title">
        <h3>{name}</h3>
      </div>
      <div id="image-meta-container">
        <div id="recipe-image">
          <img src={image} alt="food image" id="foodImage" />
        </div>
        <div id="recipe-meta-data">
          <ul>
            <li>{`Calories: ${calories}`}</li>
            <li>{`Fat: ${fat}`}</li>
            <li>{`Carbohydrates: ${carbs}`}</li>
            <li>{`Protein: ${protein}`}</li>
          </ul>
        </div>
      </div>

      <div id="prep-calendar-container">

        <div id="recipe-prep-time">
          <p>Prep Time: {readyInMinutes} minutes</p>
        </div>
        <div id="recipes-add-to-calendar">
          <Button variant="outline-primary" onClick={showModal}>Add to Calendar</Button>
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
              <Modal.Title>Add <b>{name}</b> To Calendar?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              When you would like to add {name} to your calendar: <br />
              <br />
              Start Time: <br />
              Year:<input type="text" value={year} onChange={changeInput} name="setYear" maxLength={4} size={4} />&nbsp;
              Month:<input type="text" value={month} onChange={changeInput} name="setMonth" maxLength={2} size={2} />&nbsp;
              Day:<input type="text" value={day} onChange={changeInput} name="setDay" maxLength={2} size={2} />&nbsp;
              Hour:<input type="text" value={hour} onChange={changeInput} name="setHour" maxLength={2} size={2} />&nbsp;
              Min:<input type="text" value={minute} onChange={changeInput} name="setMinute" maxLength={2} size={2} />&nbsp;
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
        </div>
      </div>
    </div>
  )

}

export default RecipeTitle;