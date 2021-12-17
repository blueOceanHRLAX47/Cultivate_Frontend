import React, { useState, useEffect, Suspense } from 'react';
// import Forum from './Forum/Forum.jsx';
const Forum = React.lazy(() => import('./Forum/Forum.jsx'));
// import Calendar from './Calendar/Calendar.jsx';
const Calendar = React.lazy(() => import('./Calendar/Calendar.jsx'));
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
  const [view, setView] = useState('calendar')
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
        {view === 'calendar' && <Suspense fallback={<div>loading...</div>}>
          <Calendar />
        </Suspense>}
        {view === 'forum' && <Suspense fallback={<div>loading...</div>}>
          <Forum />
        </Suspense>}
        {view === 'recipes' && <div>
          <Recipes />
        </div>}
        {view === 'workout' && <div style={{ marginTop: "9px" }}>
          <Workout view={view} />
        </div>}
      </div>
    </AllRecipesAndWorkouts.Provider>
  )
}

export default App;