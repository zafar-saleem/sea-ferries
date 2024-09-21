import styled from "styled-components";
import Location from "./assets/location.webp";

export const StyledContainer = styled.div`
  position: relative;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin: 20px 0;
  height: 350px;
  
  h3 {
    padding: 20px;
    font-size: 21px;
    margin: 0;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export const StyledChildContainer = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #cccccc;

  label {
    display: block;
    margin: 0 0 15px 0;
    font-weight: bold;
  }

  select {
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;

    .selected {
      background: url(${Location?.src}) no-repeat; padding-left:16px;
    }
  }
`;

export const StyledTypesContainer = styled.div`
  padding: 10px 20px 30px;

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    display: flex;
    align-items: center;
    height: 24px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
  }

  .container:hover input ~ .checkmark {
    background-color: #cccccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #cccccc;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
