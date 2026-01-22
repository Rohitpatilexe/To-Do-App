import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText]=useState("");
  const [toDos,setToDos]=useState(()=>{
    const saved =localStorage.getItem("todo-list");
    if(saved){
      return JSON.parse(saved);
    }else{
      return [];
    }
  })
  useEffect(()=>{
    localStorage.setItem("todo-list",JSON.stringify(toDos));
  },[toDos]);
  function addTo(){
    setToDos([...toDos,text]);
    setText("");
  }
  function toDelete(indexToDelete){
    const newList=toDos.filter((__,index)=>index!==indexToDelete);
    setToDos(newList);
  }
  return (
    <div>
      <h1>My To-Do-List</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{if(e.key=="Enter")addTo()}} placeholder='Add a text here'/>
      <button onClick={addTo}>Add</button>
      {toDos.length === 0 && <h2>No tasks... relax! 😴</h2>}
      <ul>
        {toDos.map((todo,index)=>{
          return (
            
        <li key={index}>
          {todo}
           <button onClick={()=>toDelete(index)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
        </li>
          )
          })}
      </ul>
    </div>
  )
}

export default App  
