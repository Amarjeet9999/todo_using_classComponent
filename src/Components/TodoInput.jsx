import React from "react";
import styled from "styled-components";
import { uuid as uuidv4 } from "uuidv4";

export class TodoInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { val: "" };
    this.onChangeSetValue = this.onChangeSetValue.bind(this);
  }

  onChangeSetValue(e) {
    this.setState({
      val: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.val === "") return;
    let payload = {
      id: uuidv4(),
      title: this.state.val,
      status: false
    };
    this.props.addTodo(payload);
    this.setState({
      val: ""
    });
  };

  render() {
    return (
      <Form>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.onChangeSetValue}
            value={this.state.val}
            type="text"
            placeholder="Add Todo"
          />
          <input type="submit" value="Add" />
        </form>
      </Form>
    );
  }
}

export const Form = styled.div`
  border-bottom: 2px dotted grey;
  & form {
    display: flex;
    justify-content: center;
  }

  & form :first-child {
    height: 45px;
    width: 300px;
    border: none;
    outline: none;
    padding: 0 20px;
    font-size: 20px;
  }

  & form :last-child {
    height: 45px;
    width: 100px;
    border: none;
    outline: none;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;
