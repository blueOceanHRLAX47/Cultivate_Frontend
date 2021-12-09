import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx'
import user from '../../Contexts/userContext.js'


const Calendar = () => {
  const info = useContext(AllRecipesAndWorkouts)
  console.log(user)
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  )
}

export default Calendar;