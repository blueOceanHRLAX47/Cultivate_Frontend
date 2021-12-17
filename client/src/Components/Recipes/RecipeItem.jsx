import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx';
import { Container } from 'react-bootstrap';
import RecipeTitle from './RecipeTitle.jsx';
import NavBar from './NavBar.jsx';
import axios from 'axios';

const RecipeItem = ({ recipe }) => {
  const { recipeData } = useContext(AllRecipesAndWorkouts)
  const [recipeMetaData, setRecipeMetaData] = useState([])
  const [recipeInfo, setRecipeInfo] = useState({
    recipeData: [],
    nutritionData: [],
  });

  useEffect(() => {
    // const recipeDataUrl = `http://localhost:3002/oneRecipe?id=${recipe.id}`;
    // const recipeNutritionUrl = `http://localhost:3002/oneRecipeNutrition?id=${recipe.id}`

    const recipeDataUrl = `http://cultiveight.net/api/recipes/oneRecipe?id=${recipe.id}`
    const recipeNutritionUrl = `http://cultiveight.net/api/recipes/oneRecipeNutrition?id=${recipe.id}`

    const getProductInfo = async () => {
      try {
        const getRecipe = await axios.get(recipeDataUrl);
        const getNutrition = await axios.get(recipeNutritionUrl);

        axios.all([getRecipe, getNutrition])
          .then(axios.spread((...responseData) => {
            const recipesData = responseData[0].data;
            const nutritionsData = responseData[1].data;

            setRecipeInfo({
              recipeData: recipesData,
              nutritionData: nutritionsData
            })
          }))
      } catch (error) {
        console.error(error)
      }
    }
    getProductInfo()
  }, []);

  const nutrition = recipeInfo.nutritionData;
  const recipeDetails = recipeInfo.recipeData;
  // console.log(recipeDetails)
  return (
    // <div key={recipe.id} id="individualRecipeContainer">
    <Container id="individualRecipeContainer" >
      <RecipeTitle
        id={recipe.id}
        name={recipeDetails.name}
        readyInMinutes={recipeDetails.readyInMinutes}
        image={recipe.image}
        vegan={recipeDetails.vegan}
        vegetarian={recipeDetails.vegetarian}
        dairy_free={recipeDetails.dairy_free}
        gluten_free={recipeDetails.gluten_free}
        keto={recipeDetails.keto}
        low_fodmap={recipeDetails.low_fodmap}
        ingredients={recipeDetails.ingredients}
        instructions={recipeDetails.instructions}
        summary={recipeDetails.summary}
        calories={nutrition.calories}
        protein={nutrition.protein}
        fat={nutrition.fat}
        carbs={nutrition.carbs}
        popularity={recipeDetails.popularity_score}
        likes={recipeDetails.likes}
      />
      <NavBar
        ingredients={recipeDetails.ingredients}
        instructions={recipeDetails.instructions}
      />
      {/* </div> */}
    </ Container >

  )
}

export default RecipeItem;