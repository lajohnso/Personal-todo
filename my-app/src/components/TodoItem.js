import React, { Component } from "react";
import propTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p style={{ padding: "10px" }}>
          <input
            type='checkbox'
            checked={this.props.todo.completed == true ? true : false}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.deleteItem.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  // todo: propTypes.object.isRequired,
};

const itemStyle = {
  backgroundColor: "#f4f4f4",
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  outline: "none",
};

export default TodoItem;
