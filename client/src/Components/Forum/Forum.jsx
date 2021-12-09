import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx'

const Forum = () => {
  const { forumData } = useContext(AllRecipesAndWorkouts)
  console.log(forumData)
  return (
    <div>
      <h1>Front-Endawdwdawdwadadwadwawdawd</h1>
      <h1>Forum Secawdawdawdawdawdawdawtion</h1>
    </div>
  )
}

export default Forum;