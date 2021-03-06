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
    axios.get(`http://cultiveight.net/api/workouts/savedWorkouts`)
      .then(results => {
        var savedWorkouts = results.data;
        console.log('saved workouts', savedWorkouts)
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
        axios.get(`http://cultiveight.net/api/calendar/recipes`)
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
          console.log('clicked on workout', args.data.workout)
          setWorkoutView(args.data.workout);
          setRecipeView(null);
        } else {
          setIsWorkout(false);
          console.log('clicked on recipe', args.data.workout)
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
          axios.delete(`http://cultiveight.net/api/calendar/recipes/${obj.id}`)
            .catch(err => {
              console.log('Error', err);
            })
        } else if (args.data.workout) {
          axios.delete(`http://cultiveight.net/api/calendar/workouts/${obj.id}`)
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
    console.log('is workout', isWorkout);
    console.log('is recipe', !isWorkout);
    var startDate = new Date(args.data.StartTime);
    startDate.setHours(startDate.getHours() - 8);

    console.log('new start date', startDate);

    var evId = args.data.Id ? args.data.Id : eventId;
    var isWorkoutEvent = args.data.workout ? true : isWorkout;

    if (!isWorkoutEvent) {
      var obj = {
        id: evId,
        date_on_calendar: startDate
      }
      axios.put(`http://cultiveight.net/api/calendar/recipes`, obj)
        .then(result => {
          console.log(result);
        })
        .catch( err => {
          console.log('error saving new start time to recipes', err);
        })
    } else if (isWorkoutEvent) {
      var obj = {
        id: evId,
        time_on_calendar: startDate
      }
      axios.put(`http://cultiveight.net/api/calendar/workouts`, obj)
        .then(result => {
          console.log(result);
        })
        .catch( err => {
          console.log('error saving new start time to workouts', err);
        })
    }
  }

  return (
    <div id='calendarPageLayout'>
      <div id='calendar-section'>
        <div id='calendar'>
          <h1>Calendar</h1>
          {events && console.log('saved events', events)}
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