import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos.js";
import Header from "./components/layout/Header.js";
export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy gift",
        completed: true,
      },
      {
        id: 2,
        title: "Dinner",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
