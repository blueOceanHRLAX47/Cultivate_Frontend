import React from 'react';

const AppointmentInfo = ({data}) => {
  const subject = data.Subject;

  return (
    <div id='appointment-info'>
      <h2>{subject}</h2>
    </div>
  )
}

export default AppointmentInfo;