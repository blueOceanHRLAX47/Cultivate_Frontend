import React, { useState, useEffect } from 'react';
import Forum from './Forum/Forum.jsx';
import Calendar from './Calendar/Calendar.jsx';
import Chat from './Chat/Chat.jsx';
import Login from './Login/Login.jsx';
import Recipes from './Recipes/Recipes.jsx';
import Workout from './Workout/Workout.jsx';

//import recipes_mock from '../../../mock data/r_Mock_Recipes.json'



const App = () => {
  const [view, setView] = useState('forum')
  const [recipes, setRecipes] = useState({})


  // useEffect(() => {
  //   setView()
  // }, [view])


  return (
    <div>
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
  )
}

export default App;