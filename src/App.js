import './App.css';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';

var count = 1

function App() 
{
  //to handle action in js
  const [editingFlag,seteditingFlag] = useState(-1)
  const [seleteFilter ,setseleteFilter] = useState("incomplete")
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
    document.getElementById("todoInput").value = ""
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
  const handleFilter =(filterType)=>
  {
   // console.log("filter clicked",filterType)
    switch(filterType){ 
    case "incomplete":
      console.log("incomplete executed")
      setseleteFilter("incomplete")
    break;
    case "completed":
      console.log("completed executed")
      setseleteFilter("completed")
    break;
    case "All":
      console.log("all executed")
      setseleteFilter("All")
    break;
    default:
    }
  }
//to show in frontend
  return (
    <div id='parentDiv'>
      <h1 className='header'>Todo App</h1>
      <div>
        <label onClick={()=>handleFilter("incomplete")}>incomplete</label> |
         <label onClick={()=>handleFilter("completed")}>completed</label>|
         <label onClick={()=>handleFilter("All")}>All</label>
      </div>
      <input id="todoInput" type="text" placeholder='add todo...'/>
      <button onClick={addTodo}>add</button> <br/>
      {
      todo.map(tempTodo =>
        {
          switch(seleteFilter)
          {
            case "incomplete":
             if(!tempTodo.completed){
              return <TodoListItem
              tempTodo = {tempTodo}
              checkedChange ={checkedChange}
              editingFlag ={editingFlag}        
              saveEditedTodo ={saveEditedTodo}
              deleteTodo={deleteTodo}
              editTodo ={editTodo}
              />   
             }
            break;
            case "completed":
            if(tempTodo.completed){
              return <TodoListItem
              tempTodo = {tempTodo}
              checkedChange ={checkedChange}
              editingFlag ={editingFlag}        
              saveEditedTodo ={saveEditedTodo}
              deleteTodo={deleteTodo}
              editTodo ={editTodo}
              />   
             }
            break;
            case "All":
              return <TodoListItem
              tempTodo = {tempTodo}
              checkedChange ={checkedChange}
              editingFlag ={editingFlag}        
              saveEditedTodo ={saveEditedTodo}
              deleteTodo={deleteTodo}
              editTodo ={editTodo}
               />   
            break;
            default:
          }
          
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
