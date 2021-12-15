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
      Subject: 'Recipe',
      ImgURL: 'https://picsum.photos/200',
      description: 'do this'
    }, {
      Id:2,
      StartTime: new Date(2021, 11, 13, 11, 0),
      EndTime: new Date(2021, 11, 13, 12, 30),
      Subject: 'Workout',
      ImgURL: 'https://picsum.photos/200',
      description: 'do this'
    }
  ],
  };

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
        console.log(args.element);
    } else {
      setInfo(args.data)
    }
    // args.cancel = true;
  }

  const onPopupClose = (args) => {
    //------to save new time slots when user edits using editor window -----
    if ( args.type === 'Editor' ) {
      if ( args.data ) {
        console.log(args.data.StartTime);
        let newStartDate = args.data.StartTime;
        //update db using new start time
      }
    }
  }

  const onDragStop = (args) => {
    //------to save new time slots when user edits by draging event to new slot -----
    console.log('event moved:', args);
    //update data based with new time where id = args.data.id and new date = args.data.StartTime and args.data.EndTime
    //put req to api to save new time slot
  }

  return (
    <div>
      <div id='calendar'>
        <h1>Calendar</h1>
        <ScheduleComponent currentView='Week' eventSettings={data} popupOpen={onPopupOpen.bind(this)} popupClose={onPopupClose.bind(this)} dragStop={onDragStop.bind(this)} >
        <ViewsDirective>
          <ViewDirective option='Day' interval={1} displayName='Day' startHour='08:30' endHour='18:00'/>
          <ViewDirective option='Week' interval={1} displayName='Week' startHour='08:30' endHour='18:00' showWeekend={true} isSelected={true}/>
        </ViewsDirective>
          <Inject services={[Day, Week, DragAndDrop]} />
        </ScheduleComponent>
        <span>Total Calories: </span>
        <span>Workout Total: </span>
      </div>
      {info && info.Subject &&
        <div id='appointment'>
          <AppointmentInfo data={info}/>
        </div>
      }
    </div>
  )
}

export default Calendar;