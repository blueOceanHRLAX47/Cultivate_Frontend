import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';



const Workout = () => {

  return (
    <Container className="primary-container">
      <h1 style={ { fontSize: "75px"} }>Workout</h1>
      <Container className="workout-container">
        <p> some work out </p>
        <p> some work out </p>
        <p> some work out </p>
        <p> some work out </p>
      </Container>
    </Container>

  )
}

export default Workout;