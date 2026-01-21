import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText]=useState("");
  return (
    <div>
      <h1>My To-Do-List</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}title='Add a text here'/>
      <button>Add</button>
      <p>Echo:{text}</p>
    </div>
  )
}

export default App
