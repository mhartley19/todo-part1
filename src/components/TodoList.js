
import React, { Component } from 'react'
import TodoItem from './TodoItem'

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

export default TodoList