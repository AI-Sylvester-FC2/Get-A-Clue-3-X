import React from "react"
import CharacterBox from "./components/CharacterBox"
import RoomBox from "./components/RoomBox"
import WeaponBox from "./components/WeaponBox"
import "./App.css"

export default function App() {
  return (
    <>
     <h1>Clue Game</h1>
     <hr></hr>
     <p className="check-instructions">Check off suspects, rooms, and weapons as you determine they are not elements of the crime</p>
     <span className="checkboxes">
      < CharacterBox />
      < WeaponBox />
      < RoomBox />
      </span>
    
     
    </>
    
  )
}