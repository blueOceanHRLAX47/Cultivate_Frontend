import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const RecipeTitle = ({
  id, name, readyInMinutes, image,
  vegan, vegetarian, dairy_free, gluten_free,
  keto, low_fodmap, ingredients, instructions, summary,
  calories, protein, fat, carbs, popularity, likes
}) => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [user, setUser] = useState(0)
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
  const closeModal = () => {
    setShow1(false)
    clearCalendarInput()
  }

  const closeModal2 = () => {
    setShow2(false)
  }

  const submitCloseModal = () => {
    // const saveRecipe = {
    //   user_id: 3,
    //   recipe_id: id,
    //   date_on_calendar: new Date(year, (month - 1), day, hour, minute),
    // }

    const saveRecipe = {
      "user_id": user,
      "added_to_calendar": false,
      "date_on_calendar": new Date(year, (month - 1), day, hour, minute),
      "spoon_recipe_id": id
    }

    axios.get('http://cultiveight.net/api/user')
      .then((responseUser) => {
        setUser(responseUser.data.id)
      })
      .then(axios.post('http://cultiveight/api/recipes/savedRecipes', saveRecipe)
        .then((responseData) => {
          console.log('Recipe added to calendar', responseData)
          showModal2(true)
        })
        .catch(err => {
          alert(`Couldn't add to calendar`)
          console.error(err)
        }))
      .catch(err => {
        console.error(err)
      })


    // axios.post('http://localhost:3002/savedRecipes', saveRecipe)
    // axios.post('http://cultiveight/api/recipes/savedRecipes', saveRecipe)
    //   .then((responseData) => {
    //     console.log('Recipe added to calendar', responseData)
    //     showModal2(true)
    //   })
    //   .catch(err => {
    //     alert(`ERROR BITCH`)
    //     console.error(err)
    //   })


    // axios.get('http://cultiveight.net/api/users')
    //   .then((responseUser) => {
    //     setUser(responseUser.data.id)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })


    //     // axios.post('http://localhost:3002/savedRecipes', saveRecipe)
    // axios.post('http://cultiveight/api/recipes/savedRecipes', saveRecipe)
    //   .then((responseData) => {
    //     console.log('Recipe added to calendar', responseData)
    //     showModal2(true)
    //   })
    //   .catch(err => {
    //     alert(`ERROR BITCH`)
    //     console.error(err)
    //   })


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
            <li className="recipe-meta-list">{`Calories: ${calories}`}</li>
            <li className="recipe-meta-list">{`Fat: ${fat}`}</li>
            <li className="recipe-meta-list">{`Carbohydrates: ${carbs}`}</li>
            <li className="recipe-meta-list">{`Protein: ${protein}`}</li>
          </ul>
        </div>
      </div>

      <div id="prep-calendar-container">

        <div id="recipe-prep-time">
          <p>Prep Time: {readyInMinutes} minutes</p>
        </div>
        <div id="recipes-add-to-calendar">
          <Button variant="outline-primary" onClick={showModal1}>Add to Calendar</Button>
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

          <Modal
            show={show2}
            onHide={closeModal2}
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
              You have successfully added {name} to your calendar
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal2}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )

}

export default RecipeTitle;