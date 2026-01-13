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
    {/* AI Story Box */}
  <div className="inputAndAiStory">
      <div className="story-container">
        <div className="story-label">
          <label>Story</label>
        </div>
      <input type="text" className="ai-story-box" value="" readOnly={true} />
    </div>

    {/* Input Box and Buttons */}
    <div className="guess-container">
      <div className="guess-label">
        <label>Guess</label>
      </div>
      <input className="guess-input" placeholder="Type Guess Here" value=""></input>
      <div className="buttons">
        <button className="submit-button">Submit</button>
      </div>
    </div>
  </div>
    
     
    </>
    )
}
