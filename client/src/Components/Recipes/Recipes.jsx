import React, { useState, useEffect, useContext } from 'react';
import { AllRecipesAndWorkouts } from '../App.jsx';
import RecipeItem from './RecipeItem.jsx';
import RecipeTitle from './RecipeTitle.jsx';
import { Accordion, Container, Button } from 'react-bootstrap';
import NavBar from './NavBar.jsx';
import axios from 'axios';
import Footer from '../Footer.jsx';

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const { recipeData } = useContext(AllRecipesAndWorkouts)
  const [currentIds, setCurrentIds] = useState([])
  // const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState([]);
  const [params, setParams] = useState({
    query: '',
    diet: '',
    intolerances: ''
  });

  const getRecipes = (query, diet, intolerances) => {
    event.preventDefault();
    // axios.get(`http://localhost:3002/recipes`, { params: params })
    axios.get(`http://cultiveight.net/api/recipes/recipes`, { params: params })
      .then(function (response) {
        setRecipes(response.data.results)
      })
      .catch(error => {
        console.log('oh no!')
        console.log(error)
      })
  }

  useEffect(() => {
    const { query, diet, intolerances } = params;
    // const recipesUrl = `http://localhost:3002/recipes`;
    const recipesUrl = `http://cultiveight.net/api/recipes/recipes`;

    const getTenRecipes = async () => {
      try {
        const response = await axios.get(recipesUrl, { params: params })
          .then(results => {
            setRecipes(results.data.results)
          })
      } catch (error) {
        console.error(error)
      }
    }
    getTenRecipes()

  }, []);

  const recipeList = recipes.map(recipe => {
    return (
      <RecipeItem
        key={recipe.id}
        recipe={recipe}
      />
    )
  })

  // console.log(recipes)
  return (
    <div id="recipePageLayout">
      <div id="recipeContainer">
        <h1>Recipes</h1>
        <div id="search-term-container">
          <form className='search-form'  >
            Search Term
            <br />
            <input className='search-bar' placeholder='tacos...' type='text' value={params.query}
              onChange={(e) => setParams({ ...params, query: e.target.value })} />
            <br />
            Search Diet
            <br />
            <input className='search-bar' placeholder='vegan...' type='text' value={params.diet}
              onChange={(e) => setParams({ ...params, diet: e.target.value })} />
            <br />
            Search Intolerances
            <br />
            <input className='search-bar' placeholder='dairy...' type='text' value={params.intolerances}
              onChange={(e) => setParams({ ...params, intolerances: e.target.value })} />
            <br />
            <br />
            <Button className='search-button' type='submit' onClick={getRecipes} aria-label="Search Recipes">
              Search
            </Button>
            <br />
            <br />
          </form>
        </div>
        {recipeList}
      </div >
      <Footer />
    </div >
  )
}

export default Recipes;