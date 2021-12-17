import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx';
import RecipeTitle from './RecipeTitle.jsx';
import Details from './Details.jsx';
import Accordion from 'react-bootstrap/Accordion';
import Ingredients from './Ingredients.jsx';
import NavBar from './NavBar.jsx';

const Recipes = () => {
  const { recipeData } = useContext(AllRecipesAndWorkouts)

  const RecipePosts = recipeData.map(recipe => {
    const {
      id, name, image, imageType,
      readyInMinutes, servings,
      vegan, vegetarian, dairy_free,
      gluten_free, keto, low_fodmap,
      ingredients, instructions, summary,
      calories, protein, fat,
      carbs, popularity_score, likes
    } = recipe

    return (
      <div key={id} id="individualRecipeContainer">
        <RecipeTitle
          name={name}
          readyInMinutes={readyInMinutes}
          image={image}
          summary={summary}
          calories={calories}
          fat={fat}
          carbs={carbs}
          protein={protein}
          vegan={vegan}
          keto={keto}
          popularity={popularity_score}
        />
        {/* <div id="recipe-img">
          <img src={image} alt="food image" />
        </div> */}
        {/* <div id="ingredient-details-container">
          <Ingredients
            ingredients={ingredients}
            image={image}
            instructions={instructions} />
        </div> */}
        {/* <div id="recipe-details-container">
          <Details image={image} instructions={instructions} />
        </div> */}
        <NavBar
          summary={summary}
          ingredients={ingredients}
          image={image}
          instructions={instructions}
        />
      </div>
    )
  })

  return (
    <div id="recipePageLayout">
      <div id="recipeContainer">
        <h1>Recipes</h1>
        {RecipePosts}
      </div>
    </div>
  )
}

export default Recipes;