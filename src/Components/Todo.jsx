import React from "react";
import styled from "styled-components";
import { TodoInput } from "./TodoInput";
import { TodoData } from "./TodoData";

export class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addTodo(val) {
    this.setState({ todo: [...this.state.todo, val] });
  }

  handleDelete(id) {
    this.setState({
      todo: this.state.todo.filter((e) => e.id !== id)
    });
  }

  handleUpdate = (id) => {
    this.setState({
      todo: this.state.todo.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      })
    });
  };

  changeTodo = (id, val) => {
    this.setState({
      todo: this.state.todo.map((el) => {
        return el.id === id ? { ...el, title: val } : el;
      })
    });
  };

  render() {
    return (
      <Main>
        <TodoInput addTodo={this.addTodo} id={this.state.id} />
        <TodoData
          todo={this.state.todo}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          changeTodo={this.changeTodo}
        />
      </Main>
    );
  }
}

const Main = styled.div`
  min-height: 200px;
  max-width: 400px;
  margin: 20px auto;
`;
