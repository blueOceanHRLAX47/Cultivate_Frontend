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

  // const editorTemplate = (props) => {
  //   return ( props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }} >
  //       <tbody>
  //         <tr>
  //           <td className="e-textlabel">Status</td>
  //           <td colSpan={4}>
  //             <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="e-textlabel" >Start</td>
  //           <td colSpan={4}>
  //             <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={props.StartTime} className="e-field" />
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="e-textlabel">End</td>
  //           <td colSpan={4}>
  //             <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={props.StartTime} className="e-field" />
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table> : <div></div>
  //   )
  // }

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
        console.log(args.element);
        let parentEle = args.element.querySelector('.e-dialog-parent');
        let descEle = args.element.querySelector('.e-description-row');
        let timezoneEle = args.element.querySelector('.e-all-day-time-zone-row');
        let titleEle = args.element.querySelector('.e-title-location-row');

        parentEle.removeChild(titleEle);
        parentEle.removeChild(timezoneEle);
        parentEle.removeChild(descEle);
    } else {
      setInfo(args.data)
    }
    // args.cancel = true;
  }

  const onDragStop = (args) => {
    console.log('event moved:', args);
    //update data based with new time where id = args.data.id and new date = args.data.StartTime and args.data.EndTime
    //put req to api to save new time slot
  }

  return (
    <div className="calendar-div">
      <div id='calendar'>
        <h1>Calendar</h1>
        <ScheduleComponent currentView='Week' eventSettings={data} popupOpen={onPopupOpen.bind(this)} dragStop={onDragStop.bind(this)} >
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