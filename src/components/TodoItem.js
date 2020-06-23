import React, { Component } from "react";

class componentName extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            style={{ cursor: "pointer" }}
            onClick={handleEdit}
          >
            <i className="fas fa-pen">edit</i>
          </span>
          <span
            className="mx-2 text-danger"
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash">delete</i>
          </span>
        </div>
      </li>
    );
  }
}
export default componentName;
