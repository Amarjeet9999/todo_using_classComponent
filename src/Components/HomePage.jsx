import React from "react";
import styled from "styled-components";
import { Todo } from "./Todo";

export class HomePage extends React.PureComponent {
  render() {
    return (
      <Main>
        <h1>TODO APP USING CLASS COMPONENTS</h1>
        <Todo />
      </Main>
    );
  }
}

const Main = styled.div`
  position: relative;
  top: 0;
  padding-top: 60px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: grey;
  & h1 {
    font-size: 22px;
    padding-top: 40px;
    width: max-content;
    margin: auto;
    color: white;
    padding-bottom: 20px;
  }
`;
