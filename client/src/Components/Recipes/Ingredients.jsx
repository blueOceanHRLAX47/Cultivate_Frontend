import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";

const Ingredients = ({ ingredients, instructions, image }) => {
  return (
    <div>
      < Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body id="ingredients-accordian">
            {/* <img alt="image" src={image} /> */}
            <div id="ingredient-container-test">
              {ingredients.map((ingredient, i) => {
                return (
                  <div key={`ingredient-${i}`} id="ingredientList">
                    <label>
                      <input type="checkbox" name={ingredient} />
                      {"  "}{ingredient}
                    </label>
                  </div>
                )
              })}
            </div>
            <div id="recipeInstructionContainer">
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion >
    </div>
  )
}

export default Ingredients;