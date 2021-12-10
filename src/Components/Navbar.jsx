import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export class Navbar extends React.Component {
  render() {
    return (
      <Main>
        <Left>
          <div>Learning Class Components</div>
        </Left>
        <Right>
          <div className="btn">
            <Button variant="contained" color="success">
              Login
            </Button>
            <Button variant="contained" color="success">
              SignUp
            </Button>
          </div>
        </Right>
      </Main>
    );
  }
}

const Main = styled.div`
  height: 60px;
  top: 0;
  box-shadow: 0px 0px 10px 2px #bbbaba;
  z-index: 9999;
  height: 60px;
  background-color: rgb(23, 21, 68);
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  color: #fef5ed;
  font-size: 20px;
  line-height: 60px;
  position: fixed;
  width: 100%;
`;

const Left = styled.div`
  width: max-content;
  & div {
    margin-left: 10px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const Right = styled.div`
  width: max-content;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 20px;
  & .btn {
    display: flex;
    justify-content: space-between;
  }
  & Button {
    width: 100px;
    height: 40px;
    margin-left: 10px;
  }
`;
