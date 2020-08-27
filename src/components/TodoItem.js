import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" 
            type="checkbox" 
            checked={this.props.completed}
            onChange = {() => this.props.handleCheck(this.props.id)}
            />
            <label>{this.props.title}</label>
            
            <button className="destroy" 
            onClick={()=>this.props.handleDelete(this.props.id)} />
          </div>
        </li>//Getting title from TodoList (todo.title) getting checked from completed in ToDoList
        //
      );
    }
  }

  export default TodoItem