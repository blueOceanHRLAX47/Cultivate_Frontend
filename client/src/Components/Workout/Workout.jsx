import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import WorkoutItem from './WorkoutItem'
import axios from 'axios';
import { results } from '../../Contexts/forumContext';
import 'regenerator-runtime/runtime'
import Footer from '../Footer.jsx';


const Workout = ({ view }) => {
  const [workoutData, changeWorkoutData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/')
      .then(results => {
        changeWorkoutData(results.data)
      })
      .catch(err => console.error(err))
  }, [view])

  // useEffect(() => {
  // axios.get('http://cultiveight.net/api/workouts/')
  //   .then(results => {
  //     changeWorkoutData(results.data)
  //   })
  //   .catch(err => console.error(err))
  // }, [view])

  return (
    <div>
      <Container className="primary-container">
        <h1 className="mb-20">Workout</h1>
        <Container className="exercise-list">
          {workoutData.map((workout, index) =>
            <WorkoutItem workout={workout} isCalendarView={false} key={index} />
          )}
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Workout;