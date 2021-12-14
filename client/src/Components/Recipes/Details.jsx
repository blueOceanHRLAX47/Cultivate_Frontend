import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";

const Details = ({ image, instructions }) => {
  return (
    <div>
      {/* <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Details</Accordion.Header>
          <Accordion.Body id="details-accordian"> */}
      <div id="recipeInstructionContainer">
        {/* <img src={image} alt="image" id="recipeImage" /> */}
        {/* {"\n"} */}
        <div id="recipeInstructions">
          {instructions.map((instruction, i) => {
            return (
              <div id="recipeInstructionCard" key={`instruction-${i}`}>
                <p>{i + 1}. {instruction}</p>
              </div>
            )
          })}
        </div>
      </div>
      {/* </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </div>
  )
}

export default Details;