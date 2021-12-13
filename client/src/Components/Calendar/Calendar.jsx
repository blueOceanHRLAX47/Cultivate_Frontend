import React, { useState, useEffect, useContext } from 'react';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import AppointmentInfo from './AppointmentInfo.jsx';


const Calendar = () => {
  const [info, setInfo] = useState(null);

  useEffect( () => {
    console.log('changed info');
  }, [info]);

  var data = {
    dataSource: [{
      Id:1,
      StartTime: new Date(2021, 11, 13, 8, 0),
      EndTime: new Date(2021, 11, 13, 9, 0),
      Subject: 'Recipe'
    }, {
      Id:2,
      StartTime: new Date(2021, 11, 13, 11, 0),
      EndTime: new Date(2021, 11, 13, 12, 30),
      Subject: 'Workout'
    }
  ],
  };

  const onPopupOpen = (args) => {
    setInfo(args.data);
    // args.cancel = true;
  }
  return (
    <div>
      <div id='calendar'>
        <h1>Calendar</h1>
        <ScheduleComponent currentView='Week' eventSettings={data} popupOpen={onPopupOpen.bind(this)}>
        <ViewsDirective>
          <ViewDirective option='Day' interval={1} displayName='Day' startHour='08:30' endHour='18:00'/>
          <ViewDirective option='Week' interval={1} displayName='Week' startHour='08:30' endHour='18:00' showWeekend={true} isSelected={true}/>
        </ViewsDirective>
          <Inject services={[Day, Week, DragAndDrop]} />
        </ScheduleComponent>
        <span>Total Calories: </span>
        <span>Workout Total: </span>
      </div>
      {info &&
        <div id='appointment'>
          <AppointmentInfo data={info}/>
        </div>
      }
    </div>
  )
}

export default Calendar;