import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText]=useState("");
  const [toDos,setToDos]=useState(["Wake up","Brush Teeth Nigger"])
  function addTo(){
    setToDos([...toDos,text]);
    setText("");
  }
  return (
    <div>
      <h1>My To-Do-List</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}title='Add a text here'/>
      <button onClick={addTo}>Add</button>
      <ul>
        {toDos.map((todo)=>{
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default App
