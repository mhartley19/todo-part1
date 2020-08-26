import React, { Component, useState, useEffect } from "react";
import todosList from "./todos.json";
import uuid from 'react-uuid'




const App = () => {


  
   
   

  

    
    return (

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
         <input className="new-todo" type="inputBox" id="input"
        onKeyDown = {event => pressEnter(event)}
         placeholder="What needs to be done?" autoFocus />
        </header>
        <TodoList todos={todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
    
}



const TodoList = (props) => {
  const pressEnter = (event) => {
    if(event.which === 13){
      let newTodos = [...todos]
      let newTodo =   {
        "userId": 1,
        "id": 100,
        "title": event.target.value,
        "completed": false
      }
      newTodos.push(newTodo)
      setTodos(newTodos)
     

    }
    
}

  const [todos, setTodos] = useState(todosList)

  const handleDelete = (todoId) => {
    const newTodos = todos.filter(
      todoItem => todoItem.id !== todoId
    )
    setTodos(newTodos)
  }

    return (
      <section className="main">
        <ul className="todo-list">
          {props.todos.map((todo) => (
            <>
            <TodoItem  title={todo.title} completed={todo.completed} 
            id ={todo.id} handleDelete={handleDelete} />
            
            
            </>
          ))}

        </ul>
      </section>
    )
          }

  const TodoItem = (props) => {
    
    const [inputBox, setinputBox] = useState('')
    
  
   
  
      return (
        <li className={props.completed ? "completed" : ""} key = {uuid()}>
          <div className="view">
            <input
            className="toggle" type="checkbox" checked={props.completed} 
            id={props.id}/>
            <label>{props.title}</label>
            <button className="destroy" onClick={props.handleDelete} />
          </div>
        </li>
      );
    
  }



export default App;


