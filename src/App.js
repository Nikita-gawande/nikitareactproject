import './App.css'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';

var count = 1

function App() 
{
  //to handle action in js
  const [editingFlag,seteditingFlag] = useState(-1)
  var [todo, setTodo] = useState([
    {
    id:count++,
    title:"todo1",
    completed:false
    },
    {
      id:count++,
    title:"todo2",
    completed:false
    },
    {
    id:count++,
    title:"todo3",
    completed:true
    }

  ])  //using use state hooks of react
  const addTodo=()=>
  {
    console.log("add todo")
    const todoText = document.getElementById("todoInput").value
    let todoObject = {
                         id:count++, //careating an object 
                         title:todoText,
                         completed:false
                      }
    console.log("todoText: "+todoText)
    todo.push(todoObject)
    setTodo([...todo]) //spred operator to open or expand the array
  }
  
  console.log("length of todo :"+todo.length)

  const deleteTodo=(id)=>
  {
    todo = todo.filter(tempTodo=>
      {
         if(id===tempTodo.id)
         {
          return false
         }
         else
         {
           return true
         }
      })
      setTodo([...todo])
  }
  const checkedChange=(id)=>
  {
    console.log("id:",id)
    todo.map(todoTemp=>
      {
        if(id===todoTemp.id)
        {
            todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
      })
      setTodo([...todo])
  }
  const editTodo=(id)=>
  {
    console.log(" editTodo")
    seteditingFlag(id)
  }
  const saveEditedTodo =(id) =>
  {
    console.log("saveEditedTodo")
    let updatedTodoText = document.getElementById("editingTodo").value
    todo =todo.map(todoTemp =>
      {
        if(todoTemp.id === id)
        {
          todoTemp.title = updatedTodoText
        }
        return todoTemp
      })
      setTodo([...todo])
      seteditingFlag(-1)
  }
 /* const divStyle = {
    backgroundColor:"pink",
    margin:"30px",
    padding:"10px"
  }*/
//to show in frontend
  return (
    <div id='parentDiv'>
      <h1 className='header'>Todo App</h1>
      <input id="todoInput" type="text" placeholder='add todo...'/>
      <button onClick={addTodo}>add</button> <br/>
      {
      todo.map(tempTodo =>
        {
          return <TodoListItem
          tempTodo = {tempTodo}
          checkedChange ={checkedChange}
          editingFlag ={editingFlag}        
          saveEditedTodo ={saveEditedTodo}
          deleteTodo={deleteTodo}
          editTodo ={editTodo}
          />   
        })
       }
    </div>
  );
}
export default App;
/*
tempTodo
checkedChange
editingFlag
saveEditedTodo
deleteTodo
editTodo*/ 