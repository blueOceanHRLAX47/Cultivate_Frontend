import React from 'react';
import { Col, Container } from 'react-bootstrap'

const ExerciseItem = ( { exercise, index }) => {
  const name = exercise.exercise.name
  let videoLink = exercise.exercise.video

  const embedVideo = (videoLink) => {
    if(videoLink === 'null') {
      return 'None';
    } else if (videoLink.length === 28) {
      const startSlice = 17
      const videoId = videoLink.slice(startSlice)
      const newVideoLink = `https://www.youtube.com/embed/${videoId}`
      return <iframe width="320" height="240" src={newVideoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    } else if (videoLink.indexOf('youtube') > -1) {
      const startSlice = videoLink.indexOf('=') + 1
      const endSlice = videoLink.indexOf('&')
      const videoId = videoLink.slice(startSlice, endSlice)
      const newVideoLink = `https://www.youtube.com/embed/${videoId}`
      return <iframe width="320" height="240" src={newVideoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    } else {
      return <a href={videoLink}>Click Here to View Video!</a>
    }
  }

  return (
    <Container className="exercise-col">
      <span className="exercise-title"><b>Exercise {index + 1}:</b> &nbsp; {name}</span> <br />
      <u>Sets</u>: {exercise.sets} <br />
      <u>Reps</u>: {exercise.reps} <br />
      <u>Video</u>: <br />
      {embedVideo(videoLink)}
    </Container>
  )
}

export default ExerciseItem;