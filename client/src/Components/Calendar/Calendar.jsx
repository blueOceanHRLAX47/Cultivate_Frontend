import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import AppointmentInfo from './AppointmentInfo.jsx';
import { async } from 'regenerator-runtime';
import { AiFillDashboard } from 'react-icons/ai';
import { WorkoutItem } from '../Workout/WorkoutItem';
import App from '../App.jsx';
import Footer from '../Footer.jsx';


const Calendar = () => {
  const [info, setInfo] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [isWorkout, setIsWorkout] = useState(false);
  const [workoutView, setWorkoutView] = useState(null);
  const [recipeView, setRecipeView] = useState(null);

  useEffect(() => {
    var allData = {};
    allData.dataSource = [];
    allData.fields = {
      workout: null,
      recipe: null
    }
    var id = 0;
    axios.get(`http://localhost:3002/savedworkouts/3`)
      .then(results => {
        var savedWorkouts = results.data;
        savedWorkouts.map(saved => {
          var obj = {};
          obj.Id = saved.id;
          obj.Subject = saved.workout.name;
          obj.StartTime = saved.time_on_calendar;
          var end = new Date(saved.time_on_calendar);
          end.setHours(end.getHours() + 1);
          obj.EndTime = end;
          obj.ImgURL = 'https://picsum.photos/200';
          obj.workout = saved.workout;
          obj.description = saved.workout.description;
          allData.dataSource.push(obj);
        })
      })
      .then(() => {
        axios.get(`http://localhost:3003/recipes`)
          .then(results => {
            var savedRecipes = results.data;
            savedRecipes.map(saved => {
              var obj = {};
              obj.Id = saved.id;
              obj.Subject = saved.recipe.name;
              obj.StartTime = saved.date_on_calendar;
              var end = new Date(saved.date_on_calendar);
              end.setHours(end.getHours() + 1);
              obj.EndTime = end;
              obj.ImgURL = 'https://picsum.photos/200';
              obj.recipe = saved.recipe;
              obj.description = saved.recipe.summary;
              allData.dataSource.push(obj);
            })
            setEvents(allData);
          })
      });
  }, []);

  const onPopupOpen = (args) => {
    if (args.type === 'QuickInfo') {
      if (!args.data.workout && !args.data.recipe) {
        args.cancel = true;
      } else {
        setEventId(args.data.Id);
        setInfo(args.data);
        if (args.data.workout) {
          setIsWorkout(true);
          setWorkoutView(args.data.workout);
          setRecipeView(null);
        } else {
          setIsWorkout(false);
          setRecipeView(args.data.recipe);
          setWorkoutView(null);
        }
      }
    }
  }

  const onPopupClose = (args) => {
    if (args.type === 'Editor') {
      if (args.data) {
        saveNewStartTime(args);
      }
    } else if (args.type === 'DeleteAlert') {
      if (args.event.target.ariaLabel === 'Delete') {
        var obj = {
          id: args.data.Id
        }
        if (args.data.recipe) {
          axios.delete(`http://localhost:3003/recipes/${obj.id}`)
            .catch(err => {
              console.log('Error', err);
            })
        } else if (args.data.workout) {
          axios.delete(`http://localhost:3003/workouts/${obj.id}`)
            .catch(err => {
              console.log('Error', err);
            })
        }
      }
    }
  }

  const onDragStop = (args) => {
    saveNewStartTime(args);
  }

  const saveNewStartTime = (args) => {
    var startDate = new Date(args.data.StartTime);
    startDate.setHours(startDate.getHours() - 8);

    var evId = args.data.Id ? args.data.Id : eventId;
    var isWorkoutEvent = args.data.workout ? true : isWorkout;
    console.log('is workout', isWorkoutEvent);

    if (!isWorkoutEvent) {
      var obj = {
        id: evId,
        date_on_calendar: startDate
      }
      axios.put(`http://localhost:3003/recipes`, obj)
        .then(result => {
          console.log(result);
        });
    } else if (isWorkoutEvent) {
      var obj = {
        id: evId,
        time_on_calendar: startDate
      }
      axios.put(`http://localhost:3003/workouts`, obj)
        .then(result => {
          console.log(result);
        });
    }
  }

  return (
    <div id='calendarPageLayout'>
      <div id='calendar-section'>
        <div id='calendar'>
          <h1>Calendar</h1>
          <ScheduleComponent height='600px' width='auto' currentView='Week' eventSettings={events} popupOpen={onPopupOpen.bind(this)} popupClose={onPopupClose.bind(this)} dragStop={onDragStop.bind(this)}>
            <ViewsDirective>
              <ViewDirective option='Day' interval={1} displayName='Day' startHour='00:00' endHour='24:00' />
              <ViewDirective option='Week' interval={1} displayName='Week' startHour='00:00' endHour='24:00' showWeekend={true} isSelected={true} />
            </ViewsDirective>
            <Inject services={[Day, Week, DragAndDrop]} />
          </ScheduleComponent>
        </div>
        {workoutView &&
          <div id='appointment'>
            <AppointmentInfo data={workoutView} />
          </div>
        }
        {recipeView &&
          <div id='appointment'>
            <AppointmentInfo data={recipeView} />
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Calendar;