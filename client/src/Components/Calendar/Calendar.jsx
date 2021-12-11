import React, { useState, useEffect, useContext } from 'react';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';


const Calendar = () => {
  var data = {
    dataSource: [{
      Id:1,
      StartTime: new Date(2021, 11, 11, 4, 0),
      EndTime: new Date(2021, 11, 11, 6, 0),
      Subject: 'Recipe'
    }, {
      Id:2,
      StartTime: new Date(2021, 11, 11, 7, 0),
      EndTime: new Date(2021, 11, 11, 8, 30),
      Subject: 'Workout'
    }
  ],
  };
  return (
    <div>
      <h1>Calendar</h1>
      <ScheduleComponent currentView='Week' eventSettings={data}>
      <ViewsDirective>
        <ViewDirective option='Day' interval={1} displayName='Day' startHour='02:30' endHour='18:00'/>
        <ViewDirective option='Week' interval={1} displayName='Week' startHour='02:30' endHour='18:00' showWeekend={true} isSelected={true}/>
      </ViewsDirective>
        <Inject services={[Day, Week]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar;