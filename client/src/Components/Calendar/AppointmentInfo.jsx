import React from 'react';

const AppointmentInfo = ({data}) => {
  const subject = data.Subject;

  return (
    <div id='appointment-info'>
      <h2>{subject}</h2>
      <img src={data.ImgURL} />
      <div>{data.description}</div>
    </div>
  )
}

export default AppointmentInfo;