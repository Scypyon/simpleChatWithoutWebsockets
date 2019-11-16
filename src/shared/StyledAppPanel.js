import styled from "styled-components";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const AuthPanel = styled.div`
  min-width: 25em;
  min-height: 12em;
  border: 2px solid #333;
  box-shadow: 5px 5px #333;
  padding: 2em 5em;

  h1 {
    font-size: 1.5em;
  }
`;

export const StyledInputName = styled.input`
  width: 25vw;
  height: 1.5vw;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  border: 0.05vw solid #4caf50;
`;

export const StyledLink = styled(Link)`
  width: 5vw;
  height: 1.6vw;
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  font-weight:bold;
  text-decoration: none;
  text-align:center;
:hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    cursor: pointer;
`;

export const InputButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw 5vw;
`;
