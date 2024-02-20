import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 var count=1
function App() {
  
  var [todo, setTodo] = useState([])
  const addTodo = () =>
  {
    
    console.log("Add todo")
     const todoText =document.getElementById("todoInput").value
     let todoObject =
    {
      id:count++,
      title:todoText
    }
     console.log("todoText :"+todoText)
     todo.push(todoObject)
     setTodo([...todo])// "..."spread operator in javascript setTodo 
    

  }  
  
  const deleteTodo =(id) => 
  {
    console.log("Delete todo id:",id)
    todo =todo.filter(tempTodo =>
      {
        if(id === tempTodo.id)
        {
          return false
        }
        else{
          return true
        }

      })
      setTodo([...todo])
  }
  //console.log("Length of todo : ",todo.length)
  return (
   <div>
      <h1>Todo App</h1>
      <input id="todoInput" type='text' placeholder='Add your todo here....'/>
      <button onClick={addTodo}>Add</button>
      {todo.map(tempTodo =>
        {
          return <div>{tempTodo.title}
          <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
          </div>
        })
      }     
   </div>
  );
}
export default App;
