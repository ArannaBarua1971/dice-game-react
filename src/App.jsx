import { useState } from 'react'
import './App.css'

// components
import Home from "./Components/Home"
import Play from "./Components/Play"

function App() {

  let [StartGame,setStartGame] =useState(false);

  return (
    <>
      {!StartGame ? <Home toggle={setStartGame}/> : <Play/> }
    </>
  )
}

export default App
