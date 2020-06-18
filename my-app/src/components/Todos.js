import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import propTypes from "prop-types";

export class Todos extends Component {
  render() {
    //for each todo
    return this.props.todos.map((todo) => (
      <TodoItem
        todo={todo}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

Todos.propTypes = {
  //todos: propTypes.array.isRequired,
  //todo: propTypes.object.isRequired,
};

export default Todos;
