import React, { useState } from 'react'

interface Character {
  id: number;
  name: string;
}

const characters = [
  {id: 1, name: "Reverend Green"},
  {id: 2, name: "Colonol Mustard"},
  {id: 3, name: "Professor Plum"},
  {id: 4, name: "Miss Scarlet"},
  {id: 5, name: "Mrs Peacock"},
  {id: 6, name: "Mrs White"},
  {id: 7, name: "Miss Peach"},
  {id: 8, name: "Captain Brown"},
  {id: 9, name: "Mr Slate-Grey"}
]
export default function CharacterBox() {
  //useState: selectedCharacters, updateSelectedCharacters
  const [selectedCharacters, updateSelectedCharacters] = useState<Character[]>([]);

  //event.target is the checkbox element
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { value, checked } = event.target;
    const charId = Number(value); //converts id from string to number
    const charToAdd = characters.find(char => char.id === charId); //find char object with id matching search param
    
    updateSelectedCharacters(prevSelectedCharacters => {
      // prev state passed as param
      
      // if char box is checked and there's a new char to add
      if (checked && charToAdd) {
        const alreadyChecked = prevSelectedCharacters.some(char => char.id === charId); // check if already selected
        // Add the value if it is already checked
        if (!alreadyChecked) {
        return [...prevSelectedCharacters, charToAdd]; // if char isn't already checked off, return the spread of chars already checked combined with the new char
      }
    } else if (!checked) {
      return prevSelectedCharacters.filter(char => char.id !== charId);
    } 
    return prevSelectedCharacters;
    });
  }

    return (
      <div>
        <h3>Select Characters who are not suspects</h3>
        {characters.map((character) => (
          <div key={character.id}>
            <label>
              <input type="checkbox"
              value={character.id} //the value to be stored in state
              checked={selectedCharacters.some(char => char.id === character.id)}// determines if the checkbox is checked by looking at each char element(object) and finding its id
              onChange={handleCheckboxChange} //handler to update the state
              />
              {character.name}
            </label>
            </div>
        ))}
    </div>
  )
}