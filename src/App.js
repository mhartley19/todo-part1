import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import todosList from "./todos.json";
import { v4 as uuid } from "uuid"
import TodoItem from "./components/TodoItem"
import TodoList from './components/TodoList'


class App extends Component {
  state = {
    todos: todosList,
    value: "",
    itemCount: todosList.length
  };
  

  handleItemCount = () => {
    let itemCounter = this.state.todos.filter(
      eachItem => eachItem.completed === false
    )
    this.setState({ itemCount: itemCounter })
    
  }

  handleDelete = (todoId) => {

    const newTodos = this.state.todos.filter(
      eachItem => eachItem.id !== todoId
    )
    this.setState({ todos: newTodos })
    this.setState({ itemCount: newTodos.length })
    

  }

  handleClearCompleted = () => {
    console.log("clicked")
    const newTodos = this.state.todos.filter(
      eachItem => eachItem.completed === false
    )
    this.setState({ todos: newTodos })
    this.setState({ itemCount: newTodos.length })

  }

  handleCheck = (id) => {
    console.log("checked")
    const newTodos = this.state.todos.map(
      eachItem => {
        if (eachItem.id === id) {
          eachItem.completed = !eachItem.completed
          
        }
        
      })

    this.setState({ newTodos })
    this.setState({ itemCount: newTodos.length })
    
  }

  handleAddItem = (event) => {

    if (event.which === 13) {
      let newTodos = [...this.state.todos]
      let newTodo = {
        "userId": 1,
        "id": uuid(),
        "title": this.state.value,
        "completed": false
      }
      newTodos.push(newTodo)
      this.setState({ todos: newTodos })
      this.setState({ itemCount: newTodos.length })

    }

  }


  // }

  render() {
    return (
      <Router>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input id="inputBox" onChange={(event) => this.setState({ value: event.target.value })} onKeyDown={(event) => this.handleAddItem(event)} className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
        <Switch>
      <Route exact path="/" >
      <TodoList todos={this.state.todos}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
          />
      </Route>
      <Route path="/active">
      <TodoList todos={this.state.todos.filter(todo => todo.completed === false)}
      handleCheck={this.handleCheck}
      handleDelete={this.handleDelete}
         />
      </Route>
      <Route path="/completed">
      <TodoList todos={this.state.todos.filter(todo => todo.completed === true)}
      handleCheck={this.handleCheck}
      handleDelete={this.handleDelete}
          />
      </Route>
    </Switch>
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>{this.state.itemCount}</strong> item(s) left
  </span>
  
          <ul className="filters">
            <li>
              <Link to ="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
   
          
          <button onClick={() => this.handleClearCompleted(this.state.todos.id)}
            className="clear-completed">Clear completed</button>
 
        </footer>
      </section>
      </Router>
    );
  }
}



export default App;
