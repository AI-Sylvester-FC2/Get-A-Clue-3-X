import React, { useState } from 'react'


export default function InputAndAiStory() {
// useState: storyDisplay, updateStoryDisplay - button, updateButton - input, updateInput - clearButton, updateClearButton

// onSubmitHandler - submitting user input
// onClickHandler - clearing input

 {/* 
  Create a box that will fill with response from AI 
  */}

    return (
    <>
    {/* Rules of the Game */}
    <p2 className="background">
      Background:<br></br>
      Oh no somebody has been murdered! Detective, you must
      get to work <br></br>on this case and find out who committed the crime! 
      Using the evidence <br></br>that is provided, you must figure out where the murder took place, <br></br>who comitted 
      the murder, and the weapon that was used. <br></br>Good luck detective, 
      we are depending on you… 
    </p2>

    {/* AI Story Box */}

  <div className="aiStory">
      <div className="story-container">
        <div className="story-label">
          <label>Story</label>
        </div>
      <input type="text" className="ai-story-box" value="" readOnly={true} />
    </div>

    {/* Input Box and Buttons */}
    
  </div>
     <div className="guess-container">
        <div className="guess-label">
          <label>Guess</label>
        </div>
        <input className="guess-input" placeholder="Type Guess Here" value=""></input>
    </div>
    <div className="buttons">
      <button className="submit-button">Submit</button>
    </div>
    
     
    </>
    )
}
