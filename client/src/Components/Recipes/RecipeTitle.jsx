import React, { useContext } from 'react';

const RecipeTitle = ({ name, readyInMinutes }) => {
  return (
    <div id="recipe-title-container">
      <div id="recipe-title">
        <h2>{name}</h2>
      </div>
      <div id="recipe-prep-time">
        <p>Prep Time: {readyInMinutes}</p>
      </div>
      <div id="recipes-add-to-calendar">
        <button>Add to Calendar</button>
      </div>
    </div>
  )

}

export default RecipeTitle;