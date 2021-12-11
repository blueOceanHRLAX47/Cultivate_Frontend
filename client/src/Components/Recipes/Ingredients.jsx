import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      < Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion >
    </div>
  )
}

export default Ingredients;