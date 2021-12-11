import React, { useContext } from 'react';

const RecipeTitle = ({ name, readyInMinutes }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Prep Time: {readyInMinutes}</p>
    </div>
  )

}

export default RecipeTitle;