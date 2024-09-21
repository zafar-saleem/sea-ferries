import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.tokens.colors.bg.color100};
  color: ${props => props.theme.tokens.colors.font.font100};
  padding: 10px 10px 10px 20px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    border: 0 solid #000000;
    padding: 10px;
    -webkit-appearance: none;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
