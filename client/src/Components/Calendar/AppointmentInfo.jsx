import React from 'react';
import NavBar from '../Recipes/NavBar';
import RecipeTitle from '../Recipes/RecipeTitle';
import WorkoutItem from '../Workout/WorkoutItem';

const AppointmentInfo = ({data}) => {
  var isRecipe = false;
  if ( data.calories ) {
    isRecipe = true;
  }
  console.log('appointment data', data);
  const subject = data.Subject;

  return (
    <div id='appointment-info'>
      {!isRecipe &&
        <div>
          <WorkoutItem workout={data} isCalendarView={true}/>
        </div>
      }
      {isRecipe &&
        <div>
          <RecipeTitle
            name={data.name}
            readyInMinutes={data.readyInMinutes}
            image={data.image}
            summary={data.summary}
            calories={data.calories}
            fat={data.fat}
            carbs={data.carbs}
            protein={data.protein}
            vegan={data.vegan}
            keto={data.keto}
            popularity={data.popularity_score}
          />
          <NavBar
            summary={data.summary}
            ingredients={data.ingredients}
            image={data.image}
            instructions={data.instructions}
          />
        </div>
      }
      {/* <h2>{subject}</h2>
      <img src={data.ImgURL} />
      <div>{data.description}</div> */}
    </div>
  )
}

export default AppointmentInfo;