import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx'

const Recipes = () => {
  const item = useContext(AllRecipesAndWorkouts)
  console.log(item)
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  )
}

export default Recipes;