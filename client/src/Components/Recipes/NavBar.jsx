import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from "react-bootstrap/Accordion";

const NavBar = ({ summary, ingredients, image, instructions }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setOpen(!open)
  }

  // useEffect(() => {
  //   setOpen(false)
  // }, [])

  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
      onClick={() => handleClick()}
    >
      <Tab eventKey="home" title="Summary" name="summary" >
        {open === true ?
          < div dangerouslySetInnerHTML={{ __html: summary }} /> :
          null
        }
      </Tab>
      <Tab eventKey="profile" title="Ingredients & Instructions">
        {open === true ?
          <div>

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

          </div> :
          null
        }
      </Tab>
    </Tabs>
  )
}

export default NavBar