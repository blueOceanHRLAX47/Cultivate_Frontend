import React, { useEffect, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from "react-bootstrap/Accordion";

const NavBar = ({ summary, ingredients, image, instructions }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('');

  const handleClick = (e) => {
    var label = e.target.getAttribute('data-rr-ui-event-key');
    if (tab !== label) {
      setTab(label);
      setOpen(true);
    } else {
      setTab('');
      setOpen(false)
    }
  }

  // useEffect(() => {
  //   setOpen(false)
  // }, [])

  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
      onClick={(e) => handleClick(e)}
    >
      <Tab eventKey="Ingredients" title="Ingredients" name="summary" >
        {open === true ?
          // < div dangerouslySetInnerHTML={{ __html: summary }} />
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
          </div> :
          null
        }
      </Tab>
      <Tab eventKey="Instructions" title="Instructions">
        {open === true ?
          <div>
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
    </Tabs >
  )
}

export default NavBar