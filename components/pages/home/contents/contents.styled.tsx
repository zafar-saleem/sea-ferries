import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 20px;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
`;

export const StyledItem = styled.li`
  border: 1px solid #cccccc;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  height: 350px;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    height: 555px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    height: 590px;
  }
`;

export const StyledHeader = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  background-color: #f8f8f8;
  display: inline-grid;
  grid-template-columns: 1fr 0.6fr;

  h4 {
    padding: 0;
    margin: 0;
  }

  div {
    text-align: right;

    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
      text-align: left;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 5px;

      @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        justify-content: start;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: block;
  }
`;

export const StyledContents = styled.div`
  padding: 20px;
  display: inline-grid;
  grid-template-columns: 0.5fr 1fr;
  border-top: 1px solid #ccc;

  p {
    a {
      display: block;
      padding: 10px;
      background-color: #f6f6f6;
      width: 300px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      gap: 5px;
      margin-top: 15px;
      right: 10px;
      position: absolute;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: block;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 235px;

  div {
    div {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }

  span {
    display: block;
    margin: 5px 0;

    &.highlight {
      display: inline-block;
      color: #00afd4;
    }
  }
`;
