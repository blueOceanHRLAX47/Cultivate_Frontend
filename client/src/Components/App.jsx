import React, { useState, useEffect } from 'react';
import Forum from './Forum/Forum.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Chat from './Chat/Chat.jsx';
import Login from './Login/Login.jsx';
import Recipes from './Recipes/Recipes.jsx';
import Workout from './Workout/Workout.jsx';
import NavigationMenu from './NavigationMenu/NavigationMenu.jsx';
import recipeInfo from '../../../mockData/r_Mock_Info.js'

// context
import recipeData from '../Contexts/recipeContext.js'
import workoutData from '../Contexts/workoutContext.js'
import calendarData from '../Contexts/calendarContext.js'
import forumData from '../Contexts/forumContext.js'
import userData from '../Contexts/userContext.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const AllRecipesAndWorkouts = React.createContext();

const App = () => {
  const [view, setView] = useState('forum')
  const [recipes, setRecipes] = useState()


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
          <Workout />
        </div>}
      </div>
    </AllRecipesAndWorkouts.Provider>
  )
}

export default App;