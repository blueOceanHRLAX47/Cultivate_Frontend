import React, { useState, useEffect } from 'react';
import Forum from './Forum/Forum.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Chat from './Chat/Chat.jsx';
import Login from './Login/Login.jsx';
import Recipes from './Recipes/Recipes.jsx';
import Workout from './Workout/Workout.jsx';
import NavigationMenu from './NavigationMenu/NavigationMenu.jsx';

// context
import recipeData from '../Contexts/recipeContext.js'
import workoutData from '../Contexts/workoutContext.js'
import calendarData from '../Contexts/calendarContext.js'
import forumData from '../Contexts/forumContext.js'
import userData from '../Contexts/userContext.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AllRecipesAndWorkouts = React.createContext();

const App = () => {
<<<<<<< HEAD
  const [view, setView] = useState('recipes')
=======
  const [view, setView] = useState('calendar')
>>>>>>> 18530a52adaf6f4cfda5835b10dffc4e5648f0de
  const [recipes, setRecipes] = useState()
  // const [savedRecipes, setSavedRecipes] = useState([])


  useEffect(() => {
    console.log('use effect run');
    console.log(`Changed view to ${view}`)
  }, [view]);

  return (
    <AllRecipesAndWorkouts.Provider value={{ recipeData, workoutData, calendarData, userData, forumData }} >
      <div>
        <Router>
          <NavigationMenu setView={setView} />
        </Router>
        {view === 'login' && <div>
          <Login />
        </div>}
        {view === 'calendar' && <div>
          <Calendar />
        </div>}
        {view === 'forum' && <div>
          <Forum />
        </div>}
        {view === 'recipes' && <div>
          <Recipes />
        </div>}
        {view === 'workout' && <div>
          <Workout view={view} />
        </div>}
      </div>
    </AllRecipesAndWorkouts.Provider>
  )
}

export default App;