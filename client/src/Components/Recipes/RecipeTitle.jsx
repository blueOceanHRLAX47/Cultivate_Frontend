import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'

const RecipeTitle = ({
  name, readyInMinutes, image,
  summary, calories, fat, carbs, protein,
  vegan, keto, popularity
}) => {
  return (
    <div id="recipe-title-container">
      <div id="recipe-title">
        <h2>{name}</h2>
      </div>
      <div id="recipe-image">
        <img src={image} alt="food image" />
      </div>
      <div id="recipe-meta-data">
        <ul>
          <li>{`Calories: ${calories} g`}</li>
          <li>{`Fat: ${fat} g`}</li>
          <li>{`Carbohydrates: ${carbs} g`}</li>
          <li>{`Protein: ${protein} g`}</li>
        </ul>
      </div>
      <div id="recipe-prep-time">
        <p>Prep Time: {readyInMinutes}</p>
      </div>
      {/* <div id="recipe-summary-text">
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div> */}
      <div id="recipes-add-to-calendar">
        {/* <button>Add to Calendar</button> */}
        <Button variant="outline-primary">Add to Calendar</Button>{' '}
      </div>
    </div>
  )

}

export default RecipeTitle;