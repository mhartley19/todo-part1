import React, { Component } from "react";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
  };

  handleDelete = (todoId) => {
    
    const newTodos = this.state.todos.filter(
      eachItem => eachItem.id !== todoId
    )
    this.setState({ todos: newTodos })
   
  }

  handleClearCompleted = () => {
    console.log("clicked")
    const newTodos = this.state.todos.filter(
      eachItem => eachItem.completed === false
    )
    this.setState({ todos: newTodos })
   
  }

  handleCheck = (id) => {
    console.log("checked")
    const newTodos = this.state.todos.map(
    eachItem => {
      if(eachItem.id === id){
        eachItem.completed = !eachItem.completed
      }
      })
    
    this.setState( {newTodos} )
  }
  
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <TodoList todos={this.state.todos} 
        handleCheck={this.handleCheck}
        handleDelete={this.handleDelete}/>
        <footer className="footer">
          {/* todos is recieved from current state of todos: todosList */}
          <span className="todo-count">
            
            <strong>0</strong> item(s) left
          </span>
          <button onClick={() => this.handleClearCompleted(this.state.todos.id)} className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem title={todo.title} 
            completed={todo.completed}
            handleCheck ={this.props.handleCheck}
            handleDelete={this.props.handleDelete}
            id={todo.id}
             />
            //title and completed get passed down as props, and the value is recieved
            //from the todos.map looping over json array
          ))}
        </ul>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" 
          type="checkbox" 
          checked={this.props.completed}
          onChange = {() => this.props.handleCheck(this.props.id)}/>
          
          <label>{this.props.title}</label>
          <button className="destroy" 
          onClick={()=>this.props.handleDelete(this.props.id)} />
        </div>
      </li>//Getting title from TodoList (todo.title) getting checked from completed in ToDoList
      //
    );
  }
}

export default App;
