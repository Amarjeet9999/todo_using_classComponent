import React from "react";
import styled from "styled-components";

export class TodoData extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      editVal: "",
      id: ""
    };
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleEditChange(e) {
    this.setState({ editVal: e.target.value });
  }

  handleUpdateClick = (id) => {
    this.props.handleUpdate(id);
  };

  handleChangeTodo = (e) => {
    e.preventDefault();
    this.setState({ show: false });
    this.props.changeTodo(this.state.id, this.state.editVal);
  };

  render() {
    return (
      <>
        <TodoDataDiv>
          {this.props.todo.map((e) => {
            return (
              <ShowTodo key={e.id} status={`${e.status}`}>
                <div className="data">{`${e.title} - ${e.status}`}</div>
                <div className="deleteUpdate">
                  <span
                    onClick={() => {
                      this.setState({ id: e.id });
                      this.setState({ show: true });
                    }}
                    className="material-icons "
                  >
                    edit
                  </span>
                  <span
                    status={e.status ? "1" : "0"}
                    onClick={() => {
                      this.handleUpdateClick(e.id);
                    }}
                    className="material-icons check check"
                  >
                    check
                  </span>
                  <span
                    onClick={() => this.props.handleDelete(e.id)}
                    className="material-icons"
                  >
                    delete
                  </span>
                </div>
              </ShowTodo>
            );
          })}
        </TodoDataDiv>
        {this.state.show && (
          <BackSide>
            <Edit>
              <form onSubmit={this.handleChangeTodo}>
                <input
                  onChange={this.handleEditChange}
                  type="text"
                  placeholder="Change TODO"
                />
                <input className="submit" type="submit" />
              </form>
            </Edit>
          </BackSide>
        )}
      </>
    );
  }
}

const TodoDataDiv = styled.div`
  height: auto;
  width: 400px;
  background: white;
`;

const ShowTodo = styled.div`
  height: 50px;
  width: 100%;
  font-size: 25px;
  padding: 0 10px;
  line-height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  &:nth-child(odd) {
    background-color: blue;
    :hover {
      background-color: pink;
    }
  }

  &:nth-child(even) {
    background-color: lightskyblue;
    :hover {
      background-color: pink;
    }
  }

  & .data {
    text-transform: capitalize;
  }

  & .deleteUpdate {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .check {
    color: white;
    background-color: ${(props) =>
      props.status === "true" ? "green" : "none"};
    border-radius: 50%;
    padding: 3px;
  }
`;

const Edit = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 80px;
  width: 400px;
  border: 2px solid white;
  background: red;

  & form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & input {
      height: 60px;
      border: none;
      outline: none;
      padding: 0 20px;
      font-size: 20px;
    }
    & .submit {
      cursor: pointer;

      :hover {
        background-color: green;
      }
    }
  }
`;

const BackSide = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;
